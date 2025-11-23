
export enum PageState {
  HOME = 'HOME',
  PORTFOLIO = 'PORTFOLIO',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  AI_LAB = 'AI_LAB',
  CONTACT = 'CONTACT',
}

export enum ProjectCategory {
  ALL = 'All',
  COMMERCIAL = 'Commercial photography',
  CAFE_BEVERAGE = 'Cafe & Beverage',
  ARCH_INTERIOR = 'Architectural / Interior',
  FOOD = 'Food photography',
  PORTRAIT = 'Portrait photography'
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  description: string;
  year: string;
  client?: string;
  tags?: string[];
  fullDescription?: string;
  originalImageUrl?: string;
}

// Global declarations to fix TypeScript errors
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }
  
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      [key: string]: string | undefined;
    }
  }
}