# BizPlan Pro - Business Planning Platform

## Project Overview

BizPlan Pro is a comprehensive, AI-powered business planning platform built as a full-stack application with modern design and enhanced features. It's designed as an alternative to platforms like LivePlan with advanced AI integration, real-time collaboration, and financial forecasting tools.

The project consists of a React frontend built with Create React App and Shadcn UI components, and a FastAPI backend with MongoDB for data storage. The frontend is currently implemented as a complete MVP with mock data demonstrating all core features.

### Key Features Implemented

1. **Landing Page** - Modern SaaS design with competitor comparison, feature showcase, and pricing
2. **Dashboard** - Interactive metrics display with financial charts and key business metrics
3. **AI Business Assistant** - Chat interface with mock conversations for business guidance
4. **Plan Builder** - Multi-step wizard for creating business plans with financial projections

### Tech Stack

**Frontend:**
- React 19.0.0
- React Router DOM 7.5.1
- Tailwind CSS 3.4.17
- Shadcn UI components (Radix UI)
- Lucide React icons
- Craco build tool
- Axios for API calls
- React Hook Form with Zod validation

**Backend:**
- FastAPI
- MongoDB with Motor (async driver)
- Pydantic for data validation
- Uvicorn ASGI server

### Project Structure

```
/app/
├── backend/                 # FastAPI backend server
│   ├── server.py           # Main FastAPI application
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Main application pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── mockData.js    # Mock data for the application
│   │   └── App.js         # Main routing component
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   └── craco.config.js    # Craco configuration
├── tests/                  # Test files
└── README.md              # Project overview
```

## Building and Running

### Frontend Development

1. Navigate to the frontend directory: `cd /app/frontend`
2. Install dependencies: `yarn install` (or `npm install`)
3. Start the development server: `yarn start` (or `npm start`)
4. The application will be available at http://localhost:3000

### Backend Development

1. Navigate to the backend directory: `cd /app/backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment: `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
4. Install dependencies: `pip install -r requirements.txt`
5. Set up environment variables:
   - Create `.env` file with required variables (MONGO_URL, DB_NAME, CORS_ORIGINS)
6. Start the server: `uvicorn server:app --reload`

### Frontend Commands

- `yarn start` - Start development server
- `yarn build` - Create production build
- `yarn test` - Run tests

### Backend Commands

- `uvicorn server:app --reload` - Start development server with auto-reload
- `python -m pytest` - Run backend tests

## Development Conventions

### Frontend Conventions

1. **Component Structure** - Components are organized in `/src/components` with reusable UI elements
2. **Page Organization** - Main application pages are in `/src/pages`
3. **Mock Data** - All mock data is centralized in `/src/mockData.js`
4. **Styling** - Tailwind CSS with Shadcn UI components for consistent design
5. **Routing** - React Router DOM for client-side navigation
6. **API Integration** - Axios for HTTP requests (planned for future implementation)

### Backend Conventions

1. **API Structure** - FastAPI with a main app and API router using `/api` prefix
2. **Database** - MongoDB with Pydantic models for data validation
3. **Environment Variables** - Using python-dotenv for configuration
4. **CORS** - Configured to allow specified origins
5. **Logging** - Standard Python logging configured with info level

### Data Models

**Backend Models:**
- `StatusCheck` - Core model for tracking system status
- `StatusCheckCreate` - Input model for creating status checks

**Frontend Mock Data:**
- Competitor comparison data
- Business plan templates
- User business plans
- Financial forecasting data
- AI conversation history
- Customer testimonials
- Feature lists and pricing plans

## Testing

The project includes both frontend and backend testing capabilities:

- Frontend tests can be run using `yarn test` in the frontend directory
- Backend tests can be run using pytest in the backend directory
- A dedicated `/tests` directory exists for test files

## Future Development

The frontend is currently implemented as a complete MVP with mock data. Next steps for backend integration include:

1. Replacing mock data with real database calls
2. Implementing user authentication
3. Adding real-time AI integration (OpenAI/Anthropic)
4. Connecting financial calculation APIs
5. Implementing document generation (PDF export)
6. Adding collaboration features (real-time editing)
7. Integrating accounting software (QuickBooks, Xero)
8. Building analytics and reporting backend

## Environment Configuration

### Backend Environment Variables

Create a `.env` file in the backend directory with:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=bizplan_db
CORS_ORIGINS=http://localhost:3000
```

### Frontend Environment Variables

The frontend uses standard Create React App environment variables in `.env` if needed for API endpoints or other configuration.

## Architecture Design

The application follows a modern, scalable architecture:

1. **Frontend** - React-based SPA with component-based architecture
2. **Backend** - FastAPI providing REST API with async MongoDB operations
3. **Database** - MongoDB with Motor driver for async operations
4. **Styling** - Tailwind CSS with Shadcn UI for consistent UI components
5. **State Management** - React hooks for local state management
6. **API Communication** - Planned integration with Axios for backend communication