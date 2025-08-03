import Window from "./window";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Leading development of scalable web applications and mentoring junior developers.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led team of 5 developers on multiple projects",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    color: "bg-accent-blue"
  },
  {
    title: "Full Stack Developer", 
    company: "Digital Innovations Inc.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client applications using modern web technologies.",
    achievements: [
      "Built 10+ responsive web applications",
      "Reduced API response time by 50%",
      "Collaborated with design team to improve UX by 35%"
    ],
    color: "bg-accent-green"
  },
  {
    title: "B.S. Computer Science",
    company: "State University",
    period: "2016 - 2020",
    description: "Graduated with honors, specializing in software engineering and web development.",
    achievements: [
      "GPA: 3.8/4.0",
      "President of Computer Science Club",
      "Won 3 hackathon competitions"
    ],
    color: "bg-accent-purple"
  }
];

export default function ExperienceSection() {
  return (
    <Window title="Experience - Career Timeline" className="max-w-5xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Professional Journey</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-blue"></div>
          
          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                <div className={`w-4 h-4 ${exp.color} rounded-full border-4 border-window-bg relative z-10`}></div>
                <div className="flex-1 bg-slate-800 rounded-lg p-6 border border-slate-600">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className={`font-medium ${exp.color === 'bg-accent-blue' ? 'text-accent-blue' : exp.color === 'bg-accent-green' ? 'text-accent-green' : 'text-accent-purple'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-slate-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-slate-300 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="text-sm text-slate-400">• {achievement}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}
