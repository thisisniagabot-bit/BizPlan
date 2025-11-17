import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { userPlans, financialData, aiConversations } from '../mockData';
import { 
  Plus, FileText, TrendingUp, MessageSquare, BarChart3, 
  Settings, Bell, Search, Sparkles, ArrowUpRight,
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
      icon: DollarSign,
      color: 'from-emerald-400 to-cyan-400'
    },
    {
      title: 'Net Profit',
      value: `$${financialData.profit.current.toLocaleString()}`,
      change: `+${financialData.profit.growth}%`,
      positive: true,
      icon: TrendingUp,
      color: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Active Plans',
      value: userPlans.filter(p => p.status === 'active').length,
      change: '+2 this month',
      positive: true,
      icon: FileText,
      color: 'from-blue-400 to-indigo-400'
    },
    {
      title: 'Goals Progress',
      value: '87%',
      change: '+12% this month',
      positive: true,
      icon: Target,
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Top Navigation */}
      <nav className="bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <button 
                className="lg:hidden text-white"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X /> : <Menu />}
              </button>
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-lg opacity-50"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#0A0A0F]" strokeWidth={2.5} />
                  </div>
                </div>
                <span className="text-2xl font-bold text-white font-display">
                  BizPlan<span className="text-emerald-400">.</span>
                </span>
              </Link>
            </div>

            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                <Input 
                  placeholder="Search plans, templates, or ask AI..."
                  className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-emerald-500/50"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white hover:bg-white/5">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/5">
                <Settings className="w-5 h-5" />
              </Button>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center text-[#0A0A0F] text-sm font-bold">
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
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-72 bg-[#0A0A0F] border-r border-white/5 transition-transform duration-300 overflow-y-auto`}>
          <div className="p-6 space-y-6 mt-20 lg:mt-0">
            <div>
              <Link to="/plan-builder">
                <Button className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-[#0A0A0F] font-semibold h-12 shadow-xl shadow-emerald-500/30">
                  <Plus className="w-5 h-5 mr-2" />
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
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-white/5">
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 p-6 rounded-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
                <Sparkles className="w-10 h-10 text-emerald-400 mb-3 relative z-10" />
                <h3 className="font-bold text-white mb-2 relative z-10">Upgrade to Pro</h3>
                <p className="text-sm text-slate-400 mb-4 relative z-10">Unlock advanced features and unlimited plans</p>
                <Button size="sm" className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-[#0A0A0F] font-semibold relative z-10">
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-display font-bold text-white mb-2">Welcome back, John!</h1>
                <p className="text-slate-400">Here's what's happening with your business today.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
                      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <span className="text-sm text-slate-400">{stat.title}</span>
                          <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center opacity-80`}>
                            <Icon className="w-6 h-6 text-[#0A0A0F]" strokeWidth={2} />
                          </div>
                        </div>
                        <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                        <div className="flex items-center text-sm text-emerald-400">
                          <ArrowUpRight className="w-4 h-4 mr-1" />
                          {stat.change}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Charts and Plans */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Cash Flow Chart */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">Cash Flow Overview</h3>
                    <p className="text-sm text-slate-400">Last 12 months performance</p>
                  </div>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {financialData.cashFlow.map((item, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                        <div 
                          className="w-full bg-gradient-to-t from-emerald-500 to-cyan-500 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer relative"
                          style={{ height: `${(item.amount / 70000) * 100}%` }}
                          title={`${item.month}: $${item.amount.toLocaleString()}`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10"></div>
                        </div>
                        <span className="text-xs text-slate-500">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Plans */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">Your Business Plans</h3>
                    <p className="text-sm text-slate-400">Continue where you left off</p>
                  </div>
                  <div className="space-y-4">
                    {userPlans.map((plan) => (
                      <div key={plan.id} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-emerald-500/30 hover:bg-white/10 transition-all cursor-pointer group">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">{plan.name}</h4>
                            <p className="text-sm text-slate-500">{plan.template}</p>
                          </div>
                          <Badge className={plan.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'}>
                            {plan.status}
                          </Badge>
                        </div>
                        <div className="mb-2">
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-500"
                              style={{ width: `${plan.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-emerald-400 font-medium">{plan.progress}% complete</span>
                          <span className="text-slate-500">{plan.lastEdited}</span>
                        </div>
                      </div>
                    ))}
                    <Link to="/plan-builder">
                      <Button variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-emerald-500/50">
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Plan
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Revenue Breakdown */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Revenue Breakdown</h3>
                  <p className="text-sm text-slate-400">Current month distribution</p>
                </div>
                <div className="space-y-5">
                  {financialData.revenueBreakdown.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-white">{item.category}</span>
                        <span className="text-sm text-slate-400">
                          ${item.amount.toLocaleString()} ({item.value}%)
                        </span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            index === 0 ? 'bg-gradient-to-r from-emerald-400 to-cyan-400' :
                            index === 1 ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                            'bg-gradient-to-r from-blue-400 to-indigo-400'
                          }`}
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai-assistant' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-display font-bold text-white mb-2">AI Business Assistant</h1>
                <p className="text-slate-400">Get expert guidance powered by advanced AI</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6">Conversation History</h3>
                  <div className="space-y-6 mb-6">
                    {aiConversations.map((conversation) => (
                      <div key={conversation.id} className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Users className="w-5 h-5 text-slate-400" />
                          </div>
                          <div className="flex-1 bg-white/5 rounded-xl p-4">
                            <p className="text-sm text-white">{conversation.user}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-5 h-5 text-[#0A0A0F]" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-4">
                            <p className="text-sm text-slate-300 whitespace-pre-line leading-relaxed">{conversation.ai}</p>
                            <p className="text-xs text-slate-500 mt-3">{conversation.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <Input 
                      placeholder="Ask me anything about your business..."
                      className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-12"
                    />
                    <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-[#0A0A0F] font-semibold h-12 px-6">
                      Send
                    </Button>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
                  <div className="space-y-3">
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
                        className="w-full justify-start text-left bg-white/5 border-white/10 text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30"
                      >
                        {action}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'plans' || activeTab === 'financials') && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white mb-3">Coming Soon</h2>
                <p className="text-slate-400 mb-8">
                  This section is under development. Check back soon for more features!
                </p>
                <Link to="/plan-builder">
                  <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-[#0A0A0F] font-semibold">
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
