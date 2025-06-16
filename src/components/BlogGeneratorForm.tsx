import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from './LoadingSpinner';
import { Sparkles } from 'lucide-react';

interface BlogGeneratorFormProps {
  onBlogGenerated: (blogData: { title: string; content: string }) => void;
}

const BlogGeneratorForm = ({ onBlogGenerated }: BlogGeneratorFormProps) => {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [toneStyle, setToneStyle] = useState('professional');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic) {
      toast({
        title: "Topic required",
        description: "Please enter a topic for your blog post",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/hi1y4vuclef5p7k7ccjn94uz6cl10rtm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic,
          keywords,
          toneStyle,
          timestamp: new Date().toISOString(),
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate blog');
      }
      
      // Get the response text first
      const responseText = await response.text();
      
      // Try to parse as JSON if possible
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        // If not valid JSON, try to extract title and content from the text response
        console.log("Response is not JSON, parsing text format:", responseText);
        
        // Simple extraction for title and content from text
        // Assuming the first line that contains "Title:" or similar is the title
        // and the rest is the content
        const lines = responseText.split("\n");
        let title = "Generated Blog";
        let content = responseText;
        
        // Try to extract title if it follows common patterns
        const titleMatch = responseText.match(/(?:title:|##)\s*(.*?)(?:\n|$)/i);
        if (titleMatch && titleMatch[1]) {
          title = titleMatch[1].trim();
          // Remove the title line from content
          content = content.replace(titleMatch[0], "").trim();
        }
        
        data = { title, content };
      }
      
      if (data && (data.title || data.content)) {
        onBlogGenerated({
          title: data.title || "Generated Blog",
          content: data.content || responseText
        });
        
        toast({
          title: "Blog generated!",
          description: "Your blog post has been created successfully.",
        });
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating blog:', error);
      toast({
        title: "Generation failed",
        description: "Unable to generate blog post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto glass-morphism rounded-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-custom-purple" />
        Generate Your Blog
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="topic" className="block text-sm font-medium text-white/70">
            Blog Topic <span className="text-custom-purple">*</span>
          </label>
          <Input
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="E.g. The future of artificial intelligence"
            className="bg-white/5 border-white/10 focus:border-custom-purple"
            disabled={isLoading}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="keywords" className="block text-sm font-medium text-white/70">
            Keywords (comma separated)
          </label>
          <Input
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="E.g. AI, technology, future"
            className="bg-white/5 border-white/10 focus:border-custom-purple"
            disabled={isLoading}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="tone" className="block text-sm font-medium text-white/70">
            Tone & Style
          </label>
          <select
            id="tone"
            value={toneStyle}
            onChange={(e) => setToneStyle(e.target.value)}
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm focus:border-custom-purple"
            disabled={isLoading}
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual & Conversational</option>
            <option value="technical">Technical</option>
            <option value="enthusiastic">Enthusiastic</option>
            <option value="educational">Educational</option>
          </select>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-custom-purple hover:bg-custom-purpleDark flex items-center justify-center gap-2 h-12"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="small" /> 
              Generating Blog...
            </>
          ) : (
            'Generate Blog Post'
          )}
        </Button>
      </form>
    </div>
  );
};

export default BlogGeneratorForm;
