import { useState, useEffect } from "react";
import { Code, Mail, Download } from "lucide-react";
import Window from "./window";

interface HeroSectionProps {
  onOpenWindow: (windowName: string) => void;
}

export default function HeroSection({ onOpenWindow }: HeroSectionProps) {
  const [typingText, setTypingText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const messages = [
    'cat current_status.txt',
    'echo "Building awesome projects..."',
    'git status',
    'npm run create-magic'
  ];

  useEffect(() => {
    const typeAnimation = () => {
      const currentMessage = messages[messageIndex];
      
      if (isDeleting) {
        setTypingText(currentMessage.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setMessageIndex(prev => (prev + 1) % messages.length);
        }
      } else {
        setTypingText(currentMessage.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex === currentMessage.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timeout = setTimeout(typeAnimation, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex, messages]);

  const handleDownloadResume = () => {
    // TODO: Implement actual resume download
    const link = document.createElement('a');
    link.href = '/api/resume';
    link.download = 'Manav-Resume.pdf';
    link.click();
  };

  return (
    <Window title="manav@developer: ~">
      <div className="p-6 font-mono">
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-terminal-green">manav@developer:~$</span>
            <span className="ml-2 text-slate-300">whoami</span>
          </div>
          <div className="text-slate-400 ml-4">Full Stack Developer</div>
          
          <div className="flex items-center mt-4">
            <span className="text-terminal-green">manav@developer:~$</span>
            <span className="ml-2 text-slate-300">cat about.txt</span>
          </div>
          <div className="text-slate-400 ml-4 leading-relaxed">
            Name: Manav<br/>
            Role: Full Stack Developer<br/>
            Languages: JavaScript, Python, TypeScript<br/>
            Tools: React, Node.js, Express, MongoDB<br/>
            Status: <span className="text-terminal-green">Available for exciting projects</span><br/>
            Loves: Clean UI, Dark Mode, Coffee ☕
          </div>
          
          <div className="flex items-center mt-4">
            <span className="text-terminal-green">manav@developer:~$</span>
            <span className="ml-2 text-slate-300">{typingText}</span>
            <span className="animate-pulse">|</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button 
            className="bg-accent-blue hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            onClick={() => onOpenWindow('projects')}
            data-testid="button-view-projects"
          >
            <Code size={16} />
            <span>View Projects</span>
          </button>
          <button 
            className="bg-accent-green hover:bg-green-600 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            onClick={() => onOpenWindow('contact')}
            data-testid="button-contact-me"
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </button>
          <button 
            className="bg-accent-purple hover:bg-purple-600 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            onClick={handleDownloadResume}
            data-testid="button-download-resume"
          >
            <Download size={16} />
            <span>Resume.pdf</span>
          </button>
        </div>
      </div>
    </Window>
  );
}
