
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
    title: "Café Lune: The Artisan Cake Series",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/public/cafe & beverge/cake.jpg",
    //originalImageUrl: "https://picsum.photos/800/1200?random=1",
    description: "High-detail capture of handcrafted baked goods for large-format décor.",
    year: "2024",
    client: "Café Lune",
    tags: ["Product Photography", "Print Quality", "LigTexture Focushting","Décor"],
    fullDescription: "This commission for Café Lune involved capturing the essence of their handcrafted 'home cake' offerings. The goal was not merely documentation, but the creation of striking, evocative images suitable for high-resolution, large-format printing to be used as permanent décor within the café.The project required a meticulous technical approach to translate the delicate details of a homemade product into powerful art. We focused on specialized lighting and editing to highlight the texture of the cake—the rich, moist crumb and the structural detail of the chocolate shavings—ensuring every detail resonated with quality. By employing a dramatic, controlled setup, the final prints serve as a compelling visual signature for Café Lune, celebrating the artistry of their baking."
  },  
  {
    id: 2,
    title: "Artisan Chemex Brew",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/public/cafe & beverge/chemex.jpg",
    description: "A refined, macro-detail capture of a handcrafted Chemex pour-over created for lightbox display.",
    year: "2024",
    client: "Café Land",
    tags: ["Macro Lens", "Lightbox Print", "Coffee Photography"],
    fullDescription: "This photograph was created specifically for large-format lightbox installation, focusing on the elegance and warmth of an artisan pour-over moment. Captured with a Sony G-series macro lens, the shot emphasizes the delicate steam, the texture of the filter, and the rich tonal depth of the freshly brewed coffee. The scene was styled decoratively with precise lighting and thoughtful color harmony to create a premium café atmosphere. Specialized post-production further enhanced clarity, texture, and visual appeal while keeping the presentation natural and appetizing."
  },
  {
    id: 3,
    title: "Coffee Time — Dark Aesthetic Visual",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/public/cafe & beverge/coffee.jpg",
    description: "A dark-themed Instagram visual crafted with controlled lighting, precise color harmony, and custom typography.",
    year: "2024",
    client: "Café Lune",
    tags: ["Dark Mood", "Typography", "Social Media Visual"],
    fullDescription: "This image was created as part of a curated Instagram content series designed to maintain a consistent dark aesthetic across the page. The composition focuses on mood, intimacy, and texture, using controlled low-key lighting to highlight the cup and hands while preserving the scene’s atmospheric depth. To enhance its visual impact, custom typography was added using Canva, integrating the text seamlessly with the overall tone. The photograph was fully lit and edited with a cinematic approach, ensuring harmony between color, contrast, and composition for a clean, stylish social media presentation."
  },
  {
    id: 4,
    title: "Vogue Editorial",
    category: ProjectCategory.CAFE_BEVERAGE,
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
