
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="space-y-12 fade-in">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-500 tracking-wide uppercase">Welcome</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Hello, I'm a Developer
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I craft elegant solutions with modern web technologies, focusing on creating seamless user experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-card social-link group"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-card social-link group"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>

          {/* Additional Info Card */}
          <div className="glass-card p-8 space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900">About Me</h3>
            <p className="text-gray-600">
              I'm passionate about creating beautiful, functional, and user-friendly applications. 
              My expertise includes React, TypeScript, and modern web development practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
