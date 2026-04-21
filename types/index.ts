export interface Equipment {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export interface Service {
  image: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}
