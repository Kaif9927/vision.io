import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import Window from "./window";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  onClose: () => void;
}

const contactFormSchema = insertContactMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection({ onClose }: ContactSectionProps) {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <Window title="Contact - Send Message" onClose={onClose} className="max-w-4xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Let's Work Together</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent-blue rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white">mohdkaifa91@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent-green rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Available for</p>
                  <p className="text-white">Remote & On-site Projects</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent-purple rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Response Time</p>
                  <p className="text-white">Within 24 hours</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Connect with Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-700 hover:bg-accent-blue rounded-lg flex items-center justify-center transition-colors duration-200"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-700 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-200"
                  data-testid="link-github"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                  data-testid="link-twitter"
                >
                  <Twitter className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="Your Name"
                          className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-accent-blue"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-accent-blue"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="Project Inquiry"
                          className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-accent-blue"
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={5}
                          placeholder="Tell me about your project..."
                          className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-accent-blue resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-accent-blue hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  data-testid="button-send-message"
                >
                  <Send size={16} />
                  <span>{contactMutation.isPending ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Window>
  );
}
