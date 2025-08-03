import { useState, useEffect } from "react";
import { Home, Wifi } from "lucide-react";

export default function Taskbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-600 px-4 py-2 z-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="taskbar-btn flex items-center space-x-2 px-3 py-2 rounded hover:bg-slate-700 transition-colors duration-200">
            <Home className="text-accent-blue" size={16} />
            <span className="text-sm text-slate-300">Portfolio</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-4 text-slate-400 text-sm">
          <span data-testid="current-time">{currentTime}</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
            <span>Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
