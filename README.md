# ⚙️ Setup Senior Pro

> Ambiente universal de desenvolvimento no **padrão de engenheiro sênior**, pronto para projetos em **dados** ou **software**.

![CI](https://github.com/guilhermelimatech/setup-senior-pro/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-green)
![Made with](https://img.shields.io/badge/made%20with-WSL%202%20+%20VS%20Code-blue)

---

## 🚀 O que inclui
- **WSL 2 + Ubuntu 24.04** – ambiente Linux isolado
- **Git + SSH + Commitlint** – versionamento seguro e padronizado
- **Node + pnpm** – gerenciador de pacotes moderno
- **ESLint (flat) + Prettier** – qualidade de código automática
- **Husky** – hooks de pre-commit/commit-msg
- **GitHub Actions (CI)** – lint, type-check e format check no push/PR
- **DevContainer** – portabilidade em qualquer máquina
- **Templates de PR & Issues** – colaboração profissional

---

## 📂 Estrutura
```text
setup-senior-pro/
 ├── src/                # código de exemplo
 ├── .devcontainer/      # definição de container VS Code
 ├── .github/workflows/  # CI no GitHub Actions
 ├── .husky/             # hooks de commit
 ├── .vscode/            # configs recomendadas do VS Code
 ├── tsconfig.json       # config TypeScript
 ├── eslint.config.mjs   # lint (flat, typed)
 └── README.md           # este arquivo
ChatGPT said:

Claro, Gui 🙌 Aqui está o README completo e formatado, prontinho para você colar direto no GitHub:

# ⚙️ Setup Senior Pro

> Ambiente universal de desenvolvimento no **padrão de engenheiro sênior**, pronto para projetos em **dados** ou **software**.

![CI](https://github.com/guilhermelimatech/setup-senior-pro/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-green)
![Made with](https://img.shields.io/badge/made%20with-WSL%202%20+%20VS%20Code-blue)

---

## 🚀 O que inclui
- **WSL 2 + Ubuntu 24.04** – ambiente Linux isolado
- **Git + SSH + Commitlint** – versionamento seguro e padronizado
- **Node + pnpm** – gerenciador de pacotes moderno
- **ESLint (flat) + Prettier** – qualidade de código automática
- **Husky** – hooks de pre-commit/commit-msg
- **GitHub Actions (CI)** – lint, type-check e format check no push/PR
- **DevContainer** – portabilidade em qualquer máquina
- **Templates de PR & Issues** – colaboração profissional

---

## 📂 Estrutura
```text
setup-senior-pro/
 ├── src/                # código de exemplo
 ├── .devcontainer/      # definição de container VS Code
 ├── .github/workflows/  # CI no GitHub Actions
 ├── .husky/             # hooks de commit
 ├── .vscode/            # configs recomendadas do VS Code
 ├── tsconfig.json       # config TypeScript
 ├── eslint.config.mjs   # lint (flat, typed)
 └── README.md           # este arquivo

▶️ Como usar

Clone o repositório e instale as dependências:

git clone git@github.com:guilhermelimatech/setup-senior-pro.git
cd setup-senior-pro
pnpm i
pnpm dev

✅ Qualidade

pnpm lint – ESLint

pnpm check – TypeScript type-check

pnpm run format:check – Prettier (verificação)

Hooks do Husky impedem commits sem qualidade.
CI no GitHub Actions roda automaticamente em cada push/pull request.
👤 Autor

Guilherme Lima
🌐 Portfólio
 · 💼 LinkedIn
 · 🐙 GitHub
