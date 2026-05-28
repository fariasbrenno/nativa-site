import json, sys

data = json.load(sys.stdin)
inp = data.get('tool_input', {})
path = inp.get('file_path', '') or inp.get('path', '')

project_unix = '/c/Users/Brenno/Documents/NATIVA/nativa-site'
project_win  = 'C:/Users/Brenno/Documents/NATIVA/nativa-site'

if not path:
    sys.exit(0)

# Normalizar para forward slashes e lowercase da letra de drive
path_norm = path.replace('\\', '/')
if len(path_norm) >= 2 and path_norm[1] == ':':
    path_norm = '/' + path_norm[0].lower() + path_norm[2:]

# Permitir caminhos relativos (resolvem dentro do CWD do projeto)
if not path_norm.startswith('/'):
    sys.exit(0)

# Permitir se estiver dentro do projeto
if path_norm.startswith(project_unix) or path_norm.startswith(project_win):
    sys.exit(0)

print(json.dumps({
    'continue': False,
    'stopReason': 'Acesso bloqueado: apenas arquivos dentro do projeto nativa-site sao acessiveis neste chat.'
}))
