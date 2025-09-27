# 📌 Cheat Sheet – Git

## Config inicial (uma vez)
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email"
git config --global init.defaultBranch main
# 📌 Cheat Sheet – Git

## Config inicial (uma vez)
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email"
git config --global init.defaultBranch main
Fluxo básico
bash
Copy code
git status
git add .
git commit -m "feat: mensagem clara"
git push
Ramificações
bash
Copy code
git checkout -b feature/minha-feature   # cria e troca
git switch main                         # volta p/ main
git merge feature/minha-feature         # mescla na branch atual
Atualizar a branch local
bash
Copy code
git pull --rebase
Desfazer (com cuidado)
bash
Copy code
git restore arquivo                     # descarta mudanças locais
git reset --soft HEAD~1                 # volta 1 commit (mantém alterações)
git revert <hash>                       # cria commit invertendo outro
Boas práticas sênior
Commits pequenos, mensais descritivas (feat:, fix:, docs:).

Pull antes de push (git pull --rebase).

Branch por tarefa (feature/bugfix/chore).
