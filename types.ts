
export enum PageState {
  HOME = 'HOME',
  PORTFOLIO = 'PORTFOLIO',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  CONTACT = 'CONTACT',
}

export enum ProjectCategory {
  ALL = 'All',
  PRODUCT = 'Commercial/Product',
  CAFE_BEVERAGE = 'Cafe/Beverage',
  FOOD = 'Food photography',
  EXHIBITION = 'Exhibition/Event',
  ANIMAL = 'Cats Photography'
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
  fallbackImageUrl?: string;
  videoUrl?: string;
}
