
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="space-y-12 fade-in">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Anthony Bagrianov
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-300">
                Senior Backend Developer & Technical Architect
              </h2>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Specializing in high-load financial systems, AI-driven services, and scalable microservices architecture
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 text-gray-200"
            >
              <a
                href="https://github.com/antibagr"
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
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 text-gray-200"
            >
              <a
                href="https://linkedin.com/rudie-duddie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 text-gray-200"
            >
              <a
                href="mailto:rudiemeant@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </Button>
          </div>

          {/* Experience Section */}
          <div className="space-y-8">
            <div className="glass-card p-8 space-y-6 bg-gray-800/30 backdrop-blur">
              <h3 className="text-2xl font-semibold text-gray-200">Professional Experience</h3>
              
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-xl font-medium text-blue-400">Senior Backend Developer at Spenxy</h4>
                    <span className="text-gray-400">Dec 2023 - Present</span>
                  </div>
                  <p className="text-gray-300">
                    Spearheaded development of high-load financial microservices for digital banking platforms. Led successful delivery of a fiat-to-crypto exchange, achieving $1M+ in sales within first month of launch.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-xl font-medium text-blue-400">Team Lead & Architect at Forkitech</h4>
                    <span className="text-gray-400">Aug 2020 - July 2022</span>
                  </div>
                  <p className="text-gray-300">
                    Architected and implemented a high-capacity sports events data pipeline processing 10,000 concurrent events, powering AI-based outcome prediction services.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-xl font-medium text-blue-400">Senior Backend Developer at Intema.ai</h4>
                    <span className="text-gray-400">Nov 2022 - Sep 2023</span>
                  </div>
                  <p className="text-gray-300">
                    Built AI-powered voice recognition systems, improving test coverage from 50% to 80% across multiple client projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="glass-card p-8 space-y-4 bg-gray-800/30 backdrop-blur">
              <h3 className="text-2xl font-semibold text-gray-200">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "Kafka",
                  "Docker", "Kubernetes", "MongoDB", "ClickHouse", "AWS", "gRPC",
                  "TDD", "DDD", "Microservices", "Async Programming"
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Project */}
            <div className="glass-card p-8 space-y-4 bg-gray-800/30 backdrop-blur">
              <h3 className="text-2xl font-semibold text-gray-200">Featured Project</h3>
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-blue-400">HealthPulse Bot</h4>
                <p className="text-gray-300">
                  Engineered a B2B Telegram messenger bot enabling secure, anonymous communication. 
                  Implemented advanced privacy features using MTProto Telegram protocol for enhanced data security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
