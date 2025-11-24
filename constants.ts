
import { Project, ProjectCategory } from './types';

export const NAV_ITEMS = [
  { id: 'HOME', label: 'Home' },
  { id: 'PORTFOLIO', label: 'Work' },
  { id: 'ABOUT', label: 'About' },
  { id: 'SERVICES', label: 'Services' },
  { id: 'AI_LAB', label: 'AI Lab' },
  { id: 'CONTACT', label: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Mono Essence",
    category: ProjectCategory.ARCH_INTERIOR,
    imageUrl: "https://picsum.photos/800/1200?grayscale&random=1",
    originalImageUrl: "https://picsum.photos/800/1200?random=1",
    description: "A study of light and shadow in urban environments.",
    year: "2024",
    client: "Personal Series",
    tags: ["B&W", "Street", "Lighting"],
    fullDescription: "Mono Essence is a deep dive into the stark contrasts found in modern urban architecture. By stripping away color, the series focuses entirely on texture, form, and the interplay of natural light against concrete structures. This project was shot over three months in downtown Toronto, capturing moments of silence amidst the chaos."
  },
  {
    id: 2,
    title: "Lumina Brand",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://picsum.photos/1200/800?random=2",
    description: "Corporate identity design for a sustainable lighting startup.",
    year: "2023",
    client: "Lumina Tech",
    tags: ["Identity", "Packaging", "Web"],
    fullDescription: "Lumina approached me to create a brand identity that reflects their commitment to sustainability and cutting-edge LED technology. The result is a minimalist visual system that uses gradients to mimic the dispersion of light. The project included logo design, packaging for their smart bulbs, and a comprehensive brand guideline."
  },
  {
    id: 3,
    title: "Neon Dreams",
    category: ProjectCategory.PORTRAIT,
    imageUrl: "https://picsum.photos/800/800?random=3",
    description: "Night photography series exploring color theory.",
    year: "2024",
    client: "Art Gallery of Ontario",
    tags: ["Night", "Color", "Long Exposure"],
    fullDescription: "Neon Dreams explores the artificial luminescence of the city after dark. Utilizing long exposure techniques, this series transforms busy intersections and neon signages into fluid rivers of light. It challenges the viewer's perception of time and space within the urban landscape."
  },
  {
    id: 4,
    title: "Vogue Editorial",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://picsum.photos/800/1000?random=4",
    description: "Magazine layout and typography conceptualization.",
    year: "2023",
    client: "Vogue Concept",
    tags: ["Editorial", "Typography", "Fashion"],
    fullDescription: "A concept editorial layout designed to push the boundaries of traditional fashion typography. This project experiments with overlapping text, aggressive negative space, and asymmetric grid systems to create a dynamic reading experience that complements high-fashion imagery."
  },
  {
    id: 5,
    title: "Artisan Brew",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "https://picsum.photos/1000/800?random=5",
    description: "Visual identity for a high-end coffee roaster.",
    year: "2022",
    client: "Artisan Brew",
    tags: ["Coffee", "Branding", "Packaging"],
    fullDescription: "Created for a boutique coffee shop, this project focused on the warmth and texture of the brewing process. Close-up macro shots of beans and steam were paired with a warm, earthy color palette to evoke the sensory experience of fresh coffee."
  },
  {
    id: 6,
    title: "Silent Hills",
    category: ProjectCategory.ARCH_INTERIOR,
    imageUrl: "https://picsum.photos/900/1200?grayscale&random=6",
    description: "Landscape photography in the misty mornings.",
    year: "2023",
    client: "Travel Weekly",
    tags: ["Landscape", "Nature", "Minimalism"],
    fullDescription: "Silent Hills documents the serene, almost Ethereal atmosphere of the Scottish Highlands at dawn. The project focuses on the heavy mist that blankets the valleys, isolating trees and hills into singular subjects. It is a meditation on solitude and the overwhelming scale of nature."
  },
  {
    id: 7,
    title: "Culinary Arts",
    category: ProjectCategory.FOOD,
    imageUrl: "https://picsum.photos/1200/900?random=7",
    description: "High-end cuisine photography.",
    year: "2024",
    client: "Michelin Starred",
    tags: ["Food", "Fine Dining", "Texture"],
    fullDescription: "A series focused on the intricate details of plating and ingredients. Using dramatic lighting to highlight textures and colors, these images treat food as sculpture."
  },
  {
    id: 8,
    title: "Minimalist Coffee",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "https://picsum.photos/800/1200?random=8",
    description: "Packaging and identity for a boutique roastery.",
    year: "2023",
    client: "Bean & Leaf",
    tags: ["Packaging", "Illustration", "Eco"],
    fullDescription: "Bean & Leaf required a packaging solution that was as organic as their product. We utilized recycled materials and soy-based inks. The design features hand-drawn botanical illustrations specific to the region of the coffee bean, paired with a clean, serif typeface to evoke a sense of heritage and quality."
  }
];
