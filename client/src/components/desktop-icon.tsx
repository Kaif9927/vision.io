import { User, Folder, Terminal, Mail } from "lucide-react";

interface DesktopIconProps {
  icon: "user" | "folder" | "terminal" | "envelope";
  label: string;
  color: "blue" | "green" | "gray" | "orange";
  onClick: () => void;
  "data-testid"?: string;
}

const iconComponents = {
  user: User,
  folder: Folder,
  terminal: Terminal,
  envelope: Mail,
};

const colorClasses = {
  blue: "bg-accent-blue",
  green: "bg-accent-green", 
  gray: "bg-gray-800",
  orange: "bg-accent-orange",
};

export default function DesktopIcon({ icon, label, color, onClick, "data-testid": testId }: DesktopIconProps) {
  const IconComponent = iconComponents[icon];
  
  return (
    <div 
      className="desktop-icon group cursor-pointer"
      onClick={onClick}
      data-testid={testId}
    >
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-200`}>
        <IconComponent size={24} />
      </div>
      <span className="text-xs text-center mt-1 block">{label}</span>
    </div>
  );
}
