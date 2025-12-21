import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';

type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

type SocialLink = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const contactInfo: ContactInfoItem[] = [
  { icon: Mail, label: 'Email', value: 'akanwe1@kenyon.edu', href: 'mailto:akanwe1@kenyon.edu' },
  { icon: Phone, label: 'Phone', value: '+1 740-358-3649', href: 'tel:+17403583649' },
  { icon: MapPin, label: 'Location', value: 'Gambier, Ohio' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/wisdom-akanwe', href: 'https://linkedin.com/in/wisdom-akanwe' },
  { icon: Github, label: 'GitHub', value: 'github.com/Wiz1702', href: 'https://github.com/Wiz1702' },
];

const socialLinks: SocialLink[] = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/wisdom-akanwe' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Wiz1702' },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Prefer email, LinkedIn, or GitHub for outreach. Browse my work below and feel free to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.label} className="glass card-hover border-border/30">
                  <CardContent className="p-5">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 group"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                          <p className="text-foreground font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect with me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl glass hover:bg-primary/10 transition-all duration-300 group glow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Accomplishments prompt */}
          <Card className="glass border-border/30">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">See My Work</h3>
              <p className="text-muted-foreground">
                Explore my projects, leadership, and awards in the sections above. If something resonates, reach out on LinkedIn or GitHub.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
