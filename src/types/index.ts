export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

export interface Track {
  title: string;
  description: string;
  icon: string;
}

export interface Sponsor {
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  logoUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}