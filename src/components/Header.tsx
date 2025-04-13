
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpenText, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 w-full py-4 px-6 backdrop-blur-lg bg-custom-dark/80 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpenText className="h-6 w-6 text-custom-purple" />
          <span className="text-lg font-bold">BlogGenius</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">How it works</a>
          <a href="#generate" className="text-sm text-white/70 hover:text-white transition-colors">Generate</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden md:flex border-white/10 hover:border-white/30 bg-white/5">
            Login
          </Button>
          <Button variant="default" className="bg-custom-purple hover:bg-custom-purpleDark text-white">
            Sign Up
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
