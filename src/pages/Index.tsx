
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, BookOpenText, Sparkles, PenTool, LineChart } from 'lucide-react';
import Header from '@/components/Header';
import BlogGeneratorForm from '@/components/BlogGeneratorForm';
import BlogDisplay from '@/components/BlogDisplay';
import LoadingSpinner from '@/components/LoadingSpinner';

const Index = () => {
  const [blogData, setBlogData] = useState<{ title: string; content: string } | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleBlogGenerated = (data: { title: string; content: string }) => {
    setBlogData(data);
    setShowDashboard(true);
    setShowForm(false);
  };

  const handleLike = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDislike = () => {
    setShowForm(true);
    setShowDashboard(false);
  };

  return (
    <div className="min-h-screen bg-custom-dark text-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-custom-purple/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-custom-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Generate <span className="text-gradient">High-Quality</span> Blog Posts <br />in Seconds
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10">
            Create engaging, SEO-optimized content for your website with our AI-powered blog generator. Save time and boost your content marketing strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button 
              className="bg-custom-purple hover:bg-custom-purpleDark text-white px-8 py-6 h-auto text-lg"
              onClick={() => {
                setShowForm(true);
                document.getElementById('generate')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Generate Blog Post
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-custom-darkSecondary">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose <span className="text-custom-purple">BlogGenius</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="bg-custom-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Content</h3>
              <p className="text-white/70">Our advanced AI creates human-like, engaging content optimized for your audience.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="bg-custom-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6 text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable Style</h3>
              <p className="text-white/70">Adjust tone, style, and keywords to match your brand's unique voice and SEO goals.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="bg-custom-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-custom-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-white/70">Generate complete blog posts in seconds, not hours. Save time and boost productivity.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How It <span className="text-custom-purple">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative flex flex-col items-center text-center">
              <div className="bg-custom-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                <span className="text-custom-purple font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Your Topic</h3>
              <p className="text-white/70">Provide a blog topic, relevant keywords, and select your preferred tone.</p>
              
              {/* Connector */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-custom-purple/30 to-transparent"></div>
            </div>
            
            <div className="relative flex flex-col items-center text-center">
              <div className="bg-custom-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-4 relative z-10">
                <span className="text-custom-purple font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Generates Content</h3>
              <p className="text-white/70">Our AI analyzes your input and creates a high-quality blog post tailored to your needs.</p>
              
              {/* Connector */}
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-custom-purple/30 to-transparent"></div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-custom-purple/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-custom-purple font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Review & Publish</h3>
              <p className="text-white/70">Review your blog post, make any necessary adjustments, and publish to your platform.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              onClick={() => {
                setShowForm(true);
                document.getElementById('generate')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-custom-purple hover:bg-custom-purpleDark flex items-center gap-2"
            >
              Try It Now <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Generate Section */}
      <section id="generate" className="py-20 bg-custom-darkSecondary min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Ready to <span className="text-custom-purple">Generate</span> Your Blog?
          </h2>
          
          {showDashboard && blogData ? (
            <BlogDisplay 
              blogData={blogData} 
              onLike={handleLike} 
              onDislike={handleDislike} 
            />
          ) : showForm ? (
            <BlogGeneratorForm onBlogGenerated={handleBlogGenerated} />
          ) : (
            <div className="text-center">
              <p className="text-xl text-white/70 mb-8">
                Create engaging blog content with just a few clicks. Our AI will handle the heavy lifting!
              </p>
              <Button 
                className="bg-custom-purple hover:bg-custom-purpleDark text-white px-8 py-6 h-auto text-lg"
                onClick={() => setShowForm(true)}
              >
                Start Generating
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <BookOpenText className="h-6 w-6 text-custom-purple" />
              <span className="text-lg font-bold">BlogGenius</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">How it works</a>
              <a href="#generate" className="text-sm text-white/70 hover:text-white transition-colors">Generate</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            &copy; {new Date().getFullYear()} BlogGenius. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
