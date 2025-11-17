# Deployment Guide for BizPlan Pro

This guide explains how to deploy the BizPlan Pro application to Vercel (frontend) and Railway (backend).

## Frontend Deployment (Vercel)

1. Go to https://vercel.com and sign in
2. Click "Add New" → "Project"
3. Connect to your GitHub repository
4. Select the `frontend` directory as the root directory
5. Add the following build settings:
   - Build Command: `cd frontend && npm install && npm run build`
   - Output Directory: `build`
   - Root Directory: `frontend`
6. Add the following environment variables:
   - `REACT_APP_API_URL`: URL of your deployed backend (e.g., https://your-backend-app.railway.app)

## Backend Deployment (Railway)

1. Go to https://railway.app and sign in
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Set the Environment to "Production"
5. Add the following environment variables in the Variables tab:
   - `MONGO_URL`: Your MongoDB connection string (e.g., from MongoDB Atlas)
   - `DB_NAME`: Database name (default: bizplan_db)
   - `CORS_ORIGINS`: Comma-separated list of allowed origins (e.g., https://your-frontend.vercel.app,http://localhost:3000)
   - `LOG_LEVEL`: Log level (default: INFO)
6. Click "Deploy Now"

## Alternative Backend Deployment (Render)

1. Go to https://render.com and sign in
2. Click "New +" → "Web Service"
3. Connect to your GitHub repository
4. Set the following configurations:
   - Environment: "Docker"
   - Build Dockerfile Path: `/app/backend/Dockerfile`
   - Root Directory: `/app/backend`
   - Port: `8000`
5. Add the following environment variables:
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: Database name
   - `CORS_ORIGINS`: Comma-separated list of allowed origins
   - `PORT`: `8000` (Render will set this automatically, but good to define)
6. Click "Create Web Service"

## Post-Deployment Steps

1. Once both are deployed, take note of your backend URL
2. Update your frontend's environment variable `REACT_APP_API_URL` to point to your deployed backend
3. Redeploy your frontend if you updated the environment variable
4. Test the connection between your frontend and backend

## MongoDB Setup

For production, you'll need a MongoDB database. You can use:
- MongoDB Atlas (recommended)
- Railway's built-in MongoDB addon
- Render's MongoDB addon
- Another cloud MongoDB provider

### Using MongoDB Atlas:
1. Create an account at https://www.mongodb.com/atlas
2. Create a new cluster
3. Create a database user with appropriate permissions
4. Add your IP address to the access list or allow access from anywhere (not recommended for production)
5. Get your connection string and adjust it to include your database name and credentials