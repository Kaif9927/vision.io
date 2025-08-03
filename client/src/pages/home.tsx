import { useState, useEffect } from "react";
import DesktopIcon from "@/components/desktop-icon";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Taskbar from "@/components/taskbar";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const [openWindows, setOpenWindows] = useState<Set<string>>(new Set());
  const { theme, toggleTheme } = useTheme();

  const openWindow = (windowName: string) => {
    setOpenWindows(prev => new Set([...prev, windowName]));
  };

  const closeWindow = (windowName: string) => {
    setOpenWindows(prev => {
      const newSet = new Set(prev);
      newSet.delete(windowName);
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-desktop-bg text-slate-200 overflow-x-hidden">
      {/* Desktop Background */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Desktop Icons */}
      <div className="fixed top-4 left-4 z-10 space-y-4">
        <DesktopIcon
          icon="user"
          label="About"
          color="blue"
          onClick={() => openWindow('about')}
          data-testid="icon-about"
        />
        <DesktopIcon
          icon="folder"
          label="Projects"
          color="green"
          onClick={() => openWindow('projects')}
          data-testid="icon-projects"
        />
        <DesktopIcon
          icon="terminal"
          label="Terminal"
          color="gray"
          onClick={() => openWindow('terminal')}
          data-testid="icon-terminal"
        />
        <DesktopIcon
          icon="envelope"
          label="Contact"
          color="orange"
          onClick={() => openWindow('contact')}
          data-testid="icon-contact"
        />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-10">
        <button 
          onClick={toggleTheme}
          className="w-12 h-12 bg-window-bg border border-slate-600 rounded-lg flex items-center justify-center text-slate-300 hover:bg-slate-700 transition-colors duration-200"
          data-testid="button-theme-toggle"
        >
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="min-h-screen pb-16 pt-8">
        {/* Hero Terminal - Always Visible */}
        <HeroSection onOpenWindow={openWindow} />

        {/* About Window */}
        {openWindows.has('about') && (
          <AboutSection onClose={() => closeWindow('about')} />
        )}

        {/* Skills Section - Always Visible */}
        <SkillsSection />

        {/* Projects Window */}
        {openWindows.has('projects') && (
          <ProjectsSection onClose={() => closeWindow('projects')} />
        )}

        {/* Experience Section - Always Visible */}
        <ExperienceSection />

        {/* Testimonials Section - Always Visible */}
        <TestimonialsSection />

        {/* Contact Window */}
        {openWindows.has('contact') && (
          <ContactSection onClose={() => closeWindow('contact')} />
        )}
      </div>

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
}
