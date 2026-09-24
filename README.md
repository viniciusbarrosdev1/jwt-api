# jwt-api

API REST em TypeScript com CRUD de usuário e autenticação via JWT.

- **Runtime:** Node.js + Express 5
- **Banco de dados:** SQLite via Prisma ORM
- **Autenticação:** JWT (jsonwebtoken) + hash de senha (bcryptjs)
- **Validação:** zod

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto (veja `.env.example`).

## Rodando o projeto

```bash
npm run dev
```

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Roda o servidor em modo desenvolvimento (hot reload) |
| `npm run build` | Compila o TypeScript para `dist/` |
| `npm start` | Roda a versão já compilada (produção) |
