# first-app

Beginner-friendly Express.js backend using CommonJS and PostgreSQL.

## Setup

1. Create a local `.env` file using `.env.example` as a template.
2. Enter your existing PostgreSQL connection values in `.env`.
3. Install dependencies with `npm install` if needed.
4. Start the API with `npm start`.
5. Visit `http://localhost:3000/api/health`.

## Endpoints

- `GET /api/health`
- `GET /api/designers`
- `GET /api/designers?city=Delhi`
- `GET /api/designers/:id`

## Expected error behavior

- Invalid designer IDs return HTTP 400.
- A valid ID with no matching record returns HTTP 404.
- Unknown routes return HTTP 404.
- Database query failures return HTTP 500 with a generic message; details are logged server-side.

## Database

Designer data is queried from the existing PostgreSQL `designers` table using the pool in `config/db.js`. Queries use parameters for city and ID values. This project does not modify the schema or database records.
