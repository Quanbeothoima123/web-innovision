## Architecture

- `frontend`: Next.js app (UI pages and components in `src/app`, `src/components`)
- `backend`: Express API server (`backend/src`) with layered structure:
- `modules/*/repository`: Prisma DB access
- `modules/*/service`: business logic and validation
- `modules/*/controller`: request/response handlers
- `modules/*/*.routes.js`: API routes

Frontend now calls backend API via:

- `NEXT_PUBLIC_API_BASE_URL` (browser/client components)
- `API_BASE_URL` (server components)

## Environment

Create `.env` from `.env.example` and set:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
API_BASE_URL=http://localhost:4000
FRONTEND_ORIGIN=http://localhost:3000
DATABASE_URL=your_mysql_url
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
ADMIN_SESSION_SECRET=replace-with-a-long-random-secret
BACKEND_PORT=4000
```

## Development

Run backend:

```bash
npm run backend:dev
```

Run frontend (new terminal):

```bash
npm run dev
```

App URL: `http://localhost:3000`  
Backend health: `http://localhost:4000/health`

## Build

```bash
npm run build
```
