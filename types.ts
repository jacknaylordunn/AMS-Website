import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}