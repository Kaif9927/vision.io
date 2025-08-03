import { X, Minus, Square } from "lucide-react";

interface WindowProps {
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Window({ title, onClose, children, className = "" }: WindowProps) {
  return (
    <div className={`window-container mx-auto max-w-4xl mb-8 ${className}`}>
      <div className="window bg-window-bg rounded-lg border border-slate-600 shadow-2xl backdrop-blur-sm">
        {/* Window Title Bar */}
        <div className="window-header bg-slate-800 px-4 py-3 rounded-t-lg flex items-center justify-between border-b border-slate-600">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div 
                className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-400 transition-colors"
                onClick={onClose}
                data-testid="button-window-close"
              />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <span className="text-slate-300 text-sm ml-2">{title}</span>
          </div>
        </div>
        
        {/* Window Content */}
        <div className="window-content">
          {children}
        </div>
      </div>
    </div>
  );
}
