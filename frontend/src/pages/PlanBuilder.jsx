import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { templates } from '../mockData';
import { 
  ArrowLeft, Sparkles, ChevronRight, Check, FileText,
  Target, Users, DollarSign, TrendingUp, Save, Download
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const PlanBuilder = () => {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    description: '',
    mission: '',
    vision: '',
    targetMarket: '',
    competition: '',
    revenue: '',
    costs: ''
  });

  const steps = [
    { id: 1, name: 'Choose Template', icon: FileText },
    { id: 2, name: 'Business Info', icon: Target },
    { id: 3, name: 'Market Analysis', icon: Users },
    { id: 4, name: 'Financials', icon: DollarSign },
    { id: 5, name: 'Review', icon: Check }
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const progress = (step / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Plan Builder</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            {steps.map((s, index) => {
              const Icon = s.icon;
              const isActive = step === s.id;
              const isCompleted = step > s.id;
              
              return (
                <React.Fragment key={s.id}>
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                        isActive 
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white scale-110' 
                          : isCompleted
                          ? 'bg-green-500 text-white'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className={`text-sm font-medium ${
                      isActive ? 'text-indigo-600' : 'text-slate-600'
                    }`}>
                      {s.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 bg-slate-200 mx-4 mt-[-20px]">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500"
                        style={{ width: isCompleted ? '100%' : '0%' }}
                      ></div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Choose Your Template</h1>
              <p className="text-slate-600">Select a template that matches your business type</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card 
                  key={template.id}
                  className={`cursor-pointer transition-all hover:shadow-xl ${
                    selectedTemplate?.id === template.id 
                      ? 'border-2 border-indigo-600 shadow-xl' 
                      : 'hover:border-indigo-200'
                  }`}
                  onClick={() => setSelectedTemplate(template)}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    {selectedTemplate?.id === template.id && (
                      <div className="absolute top-3 right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <Badge variant="secondary">{template.category}</Badge>
                    </div>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="flex justify-end pt-6">
              <Button 
                onClick={() => setStep(2)}
                disabled={!selectedTemplate}
                className="bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Business Information</h1>
              <p className="text-slate-600">Tell us about your business</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Basic Details</CardTitle>
                <CardDescription>Start with the fundamentals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input 
                    id="businessName"
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Input 
                    id="industry"
                    placeholder="e.g., Technology, Food & Beverage, Retail"
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Business Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe what your business does..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                  <p className="text-xs text-slate-500">AI Tip: Be specific about your products/services and target customers</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mission">Mission Statement</Label>
                  <Textarea 
                    id="mission"
                    placeholder="What is your company's mission?"
                    rows={3}
                    value={formData.mission}
                    onChange={(e) => handleInputChange('mission', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vision">Vision Statement</Label>
                  <Textarea 
                    id="vision"
                    placeholder="What is your long-term vision?"
                    rows={3}
                    value={formData.vision}
                    onChange={(e) => handleInputChange('vision', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={() => setStep(3)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Market Analysis</h1>
              <p className="text-slate-600">Define your target market and competition</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Target Market</CardTitle>
                <CardDescription>Who are your customers?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="targetMarket">Target Market Description *</Label>
                  <Textarea 
                    id="targetMarket"
                    placeholder="Describe your ideal customer demographics, needs, and behaviors..."
                    rows={5}
                    value={formData.targetMarket}
                    onChange={(e) => handleInputChange('targetMarket', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="competition">Competitive Analysis *</Label>
                  <Textarea 
                    id="competition"
                    placeholder="Who are your main competitors? What makes you different?"
                    rows={5}
                    value={formData.competition}
                    onChange={(e) => handleInputChange('competition', e.target.value)}
                  />
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-indigo-900 mb-1">AI Assistant Tip</h3>
                      <p className="text-sm text-indigo-700">
                        Consider including: market size, growth trends, customer pain points, and your unique value proposition.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={() => setStep(2)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={() => setStep(4)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Financial Projections</h1>
              <p className="text-slate-600">Estimate your revenue and costs</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
                <CardDescription>Simplified financial projections</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="revenue" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="revenue">Revenue</TabsTrigger>
                    <TabsTrigger value="costs">Costs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="revenue" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="revenue">Expected Monthly Revenue</Label>
                      <Input 
                        id="revenue"
                        type="number"
                        placeholder="10000"
                        value={formData.revenue}
                        onChange={(e) => handleInputChange('revenue', e.target.value)}
                      />
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-900 mb-2">Projected Annual Revenue</h3>
                      <p className="text-2xl font-bold text-green-700">
                        ${formData.revenue ? (parseFloat(formData.revenue) * 12).toLocaleString() : '0'}
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="costs" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="costs">Expected Monthly Costs</Label>
                      <Input 
                        id="costs"
                        type="number"
                        placeholder="5000"
                        value={formData.costs}
                        onChange={(e) => handleInputChange('costs', e.target.value)}
                      />
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h3 className="font-semibold text-red-900 mb-2">Projected Annual Costs</h3>
                      <p className="text-2xl font-bold text-red-700">
                        ${formData.costs ? (parseFloat(formData.costs) * 12).toLocaleString() : '0'}
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                {formData.revenue && formData.costs && (
                  <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-900 mb-2">Projected Annual Profit</h3>
                    <p className="text-3xl font-bold text-indigo-700">
                      ${((parseFloat(formData.revenue) - parseFloat(formData.costs)) * 12).toLocaleString()}
                    </p>
                    <p className="text-sm text-indigo-600 mt-1">
                      Profit Margin: {(((parseFloat(formData.revenue) - parseFloat(formData.costs)) / parseFloat(formData.revenue)) * 100).toFixed(1)}%
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={() => setStep(3)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={() => setStep(5)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Review Your Plan</h1>
              <p className="text-slate-600">Everything looks great! Review and finalize your business plan</p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-slate-500">Business Name</span>
                      <p className="font-semibold">{formData.businessName || 'Not provided'}</p>
                    </div>
                    <div>
                      <span className="text-sm text-slate-500">Industry</span>
                      <p className="font-semibold">{formData.industry || 'Not provided'}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Description</span>
                    <p className="text-sm mt-1">{formData.description || 'Not provided'}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Projections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-slate-600 mb-1">Annual Revenue</p>
                      <p className="text-2xl font-bold text-green-700">
                        ${formData.revenue ? (parseFloat(formData.revenue) * 12).toLocaleString() : '0'}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-slate-600 mb-1">Annual Costs</p>
                      <p className="text-2xl font-bold text-red-700">
                        ${formData.costs ? (parseFloat(formData.costs) * 12).toLocaleString() : '0'}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-indigo-50 rounded-lg">
                      <p className="text-sm text-slate-600 mb-1">Annual Profit</p>
                      <p className="text-2xl font-bold text-indigo-700">
                        ${formData.revenue && formData.costs ? ((parseFloat(formData.revenue) - parseFloat(formData.costs)) * 12).toLocaleString() : '0'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={() => setStep(4)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex gap-3">
                <Link to="/dashboard">
                  <Button variant="outline">
                    <Save className="w-4 h-4 mr-2" />
                    Save & Exit
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600">
                    <Download className="w-4 h-4 mr-2" />
                    Generate Plan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PlanBuilder;
