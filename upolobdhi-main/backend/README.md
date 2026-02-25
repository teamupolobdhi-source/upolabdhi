# Reviews Backend (Express)

This backend stores and serves homepage reviews.

## Database requirement

- A MongoDB database is **required**.
- Set `MONGODB_URI` before running the server.

## Run

```bash
cd backend
npm install
npm run dev
```

Server runs at `http://localhost:4000`.

## Deploy on Render (for your frontend)

Frontend: `https://teamupolobdhi.vercel.app`

Set these environment variables in Render:

- `MONGODB_URI=<your-mongodb-atlas-uri>`
- `CORS_ORIGINS=https://teamupolobdhi.vercel.app`

`PORT` is auto-managed by Render.

You can deploy with the repo root `render.yaml` (recommended) or configure manually in the Render dashboard.

After deploy, set frontend env on Vercel:

- `VITE_API_BASE_URL=https://upolobdhi-reviews.onrender.com`

## API

- `GET /api/health`
- `GET /api/reviews`
- `POST /api/reviews`

### POST payload

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "rating": 5,
  "comment": "Great experience with the team."
}
```
