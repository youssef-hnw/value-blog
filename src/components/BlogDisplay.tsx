
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface BlogDisplayProps {
  blogData: {
    title: string;
    content: string;
  };
  onLike: () => void;
  onDislike: () => void;
}

const BlogDisplay = ({ blogData, onLike, onDislike }: BlogDisplayProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        <Card className="border border-white/10 bg-custom-darkSecondary rounded-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">{blogData.title}</h2>
            
            <div className="prose prose-invert max-w-none">
              {blogData.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-white/80 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </Card>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <h3 className="text-lg text-white/70">How do you like this blog post?</h3>
          <div className="flex items-center gap-4">
            <Button 
              onClick={onLike} 
              variant="outline" 
              className="border-white/10 bg-white/5 hover:bg-white/10 hover:text-custom-purple flex items-center gap-2"
            >
              <ThumbsUp className="h-4 w-4" /> I like it
            </Button>
            <Button 
              onClick={onDislike} 
              variant="outline" 
              className="border-white/10 bg-white/5 hover:bg-white/10 hover:text-red-400 flex items-center gap-2"
            >
              <ThumbsDown className="h-4 w-4" /> Generate another
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDisplay;
