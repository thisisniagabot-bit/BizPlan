# BizPlan Pro - Business Planning Platform

## 🚀 Overview

BizPlan Pro is a comprehensive, AI-powered business planning platform built with modern technologies. It provides entrepreneurs and business professionals with all the tools they need to create, manage, and execute successful business plans. This full-stack application features a React frontend with Shadcn UI and a FastAPI backend with MongoDB integration.

## ✨ Key Features

### 1. **Landing Page**
- Modern, vibrant SaaS design with smooth animations
- Hero section with compelling value proposition
- Trust indicators (1M+ business plans, 98% satisfaction, $2B+ funding secured)
- Comprehensive Competitor Comparison Table showing BizPlan Pro vs LivePlan, Bizplan, Enloop, and Upmetrics
- Feature showcase with 6 main features:
  - AI Business Assistant
  - Smart Financial Forecasting
  - 600+ Professional Templates
  - Real-time Collaboration
  - Automatic Integrations
  - Interactive Dashboards
- Industry-specific templates gallery (6 templates with images)
- Customer testimonials (4 success stories)
- Pricing section (3 tiers: Starter $15, Professional $25, Enterprise $35)
- Fully responsive navigation with mobile menu

### 2. **Dashboard**
- Clean, modern interface with sidebar navigation
- 4 key metric cards:
  - Total Revenue ($125,000, +44%)
  - Net Profit ($37,500, +100%)
  - Active Plans (2, +2 this month)
  - Goals Progress (87%, +12%)
- Interactive cash flow chart (12-month bar graph)
- Business plans section showing:
  - My Coffee Shop (75% complete)
  - Tech Consulting LLC (45% complete)
  - Online Boutique (90% complete)
- Revenue breakdown visualization
- Upgrade to Pro promotion card
- Search functionality
- Notifications and settings

### 3. **AI Business Assistant**
- Chat interface with conversation history
- Mock conversations showing:
  - SaaS pricing strategy guidance
  - KPI tracking recommendations
- Quick action buttons for:
  - Analyze financials
  - Suggest marketing strategies
  - Review business model
  - Competitive analysis
  - Growth opportunities
  - Risk assessment
- Beautiful gradient design with AI branding

### 4. **Plan Builder**
- Multi-step wizard with progress tracking (5 steps)
- **Step 1: Choose Template**
  - Visual template gallery with 6 industry options
  - Template selection with visual feedback
  
- **Step 2: Business Information**
  - Business name, industry, description
  - Mission and vision statements
  - AI tips for better planning
  
- **Step 3: Market Analysis**
  - Target market description
  - Competitive analysis
  - AI assistant guidance
  
- **Step 4: Financial Projections**
  - Tabbed interface for revenue and costs
  - Automatic profit calculations
  - Annual projection displays
  - Profit margin calculation
  
- **Step 5: Review**
  - Summary of all entered information
  - Financial overview cards
  - Save & Export options

## 🛠 Tech Stack

### Frontend
- **React 19.0.0** - Modern JavaScript library for building user interfaces
- **React Router DOM 7.5.1** - Declarative routing for React
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn UI components** - Accessible UI components built with Radix UI and Tailwind CSS
- **Lucide React icons** - Beautifully simple icons
- **Craco build tool** - Create React App Configuration Override
- **Axios** - Promise based HTTP client for the browser and node.js
- **React Hook Form** - Performant, flexible forms with easy validation
- **Zod** - TypeScript-first schema validation with static type inference

### Backend
- **FastAPI** - Modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints
- **MongoDB** - Cross-platform document-oriented database program
- **Motor** - Async Python driver for MongoDB
- **Pydantic** - Data validation and settings management using Python type hints
- **Uvicorn** - Lightning-fast ASGI server implementation
- **Python-dotenv** - Reads key-value pairs from a .env file and can set them as environment variables

## 📁 Project Structure

```
/app/
├── backend/                 # FastAPI backend server
│   ├── server.py           # Main FastAPI application
│   ├── requirements.txt    # Python dependencies
│   ├── Procfile            # Process type definitions for deployment
│   ├── runtime.txt         # Runtime environment specification
│   ├── Dockerfile          # Containerization configuration
│   ├── .env.example        # Example environment variables
│   └── .env               # Environment variables (not committed)
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Main application pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── mockData.js    # Mock data for the application
│   │   └── App.js         # Main routing component
│   ├── public/            # Static assets
│   ├── vercel.json        # Vercel deployment configuration
│   ├── package.json       # Frontend dependencies
│   └── craco.config.js    # Craco configuration
├── tests/                  # Test files
├── DEPLOYMENT_GUIDE.md     # Deployment instructions
└── README.md              # Project overview
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MongoDB (local instance or Atlas)
- Yarn or npm

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd /app/frontend
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Create a `.env` file in the frontend directory and configure your environment variables:
```env
REACT_APP_API_URL=http://localhost:8000
```

4. Start the development server:
```bash
yarn start
# or
npm start
```

5. The application will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd /app/backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
   - On Linux/Mac:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\\Scripts\\activate
     ```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Create a `.env` file in the backend directory with required variables:
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=bizplan_db
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

6. Start the server:
```bash
uvicorn server:app --reload
```

7. The API will be available at `http://localhost:8000`

## 🧪 Running Tests

### Frontend Tests
```bash
cd /app/frontend
yarn test
# or
npm test
```

### Backend Tests
```bash
cd /app/backend
python -m pytest
```

## 🚀 Deployment

### Frontend Deployment (to Vercel)
1. Connect your GitHub repository to Vercel
2. The `vercel.json` configuration is already included
3. Environment variables: Set `REACT_APP_API_URL` to your backend URL

### Backend Deployment (to Railway)
1. Connect your GitHub repository to Railway
2. The `Procfile` configuration is already included
3. Environment variables: Set `MONGO_URL`, `DB_NAME`, and `CORS_ORIGINS`

For detailed deployment instructions, see the [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) file.

## 🔒 Environment Variables

### Frontend
- `REACT_APP_API_URL` - The backend API URL

### Backend
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name
- `CORS_ORIGINS` - Comma-separated list of allowed origins
- `LOG_LEVEL` - Logging level (default: INFO)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, please contact via GitHub issues or refer to our documentation.