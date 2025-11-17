// Mock data for BizPlan app

export const competitors = [
  {
    name: 'Our BizPlan Pro',
    pricing: '$15-35/mo',
    aiAssistant: true,
    templates: '600+',
    integration: 'QuickBooks, Xero, Stripe',
    collaboration: 'Real-time',
    scenarioModeling: 'Advanced',
    mobileApp: true,
    support: '24/7 Chat',
    rating: 5.0
  },
  {
    name: 'LivePlan',
    pricing: '$20-40/mo',
    aiAssistant: true,
    templates: '550+',
    integration: 'QuickBooks, Xero',
    collaboration: 'Basic',
    scenarioModeling: 'Basic',
    mobileApp: false,
    support: 'Email',
    rating: 4.5
  },
  {
    name: 'Bizplan',
    pricing: '$29/mo',
    aiAssistant: false,
    templates: 'Unlimited',
    integration: 'None',
    collaboration: 'Basic',
    scenarioModeling: 'None',
    mobileApp: false,
    support: 'Email',
    rating: 4.2
  },
  {
    name: 'Enloop',
    pricing: 'Free-$40/mo',
    aiAssistant: false,
    templates: '100+',
    integration: 'None',
    collaboration: 'None',
    scenarioModeling: 'Basic',
    mobileApp: false,
    support: 'Email',
    rating: 4.0
  },
  {
    name: 'Upmetrics',
    pricing: '$14-59/mo',
    aiAssistant: true,
    templates: '400+',
    integration: 'Limited',
    collaboration: 'Basic',
    scenarioModeling: 'Basic',
    mobileApp: false,
    support: 'Chat',
    rating: 4.3
  }
];

export const templates = [
  {
    id: 1,
    name: 'Tech Startup',
    category: 'Technology',
    description: 'Perfect for SaaS, mobile apps, and software companies',
    downloads: 15420,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Restaurant & Food Service',
    category: 'Food & Beverage',
    description: 'Ideal for restaurants, cafes, and catering businesses',
    downloads: 12890,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'E-commerce Store',
    category: 'Retail',
    description: 'Built for online retail and marketplace businesses',
    downloads: 18750,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Consulting Services',
    category: 'Professional Services',
    description: 'For consultants, agencies, and service providers',
    downloads: 9560,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Healthcare & Medical',
    category: 'Healthcare',
    description: 'Designed for clinics, practices, and health services',
    downloads: 7320,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Real Estate',
    category: 'Real Estate',
    description: 'Perfect for property development and real estate firms',
    downloads: 6890,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
  }
];

export const userPlans = [
  {
    id: 1,
    name: 'My Coffee Shop',
    template: 'Restaurant & Food Service',
    progress: 75,
    lastEdited: '2 hours ago',
    status: 'active'
  },
  {
    id: 2,
    name: 'Tech Consulting LLC',
    template: 'Consulting Services',
    progress: 45,
    lastEdited: '1 day ago',
    status: 'active'
  },
  {
    id: 3,
    name: 'Online Boutique',
    template: 'E-commerce Store',
    progress: 90,
    lastEdited: '3 days ago',
    status: 'completed'
  }
];

export const financialData = {
  revenue: {
    current: 125000,
    projected: 180000,
    growth: 44
  },
  expenses: {
    current: 87500,
    projected: 105000,
    growth: 20
  },
  profit: {
    current: 37500,
    projected: 75000,
    growth: 100
  },
  cashFlow: [
    { month: 'Jan', amount: 15000 },
    { month: 'Feb', amount: 22000 },
    { month: 'Mar', amount: 28000 },
    { month: 'Apr', amount: 35000 },
    { month: 'May', amount: 42000 },
    { month: 'Jun', amount: 38000 },
    { month: 'Jul', amount: 45000 },
    { month: 'Aug', amount: 52000 },
    { month: 'Sep', amount: 48000 },
    { month: 'Oct', amount: 55000 },
    { month: 'Nov', amount: 62000 },
    { month: 'Dec', amount: 70000 }
  ],
  revenueBreakdown: [
    { category: 'Product Sales', value: 65, amount: 81250 },
    { category: 'Services', value: 25, amount: 31250 },
    { category: 'Subscriptions', value: 10, amount: 12500 }
  ]
};

export const aiConversations = [
  {
    id: 1,
    user: 'How should I price my SaaS product?',
    ai: "Based on your business plan, I recommend a tiered pricing strategy. Your target market analysis shows potential customers are willing to pay $49-99/month. Consider: \n\n1. Starter: $49/mo (Basic features)\n2. Professional: $79/mo (Advanced features)\n3. Enterprise: $149/mo (Full suite + support)\n\nThis aligns with your projected revenue goals and competitive positioning.",
    timestamp: '10 minutes ago'
  },
  {
    id: 2,
    user: 'What are the key metrics I should track?',
    ai: 'For your coffee shop business, focus on these critical KPIs:\n\n1. Average Transaction Value (ATV)\n2. Daily Customer Count\n3. Cost of Goods Sold (COGS) %\n4. Labor Cost %\n5. Customer Retention Rate\n6. Monthly Recurring Revenue (if subscriptions)\n\nI can help you set up automated tracking for all of these in your dashboard.',
    timestamp: '2 hours ago'
  }
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, TechStart Inc',
    image: 'https://i.pravatar.cc/150?img=1',
    content: 'BizPlan Pro transformed how I approach business planning. The AI assistant is like having a business consultant available 24/7.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO, GrowthLabs',
    image: 'https://i.pravatar.cc/150?img=13',
    content: 'The financial forecasting tools are incredibly accurate. We secured $2M in funding using the pitch deck generated from BizPlan Pro.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Owner, Cafe Delight',
    image: 'https://i.pravatar.cc/150?img=5',
    content: 'As a first-time business owner, I was overwhelmed. BizPlan Pro made everything simple and guided me through every step.',
    rating: 5
  },
  {
    name: 'David Park',
    role: 'Managing Partner, Innovate Consulting',
    image: 'https://i.pravatar.cc/150?img=12',
    content: 'The real-time collaboration features are game-changing. My entire team can work on our business plan simultaneously.',
    rating: 5
  }
];

export const features = [
  {
    title: 'AI Business Assistant',
    description: 'Get instant answers to your business questions with our advanced AI trained on thousands of successful business plans.',
    icon: 'Brain'
  },
  {
    title: 'Smart Financial Forecasting',
    description: 'Create accurate financial projections with automated calculations, scenario modeling, and industry benchmarks.',
    icon: 'TrendingUp'
  },
  {
    title: '600+ Professional Templates',
    description: 'Choose from industry-specific templates created by business planning experts and proven successful.',
    icon: 'FileText'
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work together with your team, investors, and advisors with live editing and commenting features.',
    icon: 'Users'
  },
  {
    title: 'Automatic Integrations',
    description: 'Connect with QuickBooks, Xero, Stripe, and more to sync your financial data automatically.',
    icon: 'Zap'
  },
  {
    title: 'Interactive Dashboards',
    description: 'Visualize your business performance with beautiful charts, graphs, and real-time metrics.',
    icon: 'BarChart3'
  }
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: 15,
    period: 'month',
    description: 'Perfect for new entrepreneurs',
    features: [
      '1 Business Plan',
      '100+ Templates',
      'Basic Financial Forecasting',
      'AI Assistant (10 queries/day)',
      'Email Support',
      'Export to PDF'
    ],
    recommended: false
  },
  {
    name: 'Professional',
    price: 25,
    period: 'month',
    description: 'For growing businesses',
    features: [
      '5 Business Plans',
      '600+ Templates',
      'Advanced Financial Forecasting',
      'AI Assistant (Unlimited)',
      'Priority Support',
      'QuickBooks/Xero Integration',
      'Real-time Collaboration',
      'Custom Branding'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 35,
    period: 'month',
    description: 'For established companies',
    features: [
      'Unlimited Business Plans',
      'All Templates + Custom',
      'Advanced Scenario Modeling',
      'AI Assistant (Priority)',
      '24/7 Dedicated Support',
      'All Integrations',
      'White Label Options',
      'API Access',
      'Custom Training'
    ],
    recommended: false
  }
];
