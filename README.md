## Project Structure

- `frontend/`: Next.js website (UI pages/components/assets)
- `backend/`: Express API server (controllers/services/repositories + Prisma schema)

## Run In Development

1. Start backend API:

```bash
npm run backend:dev
```

2. Start frontend website (new terminal):

```bash
npm run dev:frontend
```

Frontend: `http://localhost:3000`  
Backend health: `http://localhost:4000/health`

## Useful Scripts

- `npm run build:frontend`
- `npm run start:frontend`
- `npm run prisma:generate`
- `npm run db:push`
