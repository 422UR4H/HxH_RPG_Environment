[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/422UR4H/HxH_RPG_Environment/blob/main/README.md)

# HxH RPG Environment

Um aplicativo web front-end para amantes de RPG e Hunter X Hunter jogarem um verdadeiro sistema de HxH RPG.

## Descrição

Este é o início de um Web Site em constante expansão, criado para promover uma comunidade de Hunter X Hunter RPG. Utiliza o ecossistema JavaScript/TypeScript em React.js com Next.js + Tailwind CSS, ESLint e Prettier para padrões de código.

## Demo

### Deploy Front-end Link: https://hxh-rpg-environment.vercel.app/
Obs.: a demo está em construção e ainda precisa de acesso direto na URL

(veja a estrutura de pastas para navegar entre as páginas)

<br />

## Quick start

Clone este repositório seguindo a lista de comandos para instalar as dependências.

```bash
git clone https://github.com/422UR4H/HxH_RPG_Environment
cd HxH_RPG_Environment
npm install
```

Crie um arquivo .env seguindo o .env.example para conectar-se às APIs.

```bash
# Se estiver com o servidor rodando localmente
NEXT_PUBLIC_API_URL="http://localhost:3001"
NEXTAUTH_URL="http://localhost:3001"
# OU
NEXT_PUBLIC_API_URL="https://hxh-rpg-environment-api.onrender.com"
NEXTAUTH_URL="https://hxh-rpg-environment-api.onrender.com"

NEXTAUTH_SECRET=# seu hash md5 aqui
```

Finalmente, para iniciar o aplicativo, execute:

```bash
npm run dev
```

<br />

## API utilizada

### HxH_RPG_Environment_API Link: https://hxh-rpg-environment-api.onrender.com

<br />

## Tecnologias utilizadas

For this project was used:

- React (v18);
- Next (v14.0.4);
- Tailwind CSS;
- NextAuth;

(ainda será implementado)
- Recharts;
- React Icons;
- Sweetalert2;
- React Switch;
