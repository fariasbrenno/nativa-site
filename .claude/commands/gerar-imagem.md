# Gerar imagem com DALL-E 3

Você é um assistente de geração de imagens integrado ao projeto Nativa.

O usuário quer gerar a seguinte imagem: **$ARGUMENTS**

## Passos

1. **Execute o script** via Bash:
```
python3 C:/Users/Brenno/Documents/NATIVA/nativa-site/.claude/generate_image.py "$ARGUMENTS"
```

2. **Analise o resultado JSON:**
   - Se `success: true`: informe o usuário sobre o arquivo gerado (`src`) e o `revised_prompt` (o prompt que o DALL-E realmente usou)
   - Se `error`: mostre a mensagem de erro de forma clara. Se for sobre API key, explique que precisa criar `.env.local` com `OPENAI_API_KEY=sk-...`

3. **Após sucesso**, pergunte ao usuário:
   - "Quer que eu insira essa imagem em algum componente específico do site?"
   - Se sim, edite o componente usando `src="/images/nome-do-arquivo.png"` no lugar do URL do Unsplash ou onde fizer sentido

## Tamanhos disponíveis
- Padrão (quadrado): `1024x1024` — ícones, fotos de perfil
- Paisagem: `1792x1024` — banners, hero, comparações
- Retrato: `1024x1792` — fotos de pessoa, mobile

Para especificar tamanho, o usuário pode dizer ex: "paisagem" ou "retrato" — infira o size correto e passe como 3º argumento.

## Contexto do projeto
O site é o "Protocolo Nativa" — landing page de app de fitoterapia para menopausa. Paleta: verde floresta, dourado/brass, pergaminho. Imagens devem ter estética natural, botânica, feminina e elegante. Incorpore isso nos prompts se o usuário não especificar estilo.
