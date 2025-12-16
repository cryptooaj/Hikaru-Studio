
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
    title: "Artisan Chocolate Waffle",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/DSC06694 copy.jpg",
    description: "A high-detail food photograph created for lightbox printing, emphasizing texture, richness, and visual appetite appeal.",
    year: "2024",
    client: "Private Commission",
    tags: ["Food Texture", "Lightbox Print", "Macro Photography"],
    fullDescription: "This image was created specifically for large-format lightbox display, with a strong emphasis on texture, richness, and the appetizing qualities of the product. Captured using a Sony G-series macro lens, the photograph highlights the crisp structure of the waffle, the gloss of the chocolate drizzle, and the softness of the accompanying elements. Decorative styling and precise lighting were used to enhance depth, contrast, and color harmony across the scene. Specialized post-production refined details and tonal balance, ensuring the final image presents the product in its most appealing and mouth-watering form while maintaining a natural, high-end visual quality suitable for permanent café décor."
  },
  {
    id: 7,
    title: "Enjoy Breakfast — Croissant Content Series",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/public/cafe & beverge/crossaint.jpg",
    description: "A styled food photograph created for content production, highlighting croissant variety, texture, and appetizing presentation.",
    year: "2024",
    client: "Social Media Content",
    tags: ["Content Creation", "Food Styling", "Product Variety"],
    fullDescription: "This image was produced for digital content creation, focusing on presenting a variety of croissant items in an inviting and visually balanced composition. Captured using a Sony fixed focal length lens, the scene was styled decoratively with precise lighting to enhance texture, color harmony, and depth. Particular attention was given to showcasing the flaky layers of the croissants, the richness of the chocolate drizzle, and the overall sense of freshness and taste appeal. Professional post-production refined contrast and tonal balance, ensuring the final image effectively communicates quality, variety, and a warm breakfast atmosphere suitable for social media and promotional use."
  },
  {
    id: 8,
    title: "Cool Down — Modern x Traditional Beverage Visual",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/watermelon.jpg",
    description: "A vibrant beverage visual blending modern composition with traditional decorative elements, created for digital content production.",
    year: "2024",
    client: "Parsian Cafe",
    tags: ["Beverage Photography", "Modern & Traditional Fusion", "Natural Light"],
    fullDescription: "This image was created for digital content production, combining a modern photographic approach with traditional decorative styling. Captured using a Sony fixed focal length lens, the scene relies on natural lighting to enhance freshness, transparency, and color vibrancy. Particular attention was given to color harmony between the beverage, background, and traditional patterned elements, creating a balanced yet dynamic visual identity. Professional post-production refined tonal balance and clarity, with a clear focus on presenting the drink as refreshing, visually appealing, and appetizing—well-suited for contemporary social media storytelling."
  },
  {
    id: 9,
    title: "Minimal Product Visual — Bag Campaign",
    category: ProjectCategory.PRODUCT,
    imageUrl: "commerical photography/New folder/1.jpg",
    fallbackImageUrl: "commerical photography/New folder/1.jpg",
    videoUrl: "commerical photography/New folder/balck bag.mp4",
    description: "A minimalist product visual created with precise lighting, texture emphasis, and typography integration.",
    year: "2024",
    client: "CHRAIS & KCITH",
    tags: ["Product Photography", "Minimal Style", "Typography Design"],
    fullDescription: "This product visual was created as part of a selected brand campaign, with both still and motion versions produced. The client’s request focused on presenting the product in a clean, minimal style while emphasizing material texture through controlled lighting. Typography was incorporated to complement the visual identity of the product, designed using Canva and integrated subtly to maintain a refined and modern aesthetic. Professional lighting and post-production were applied to ensure clarity, balance, and visual impact. A motion version of this project is also available and can be viewed by contacting Hikaru Studio."
  },

  {
    id: 7,
    title: "Culinary Arts",
    category: ProjectCategory.FOOD,
    imageUrl: "/asset/culinary-arts.jpg",
    fallbackImageUrl: "https://picsum.photos/1200/900?random=7",
    description: "High-end cuisine photography.",
    year: "2024",
    client: "Michelin Starred",
    tags: ["Food", "Fine Dining", "Texture"],
    fullDescription: "A series focused on the intricate details of plating and ingredients. Using dramatic lighting to highlight textures and colors, these images treat food as sculpture."
  },
    {
    id: 9,
    title: "Neon Dreams",
    category: ProjectCategory.PORTRAIT,
    imageUrl: "/asset/neon-dreams.jpg",
    fallbackImageUrl: "https://picsum.photos/800/800?random=3",
    videoUrl: "https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4",
    description: "Night photography series exploring color theory.",
    year: "2024",
    client: "Art Gallery of Ontario",
    tags: ["Night", "Color", "Long Exposure"],
    fullDescription: "Neon Dreams explores the artificial luminescence of the city after dark. Utilizing long exposure techniques, this series transforms busy intersections and neon signages into fluid rivers of light. It challenges the viewer's perception of time and space within the urban landscape."
  },
];
