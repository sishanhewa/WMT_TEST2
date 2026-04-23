# MERN Item Manager — Lab Starter Project

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing items.

## Project Structure
```
mern-item-manager/
├── backend/          ← Express + MongoDB API
│   ├── models/       ← Mongoose schemas
│   ├── routes/       ← API route handlers
│   ├── server.js     ← Entry point
│   ├── .env.example  ← Copy to .env and fill in values
│   └── package.json
├── frontend/         ← React application
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── .env.example  ← Copy to .env and fill in values
│   └── package.json
└── README.md
```

## Lab Task Summary

Search for `TODO (LAB TASK)` comments in the code — those are the places you need to extend.

1. **Backend** `models/Item.js` — add new field to Mongoose schema
2. **Backend** `routes/itemRoutes.js` — include new field in POST route
3. **Frontend** `components/ItemForm.js` — add input for new field
4. **Frontend** `components/ItemList.js` — display new field in list

## Local Setup

### Backend
```bash
cd backend
cp .env.example .env       # Fill in your MongoDB Atlas URI
npm install
npm start                  # Runs on http://localhost:5000
```

### Frontend
```bash
cd frontend
cp .env.example .env       # Set REACT_APP_API_URL=http://localhost:5000
npm install
npm start                  # Runs on http://localhost:3000
```

## Deployment

| Service | Use for |
|---------|---------|
| Railway / Render | Backend hosting (free tier) |
| Netlify / Vercel | Frontend hosting (free tier) |
| MongoDB Atlas | Database (free M0 cluster) |

After deploying backend, update `REACT_APP_API_URL` in frontend to your backend's live URL before deploying frontend.
# WMT_TEST2
