export interface Service {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface WhyItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type FormStatus = null | "sending" | "success" | "error";

export interface NavLink {
  label: string;
  id: string;
}
