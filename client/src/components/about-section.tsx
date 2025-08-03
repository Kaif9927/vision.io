import Window from "./window";

interface AboutSectionProps {
  onClose: () => void;
}

export default function AboutSection({ onClose }: AboutSectionProps) {
  return (
    <Window title="About - Manav.exe" onClose={onClose}>
      <div className="p-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Professional Photo */}
          <div className="flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
              alt="Manav - Full Stack Developer" 
              className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover border-2 border-accent-blue"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">Meet the Developer</h2>
            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed">
                Hey there! I'm Manav, a passionate Full Stack Developer who loves crafting digital experiences that make a difference. With expertise in modern web technologies, I specialize in building scalable applications that solve real-world problems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h3 className="text-accent-blue font-semibold mb-2">Key Strengths</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Problem-solving mindset</li>
                    <li>• Team collaboration</li>
                    <li>• Clean code practices</li>
                    <li>• User-centric design</li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h3 className="text-accent-green font-semibold mb-2">Interests</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Open source contribution</li>
                    <li>• Learning new technologies</li>
                    <li>• Building scalable systems</li>
                    <li>• Mentoring developers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
