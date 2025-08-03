import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Window from "./window";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "Manav is an exceptional developer who consistently delivers high-quality code. His ability to understand complex requirements and translate them into elegant solutions is remarkable. A true team player!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Tech Lead, Digital Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "Working with Manav was a game-changer for our project. His technical expertise and attention to detail helped us deliver ahead of schedule. I highly recommend him for any challenging development work.",
    rating: 5
  },
  {
    name: "Emily Rodriguez", 
    role: "Founder, StartupXYZ",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "Manav transformed our vision into reality with incredible skill and professionalism. His problem-solving abilities and communication throughout the project were outstanding. Would definitely work with him again!",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Window title="Testimonials - Client Reviews" className="max-w-4xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">What People Say</h2>
        
        <div className="testimonials-carousel relative overflow-hidden">
          <div 
            className="testimonials-track flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide w-full flex-shrink-0">
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-600">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-accent-orange">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? "bg-accent-blue" : "bg-slate-600"
                }`}
                onClick={() => setCurrentSlide(index)}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}
