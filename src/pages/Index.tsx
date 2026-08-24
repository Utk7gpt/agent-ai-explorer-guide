import { useState } from "react";
import { Search, Star, ExternalLink, Filter, Zap, Brain, MessageSquare, Image, Code, Users, Cpu, ShieldCheck, Layers, Moon, Sun, BookOpen, Workflow, Mic, Video, Palette, Megaphone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Scene } from "@/components/ui/hero-section";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const categories = [
    { id: "all", name: "All Agents", icon: Brain },
    { id: "chat", name: "Conversational", icon: MessageSquare },
    { id: "creative", name: "Creative", icon: Image },
    { id: "coding", name: "Coding", icon: Code },
    { id: "business", name: "Business", icon: Users },
    { id: "research", name: "Research", icon: BookOpen },
    { id: "automation", name: "Automation", icon: Workflow },
    { id: "voice", name: "Voice", icon: Mic },
    { id: "video", name: "Video", icon: Video },
    { id: "design", name: "Design", icon: Palette },
    { id: "marketing", name: "Marketing", icon: Megaphone },
    { id: "productivity", name: "Productivity", icon: Calendar },
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
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
      logo: "https://claude.ai/images/claude_app_icon.png",
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
      logo: "https://seeklogo.com/images/M/midjourney-logo-BEA2B55771-seeklogo.com.png",
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
      logo: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
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
      logo: "https://www.jasper.ai/wp-content/uploads/2022/01/jasper-logo.svg",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
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
      logo: "https://openai.com/content/images/2022/05/openai-avatar.png",
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
      logo: "https://cursor.sh/brand/icon.svg",
      tags: ["Editor", "AI-first"]
    },
    {
      id: 9,
      name: "Perplexity AI",
      category: "chat",
      description: "AI-powered search engine that provides accurate answers with source citations",
      features: ["Real-time search", "Source citations", "Academic research", "Fact checking"],
      rating: 4.6,
      pricing: "Free + Pro",
      website: "https://perplexity.ai",
      logo: "https://yt3.googleusercontent.com/0hkjJOzQl3-oka4wuKwt9Qc2vYK7DZvGPxEQe9K3QwjXdCkiU7GV2-qzD6iMZrR1CbKWC-N9=s900-c-k-c0x00ffffff-no-rj",
      tags: ["Search", "Research"]
    },
    {
      id: 10,
      name: "Runway ML",
      category: "creative",
      description: "AI-powered creative tools for video generation, editing, and visual effects",
      features: ["Video generation", "AI editing", "Motion graphics", "Visual effects"],
      rating: 4.5,
      pricing: "Free + Subscription",
      website: "https://runwayml.com",
      logo: "https://research.runwayml.com/the-runway-logo.svg",
      tags: ["Video", "Creative"]
    },
    {
      id: 11,
      name: "Copy.ai",
      category: "business",
      description: "AI copywriting assistant for marketing content, emails, and social media",
      features: ["Marketing copy", "Email templates", "Social posts", "Blog content"],
      rating: 4.3,
      pricing: "Free + Pro",
      website: "https://copy.ai",
      logo: "https://cdn.prod.website-files.com/628288c5cd3e8411283ac7a1/62d0efabe1a0156a5f41325b_copy-ai-logo-400x400.png",
      tags: ["Copywriting", "Marketing"]
    },
    {
      id: 12,
      name: "Stable Diffusion",
      category: "creative",
      description: "Open-source AI image generator with powerful customization options",
      features: ["Image generation", "Model training", "Open source", "Customizable"],
      rating: 4.4,
      pricing: "Free + Hosting costs",
      website: "https://stability.ai/stable-diffusion",
      logo: "https://avatars.githubusercontent.com/u/99575780?s=200&v=4",
      tags: ["Open Source", "Customizable"]
    },
    {
      id: 13,
      name: "Grammarly",
      category: "business",
      description: "AI-powered writing assistant for grammar, style, and tone improvement",
      features: ["Grammar check", "Style suggestions", "Tone detection", "Plagiarism check"],
      rating: 4.5,
      pricing: "Free + Premium",
      website: "https://grammarly.com",
      logo: "https://static.grammarly.com/assets/files/9a25b0d7ce2c47aabfe6b8c3d5d86e8c/grammarly_icon_256x256.png",
      tags: ["Writing", "Productivity"]
    },
    {
      id: 14,
      name: "Luma AI",
      category: "creative",
      description: "AI-powered 3D capture and neural rendering for immersive content creation",
      features: ["3D scanning", "Neural rendering", "AR/VR content", "Photogrammetry"],
      rating: 4.2,
      pricing: "Free + Pro",
      website: "https://lumalabs.ai",
      logo: "https://lumalabs.ai/favicon.ico",
      tags: ["3D", "AR/VR"]
    },
    {
      id: 15,
      name: "Synthesia",
      category: "creative",
      description: "AI video generation platform for creating professional videos with AI avatars",
      features: ["AI avatars", "Video generation", "Multi-language", "Professional quality"],
      rating: 4.3,
      pricing: "Subscription",
      website: "https://synthesia.io",
      logo: "https://www.synthesia.io/hubfs/synthesia-logo.svg",
      tags: ["Video", "Avatars"]
    },
    {
      id: 16,
      name: "Character.AI",
      category: "chat",
      description: "Platform for creating and chatting with AI characters with distinct personalities",
      features: ["Character creation", "Personality simulation", "Creative roleplay", "Community"],
      rating: 4.1,
      pricing: "Free + Plus",
      website: "https://character.ai",
      logo: "https://characterai.io/favicon.ico",
      tags: ["Entertainment", "Roleplay"]
    }
  ];

  const newAgents = [
    {
      id: 17,
      name: "Gemini 2.0",
      category: "chat",
      description: "Google's most advanced multimodal AI with native image, audio, and reasoning capabilities",
      features: ["Multimodal reasoning", "Native tool use", "Long context", "Real-time streaming"],
      rating: 4.7,
      pricing: "Free + Advanced",
      website: "https://gemini.google.com",
      logo: "https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png",
      tags: ["Google", "Multimodal"]
    },
    {
      id: 18,
      name: "Grok",
      category: "chat",
      description: "xAI's witty conversational AI with real-time knowledge from the X platform",
      features: ["Real-time knowledge", "Humor & wit", "X integration", "Uncensored answers"],
      rating: 4.4,
      pricing: "X Premium+",
      website: "https://x.ai",
      logo: "https://x.ai/favicon.ico",
      tags: ["xAI", "Real-time"]
    },
    {
      id: 19,
      name: "DeepSeek",
      category: "chat",
      description: "Open-source reasoning model rivaling top proprietary AIs at a fraction of the cost",
      features: ["Advanced reasoning", "Open source", "Cost efficient", "Math & code"],
      rating: 4.6,
      pricing: "Free + API",
      website: "https://deepseek.com",
      logo: "https://chat.deepseek.com/favicon.svg",
      tags: ["Open Source", "Reasoning"]
    },
    {
      id: 20,
      name: "Llama 3",
      category: "chat",
      description: "Meta's flagship open-weight LLM family for research and commercial use",
      features: ["Open weights", "Self-hostable", "Multi-language", "Fine-tunable"],
      rating: 4.5,
      pricing: "Free",
      website: "https://llama.meta.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      tags: ["Meta", "Open Weight"]
    },
    {
      id: 21,
      name: "Lovable",
      category: "coding",
      description: "AI that builds full-stack web apps from natural language prompts in seconds",
      features: ["Full-stack apps", "Instant preview", "Supabase built-in", "One-click deploy"],
      rating: 4.8,
      pricing: "Free + Pro",
      website: "https://lovable.dev",
      logo: "https://lovable.dev/favicon.ico",
      tags: ["No-Code", "Full-Stack"]
    },
    {
      id: 22,
      name: "v0",
      category: "coding",
      description: "Vercel's generative UI tool that turns prompts into production React components",
      features: ["React components", "shadcn/ui", "Copy-paste code", "Design to code"],
      rating: 4.6,
      pricing: "Free + Premium",
      website: "https://v0.dev",
      logo: "https://v0.dev/assets/icon.png",
      tags: ["Vercel", "UI Gen"]
    },
    {
      id: 23,
      name: "Suno",
      category: "creative",
      description: "Generate full studio-quality songs with vocals, lyrics, and instruments from a prompt",
      features: ["Full song generation", "Custom lyrics", "Vocal styles", "Genre variety"],
      rating: 4.7,
      pricing: "Free + Pro",
      website: "https://suno.com",
      logo: "https://suno.com/favicon.ico",
      tags: ["Music", "Audio"]
    },
    {
      id: 24,
      name: "ElevenLabs",
      category: "creative",
      description: "Ultra-realistic AI voice generation, cloning, and dubbing across 30+ languages",
      features: ["Voice cloning", "Text to speech", "AI dubbing", "Voice library"],
      rating: 4.8,
      pricing: "Free + Paid",
      website: "https://elevenlabs.io",
      logo: "https://elevenlabs.io/favicon.ico",
      tags: ["Voice", "TTS"]
    },
    {
      id: 25,
      name: "NotebookLM",
      category: "business",
      description: "Google's AI research assistant that turns your sources into notes, summaries, and podcasts",
      features: ["Source-grounded", "Audio overviews", "Study guides", "Mind maps"],
      rating: 4.6,
      pricing: "Free",
      website: "https://notebooklm.google.com",
      logo: "https://www.gstatic.com/notebooklm/branding/favicon.png",
      tags: ["Google", "Research"]
    },
    {
      id: 26,
      name: "Manus",
      category: "business",
      description: "Autonomous general AI agent that plans and executes complex multi-step tasks for you",
      features: ["Autonomous tasks", "Web browsing", "Code execution", "Long-horizon planning"],
      rating: 4.3,
      pricing: "Invite + Paid",
      website: "https://manus.im",
      logo: "https://manus.im/favicon.ico",
      tags: ["Agent", "Autonomous"]
    }
  ];

  const allAgents = [...aiAgents, ...newAgents];

  const comingSoonAgents = [
    {
      name: "GPT-5",
      description: "OpenAI's next flagship model unifying reasoning, multimodality, and agentic tool use",
      expectedLaunch: "2026",
      category: "chat"
    },
    {
      name: "Sora 2",
      description: "Next-gen text-to-video model with longer clips, sharper physics, and native audio",
      expectedLaunch: "2026",
      category: "creative"
    },
    {
      name: "Gemini 3",
      description: "Google DeepMind's upcoming model with deeper reasoning and agentic capabilities",
      expectedLaunch: "2026",
      category: "chat"
    },
    {
      name: "Claude 4 Opus",
      description: "Anthropic's next frontier model targeting expert-level coding and research agents",
      expectedLaunch: "2026",
      category: "chat"
    }
  ];

  const filteredAgents = allAgents.filter(agent => {
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

      {/* AI Agents Grid and Coming Soon Section with HeroGeometric Background */}
      <HeroGeometric
        badge="✨ Featured AI Agents"
        title1="Discover the most"
        title2="powerful AI tools"
      >
        <div className="py-16 px-4 w-full">
          <div className="max-w-7xl mx-auto">
            {/* Featured AI Agents Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Featured AI Agents
                </h2>
                <div className="flex items-center gap-2">
                  <Sun className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-yellow-500'}`} />
                  <Switch
                    checked={isDarkMode}
                    onCheckedChange={setIsDarkMode}
                  />
                  <Moon className={`h-4 w-4 ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}`} />
                </div>
              </div>
              <p className="text-xl text-white/70">
                Explore the most powerful AI tools available today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {filteredAgents.map((agent, index) => (
                <Card 
                  key={agent.id} 
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 animate-fade-in ${
                    isDarkMode 
                      ? 'bg-white/10 backdrop-blur-sm text-white border-white/20' 
                      : 'bg-white/80 backdrop-blur-sm text-gray-800'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <img 
                        src={agent.logo} 
                        alt={`${agent.name} logo`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const nextSibling = target.nextElementSibling as HTMLDivElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'block';
                          }
                        }}
                      />
                      <div className="text-4xl hidden">{agent.name.charAt(0)}</div>
                    </div>
                    <CardTitle className={`text-xl font-bold group-hover:text-blue-400 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {agent.name}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{agent.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm font-medium text-green-400">{agent.pricing}</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1 mb-3">
                      {agent.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className={`text-xs ${
                          isDarkMode ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-800'
                        }`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`text-center mb-4 leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {agent.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-6">
                      {agent.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className={`flex items-center text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <Zap className="h-3 w-3 text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button 
                      asChild 
                      className={`w-full transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      variant={isDarkMode ? "outline" : "default"}
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
                <h3 className="text-2xl font-bold mb-2 text-white">
                  No agents found
                </h3>
                <p className="text-white/70">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}

            {/* Coming Soon Section */}
            <div className="text-center mb-12 mt-20">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Coming Soon
              </h2>
              <p className="text-xl text-white/70">
                Next generation AI agents on the horizon
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comingSoonAgents.map((agent, index) => (
                <Card 
                  key={agent.name} 
                  className="text-center hover:shadow-xl transition-all duration-300 border-dashed border-2 animate-fade-in border-white/30 bg-white/10 backdrop-blur-sm text-white"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="text-3xl mb-3">🚀</div>
                    <CardTitle className="text-lg font-bold text-white">
                      {agent.name}
                    </CardTitle>
                    <Badge variant="outline" className="mx-auto border-white/30 text-white">
                      {agent.expectedLaunch}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      {agent.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </HeroGeometric>

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
            © 2026 AI Agent Hub. Connecting you with the future of AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
