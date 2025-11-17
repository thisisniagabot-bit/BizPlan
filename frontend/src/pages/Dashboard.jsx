import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { userPlans, financialData, aiConversations } from '../mockData';
import { 
  Plus, FileText, TrendingUp, MessageSquare, BarChart3, 
  Settings, Bell, Search, Sparkles, ArrowUpRight, ArrowDownRight,
  DollarSign, Users, Target, Menu, X
} from 'lucide-react';
import { Input } from '../components/ui/input';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Revenue',
      value: `$${financialData.revenue.current.toLocaleString()}`,
      change: `+${financialData.revenue.growth}%`,
      positive: true,
      icon: DollarSign
    },
    {
      title: 'Net Profit',
      value: `$${financialData.profit.current.toLocaleString()}`,
      change: `+${financialData.profit.growth}%`,
      positive: true,
      icon: TrendingUp
    },
    {
      title: 'Active Plans',
      value: userPlans.filter(p => p.status === 'active').length,
      change: '+2 this month',
      positive: true,
      icon: FileText
    },
    {
      title: 'Goals Progress',
      value: '87%',
      change: '+12% this month',
      positive: true,
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                className="lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X /> : <Menu />}
              </button>
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  BizPlan Pro
                </span>
              </Link>
            </div>

            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input 
                  placeholder="Search plans, templates, or ask AI..."
                  className="pl-10 bg-slate-50 border-slate-200"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                JD
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transition-transform duration-300`}>
          <div className="p-6 space-y-6">
            <div>
              <Link to="/plan-builder">
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Business Plan
                </Button>
              </Link>
            </div>

            <nav className="space-y-2">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'plans', label: 'My Plans', icon: FileText },
                { id: 'financials', label: 'Financials', icon: TrendingUp },
                { id: 'ai-assistant', label: 'AI Assistant', icon: MessageSquare },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-slate-200">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                <Sparkles className="w-8 h-8 text-indigo-600 mb-2" />
                <h3 className="font-semibold text-sm mb-1">Upgrade to Pro</h3>
                <p className="text-xs text-slate-600 mb-3">Unlock advanced features and unlimited plans</p>
                <Button size="sm" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600">
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
                <p className="text-slate-600">Here's what's happening with your business today.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardDescription>{stat.title}</CardDescription>
                          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-indigo-600" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className={`flex items-center text-sm ${
                          stat.positive ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.positive ? (
                            <ArrowUpRight className="w-4 h-4 mr-1" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 mr-1" />
                          )}
                          {stat.change}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Charts and Plans */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Cash Flow Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cash Flow Overview</CardTitle>
                    <CardDescription>Last 12 months performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-end justify-between gap-2">
                      {financialData.cashFlow.map((item, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div 
                            className="w-full bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                            style={{ height: `${(item.amount / 70000) * 100}%` }}
                            title={`${item.month}: $${item.amount.toLocaleString()}`}
                          ></div>
                          <span className="text-xs text-slate-500">{item.month}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Plans */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Business Plans</CardTitle>
                    <CardDescription>Continue where you left off</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {userPlans.map((plan) => (
                      <div key={plan.id} className="border border-slate-200 rounded-lg p-4 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{plan.name}</h3>
                            <p className="text-sm text-slate-500">{plan.template}</p>
                          </div>
                          <Badge variant={plan.status === 'completed' ? 'default' : 'secondary'}>
                            {plan.status}
                          </Badge>
                        </div>
                        <Progress value={plan.progress} className="mb-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500">{plan.progress}% complete</span>
                          <span className="text-slate-400">{plan.lastEdited}</span>
                        </div>
                      </div>
                    ))}
                    <Link to="/plan-builder">
                      <Button variant="outline" className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Plan
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Revenue Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                  <CardDescription>Current month distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {financialData.revenueBreakdown.map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{item.category}</span>
                          <span className="text-sm text-slate-600">
                            ${item.amount.toLocaleString()} ({item.value}%)
                          </span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                            style={{ width: `${item.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'ai-assistant' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">AI Business Assistant</h1>
                <p className="text-slate-600">Get expert guidance powered by advanced AI</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Conversation History</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {aiConversations.map((conversation) => (
                      <div key={conversation.id} className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-slate-600" />
                          </div>
                          <div className="flex-1 bg-slate-50 rounded-lg p-4">
                            <p className="text-sm">{conversation.user}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4">
                            <p className="text-sm whitespace-pre-line">{conversation.ai}</p>
                            <p className="text-xs text-slate-500 mt-2">{conversation.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                      <Input 
                        placeholder="Ask me anything about your business..."
                        className="flex-1"
                      />
                      <Button className="bg-gradient-to-r from-indigo-600 to-purple-600">
                        Send
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      'Analyze my financials',
                      'Suggest marketing strategies',
                      'Review my business model',
                      'Competitive analysis',
                      'Growth opportunities',
                      'Risk assessment'
                    ].map((action, index) => (
                      <Button 
                        key={index}
                        variant="outline" 
                        className="w-full justify-start text-left hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                      >
                        {action}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {(activeTab === 'plans' || activeTab === 'financials') && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
                <p className="text-slate-600 mb-6">
                  This section is under development. Check back soon for more features!
                </p>
                <Link to="/plan-builder">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600">
                    Create Your First Plan
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
