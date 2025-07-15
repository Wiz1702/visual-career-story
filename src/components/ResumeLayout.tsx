
import React from 'react';
import NavBar from '@/components/NavBar';
import { cn } from '@/lib/utils';

interface ResumeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ResumeLayout = ({ children, className }: ResumeLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className={cn("container mx-auto px-4 py-8", className)}>
        {children}
      </main>
      <footer className="bg-card py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} - Built By Wisdom Wemoatu Akanwe. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ResumeLayout;
