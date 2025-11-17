import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { competitors, templates, testimonials, features, pricingPlans } from '../mockData';
import { 
  Brain, TrendingUp, FileText, Users, Zap, BarChart3, 
  Check, Star, ArrowRight, Sparkles, Target, Shield,
  Menu, X, ChevronRight, Play
} from 'lucide-react';

const iconMap = {
  Brain, TrendingUp, FileText, Users, Zap, BarChart3
};

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0A0A0F]/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-xl opacity-50"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-2xl shadow-emerald-500/50">
                  <Sparkles className="w-5 h-5 text-[#0A0A0F]" strokeWidth={2.5} />
                </div>
              </div>
              <span className="text-2xl font-bold text-white font-display tracking-tight">
                BizPlan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">.</span>
              </span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-12">
              <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">Features</a>
              <a href="#comparison" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">Comparison</a>
              <a href="#templates" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">Templates</a>
              <a href="#pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">Pricing</a>
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-[#0A0A0F] font-semibold shadow-xl shadow-emerald-500/30 border-0 h-11 px-6">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <button 
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0F] border-t border-white/5">
            <div className="px-6 py-6 space-y-4">
              <a href="#features" className="block text-slate-400 hover:text-white">Features</a>
              <a href="#comparison" className="block text-slate-400 hover:text-white">Comparison</a>
              <a href="#templates" className="block text-slate-400 hover:text-white">Templates</a>
              <a href="#pricing" className="block text-slate-400 hover:text-white">Pricing</a>
              <Link to="/dashboard">
                <Button className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-[#0A0A0F] font-semibold">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-sm text-slate-300 font-medium">Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
              <span className="text-white">Build Plans.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
                Grow Faster.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              The intelligent business planning platform trusted by over 1 million entrepreneurs worldwide.
              Create, forecast, and track—all in one beautiful workspace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-[#0A0A0F] font-semibold text-lg h-14 px-10 shadow-2xl shadow-emerald-500/40 border-0">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg h-14 px-10 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-slate-500 text-sm">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                Cancel anytime
              </span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '1M+', label: 'Business Plans' },
              { value: '98%', label: 'Satisfaction' },
              { value: '$2.1B', label: 'Funding Secured' },
              { value: '5.0', label: 'Rating' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="text-sm font-semibold text-emerald-400">POWERFUL FEATURES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Everything You Need</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Built for modern entrepreneurs who demand excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-sm font-semibold text-cyan-400">COMPETITIVE ANALYSIS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Why Choose Us?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">See how we stack up against the competition</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 font-semibold text-white text-base">Platform</th>
                  <th className="text-left p-6 font-semibold text-white text-base">Pricing</th>
                  <th className="text-center p-6 font-semibold text-white text-base">AI</th>
                  <th className="text-left p-6 font-semibold text-white text-base">Templates</th>
                  <th className="text-left p-6 font-semibold text-white text-base">Integrations</th>
                  <th className="text-left p-6 font-semibold text-white text-base">Support</th>
                  <th className="text-center p-6 font-semibold text-white text-base">Rating</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-white/5 transition-colors ${
                      index === 0 
                        ? 'bg-gradient-to-r from-emerald-500/10 to-cyan-500/10' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-white text-base">{competitor.name}</span>
                        {index === 0 && (
                          <span className="px-3 py-1 rounded-full bg-emerald-400 text-[#0A0A0F] text-xs font-bold">BEST</span>
                        )}
                      </div>
                    </td>
                    <td className="p-6 text-slate-300">{competitor.pricing}</td>
                    <td className="p-6 text-center">
                      {competitor.aiAssistant ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={2.5} />
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                    <td className="p-6 text-slate-300">{competitor.templates}</td>
                    <td className="p-6 text-slate-400 text-sm">{competitor.integration}</td>
                    <td className="p-6 text-slate-300">{competitor.support}</td>
                    <td className="p-6">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-white">{competitor.rating}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm font-semibold text-purple-400">600+ TEMPLATES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Industry-Specific Plans</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Start with proven templates from successful businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                      {template.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{template.downloads.toLocaleString()} downloads</span>
                    <Button size="sm" variant="ghost" className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10">
                      Preview
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Loved Worldwide</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Join thousands of successful entrepreneurs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-sm font-semibold text-cyan-400">TRANSPARENT PRICING</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Choose Your Plan</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Simple pricing for every business stage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative group ${
                  plan.recommended ? 'md:-mt-6 md:mb-6' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-[#0A0A0F] text-xs font-bold shadow-xl shadow-emerald-500/50">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className={`relative bg-white/5 border rounded-2xl p-8 backdrop-blur-sm h-full transition-all duration-500 ${
                  plan.recommended 
                    ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/30' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-slate-400">{plan.description}</p>
                  </div>
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-white">${plan.price}</span>
                    <span className="text-slate-400 ml-2">/{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/dashboard">
                    <Button 
                      className={`w-full h-12 font-semibold ${
                        plan.recommended 
                          ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-[#0A0A0F] shadow-xl shadow-emerald-500/30' 
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/50">
            <Shield className="w-10 h-10 text-[#0A0A0F]" strokeWidth={2} />
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Ready to Build Your Success?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join over 1 million entrepreneurs who trust our platform
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-[#0A0A0F] font-semibold text-lg h-14 px-10 shadow-2xl shadow-emerald-500/40 border-0">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <p className="text-sm text-slate-500 mt-6">14-day free trial • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#0A0A0F]" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold text-white font-display">BizPlan.</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The intelligent business planning platform for modern entrepreneurs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#templates" className="hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2025 BizPlan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
