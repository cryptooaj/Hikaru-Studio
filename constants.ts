
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
    title: "Café Lune: The Artisan Cake Series",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/cake.jpg",
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
    imageUrl: "/cafe & beverge/chemex.jpg",
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
    imageUrl: "/cafe & beverge/coffee.jpg",
    description: "A dark-themed Instagram visual crafted with controlled lighting, precise color harmony, and custom typography.",
    year: "2024",
    client: "Café Lune",
    tags: ["Dark Mood", "Typography", "Social Media Visual"],
    fullDescription: "This image was created as part of a curated Instagram content series designed to maintain a consistent dark aesthetic across the page. The composition focuses on mood, intimacy, and texture, using controlled low-key lighting to highlight the cup and hands while preserving the scene’s atmospheric depth. To enhance its visual impact, custom typography was added using Canva, integrating the text seamlessly with the overall tone. The photograph was fully lit and edited with a cinematic approach, ensuring harmony between color, contrast, and composition for a clean, stylish social media presentation."
  },
  {
    id: 4,
    title: "Latte Art: High-Resolution Print Campaign",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/latte.jpg",
    description: "A close-up studio shot of a classic latte, expertly styled and captured for large-scale lightbox display. The focus is on the rich texture of the foam, the precision of the latte art, and the sophisticated color harmony of the beverage against the modern, textured surface.",
    year: "2024",
    client: "Cafe Land",
    tags: ["Food Photography", "Beverage Photography", "Commercial", "Latte Art", "Studio Lighting", "High-Resolution"],
    fullDescription: "This photograph was executed specifically for Cafe Land's 2024 print campaign, designed for large-scale lightbox display. The core focus was achieving maximum technical quality and high-resolution detail to ensure perfect clarity and impact when printed at significant size. Captured using a prime lens (fixed focal length) to guarantee superior sharpness and detail across the frame. The lighting setup was meticulously controlled studio lighting, using precise directional light to sculpt the cup and highlight the microfoam's texture, giving the image a sense of depth and luxury. The composition utilizes a subtle diagonal line to lead the eye toward the perfectly executed latte art—the focal point of the image. The subject is decoratively styled on a clean, textured grey surface, ensuring a sophisticated, modern aesthetic. Careful color grading and post-production were applied to enhance the rich, warm brown tones of the espresso and the bright white of the steamed milk, creating a balanced and appealing harmony that makes the latte instantly inviting. The final image was optimized for high-quality, large-format printing on a lightbox, demanding flawless resolution and tonal range to maximize visual presence in a retail environment."
  },
  {
    id: 5,
    title: "Layered Cocktail: Dynamic Natural Light Content",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/redandblue.jpg",
    description: "High-impact, dynamic shot of a multi-layered mocktail/cocktail. Captured in optimal natural sunlight with a prime lens to enhance liquid clarity and action for Parsian Cafe's 2025 Instagram content.",
    year: "2025",
    client: "Parsian Cafe",
    tags: ["Beverage Photography", "Natural Light", "Social Media Content", "Cocktail", "Dynamic Shot", "Food Styling"],
    fullDescription: "This image was created for Parsian Cafe's 2025 Instagram content campaign, focusing on vividness, freshness, and high quality tailored for mobile viewing and social engagement. The shot utilizes completely natural light, captured during the ideal time of day (optimal sunlight) to provide sharp highlights, rich shadows, and excellent clarity. The core objective was high-quality separation and clarity of the liquid product, clearly defining the distinct blue, red, and clear layers. A prime lens (fixed focal length) was used to ensure superior sharpness and detail. The composition is dynamic, featuring a captured moment of action as a stream of liquid falls into the glass, creating excitement and visual interest—perfect for generating stops and engagement on social feeds. The high-resolution capture and vibrant color palette were optimized specifically for use as high-impact Instagram content."
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
