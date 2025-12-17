
import { Project, ProjectCategory } from './types';

export const NAV_ITEMS = [
  { id: 'HOME', label: 'Home' },
  { id: 'PORTFOLIO', label: 'Work' },
  { id: 'ABOUT', label: 'About' },
  { id: 'SERVICES', label: 'Services' },
  { id: 'CONTACT', label: 'Contact' },
];

export const PROJECTS: Project[] = [
  //CAFE_BEVERAGE Category Projects
  {
    id: 1,
    title: "Café Lune: The Artisan Cake Series",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/Cake.JPEG",
    //originalImageUrl: "https://picsum.photos/800/1200?random=1",
    description: "High-detail capture of handcrafted baked goods for large-format décor.",
    year: "2025",
    client: "Café Lune",
    tags: ["Product Photography", "Print Quality", "LigTexture Focushting","Décor"],
    fullDescription: "This commission for Café Lune involved capturing the essence of their handcrafted 'home cake' offerings. The goal was not merely documentation, but the creation of striking, evocative images suitable for high-resolution, large-format printing to be used as permanent décor within the café.The project required a meticulous technical approach to translate the delicate details of a homemade product into powerful art. We focused on specialized lighting and editing to highlight the texture of the cake—the rich, moist crumb and the structural detail of the chocolate shavings—ensuring every detail resonated with quality. By employing a dramatic, controlled setup, the final prints serve as a compelling visual signature for Café Lune, celebrating the artistry of their baking."
  },  
  {
    id: 2,
    title: "Artisan Chemex Brew",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/Chemex.JPG",
    description: "A refined, macro-detail capture of a handcrafted Chemex pour-over created for lightbox display.",
    year: "2025",
    client: "Café Land",
    tags: ["Macro Lens", "Lightbox Print", "Coffee Photography"],
    fullDescription: "This photograph was created specifically for large-format lightbox installation, focusing on the elegance and warmth of an artisan pour-over moment. Captured with a Sony G-series macro lens, the shot emphasizes the delicate steam, the texture of the filter, and the rich tonal depth of the freshly brewed coffee. The scene was styled decoratively with precise lighting and thoughtful color harmony to create a premium café atmosphere. Specialized post-production further enhanced clarity, texture, and visual appeal while keeping the presentation natural and appetizing."
  },
  {
    id: 3,
    title: "Coffee Time — Dark Aesthetic Visual",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/Coffee.jpg",
    description: "A dark-themed Instagram visual crafted with controlled lighting, precise color harmony, and custom typography.",
    year: "2025",
    client: "Café Lune",
    tags: ["Dark Mood", "Typography", "Social Media Visual"],
    fullDescription: "This image was created as part of a curated Instagram content series designed to maintain a consistent dark aesthetic across the page. The composition focuses on mood, intimacy, and texture, using controlled low-key lighting to highlight the cup and hands while preserving the scene’s atmospheric depth. To enhance its visual impact, custom typography was added using Canva, integrating the text seamlessly with the overall tone. The photograph was fully lit and edited with a cinematic approach, ensuring harmony between color, contrast, and composition for a clean, stylish social media presentation."
  },
  {
    id: 4,
    title: "Latte Art: High-Resolution Print Campaign",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/Latte Art.JPG",
    description: "A close-up studio shot of a classic latte, expertly styled and captured for large-scale lightbox display. The focus is on the rich texture of the foam, the precision of the latte art, and the sophisticated color harmony of the beverage against the modern, textured surface.",
    year: "2025",
    client: "Cafe Land",
    tags: ["Food Photography", "Beverage Photography", "Commercial", "Latte Art", "Studio Lighting", "High-Resolution"],
    fullDescription: "This photograph was executed specifically for Cafe Land's 2025 print campaign, designed for large-scale lightbox display. The core focus was achieving maximum technical quality and high-resolution detail to ensure perfect clarity and impact when printed at significant size. Captured using a prime lens (fixed focal length) to guarantee superior sharpness and detail across the frame. The lighting setup was meticulously controlled studio lighting, using precise directional light to sculpt the cup and highlight the microfoam's texture, giving the image a sense of depth and luxury. The composition utilizes a subtle diagonal line to lead the eye toward the perfectly executed latte art—the focal point of the image. The subject is decoratively styled on a clean, textured grey surface, ensuring a sophisticated, modern aesthetic. Careful color grading and post-production were applied to enhance the rich, warm brown tones of the espresso and the bright white of the steamed milk, creating a balanced and appealing harmony that makes the latte instantly inviting. The final image was optimized for high-quality, large-format printing on a lightbox, demanding flawless resolution and tonal range to maximize visual presence in a retail environment."
  },
  {
    id: 5,
    title: "Layered Cocktail: Dynamic Natural Light Content",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/Summer Breez.JPG",
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
    imageUrl: "/cafe & beverge/Waffle.JPG",
    description: "A high-detail food photograph created for lightbox printing, emphasizing texture, richness, and visual appetite appeal.",
    year: "2025",
    client: "Cafe Land",
    tags: ["Food Texture", "Lightbox Print", "Macro Photography"],
    fullDescription: "This image was created specifically for large-format lightbox display, with a strong emphasis on texture, richness, and the appetizing qualities of the product. Captured using a Sony G-series macro lens, the photograph highlights the crisp structure of the waffle, the gloss of the chocolate drizzle, and the softness of the accompanying elements. Decorative styling and precise lighting were used to enhance depth, contrast, and color harmony across the scene. Specialized post-production refined details and tonal balance, ensuring the final image presents the product in its most appealing and mouth-watering form while maintaining a natural, high-end visual quality suitable for permanent café décor."
  },
  {
    id: 7,
    title: "Enjoy Breakfast — Croissant Content Series",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/crossaint.jpg",
    description: "A styled food photograph created for content production, highlighting croissant variety, texture, and appetizing presentation.",
    year: "2025",
    client: "Cafe Diamond",
    tags: ["Content Creation", "Food Styling", "Product Variety"],
    fullDescription: "This image was produced for digital content creation, focusing on presenting a variety of croissant items in an inviting and visually balanced composition. Captured using a Sony fixed focal length lens, the scene was styled decoratively with precise lighting to enhance texture, color harmony, and depth. Particular attention was given to showcasing the flaky layers of the croissants, the richness of the chocolate drizzle, and the overall sense of freshness and taste appeal. Professional post-production refined contrast and tonal balance, ensuring the final image effectively communicates quality, variety, and a warm breakfast atmosphere suitable for social media and promotional use."
  },
  {
    id: 8,
    title: "Cool Down — Modern x Traditional Beverage Visual",
    category: ProjectCategory.CAFE_BEVERAGE,
    imageUrl: "/cafe & beverge/Drink Up.JPG",
    description: "A vibrant beverage visual blending modern composition with traditional decorative elements, created for digital content production.",
    year: "2025",
    client: "Parsian Cafe",
    tags: ["Beverage Photography", "Modern & Traditional Fusion", "Natural Light"],
    fullDescription: "This image was created for digital content production, combining a modern photographic approach with traditional decorative styling. Captured using a Sony fixed focal length lens, the scene relies on natural lighting to enhance freshness, transparency, and color vibrancy. Particular attention was given to color harmony between the beverage, background, and traditional patterned elements, creating a balanced yet dynamic visual identity. Professional post-production refined tonal balance and clarity, with a clear focus on presenting the drink as refreshing, visually appealing, and appetizing—well-suited for contemporary social media storytelling."
  },

  //PRODUCT Category Projects

  {
    id: 200,
    title: "Minimal Product Visual — Bag Campaign",
    category: ProjectCategory.PRODUCT,
    imageUrl: "commerical photography/Black Bag.JPG",
    fallbackImageUrl: "commerical photography/Black Bag.JPG",
    videoUrl: "commerical photography/Black Bag.mp4",
    description: "A minimalist product visual created with precise lighting, texture emphasis, and typography integration.",
    year: "2025",
    client: "CHRAIS & KCITH",
    tags: ["Product Photography", "Minimal Style", "Typography Design"],
    fullDescription: "This product visual was created as part of a selected brand campaign, with both still and motion versions produced. The client’s request focused on presenting the product in a clean, minimal style while emphasizing material texture through controlled lighting. Typography was incorporated to complement the visual identity of the product, designed using Canva and integrated subtly to maintain a refined and modern aesthetic. Professional lighting and post-production were applied to ensure clarity, balance, and visual impact. A motion version of this project is also available and can be viewed by contacting Hikaru Studio."
  },
  {
    id: 201,
    title: "Minimal Motion Teaser — Bag Campaign",
    category: ProjectCategory.PRODUCT,
    imageUrl: "commerical photography/Warm Bag.JPG",
    fallbackImageUrl: "commerical photography/Warm Bag.JPG",
    videoUrl: "commerical photography/Warm Bag.mp4",
    description: "A minimalist motion teaser created to highlight texture, form, and brand identity through precise lighting and typography.",
    year: "2025",
    client: "CHRAIS & KCITH",
    tags: ["Motion Teaser", "Minimal Product", "Advertising Campaign"],
    fullDescription: "This project was produced as a motion advertising teaser for a selected brand, with the primary focus on presenting the bag in a clean, minimal visual language. The client requested a strong emphasis on material texture, achieved through precise lighting and controlled highlights. Typography was integrated to support the promotional message and brand identity, designed using Canva and applied subtly within the motion sequence. The overall approach combines simplicity, clarity, and visual rhythm to create an effective and refined product teaser. A motion version of this project is available and can be viewed by contacting Hikaru Studio."
  },
  {
    id: 202,
    title: "Precision & Detail — Staedtler Product Visual",
    category: ProjectCategory.PRODUCT,
    imageUrl: "commerical photography/Blue Pencil.JPG",
    description: "A high-detail product photograph created for international presentation, emphasizing precision, craftsmanship, and artistic lighting.",
    year: "2025",
    client: "Staedtler",
    tags: ["Product Detail", "Artistic Lighting", "International Campaign"],
    fullDescription: "This photograph was created for Staedtler as part of a visual presentation intended for display in multiple cities across Europe. The client’s primary request was to highlight fine details and present the product through a distinctive, artistic visual approach. The image was captured using a Canon R6 Mark II paired with a 24mm fixed lens, allowing for clarity, depth, and a strong compositional perspective. Precise, professional lighting was applied to enhance texture, form, and material quality, while advanced post-production refined contrast, color balance, and overall visual impact. The final image delivers a refined, high-end presentation suitable for international exhibition and brand communication."
  },
  {
    id: 203,
    title: "Crafted Precision — Staedtler Product Visual",
    category: ProjectCategory.PRODUCT,
    imageUrl: "commerical photography/Pens.JPG",
    description: "An artistic, high-detail product photograph created for international presentation across multiple European cities.",
    year: "2025",
    client: "Staedtler",
    tags: ["Product Details", "Artistic Lighting", "European Exhibition"],
    fullDescription: "This photograph was created for Staedtler as part of a visual presentation intended for display in multiple cities across Europe. The client’s request focused on showcasing fine details and delivering a distinctive, high-end image suitable for international exhibition. The image was captured using a Canon R6 Mark II paired with an 85mm fixed lens, allowing for precise detail rendering, controlled depth of field, and refined perspective. Professional, carefully controlled lighting was used to emphasize texture, form, and material quality. Advanced post-production further refined contrast, tonal balance, and visual clarity, resulting in an artistic yet precise product presentation aligned with Staedtler’s brand values."
  },
  {
    id: 204,
    title: "Smart Ring — Product Introduction Visual",
    category: ProjectCategory.PRODUCT,
    imageUrl: "commerical photography/Smart Ring.jpg",
    description: "A refined product introduction visual for a smart ring, combining professional lighting, design, and typography.",
    year: "2025",
    client: "International Tech Client — China",
    tags: ["Smart Technology", "Product Introduction", "Typography Design"],
    fullDescription: "This image was created as part of a product introduction project for an international client in China, focusing on presenting a smart ring through a clean and modern visual language. The photograph was captured using a fixed focal length lens, supported by precise and professional lighting to highlight form, material, and technological elegance. In addition to photography, the image was fully designed with integrated typography to support product communication and brand messaging. Advanced post-production ensured color accuracy, tonal balance, and a polished final presentation suitable for technology-focused marketing and international brand platforms."
  },
  {
    id: 205,
    title: "Handcrafted Soap — Decorative Product Visual",
    category: ProjectCategory.PRODUCT,
    imageUrl: "commerical photography/Soap.JPG",
    description: "A decorative product photograph created to enhance the beauty and artisanal character of a handcrafted soap.",
    year: "2025",
    client: "Turkish Artisan Brand",
    tags: ["Handmade Product", "Decorative Styling", "Typography Design"],
    fullDescription: "This image was created for a Turkish handcrafted soap brand, with the client’s goal focused on presenting the product in a more decorative and visually refined manner. The photograph was captured using a fixed focal length lens and supported by precise, controlled lighting to enhance texture, form, and surface details. Typography was integrated to complement the artisanal identity of the product, while professional color and light correction ensured tonal balance and visual harmony. The final result emphasizes the soap’s handmade quality and aesthetic appeal, delivering a clean yet artistic presentation suitable for brand storytelling and product promotion."
  },
  {
    id: 206,
    title: "Cosmetic Product — Poster-Ready Visual",
    category: ProjectCategory.PRODUCT,
    imageUrl: "commerical photography/Cosmatic Black.JPG",
    description: "A refined cosmetic product visual created to enhance beauty appeal and poster presentation through precise lighting and design.",
    year: "2025",
    client: "Cosmetics Brand",
    tags: ["Cosmetic Photography", "Poster Design", "Typography"],
    fullDescription: "This image was created as part of a cosmetic product visual campaign, with the client’s primary focus on presenting the product in a more attractive and premium manner while ensuring the image was suitable for poster use. The photograph was captured using a Canon camera paired with a fixed focal length lens, allowing for clarity and refined depth of field. Precise, professional lighting was applied to enhance form, surface quality, and elegance. Typography was integrated to support the visual composition, and careful post-production refined color, light balance, and overall polish, resulting in a clean, high-end cosmetic presentation."
  },

  //FOOD Category Projects

  {
    id:300,
    title: "Garlic Bread — Food Content Visual",
    category: ProjectCategory.FOOD,
    imageUrl: "food photography/Garlic Bread.JPG",
    description: "A detailed food photograph created for Instagram content, focusing on texture, lighting, and appetizing presentation.",
    year: "2025",
    client: "Cafe Land",
    tags: ["Food Photography", "Instagram Content", "Detail Focus"],
    fullDescription: "This image was created to introduce a garlic bread dish for social media content, with the client requesting a highly detailed photograph that enhances both the visual appeal and the sense of taste. The shot was captured using a Sony camera paired with a fixed focal length lens, allowing for sharp detail and controlled depth of field. Precise lighting and careful food arrangement were used to highlight texture, color, and freshness. Professional post-production refined contrast, color balance, and clarity, resulting in an inviting and mouth-watering image designed specifically for Instagram content creation."
  },
  {
    id: 301,
    title: "Breakfast Selection — Visual Content",
    category: ProjectCategory.FOOD,
    imageUrl: "food photography/Breakfast.JPG",
    description: "A detailed breakfast photograph created for Instagram content and print, emphasizing texture, lighting, and appetizing presentation.",
    year: "2025",
    client: "Cafe Land",
    tags: ["Breakfast Photography", "Instagram Content", "Print Ready"],
    fullDescription: "This image was created to introduce a breakfast selection, with the client requesting a visually rich photograph that highlights details, textures, and the overall appetizing quality of the meal. The image was captured using a Sony camera with a fixed focal length lens, allowing for clarity and controlled depth of field. Precise lighting and careful styling were applied to enhance freshness, color harmony, and composition. Professional post-production refined tonal balance, contrast, and color accuracy, ensuring the final image is suitable for both Instagram content creation and print presentation."
},
{
    id: 302,
    title: "Calzone — Poster-Ready Food Visual",
    category: ProjectCategory.FOOD,
    imageUrl: "food photography/Calzone.jpg",
    description: "A detailed food photograph created for Instagram content and poster use, emphasizing texture, lighting, and visual appetite appeal.",
    year: "2025",
    client: "Cafe Land",
    tags: ["Food Photography", "Poster Design", "Instagram Content"],
    fullDescription: "This image was created to introduce a calzone dish, with the client requesting a highly detailed photograph that enhances the food’s visual appeal and sense of taste. The photograph was captured using a Sony camera paired with a fixed focal length lens, ensuring clarity and controlled depth of field. Precise lighting and thoughtful food styling were used to highlight texture, crust detail, and freshness. Special attention was given during post-production to ensure the image was suitable for poster use, with refined contrast, color balance, and composition, while also remaining optimized for Instagram content."
},
{
    id: 303,
    title: "Caesar Salad — Texture Focused Visual",
    category: ProjectCategory.FOOD,
    imageUrl: "food photography/Caesar Salad.JPG",
    description: "A high-quality food photograph created to highlight texture, freshness, and refined lighting.",
    year: "2025",
    client: "Cafe Land",
    tags: ["Food Texture", "High-Quality Image", "Professional Lighting"],
    fullDescription: "This image was created to introduce a Caesar salad, with a strong focus on highlighting the texture of the ingredients and presenting the dish in a visually refined and appetizing way. The client requested a high-quality photograph with precise lighting and careful attention to detail. Controlled lighting was used to enhance freshness, contrast, and depth, while professional post-production refined color accuracy, tonal balance, and clarity. The final result delivers a clean, detailed, and premium food visual suitable for brand presentation and promotional use."
},
{
    id: 304,
    title: "Signature Burger — Poster-Ready Food Visual",
    category: ProjectCategory.FOOD,
    imageUrl: "food photography/Burger.jpg",
    description: "A detailed burger photograph created for poster use, emphasizing texture, lighting, and strong visual appetite appeal.",
    year: "2025",
    client: "Parsian Cafe",
    tags: ["Burger Photography", "Poster Design", "Food Detail"],
    fullDescription: "This image was created to introduce a burger dish, with the client requesting a visually powerful photograph that highlights details, textures, and the overall sense of taste. The photograph was captured using a Sony camera paired with a fixed focal length lens, ensuring sharp detail and controlled depth of field. Precise lighting and careful food styling were used to enhance the layers, textures, and richness of the ingredients. Special attention was given during post-production to refine contrast, color balance, and composition, making the image well-suited for poster display while maintaining a clean and appetizing presentation."
},
{
    id: 305,
    title: "Pasta Dish — Multi-Platform Food Visual",
    category: ProjectCategory.FOOD,
    imageUrl: "food photography/Pasta.jpg",
    description: "A detailed pasta photograph created for Instagram, website content, and poster use, emphasizing texture, lighting, and visual appetite appeal.",
    year: "2025",
    client: "Cafe Land",
    tags: ["Pasta Photography", "Poster Design", "Digital Content"],
    fullDescription: "This image was created to introduce a pasta dish, with the client requesting a visually rich photograph that highlights details, textures, and the overall sense of taste. The image was captured using a Sony camera paired with a fixed focal length lens, ensuring sharp detail and controlled depth of field. Precise lighting and thoughtful food styling were applied to enhance freshness, depth, and color harmony. During post-production, special attention was given to refining contrast, tonal balance, and composition, ensuring the image is optimized for Instagram content, website presentation, and poster-ready use."
},

//Event Category Projects
{
    id:403,
    title: "Interior Exhibition — Editorial Architectural Visual",
    category: ProjectCategory.EXHIBITION,
    imageUrl: "Event/Toilet.JPG",
    description: "An editorial interior photograph captured using only ambient exhibition light and refined through professional post-production.",
    year: "2025",
    client: "Architectual Event",
    tags: ["Interior Photography", "Editorial Use", "Ambient Light"],
    fullDescription: "This image was created for an interior and architectural exhibition, with the client requesting photographs suitable for journal and editorial publication. The image was captured without the use of additional lighting equipment, relying solely on the exhibition’s existing ambient light. To achieve balanced exposure and visual clarity, professional post-production lighting adjustments were applied, enhancing depth, contrast, and tonal consistency while preserving the natural atmosphere of the space. The final result delivers a clean, realistic, and publication-ready interior image aligned with architectural documentation standards."
},
{
    id:401,
    title: "Interior Exhibition — Editorial Architectural Visual",
    category: ProjectCategory.EXHIBITION,
    imageUrl: "Event/Photo By Me.JPG",
    description: "An editorial interior photograph captured using only ambient exhibition light and refined through professional post-production.",
    year: "2025",
    client: "Architectual Event",
    tags: ["Interior Photography", "Editorial Use", "Ambient Light"],
    fullDescription: "This image was created for an interior and architectural exhibition, with the client requesting photographs suitable for journal and editorial publication. The image was captured without the use of additional lighting equipment, relying solely on the exhibition’s existing ambient light. To achieve balanced exposure and visual clarity, professional post-production lighting adjustments were applied, enhancing depth, contrast, and tonal consistency while preserving the natural atmosphere of the space. The final result delivers a clean, realistic, and publication-ready interior image aligned with architectural documentation standards."
},
{
    id:402,
    title: "Interior Exhibition — Editorial Architectural Visual",
    category: ProjectCategory.EXHIBITION,
    imageUrl: "Event/Level Vision.JPG",
    description: "An editorial interior photograph captured using only ambient exhibition light and refined through professional post-production.",
    year: "2025",
    client: "Architectual Event",
    tags: ["Interior Photography", "Editorial Use", "Ambient Light"],
    fullDescription: "This image was created for an interior and architectural exhibition, with the client requesting photographs suitable for journal and editorial publication. The image was captured without the use of additional lighting equipment, relying solely on the exhibition’s existing ambient light. To achieve balanced exposure and visual clarity, professional post-production lighting adjustments were applied, enhancing depth, contrast, and tonal consistency while preserving the natural atmosphere of the space. The final result delivers a clean, realistic, and publication-ready interior image aligned with architectural documentation standards."
},
{
    id:400,
    title: "Interior Exhibition — Editorial Architectural Visual",
    category: ProjectCategory.EXHIBITION,
    imageUrl: "Event/Bathroom.JPG",
    description: "An editorial interior photograph captured using only ambient exhibition light and refined through professional post-production.",
    year: "2025",
    client: "Architectual Event",
    tags: ["Interior Photography", "Editorial Use", "Ambient Light"],
    fullDescription: "This image was created for an interior and architectural exhibition, with the client requesting photographs suitable for journal and editorial publication. The image was captured without the use of additional lighting equipment, relying solely on the exhibition’s existing ambient light. To achieve balanced exposure and visual clarity, professional post-production lighting adjustments were applied, enhancing depth, contrast, and tonal consistency while preserving the natural atmosphere of the space. The final result delivers a clean, realistic, and publication-ready interior image aligned with architectural documentation standards."
},


//Cat Category Projects

{
    id:501,
    title: "Heather",
    category: ProjectCategory.ANIMAL,
    imageUrl: "Cat/Heather.JPG",
    description: "Cat photography is the most meaningful and joyful part of my work. Each image is created with respect for their independence, character, and the special bond they share with their guardians.",
    year: "2025",
    client: "Personal",
    tags: ["Cat Photography"],
    fullDescription: "My life has always been deeply inspired by cats, and without hesitation, I can say that photographing cats is the most enjoyable and meaningful form of photography for me. These projects were created for individuals who are cat guardians and requested portraits of their own cats—each one unique, independent, and full of character. Photographing cats is the sweetest and most fulfilling work I do. Their presence, autonomy, and quiet confidence continually inspire my visual approach and storytelling. I hold great respect for anyone who takes responsibility for caring for cats, and I deeply value the bond between humans and these remarkable animals. I am always open and enthusiastic about photographing cats—capturing their personality, beauty, and spirit through thoughtful, respectful, and expressive imagery."
},
{
    id:500,
    title: "Hikaru",
    category: ProjectCategory.ANIMAL,
    imageUrl: "Cat/Hikaru.JPEG",
    description: "Cat photography is the most meaningful and joyful part of my work. Each image is created with respect for their independence, character, and the special bond they share with their guardians.",
    year: "2025",
    client: "Personal",
    tags: ["Cat Photography"],
    fullDescription: "This photograph features my own cat, Hikaru, whose name means “light” in Japanese. My photography studio, Hikaru Studio, is inspired by her. Despite being partially visually impaired, Hikaru is the light of my life and a central inspiration for my artistic vision. I am deeply grateful that my presence may help make her world a little easier and brighter. I am proud to be the guardian of three wonderful cats, and caring for them brings me immense joy. Their independence, character, and unique personalities continually inspire my work, and I take great pride in nurturing these beautiful, beloved companions."
},
{
    id:502,
    title: "Heather",
    category: ProjectCategory.ANIMAL,
    imageUrl: "Cat/Heather Portrait.JPG",
    description: "Cat photography is the most meaningful and joyful part of my work. Each image is created with respect for their independence, character, and the special bond they share with their guardians.",
    year: "2025",
    client: "Personal",
    tags: ["Cat Photography"],
    fullDescription: "My life has always been deeply inspired by cats, and without hesitation, I can say that photographing cats is the most enjoyable and meaningful form of photography for me. These projects were created for individuals who are cat guardians and requested portraits of their own cats—each one unique, independent, and full of character. Photographing cats is the sweetest and most fulfilling work I do. Their presence, autonomy, and quiet confidence continually inspire my visual approach and storytelling. I hold great respect for anyone who takes responsibility for caring for cats, and I deeply value the bond between humans and these remarkable animals. I am always open and enthusiastic about photographing cats—capturing their personality, beauty, and spirit through thoughtful, respectful, and expressive imagery."
},
{
    id:503,
    title: "Katame",
    category: ProjectCategory.ANIMAL,
    imageUrl: "Cat/Katame.JPG",
    description: "Cat photography is the most meaningful and joyful part of my work. Each image is created with respect for their independence, character, and the special bond they share with their guardians.",
    year: "2025",
    client: "Personal",
    tags: ["Cat Photography"],
    fullDescription: "My life has always been deeply inspired by cats, and without hesitation, I can say that photographing cats is the most enjoyable and meaningful form of photography for me. These projects were created for individuals who are cat guardians and requested portraits of their own cats—each one unique, independent, and full of character. Photographing cats is the sweetest and most fulfilling work I do. Their presence, autonomy, and quiet confidence continually inspire my visual approach and storytelling. I hold great respect for anyone who takes responsibility for caring for cats, and I deeply value the bond between humans and these remarkable animals. I am always open and enthusiastic about photographing cats—capturing their personality, beauty, and spirit through thoughtful, respectful, and expressive imagery."
},
{
    id:504,
    title: "Reiner",
    category: ProjectCategory.ANIMAL,
    imageUrl: "Cat/Reiner Portrait.JPG",
    fallbackImageUrl: "Cat/Reiner Portrait.JPG",
    videoUrl: "Cat/Reiner.MP4",
    description: "Cat photography is the most meaningful and joyful part of my work. Each image is created with respect for their independence, character, and the special bond they share with their guardians.",
    year: "2025",
    client: "Personal",
    tags: ["Cat Photography"],
    fullDescription: "My life has always been deeply inspired by cats, and without hesitation, I can say that photographing cats is the most enjoyable and meaningful form of photography for me. These projects were created for individuals who are cat guardians and requested portraits of their own cats—each one unique, independent, and full of character. Photographing cats is the sweetest and most fulfilling work I do. Their presence, autonomy, and quiet confidence continually inspire my visual approach and storytelling. I hold great respect for anyone who takes responsibility for caring for cats, and I deeply value the bond between humans and these remarkable animals. I am always open and enthusiastic about photographing cats—capturing their personality, beauty, and spirit through thoughtful, respectful, and expressive imagery."
},
{
    id:505,
    title: "Street Cat",
    category: ProjectCategory.ANIMAL,
    imageUrl: "Cat/Street Cat.JPG",
    description: "Cat photography is the most meaningful and joyful part of my work. Each image is created with respect for their independence, character, and the special bond they share with their guardians.",
    year: "2025",
    client: "Personal",
    tags: ["Cat Photography"],
    fullDescription: "My life has always been deeply inspired by cats, and without hesitation, I can say that photographing cats is the most enjoyable and meaningful form of photography for me. These projects were created for individuals who are cat guardians and requested portraits of their own cats—each one unique, independent, and full of character. Photographing cats is the sweetest and most fulfilling work I do. Their presence, autonomy, and quiet confidence continually inspire my visual approach and storytelling. I hold great respect for anyone who takes responsibility for caring for cats, and I deeply value the bond between humans and these remarkable animals. I am always open and enthusiastic about photographing cats—capturing their personality, beauty, and spirit through thoughtful, respectful, and expressive imagery."
},
{
    id:506,
    title: "Tooski",
    category: ProjectCategory.ANIMAL,
    imageUrl: "Cat/Tooski.JPG",
    description: "Cat photography is the most meaningful and joyful part of my work. Each image is created with respect for their independence, character, and the special bond they share with their guardians.",
    year: "2025",
    client: "Personal",
    tags: ["Cat Photography"],
    fullDescription: "My life has always been deeply inspired by cats, and without hesitation, I can say that photographing cats is the most enjoyable and meaningful form of photography for me. These projects were created for individuals who are cat guardians and requested portraits of their own cats—each one unique, independent, and full of character. Photographing cats is the sweetest and most fulfilling work I do. Their presence, autonomy, and quiet confidence continually inspire my visual approach and storytelling. I hold great respect for anyone who takes responsibility for caring for cats, and I deeply value the bond between humans and these remarkable animals. I am always open and enthusiastic about photographing cats—capturing their personality, beauty, and spirit through thoughtful, respectful, and expressive imagery."
},
];
