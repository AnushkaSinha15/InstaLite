# Image Post App

A small full-stack app where you can upload an image with a caption and see all posts in a feed.

- **Frontend:** React + Vite (`Frontend/`)
- **Backend:** Node.js + Express + MongoDB (`backend/`)
- **Image storage:** ImageKit

## What it does

- `/create-post` – form to upload an image and a caption
- `/feed` – shows all posts as cards, with a "+ Create post" button

The backend has two routes:
- `POST /create-post` – uploads the image to ImageKit and saves the post in MongoDB
- `GET /posts` – returns all saved posts as JSON

## Download the code

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

## Run it

You need Node.js, a MongoDB database and an ImageKit account.

**1. Backend** (runs on http://localhost:3000)

```bash
cd backend
npm install
```

Create a file `backend/.env`:

```
MONGODB_URL=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Then start it:

```bash
node server.js
```

**2. Frontend** (runs on http://localhost:5173)

Open a second terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open http://localhost:5173/feed in your browser.
