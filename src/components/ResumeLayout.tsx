
import React from 'react';
import NavBar from '@/components/NavBar';
import { cn } from '@/lib/utils';

interface ResumeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ResumeLayout = ({ children, className }: ResumeLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className={cn("container mx-auto px-4 py-8", className)}>
        {children}
      </main>
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} - Built with React and Tailwind CSS 
        </div>
      </footer>
    </div>
  );
};

export default ResumeLayout;
