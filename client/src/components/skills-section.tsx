import { Code, Layers, Gavel } from "lucide-react";
import Window from "./window";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-accent-blue",
    skills: [
      { name: "JavaScript", level: 90, color: "bg-accent-blue" },
      { name: "Python", level: 85, color: "bg-accent-green" },
      { name: "TypeScript", level: 80, color: "bg-accent-purple" },
    ]
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "text-accent-green",
    skills: [
      { name: "React", level: 95, color: "bg-accent-blue" },
      { name: "Node.js", level: 88, color: "bg-accent-green" },
      { name: "Express", level: 85, color: "bg-accent-orange" },
    ]
  },
  {
    title: "Tools & Tech",
    icon: Gavel,
    color: "text-accent-purple",
    skills: [
      { name: "MongoDB", level: 83, color: "bg-accent-green" },
      { name: "Git", level: 92, color: "bg-accent-orange" },
      { name: "Docker", level: 75, color: "bg-accent-purple" },
    ]
  }
];

export default function SkillsSection() {
  return (
    <Window title="Skills - Developer Tools" className="max-w-6xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className={`${category.color} font-semibold mb-4 flex items-center`}>
                <category.icon className="mr-2" size={16} />
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-item group cursor-pointer hover:transform hover:-translate-y-1 transition-transform duration-200"
                    data-testid={`skill-${skill.name.toLowerCase()}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-400">
                        {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`${skill.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
