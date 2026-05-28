#!/usr/bin/env python3
"""
Gerador de imagens via DALL-E 3 (OpenAI API)
Uso: python3 .claude/generate_image.py "prompt" [nome_arquivo] [tamanho]
Tamanhos: 1024x1024 | 1792x1024 | 1024x1792
"""

import sys
import os
import json
import re
import urllib.request
import urllib.error
from datetime import datetime


def load_api_key():
    # 1) Variável de ambiente
    key = os.environ.get('OPENAI_API_KEY', '').strip()
    if key:
        return key

    # 2) .env.local na raiz do projeto
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    for env_file in ['.env.local', '.env']:
        path = os.path.join(project_root, env_file)
        if os.path.exists(path):
            with open(path, encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if line.startswith('OPENAI_API_KEY='):
                        return line.split('=', 1)[1].strip().strip('"\'')
    return None


def generate(prompt, filename=None, size='1024x1024'):
    api_key = load_api_key()

    if not api_key:
        msg = (
            "OPENAI_API_KEY não encontrada.\n"
            "Crie o arquivo .env.local na raiz do projeto com:\n"
            "  OPENAI_API_KEY=sk-...\n"
            "Obtenha sua chave em: https://platform.openai.com/api-keys"
        )
        print(json.dumps({'error': msg}))
        sys.exit(1)

    # Mapeia tamanhos: gpt-image-2 usa 1024x1024, 1024x1536, 1536x1024
    size_map = {
        '1024x1024': '1024x1024',
        '1792x1024': '1536x1024',  # paisagem
        '1024x1792': '1024x1536',  # retrato
        '1536x1024': '1536x1024',
        '1024x1536': '1024x1536',
    }
    api_size = size_map.get(size, '1024x1024')

    # Chama a API com gpt-image-2
    api_url = 'https://api.openai.com/v1/images/generations'
    payload = json.dumps({
        'model': 'gpt-image-2',
        'prompt': prompt,
        'n': 1,
        'size': api_size,
    }).encode('utf-8')
    headers = {
        'Authorization': f'Bearer {api_key}',
        'Content-Type': 'application/json',
    }

    try:
        req = urllib.request.Request(api_url, data=payload, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf-8', errors='replace')
        try:
            err = json.loads(body).get('error', {}).get('message', body)
        except Exception:
            err = body
        print(json.dumps({'error': f'OpenAI API {e.code}: {err}'}))
        sys.exit(1)

    # gpt-image-2 retorna b64_json (sem URL)
    import base64
    b64_data = data['data'][0].get('b64_json') or data['data'][0].get('url')
    revised_prompt = data['data'][0].get('revised_prompt', prompt)

    # Define nome do arquivo
    if not filename:
        ts = datetime.now().strftime('%Y%m%d_%H%M%S')
        slug = re.sub(r'[^a-z0-9]+', '-', prompt[:40].lower()).strip('-')
        filename = f'{slug}-{ts}.png'

    # Salva em public/images/
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_dir = os.path.join(project_root, 'public', 'images')
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, filename)

    if b64_data and not b64_data.startswith('http'):
        # base64 → arquivo
        with open(out_path, 'wb') as f:
            f.write(base64.b64decode(b64_data))
    else:
        # URL → download
        urllib.request.urlretrieve(b64_data, out_path)

    result = {
        'success': True,
        'file': out_path,
        'src': f'/images/{filename}',
        'revised_prompt': revised_prompt,
        'size': size,
    }
    print(json.dumps(result, ensure_ascii=False))


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Uso: python3 generate_image.py "prompt" [arquivo.png] [1024x1024]')
        sys.exit(1)

    _prompt = sys.argv[1]
    _filename = sys.argv[2] if len(sys.argv) > 2 else None
    _size = sys.argv[3] if len(sys.argv) > 3 else '1024x1024'
    generate(_prompt, _filename, _size)
