# 5) `VSCode.md`
```markdown
# 📌 Cheat Sheet – VS Code

## Atalhos (Windows)
- **Cmd Palette**: `Ctrl+Shift+P`
- **Terminal**: `` Ctrl+` ``
- **Formatar**: `Shift+Alt+F`
- **Abrir arquivo**: `Ctrl+P`
- **Buscar**: `Ctrl+Shift+F`

## Terminal integrado
- Alternar terminal: `` Ctrl+` ``
- Selecionar shell (WSL, PowerShell, Cmd).

## Extensões sugeridas
- Python, Docker, YAML, GitLens, Markdown All in One, Dev Containers.

## Dev Containers (resumo)
- Arquivo `.devcontainer/devcontainer.json` define imagem, extensões e features.
- Abrir no container: **“Reopen in Container”**.

## Configurações úteis
- Salvar ao perder foco:
```json
"files.autoSave": "onFocusChange"
Formatação ao salvar:

json
Copy code
"editor.formatOnSave": true
Dicas sênior
Tenha um workspace com pastas de trabalho fixas.

Sincronize configurações (Settings Sync).

Use Tasks e Launch (.vscode/) para padronizar scripts.

yaml
Copy code

---

## Commit (no `Setup-Senior-Pro`)
Abra o terminal na raiz do **Setup-Senior-Pro** e rode:
```bash
git status
git add .
git commit -m "docs: adicionar cheatsheets (WSL, Git, Docker, VS Code) e índice no Setup Senior Pro"
git push
