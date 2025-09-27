## 4) `Docker.md`
```markdown
# 📌 Cheat Sheet – Docker

## Conceitos
- **Imagem**: molde (read-only).
- **Container**: instância em execução da imagem.

## Comandos comuns
```bash
docker --version
docker images
docker ps            # containers rodando
docker ps -a         # todos os containers
Rodar container rápido
bash
Copy code
docker run --rm -it ubuntu:22.04 bash
Construir e rodar (projeto com Dockerfile)
bash
Copy code
docker build -t meu-app:dev .
docker run --rm -it -p 8000:8000 meu-app:dev
Volumes (persistir dados)
bash
Copy code
docker run --rm -it -v $PWD:/app -w /app python:3.12 bash
Limpeza
bash
Copy code
docker stop <id/nome>
docker rm <id/nome>
docker rmi <imagem>
docker system prune -f
Dicas sênior
Use .dockerignore para agilizar build.

Tagueie imagens (meu-app:dev, :prod).

Combine com Dev Containers no VS Code para padronizar ambientes.
