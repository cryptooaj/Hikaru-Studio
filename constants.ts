
import { Project, ProjectCategory } from './types';

export const NAV_ITEMS = [
  { id: 'HOME', label: 'Home' },
  { id: 'PORTFOLIO', label: 'Work' },
  { id: 'ABOUT', label: 'About' },
  { id: 'SERVICES', label: 'Services' },
  { id: 'CONTACT', label: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Mono Essence",
    category: ProjectCategory.ARCH_INTERIOR,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    originalImageUrl: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1200",
    description: "A study of light and shadow in urban environments.",
    year: "2024",
    client: "Personal Series",
    tags: ["B&W", "Street", "Lighting"],
    fullDescription: "Mono Essence is a deep dive into the stark contrasts found in modern urban architecture. By stripping away color, the series focuses entirely on texture, form, and the interplay of natural light against concrete structures."
  },
  {
    id: 2,
    title: "Lumina Brand",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    description: "Corporate identity design for a sustainable lighting startup.",
    year: "2023",
    client: "Lumina Tech",
    tags: ["Identity", "Packaging", "Web"],
    fullDescription: "Lumina approached me to create a brand identity that reflects their commitment to sustainability and cutting-edge LED technology. The result is a minimalist visual system that uses gradients to mimic the dispersion of light."
  },
  {
    id: 3,
    title: "Neon Dreams",
    category: ProjectCategory.PORTRAIT,
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4",
    description: "Night photography series exploring color theory.",
    year: "2024",
    client: "Art Gallery of Ontario",
    tags: ["Night", "Color", "Long Exposure"],
    fullDescription: "Neon Dreams explores the artificial luminescence of the city after dark. Utilizing long exposure techniques, this series transforms busy intersections and neon signages into fluid rivers of light."
  },
  {
    id: 4,
    title: "Vogue Editorial",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200",
    description: "Magazine layout and typography conceptualization.",
    year: "2023",
    client: "Vogue Concept",
    tags: ["Editorial", "Typography", "Fashion"],
    fullDescription: "A concept editorial layout designed to push the boundaries of traditional fashion typography. This project experiments with overlapping text, aggressive negative space, and asymmetric grid systems."
  },
  {
    id: 5,
    title: "Artisan Brew",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200",
    description: "Visual identity for a high-end coffee roaster.",
    year: "2022",
    client: "Artisan Brew",
    tags: ["Coffee", "Branding", "Packaging"],
    fullDescription: "Created for a boutique coffee shop, this project focused on the warmth and texture of the brewing process. Close-up macro shots of beans and steam were paired with a warm, earthy color palette."
  },
  {
    id: 6,
    title: "Silent Hills",
    category: ProjectCategory.ARCH_INTERIOR,
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
    description: "Landscape photography in the misty mornings.",
    year: "2023",
    client: "Travel Weekly",
    tags: ["Landscape", "Nature", "Minimalism"],
    fullDescription: "Silent Hills documents the serene, almost Ethereal atmosphere of the Scottish Highlands at dawn. The project focuses on the heavy mist that blankets the valleys."
  },
  {
    id: 7,
    title: "Culinary Arts",
    category: ProjectCategory.FOOD,
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200",
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
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
    description: "Packaging and identity for a boutique roastery.",
    year: "2023",
    client: "Bean & Leaf",
    tags: ["Packaging", "Illustration", "Eco"],
    fullDescription: "Bean & Leaf required a packaging solution that was as organic as their product. We utilized recycled materials and soy-based inks."
  }
];
