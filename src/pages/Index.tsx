import { useState } from "react";
import { Search, Star, ExternalLink, Filter, Zap, Brain, MessageSquare, Image, Code, Users, Cpu, ShieldCheck, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scene } from "@/components/ui/hero-section";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Agents", icon: Brain },
    { id: "chat", name: "Conversational", icon: MessageSquare },
    { id: "creative", name: "Creative", icon: Image },
    { id: "coding", name: "Coding", icon: Code },
    { id: "business", name: "Business", icon: Users },
  ];

  const features = [
    {
      icon: Cpu,
      title: "Performance",
      description: "Ultra-fast AI processing for every task.",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      description: "Trusted AI agents with verified safety.",
    },
    {
      icon: Layers,
      title: "Integration",
      description: "Seamless workflow integration capabilities.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Instant responses and real-time results.",
    },
  ];

  const aiAgents = [
    {
      id: 1,
      name: "ChatGPT",
      category: "chat",
      description: "Advanced conversational AI for general tasks, writing, and problem-solving",
      features: ["Natural conversation", "Code assistance", "Creative writing", "Problem solving"],
      rating: 4.8,
      pricing: "Free + Premium",
      website: "https://chat.openai.com",
      logo: "🤖",
      tags: ["Popular", "Versatile"]
    },
    {
      id: 2,
      name: "Claude",
      category: "chat",
      description: "Anthropic's AI assistant focused on helpful, harmless, and honest interactions",
      features: ["Long-form writing", "Analysis", "Research", "Creative tasks"],
      rating: 4.7,
      pricing: "Free + Pro",
      website: "https://claude.ai",
      logo: "🎭",
      tags: ["Ethical", "Research"]
    },
    {
      id: 3,
      name: "Midjourney",
      category: "creative",
      description: "Revolutionary AI art generator creating stunning visual content from text prompts",
      features: ["AI art generation", "Style variety", "High quality", "Community"],
      rating: 4.9,
      pricing: "Subscription",
      website: "https://midjourney.com",
      logo: "🎨",
      tags: ["Art", "Visual"]
    },
    {
      id: 4,
      name: "GitHub Copilot",
      category: "coding",
      description: "AI pair programmer that helps you write code faster and with fewer errors",
      features: ["Code completion", "Function generation", "Bug fixes", "Multi-language"],
      rating: 4.6,
      pricing: "$10/month",
      website: "https://github.com/features/copilot",
      logo: "💻",
      tags: ["Developer", "Productivity"]
    },
    {
      id: 5,
      name: "Jasper",
      category: "business",
      description: "AI content platform for marketing teams to create high-quality content at scale",
      features: ["Marketing copy", "Blog posts", "Social media", "Brand voice"],
      rating: 4.5,
      pricing: "From $39/month",
      website: "https://jasper.ai",
      logo: "✨",
      tags: ["Marketing", "Content"]
    },
    {
      id: 6,
      name: "Notion AI",
      category: "business",
      description: "Integrated AI assistant within Notion for enhanced productivity and content creation",
      features: ["Writing assistance", "Summarization", "Brainstorming", "Task automation"],
      rating: 4.4,
      pricing: "$8/month",
      website: "https://notion.so/ai",
      logo: "📝",
      tags: ["Productivity", "Organization"]
    },
    {
      id: 7,
      name: "DALL-E 3",
      category: "creative",
      description: "OpenAI's advanced image generation model with exceptional quality and prompt adherence",
      features: ["Image generation", "Text integration", "Style control", "High resolution"],
      rating: 4.7,
      pricing: "Credits-based",
      website: "https://openai.com/dall-e-3",
      logo: "🖼️",
      tags: ["OpenAI", "Images"]
    },
    {
      id: 8,
      name: "Cursor",
      category: "coding",
      description: "AI-powered code editor that understands your codebase and helps you code faster",
      features: ["Code prediction", "Codebase chat", "Auto-completion", "Refactoring"],
      rating: 4.8,
      pricing: "Free + Pro",
      website: "https://cursor.sh",
      logo: "🔮",
      tags: ["Editor", "AI-first"]
    }
  ];

  const comingSoonAgents = [
    {
      name: "GPT-5",
      description: "Next generation of OpenAI's language model with enhanced capabilities",
      expectedLaunch: "2024",
      category: "chat"
    },
    {
      name: "Sora",
      description: "OpenAI's revolutionary video generation AI creating realistic videos from text",
      expectedLaunch: "2024",
      category: "creative"
    },
    {
      name: "Gemini Ultra",
      description: "Google's most capable AI model for complex reasoning and multimodal tasks",
      expectedLaunch: "2024",
      category: "chat"
    },
    {
      name: "Claude 3.5",
      description: "Enhanced version of Anthropic's AI with improved reasoning and safety",
      expectedLaunch: "2024",
      category: "chat"
    }
  ];

  const filteredAgents = aiAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* New 3D Hero Section */}
      <section className="min-h-screen w-full bg-gradient-to-br from-black to-[#1A2428] text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="w-full max-w-6xl space-y-12 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="secondary" className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-full">
              ✨ Next Generation AI Tools
            </Badge>
            
            <div className="space-y-6 flex items-center justify-center flex-col">
              <h1 className="text-3xl md:text-6xl font-semibold tracking-tight max-w-3xl">
                Discover, compare, and choose the perfect AI agents
              </h1>
              <p className="text-lg text-neutral-300 max-w-2xl">
                From creative tools to coding assistants, find your ideal AI companion. Experience ultra-fast processing, advanced security, and intuitive design.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search AI agents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-400 focus:border-white/40 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 ${
                        selectedCategory === category.id 
                          ? "bg-white text-black hover:bg-white/90" 
                          : "bg-transparent text-white border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3"
              >
                <feature.icon size={18} className="text-white/80 md:w-5 md:h-5" />
                <h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
                <p className="text-xs md:text-sm text-neutral-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 3D Background Scene */}
        <div className="absolute inset-0">
          <Scene />
        </div>
      </section>

      {/* AI Agents Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured AI Agents</h2>
            <p className="text-xl text-gray-600">Explore the most powerful AI tools available today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAgents.map((agent, index) => (
              <Card 
                key={agent.id} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {agent.logo}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {agent.name}
                  </CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{agent.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm font-medium text-green-600">{agent.pricing}</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {agent.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4 text-gray-600 leading-relaxed">
                    {agent.description}
                  </CardDescription>
                  
                  <div className="space-y-2 mb-6">
                    {agent.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Zap className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    className="w-full group-hover:bg-blue-600 transition-colors duration-300"
                  >
                    <a href={agent.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No agents found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600">Next generation AI agents on the horizon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoonAgents.map((agent, index) => (
              <Card 
                key={agent.name} 
                className="text-center hover:shadow-xl transition-all duration-300 border-dashed border-2 border-gray-300 bg-white/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="text-3xl mb-3">🚀</div>
                  <CardTitle className="text-lg font-bold text-gray-800">{agent.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {agent.expectedLaunch}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {agent.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">AI Agent Hub</h3>
          <p className="text-gray-400 mb-6">
            Your gateway to discovering the most powerful AI tools and agents
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Submit Agent</a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2024 AI Agent Hub. Connecting you with the future of AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
