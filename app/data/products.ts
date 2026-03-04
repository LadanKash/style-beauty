//app/data/products.ts
export type Product = {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category:
    | "skincare"
    | "haircare"
    | "bags"
    | "shoes"
    | "accessories"
    | "clothing"
    | "mens-fashion";
  concerns: string[];
  showPriceCTA: boolean;
  price: number; // used internally only
  currency?: "USD" | "CAD";
  budget: "$" | "$$" | "$$$";
  description: string;
  images?: string[];
  tag?: string;
  affiliateUrl: string;
};

export const budgetFromPrice = (price: number): "$" | "$$" | "$$$" => {
  if (price < 35) return "$";
  if (price < 80) return "$$";
  return "$$$";
};



// products list

export const products: Product[] = [
  {
  id: "p1",
  slug: "clinique-smart-repair-face-neck-cream",
  brand: "Clinique",
  name: "Clinique Smart Repair Face & Neck Cream",
  category: "skincare",
  concerns: ["wrinkles", "firmness", "hydration"],
  showPriceCTA: true,
  price: 106.00,
  currency: "CAD",
  // budget: "$$$",
  budget: budgetFromPrice(106.00),
  description:
    "Lifted, firmer, youthful-looking skin — a silky cream that visibly smooths lines and restores firmness for face and neck.",
  affiliateUrl: "https://amzn.to/3Lp8pxS",
  images: [
    "/onboarding/clinique-neck.jpeg",
    "/onboarding/clinique-neck-model.png",
  ],
  tag: "Firmness + Hydration",
},
  {
    id: "p2",
    slug: "clinique-smart-repair-face-cream",
    brand: "Clinique",
    name: "Clinique Smart Repair Face",
    category: "skincare",
    concerns: ["hydration", "wrinkles", "firmness"],
    showPriceCTA: true,
    price: 102.00,
    currency: "CAD",
  // budget: "$$$",
  budget: budgetFromPrice(102.00),

    description:
      "Lifted, firmer, youthful-looking skin — a silky cream that visibly smooths lines and restores firmness for face.",
    affiliateUrl: "https://amzn.to/49fJK7Y",
    images: ["/onboarding/clinique-face.jpeg", "/onboarding/clinique-face-model.jpeg"],
    tag: "Firmness + Hydration",
  },
  {
    id: "p3",
    slug: "clinique-all-about-eyes",
    brand: "Clinique",
    name: "Clinique All About Eyes",
    category: "skincare",
    concerns: ["hydration", "wrinkles", "puffiness", "dark-circles"],
  showPriceCTA: true,
    price: 51.00,
  currency: "CAD",
  // budget: "$$",
  budget: budgetFromPrice(51.00),

    description:
      "Bright, smooth, refreshed eyes — a lightweight eye cream that hydrates and helps reduce the look of dark circles and puffiness.",
    affiliateUrl: "https://amzn.to/4sBEQtz",
    images: ["/onboarding/clinique-eyes.jpeg", "/onboarding/clinique-eyes-model.jpeg"],
    tag: "Brightening + Smooth",
  },

  {
    id: "p4",
    slug: "hairtamin-vegan-gummies",
    brand: "HAIRtamin",
    name: "HAIRtamin Vegan Hair Gummies",
    category: "haircare",
    concerns: ["frizz", "shine", "breakage", "thinning", "scalp"],
  showPriceCTA: true,
    price: 36.00,
  currency: "CAD",
  // budget: "$$$",
  budget: budgetFromPrice(106.00),

    description:
      "Nourish your hair from the inside out — delicious vegan gummies designed to support thicker, shinier, healthier-looking hair.",
    affiliateUrl: "https://amzn.to/4pzIj9h",
    images: ["/onboarding/hairtamin.jpeg", "/onboarding/hairtamin-model.jpeg"],
    tag: "Thicker-looking hair",
  },

  {
  id: "p5",
  slug: "kerastase-genesis-homme-serum",
  brand: "Kérastase",
  name: "Kérastase Genesis Homme Fortifying Serum",
  category: "haircare",
  concerns: ["thinning", "breakage", "scalp"],
  showPriceCTA: true,
  price: 95.00,
  currency: "CAD",
  budget: budgetFromPrice(95.00),
  description: "A lightweight daily serum designed to help reduce breakage-related hair fall and support stronger-looking hair.",
  affiliateUrl: "https://amzn.to/3YDlczE",
  images: ["/onboarding/genesis-serum.jpeg", "/onboarding/genesis-serum-model.jpg"],
  tag: "Thicker-looking hair",
},

{
  id: "p6",
  slug: "kerastase-elixir-ultime-hair-oil",
  brand: "Kérastase",
  name: "Kérastase Elixir Ultime Hair Oil",
  category: "haircare",
  concerns: ["shine", "frizz", "smoothness"],
 
  showPriceCTA: true,
  price: 46.00,
  currency: "CAD",
  budget: budgetFromPrice(46.00),
  description: "A versatile hair oil that boosts shine, smooths frizz, and adds a polished finish on all hair types.",
  affiliateUrl: "https://amzn.to/4qdmptv",

  images: ["/onboarding/shineoil.jpeg", "/onboarding/shineoil-model.jpg"],
  tag: "Shine + Smooth",
},

{
  id: "p7",
  slug: "swarovski-attract-stud-earrings",
  brand: "Swarovski",
  name: "Swarovski Attract Stud Earrings",
  category: "accessories",
  concerns: ["minimal", "everyday", "gift"],
  showPriceCTA: true,
  price: 63.0,
  currency: "CAD",
  budget: budgetFromPrice(63),
  description: "Elegant crystal studs — a refined everyday piece and a beautiful gift.",
  affiliateUrl: "https://amzn.to/4pNyhBw",
  images: ["/onboarding/earring.jpeg", "/onboarding/earring-model.jpeg"],
  tag: "Minimal sparkle",
},

{
  id: "p8",
  slug: "swarovski-crystal-jewelry-set",
  brand: "Swarovski",
  name: "Swarovski Crystal Necklace & Earrings Set",
  category: "accessories",
  concerns: ["elegant", "gift", "evening"],
  showPriceCTA: true,
  price: 138.25,
  currency: "CAD",
  budget: budgetFromPrice(138.25),
  description: "A classic set featuring a radiant pendant necklace and matching studs for effortless sophistication.",
  affiliateUrl: "https://amzn.to/49Wg2Fj",
  images: ["/onboarding/necklace.jpeg", "/onboarding/necklace-model.jpeg"],
  tag: "Timeless sparkle",
},

{
  id: "p9",
  slug: "winter-snow-ankle-boots",
  brand: "Generic",
  name: "Winter Snow Ankle Boots",
  category: "shoes",
  concerns: ["winter", "warmth", "everyday"],
  
  showPriceCTA: true,
  price: 35.99,
  currency: "CAD",
  budget: budgetFromPrice(35.99),
  description: "Fur-lined slip-on boots designed to keep your feet warm and comfortable on cold winter days.",
  affiliateUrl: "https://amzn.to/4k52TNT",
  images: ["/onboarding/cozyboots.jpeg", "/onboarding/cozyboots-model.jpeg"],
  tag: "Warm + Cozy",
},

{
  id: "p10",
  slug: "jw-pei-hana-faux-suede-tote",
  brand: "JW PEI",
  name: "JW PEI Hana Faux Suede Tote",
  category: "bags",
  concerns: ["modern", "chic", "everyday"],
  
  showPriceCTA: true,
  price: 186,
  currency: "CAD",
  budget: budgetFromPrice(186),
  description: "A chic, structured tote with a soft faux suede finish — perfect for daily essentials.",
  affiliateUrl: "https://amzn.to/3LSuLIb",
  images: ["/onboarding/jwsac.jpeg", "/onboarding/jwsac-model.jpeg"],
  tag: "Modern minimal",
},

{
  id: "p11",
  slug: "calvin-klein-wool-blend-coat",
  brand: "Calvin Klein",
  name: "Calvin Klein Wool Blend Coat",
  category: "clothing",
  concerns: ["winter", "classic", "workwear"],
 
  showPriceCTA: true,
  price: 212.00 ,
  currency: "CAD",
  budget: budgetFromPrice(212),
  description: "A classic tailored coat in a soft wool-blend — designed to elevate everyday looks with easy elegance.",
  affiliateUrl: "https://amzn.to/4sKB15l",
  images: ["/onboarding/coatbrown-front.jpeg", "/onboarding/coatbrown-back.jpeg"],
  tag: "Cozy-luxury",
},

{
  id: "p12",
  slug: "calvin-klein-belted-rain-jacket",
  brand: "Calvin Klein",
  name: "Calvin Klein Belted Rain Jacket",
  category: "clothing",
  concerns: ["rain", "classic", "everyday"],
  
  showPriceCTA: true,
  price: 139.39,
  currency: "CAD",
  budget: budgetFromPrice(139.39),
  description: "A sleek belted rain jacket with a removable hood — polished style for unpredictable weather.",
  affiliateUrl: "https://amzn.to/49XFqui",
  images: ["/onboarding/jacket-front.jpeg", "/onboarding/jacket-back.jpeg"],
  tag: "All-weather chic",
},

{
  id: "p13",
  slug: "keen-waterproof-winter-boots",
  brand: "KEEN",
  name: "KEEN Waterproof Winter Boots",
  category: "shoes",
  concerns: ["winter", "outdoor", "warmth"],
  
  showPriceCTA: true,
  price: 219.99,
  currency: "CAD",
  budget: budgetFromPrice(219.99),
  description: "A reliable waterproof winter boot built for warmth and traction on snowy days.",
  affiliateUrl: "https://amzn.to/4qWKAMG",
  images: ["/onboarding/keen-brown.jpeg", "/onboarding/keen-black.jpeg"],
  tag: "Winter performance",
},

{
  id: "p14",
  slug: "showkoo-expandable-luggage-set",
  brand: "SHOWKOO",
  name: "SHOWKOO Expandable Luggage Set",
  category: "accessories",
  concerns: ["travel", "organization", "durable"],
  
  showPriceCTA: true,
  price: 219.99,
  currency: "CAD",
  budget: budgetFromPrice(219.99),
  description: "A durable, expandable luggage set designed for smooth rolling and easy organization with a clean modern look.",
  affiliateUrl: "https://amzn.to/4qq5KD4",
  images: ["/onboarding/luggages.jpeg", "/onboarding/luggages-model.jpeg"],
  tag: "Travel in style",
},
{
  id: "p15",
  slug: "swarovski-april-birthstone-pendant",
  name: "Swarovski April Birthstone Pendant Necklace",
  brand: "Swarovski",
  description: "A refined Swarovski pendant featuring a clear square-cut crystal inspired by April’s birthstone, designed to add timeless sparkle and everyday elegance.",

  showPriceCTA: true,
  price: 89.00,
  currency: "CAD",
  budget: "$$",
  category: "accessories",
  concerns: ["jewelry", "gift", "everyday wear"],
  tag: "Timeless sparkle",
  images: [
    "/onboarding/swarovski-april.jpeg",
   "/onboarding/swarovski-april-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/3M5lEE7",
},
{
  id: "p16",
  slug: "michael-kors-xs-jet-set-travel-tote",
  name: "Michael Kors XS Carry All Jet Set Travel Tote",
  brand: "Michael Kors",
  description: "A compact Michael Kors tote crafted for everyday elegance, featuring a structured silhouette, zip closure, and lightweight design for effortless style on the go.",
  
  showPriceCTA: true,
  price: 179.00,
  currency: "CAD",
  budget: "$$",
  category: "bags",
  concerns: ["everyday use", "organization", "travel"],
  tag: "Everyday classic",
  images: [
    "/onboarding/mk-jetset.jpeg",
    "/onboarding/mk-jetset-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/49TW0u2",
   
},
{
  id: "p17",
  slug: "kate-spade-madison-pochette",
  name: "Kate Spade Madison Collection Pochette",
  brand: "Kate Spade New York",
  description: "A sleek Kate Spade pochette crafted in durable Saffiano leather, finished with a gold-tone chain and zip closure — perfect for day-to-night essentials.",

  showPriceCTA: true,
  price: 123.95,
  currency: "CAD",
  budget: "$$",
  category: "bags",
  concerns: ["everyday use", "organization", "evening wear"],
  tag: "Day to night",
  images: [
    "/onboarding/katespade-madison.jpeg",
    "/onboarding/katespade-madison-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4bRCfWr",
  
},
{
  id: "p18",
  slug: "dream-pairs-platform-mini-boots",
  name: "DREAM PAIRS Platform Mini Winter Boots",
  brand: "DREAM PAIRS",
  description: "Cozy platform mini boots crafted in soft suede with plush faux-fur lining, designed to keep you warm, comfortable, and stylish all winter long.",
  
  showPriceCTA: true,
  price: 54.99,
  currency: "CAD",
  budget: "$",
  category: "shoes",
  concerns: ["warmth", "comfort", "winter wear", "slip resistance"],
  tag: "Winter essential",
  images: [
    "/onboarding/dreampairs-mini.jpeg",
    "/onboarding/dreampairs-mini-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/3ZAB5ak"
},

{
  id: "p19",
  slug: "clinique-even-better-makeup-foundation",
  name: "Clinique Even Better Makeup Foundation SPF 15",
  brand: "Clinique",
  description: "A lightweight Clinique foundation with medium coverage and SPF 15, designed to visibly even skin tone and reduce the look of dark spots over time.",
  
  
  showPriceCTA: true,
  price: 48.00,
  currency: "CAD",
  budget: "$$",
  category: "skincare",
  concerns: ["uneven tone", "dark spots", "hydration", "sun protection"],
  tag: "Even skin tone",
  images: [
    "/onboarding/clinique-evenbetter.jpeg",
    "/onboarding/clinique-evenbetter-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4k3WbaU"
},

{
  id: "p20",
  slug: "clinique-even-better-light-reflecting-primer",
  name: "Clinique Even Better Light Reflecting Face Primer",
  brand: "Clinique",
  description:
    "Lightweight face primer with Vitamin C and Hyaluronic Acid that hydrates, smooths, and boosts radiance for a glowing complexion.",
  
  showPriceCTA: true,
    price: 25.20,
  currency: "CAD",
  budget: "$",
  category: "skincare",
  concerns: ["radiance", "hydration", "primer", "dull-skin"],
  tag: "Glow + Hydration",
  images: [
    "/onboarding/clinique-even-better.jpeg",
    "/onboarding/clinique-even-better-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/49GSfco"
},

{
  id: "p21",
  slug: "clinique-touch-base-for-eyes-canvas-light",
  name: "Clinique Touch Base for Eyes (Canvas Light)",
  brand: "Clinique",
  description:
    "Long-lasting cream eyeshadow + primer that helps resist creasing, fading, and smudging—safe for sensitive eyes.",
  
  showPriceCTA: true,
    price: 28.05,
  currency: "CAD",
  budget: "$",
  category: "skincare",
  concerns: ["sensitive-eyes", "primer", "crease-resistance", "long-wear"],
  tag: "Eyeshadow + Primer",
  images: [
   
    "/onboarding/clinique-touch-base-open.JPEG",
    "/onboarding/clinique-touch-base-compact.jpeg",
  ],
  affiliateUrl: "https://amzn.to/49TCzBg"
},


{
  id: "p22",
  slug: "prettygarden-wide-leg-dress-pants",
  name: "PRETTYGARDEN Womens Wide Leg Dress Pants",
  brand: "PRETTYGARDEN",
  description: "Flowy high-waisted wide-leg pants designed for effortless comfort and a polished business-casual look, perfect for work or everyday wear.",
  
  showPriceCTA: true,
  price: 77.17,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["comfort", "workwear", "everyday wear", "fit"],
  tag: "Business casual",
  images: [
    "/onboarding/prettygarden-pants.jpeg",
    "/onboarding/prettygarden-pants-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/45vPJDo"
},

{
  id: "p23",
  slug: "michael-kors-elyse-high-pump",
  name: "Michael Kors Elyse High Pump",
  brand: "Michael Kors",
  description: "Elegant suede high-heel pumps designed with a sleek pointed toe and slim stiletto heel, perfect for elevating both work and evening looks.",
  
  showPriceCTA: true,
  price: 129.33,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["elegance", "formal wear", "evening style"],
  tag: "Modern glamour",
  images: [
    "/onboarding/mk-elyse-pump.jpeg",
    "/onboarding/mk-elyse-pump-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4pVouJy"
},
{
  id: "p24",
  slug: "osprey-arcane-large-day-backpack",
  name: "Osprey Arcane Large Day Backpack",
  brand: "Osprey",
  description: "A sleek, minimalist everyday backpack designed for comfort and organization, featuring a padded laptop sleeve and durable materials for daily use.",
 
  showPriceCTA: true,
  price: 147.59,
  currency: "CAD",
  budget: "$$",
  category: "bags",
  concerns: ["work essentials", "travel", "organization", "comfort"],
  tag: "Everyday carry",
  images: [
    "/onboarding/osprey-arcane.jpeg",
    "/onboarding/osprey-arcane-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4rb97xI"
},
{
  id: "p25",
  slug: "skechers-uno-stand-on-air-womens",
  name: "Skechers Uno – Stand On Air Sneakers",
  brand: "Skechers",
  description: "A stylish everyday sneaker featuring Air-Cooled Memory Foam cushioning and a visible air midsole for lightweight comfort and modern street style.",
 
  showPriceCTA: true,
  price: 67.99,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["walking", "comfort", "everyday wear"],
  tag: "All-day comfort",
  images: [
    "/onboarding/skechers-uno.jpeg",
    "/onboarding/skechers-uno-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4abzyh4"
},
{
  id: "p26",
  slug: "heymoments-wide-leg-tie-waist-pants",
  name: "Heymoments Wide Leg Tie-Waist Pants",
  brand: "Heymoments",
  description:
    "Lightweight, high-waisted wide leg pants with an adjustable tie waist and side pockets. Soft, breathable fabric for all-day comfort with an effortlessly chic look.",
 
  showPriceCTA: true,
    price: 29.99,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["comfort", "breathable", "everyday wear"],
  tag: "Comfy + Chic",
  images: [
    "/onboarding/heymoments-pants.jpeg",
    "/onboarding/heymoments-pants-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/45ofG7W"
},
{
  id: "p27",
  slug: "swarovski-attract-trilogy-drop-earrings",
  name: "Attract Trilogy Crystal Drop Earrings",
  brand: "Swarovski",
  description: "Elegant drop earrings featuring three sparkling clear crystals in a rhodium-plated setting — timeless, refined, and perfect for both everyday wear and special occasions.",

  showPriceCTA: true,
  price: 119.00,
  currency: "CAD",
  budget: "$$",
  category: "accessories",
  concerns: ["elegant", "gift-idea", "formal", "everyday"],
  tag: "Timeless Sparkle",
  images: [
    "/onboarding/swarovski-earrings.jpeg",
    "/onboarding/swarovski-earrings-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/49YIvcp"
},
{
  id: "p28",
  slug: "aisicoo-pointed-toe-stiletto-pumps",
  name: "Pointed Toe Stiletto High Heel Pumps",
  brand: "Aisicoo",
  description: "Elegant slip-on stiletto pumps featuring a pointed toe and chic patchwork design, ideal for parties, events, and polished outfits.",
  
  showPriceCTA: true,
  price: 79.37,
  currency: "CAD",
  budget: "$",
  category: "shoes",
  concerns: ["party", "formal", "evening"],
  tag: "Elegant heels",
  images: [
    "/onboarding/aisicoo-heels.jpg",
    "/onboarding/aisicoo-heels-model.png"
  ],
  affiliateUrl: "https://amzn.to/4pYqqkH"
}, 

// {
//   id: "p29",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },
{
  id: "p30",
  slug: "bellroy-tokyo-wonder-tote-15l",
  name: "Bellroy Tokyo Wonder Tote (15L)",
  brand: "Bellroy",
  description:
    "A sleek everyday tote with smart internal organization, a padded 16-inch laptop sleeve, and a wide zip opening, crafted from durable water-resistant materials.",
 
  showPriceCTA: true,
    price: 199.00 ,
  currency: "CAD",
  budget: "$$",
  category: "bags",
  concerns: ["work essentials", "laptop carry", "travel", "organization"],
  tag: "Modern work tote",
  images: [
    "/onboarding/bellroy-tokyo-laptop.jpeg",
   "/onboarding/bellroy-tokyo-tote-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/3LLXCho"
},

{
  id: "p31",
  slug: "bellroy-toiletry-kit-plus",
  name: "Bellroy Toiletry Kit Plus",
  brand: "Bellroy",
  description:
    "A spacious toiletry pouch with smart internal organization, a magnetic toothbrush shelf, and water-resistant materials—perfect for longer trips and larger essentials.",
  
  showPriceCTA: true,
    price: 89.00,
  currency: "CAD",
  budget: "$$",
  category: "bags",
  concerns: ["travel", "organization", "toiletries", "water-resistant"],
  tag: "Travel essential",
  images: [
    "/onboarding/bellroy-toiletry-plus.jpeg",
    "/onboarding/bellroy-toiletry-plus-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4acQCTZ"
},

{
  id: "p32",
  slug: "womens-chelsea-ankle-boots-winter-fur-lined",
  name: "Women's Chelsea Ankle Boots",
  brand: "Generic",
  description:
    "Waterproof winter Chelsea ankle boots with a smooth PU leather upper and warm faux fur lining. Designed for easy slip-on wear with elastic side panels and pull loops. Non-slip rubber sole provides stability and comfort for all-day wear in cold and wet conditions.",
 
  showPriceCTA: true,
    price: 62.99,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["cold-weather", "slip-resistance", "comfort"],
  tag: "Winter Chelsea Boots",
  images: [
    "/onboarding/chelsea-boots-front.jpeg",
    "/onboarding/chelsea-boots-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4q8mbmU"
},
// {
//   id: "p33",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },
{
  id: "p34",
  slug: "ray-ban-rb3548n-hexagonal-sunglasses-gold-g15-green",
  name: "Ray-Ban RB3548N Hexagonal Sunglasses",
  brand: "Ray-Ban",
  description:
    "Unisex hexagonal metal sunglasses featuring flat G-15 green lenses with 100% UV protection. Lightweight design with scratch-resistant, prescription-ready glass lenses and photochromatic technology that adjusts lens shade in sunlight.",

  showPriceCTA: true,
    price: 182.40,
  currency: "CAD",
  budget: "$$$",
  category: "accessories",
  concerns: ["sun-protection", "eye-strain", "outdoor-style"],
  tag: "Designer Sunglasses",
  images: [
    "/onboarding/rayban-rb3548n-front.png",
    "/onboarding/rayban-rb3548n-side.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4rAUWCk"
},

{
  id: "p35",
  slug: "ray-ban-rb3016-clubmaster-sunglasses-black-gold-green",
  name: "Ray-Ban RB3016 Clubmaster Sunglasses",
  brand: "Ray-Ban",
  description:
    "Iconic Clubmaster sunglasses featuring a black acetate and gold-tone metal frame with crystal green lenses. Lightweight, durable design with silicone nose pads and 100% UV protection for stylish everyday sun coverage.",
 
  showPriceCTA: true,
    price: 182.40,
  currency: "CAD",
  budget: "$$$",
  category: "accessories",
  concerns: ["sun-protection", "eye-strain", "classic-style"],
  tag: "Clubmaster Sunglasses",
   images: [
    "/onboarding/ray-ban-rb3016-front.png",
    "/onboarding/ray-ban-rb3016.png"
  ],
  affiliateUrl: "https://amzn.to/4ay51KF"
},
{
  id: "p36",
  slug: "samsonite-base-boost-spinner-carry-on-red",
  name: "Samsonite Base Boost Spinner Carry-On",
  brand: "Samsonite",
  description:
    "Lightweight spinner carry-on luggage featuring multi-directional airflow wheels, push-button locking handle, fully lined interior with compression panel and cross-straps for organized and secure travel packing.",

  showPriceCTA: true,
    price: 103.00,
  currency: "CAD",
  budget: "$$",
  category: "accessories",
  concerns: ["travel-organization", "mobility", "lightweight"],
  tag: "Carry-On Luggage",
  images: [
    "/onboarding/samsonite-base-boost-front.jpg",
    "/onboarding/samsonite-base-boost-back.jpg"
  ],
  affiliateUrl: "https://amzn.to/46orYNU"
},

{
  id: "p37",
  slug: "mens-wool-blend-double-breasted-pea-coat-camel",
  name: "Men's Wool Blend Double Breasted Pea Coat",
  brand: "HXW.GJQ",
  description:
    "Slim fit wool blend double-breasted pea coat featuring classic lapel collar, wind-resistant design, interior pockets, and warm insulated lining. Suitable for business, formal, and casual winter styling.",
  
  showPriceCTA: true,
    price: 138.65,
  currency: "CAD",
  budget: "$$",
  category: "mens-fashion",
  concerns: ["cold-weather", "formal-style", "winter-comfort"],
  tag: "Wool Pea Coat",
    images: [
    "/onboarding/mens-peacoat-camel-front.jpg",
    "/onboarding/mens-peacoat-camel-detail.png"
  ],
  affiliateUrl: "https://amzn.to/3M7QNqB"
},
{
  id: "p38",
  slug: "ecco-london-double-gore-chelsea-boot-cocoa-brown",
  name: "ECCO London Double Gore Chelsea Boot",
  brand: "ECCO",
  description:
    "Premium leather Chelsea ankle boot featuring elastic side panels, removable leather footbed for added width, and FLUIDFORM comfort technology for all-day city wear.",
  
  showPriceCTA: true,
    price: 184.28,
  currency: "CAD",
  budget: "$$$",
  category: "mens-fashion",
  concerns: ["comfort", "city-style", "all-day-wear"],
  tag: "Leather Chelsea Boots",
  images: [
    "/onboarding/ecco-chelsea-boot-front.png",
    "/onboarding/ecco-chelsea-boot-side.jpg"
  ],
  affiliateUrl: "https://amzn.to/3Oay6Da"
},
{
  id: "p39",
  slug: "emporio-armani-ar11572-mens-watch-rose-gold-brown-leather",
  name: "Emporio Armani Three-Hand Date Leather Watch",
  brand: "Emporio Armani",
  description:
    "Classic 42mm analog watch featuring a rose gold-tone stainless steel case, white dial, three-hand quartz movement with date display, and genuine brown leather strap. Water resistant up to 50 meters.",
  
  showPriceCTA: true,
    price: 189.00,
  currency: "CAD",
  budget: "$$$",
  category: "mens-fashion",
  concerns: ["everyday-style", "formal-wear", "durability"],
  tag: "Designer Leather Watch",
 images: [
    "/onboarding/armani-watch-front.jpg",
    // "/onboarding/armani-watch-detail.jpg"
  ],
  affiliateUrl: "https://amzn.to/45VKVHz"
},
{
  id: "p40",
  slug: "ray-ban-erika-rb4171-sunglasses-beige-brown-gradient",
  name: "Ray-Ban Erika RB4171 Sunglasses",
  brand: "Ray-Ban",
  description:
    "Oversized round unisex sunglasses featuring lightweight propionate frame, gradient lenses with 100% UV protection, and stylish everyday design suitable for sunny or hazy conditions.",
 
  showPriceCTA: true,
    price: 168.00,
  currency: "CAD",
  budget: "$$$",
  category: "accessories",
  concerns: ["sun-protection", "eye-strain", "fashion-style"],
  tag: "Erika Sunglasses",
  images: [
    "/onboarding/rayban-erika-front-model.jpg",
    "/onboarding/rayban-erika-side.jpg"
  ],
  affiliateUrl: "https://amzn.to/4alnZmy"
},
{
  id: "p41",
  slug: "citizen-corso-eco-drive-ladies-watch-two-tone-white",
  name: "Citizen Corso Eco-Drive Ladies Watch",
  brand: "Citizen",
  description:
    "Elegant two-tone stainless steel women's watch featuring Eco-Drive light-powered technology, 3-hand date display, mineral crystal, and water resistance up to 100 meters.",
  
  showPriceCTA: true,
    price: 321.75,
  currency: "CAD",
  budget: "$$$",
  category: "accessories",
  concerns: ["everyday-style", "durability", "water-resistance"],
  tag: "Eco-Drive Watch",
  images: [
    "/onboarding/citizen-corso-watch-front.jpg",
    "/onboarding/citizen-corso-watch-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/3Otf62P"
},

{
  id: "p42",
  slug: "citizen-axiom-eco-drive-ladies-watch-gold-black-ga1052-55e",
  name: "Citizen Axiom Eco-Drive Ladies Watch",
  brand: "Citizen",
  description:
    "Modern gold-tone stainless steel women's watch featuring Eco-Drive light-powered technology, minimalist black dial with 2-hand display, edge-to-edge glass design, and water resistance up to 30 meters.",
 
  showPriceCTA: true,
    price: 315.32,
  currency: "CAD",
  budget: "$$$",
  category: "accessories",
  concerns: ["everyday-style", "minimalist-design", "durability"],
  tag: "Eco-Drive Watch",
 images: [
    "/onboarding/citizen-axiom-watch-front.jpg",
    "/onboarding/citizen-axiom-watch-detail.jpg"
  ],
  affiliateUrl: "https://amzn.to/4rAA6Dd"
},

{
  id: "p43",
  slug: "fossil-gilmore-three-hand-gold-tone-watch",
  name: "Fossil Women's Gilmore Three-Hand Gold-Tone Stainless Steel Watch",
  brand: "Fossil",
  description:
    "Classic and elegant gold-tone stainless steel watch featuring a silver dial with Roman numerals and three-hand quartz movement, perfect for everyday or dress occasions.",
 
  showPriceCTA: true,
    price: 184.00,
  currency: "CAD",
  budget: "$$",
  category: "accessories",
  concerns: ["everyday-style", "durability", "classic-design"],
  tag: "Elegant Gold Watch",
 images: [
    "/onboarding/fossil-gold-watch-front.jpeg",
    "/onboarding/fossil-gold-watch-detail.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4aAyPX4"
},

// {
//   id: "p44",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },
{
  id: "p45",
  slug: "thick-fiber-root-touch-up-hairline-powder-dark-brown",
  name: "THICK FIBER Root Touch Up & Hairline Powder",
  brand: "THICK FIBER",
  description:
    "Root touch-up powder designed to instantly conceal grey roots, thinning hair, and bald spots. Water and sweat resistant formula provides natural-looking, fuller hair coverage and lasts until shampooed. Includes puff, mirror, and precision brush for easy application.",
  
  showPriceCTA: true,
    price: 28.00,
  currency: "CAD",
  budget: "$$",
  category: "haircare",
  concerns: ["thinning-hair", "grey-roots", "hairline-coverage"],
  tag: "Root Touch-Up Powder",
 images: [
    "/onboarding/thick-fiber-root-touch-model.jpg",
    "/onboarding/thick-fiber-root-touch-open.jpg"
  ],
  affiliateUrl: "https://amzn.to/46etmmr"
},

{
  id: "p46",
  slug: "gloria-vanderbilt-womens-pull-on-mid-rise-trouser-midnight-affair",
  name: "Gloria Vanderbilt Women's Pull On Mid Rise Trouser",
  brand: "Gloria Vanderbilt",
  description:
    "Comfortable pull-on mid-rise trouser with elastic waistband and straight-leg fit. Made from soft stretch fabric with four functional pockets. Versatile style suitable for work, casual outings, or everyday wear.",
  
  showPriceCTA: true,
    price: 43.06, 
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["comfort", "stretch-fit", "everyday-wear"],
  tag: "Mid Rise Stretch Trouser",
images: [
    "/onboarding/gloria-vanderbilt-trouser-front.jpeg",
    "/onboarding/gloria-vanderbilt-trouser-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/4r00fvb"
},
{
  id: "p47",
  slug: "swarovski-bella-drop-crystal-earrings-rhodium",
  name: "Swarovski Bella Drop Crystal Earrings",
  brand: "Swarovski",
  description:
    "Elegant drop earrings featuring sparkling round Swarovski crystals set in a lightweight rhodium plated setting with pavé detailing and secure lever back closure. Perfect for both everyday wear and special occasions.",
  
  showPriceCTA: true,
    price: 55.00, 
  currency: "CAD",
  budget: "$$$",
  category: "accessories",
  concerns: ["elegant-style", "special-occasion", "gift-idea"],
  tag: "Crystal Drop Earrings",
  images: [
    "/onboarding/swarovski-bella-earrings-front.jpeg",
    "/onboarding/swarovski-bella-earrings-detail.jpg"
  ],
  affiliateUrl: "https://amzn.to/4tszH7K"
},
{
  id: "p48",
  slug: "clinique-pop-lip-colour-glazed-berry",
  name: "Clinique Pop Lip Colour + Primer – Glazed Berry",
  brand: "Clinique",
  description:
    "Hydrating lipstick with a built-in 3D core that sculpts and contours lips while delivering smooth, defined color. The precision tip enhances the cupid’s bow and defines lips without the need for lip liner. Allergy tested, fragrance-free formula built on dermatologist-guided skincare science.",
  
  showPriceCTA: true,
    price: 30.60, 
  currency: "CAD",
  budget: "$$$",
  category: "skincare",
  concerns: ["lip-definition", "hydration", "sensitive-skin"],
  tag: "Hydrating Lipstick",
 images: [
    "/onboarding/clinique-glazed-berry-front.png",
    "/onboarding/clinique-glazed-berry-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/4bHqEcu"
},

{
  id: "p49",
  slug: "clinique-pop-plush-cream-lip-gloss-strawberry-pop",
  name: "Clinique Pop Plush Cream Lip Gloss – Strawberry Pop",
  brand: "Clinique",
  description:
    "Ultra-hydrating lip gloss delivering plush shine with a glossy, shimmery finish. Formulated with hyaluronic acid and nourishing butters to hydrate, smooth, and condition lips. Features an hourglass-shaped applicator for precise and effortless application. Allergy tested and fragrance free.",
  
  showPriceCTA: true,
    price: 28.05, 
  currency: "CAD",
  budget: "$$$",
  category: "skincare",
  concerns: ["lip-hydration", "plumping-effect", "sensitive-skin"],
  tag: "Hydrating Lip Gloss",
  images: [
    "/onboarding/clinique-plush.jpg",
    "/onboarding/clinique-pop-plush.jpg"
  ],
  affiliateUrl: "https://amzn.to/4r3r8hN"
},

{
  id: "p50",
  slug: "michael-kors-jet-set-travel-large-chain-shoulder-bag",
  name: "Michael Kors Jet Set Travel Large Chain Shoulder Bag",
  brand: "Michael Kors",
  description:
    "Spacious and elegant shoulder bag crafted from durable Saffiano leather with gold-tone hardware. Features a secure zip closure, organized interior with one zip pocket and four slip pockets, plus exterior side pockets for easy access. A timeless everyday bag for work, travel, or daily wear.",
  
  showPriceCTA: true,
    price: 209.00, 
  currency: "CAD",
  budget: "$$$",
  category: "bags",
  concerns: ["organization", "everyday-use", "luxury-style"],
  tag: "Leather Shoulder Bag",
  images: [
    "/onboarding/mk-jet-set-travel.jpeg",
    "/onboarding/mk-jet-set-travel-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4kqEpyC"
},

{
  id: "p51",
  slug: "arach-cloz-womens-wool-blend-spring-sweater",
  name: "Arach&Cloz Women's Wool Blend Spring Sweater",
  brand: "Arach&Cloz",
  description:
    "Soft and breathable wool-blend pullover sweater designed with a classic V-neck and relaxed loose fit. Lightweight anti-pilling fabric resists wrinkles and provides comfortable everyday wear, perfect for fall and winter styling.",
  price: 37.39,
  showPriceCTA: true,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["comfort", "cold-weather", "everyday-style"],
  tag: "Wool Blend Sweater",
images: [
    "/onboarding/wool-blend-spring-sweater.jpg",
    "/onboarding/wool-blend-spring-sweater-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/3MmKcIK"
},

{
  id: "p52",
  slug: "arach-cloz-womens-wool-blend-v-neck-sweater",
  name: "Arach&Cloz Women's Wool Blend V-Neck Sweater",
  brand: "Arach&Cloz",
  description:
    "Soft and breathable wool-blend pullover sweater designed with a classic V-neck and relaxed loose fit. Lightweight anti-pilling fabric resists wrinkles and provides comfortable everyday wear, perfect for fall and winter styling.",
 
  showPriceCTA: true,
    price: 43.99, 
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["comfort", "cold-weather", "everyday-style"],
  tag: "Wool Blend Sweater",
images: [
    "/onboarding/arach-vneck.jpeg",
    "/onboarding/arach-vneck-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/3O922Q3"
},
{
  id: "p53",
  slug: "arach-cloz-womens-wool-blend-crew-neck-sweater",
  name: "Arach&Cloz Women's Wool Blend Crew Neck Sweater",
  brand: "Arach&Cloz",
  description:
    "Soft and breathable wool-blend pullover sweater designed with a classic crew neck and relaxed loose fit. Lightweight anti-pilling fabric resists wrinkles and provides comfortable everyday wear across fall, winter, and spring seasons. Easy to style with jeans, skirts, or layered outfits for casual or business looks.",
  
  showPriceCTA: true,
    price: 42.99, 
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["comfort", "layering-style", "all-season-wear", "everyday-style"],
  tag: "Crew Neck Wool Blend Sweater",
  images: [
    "/onboarding/arach-crewneck-sweater-front.jpg",
    "/onboarding/arach-crewneck-sweater-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4rHZ3wJ"
},


{
  id: "p54",
  slug: "calvin-klein-rowena-square-toe-heeled-sandal",
  name: "Calvin Klein Rowena Square Toe Heeled Sandal",
  brand: "Calvin Klein",
  description:
    "Modern slip-on dress sandal crafted with a faux leather upper and sleek square toe design. Features a comfortable block heel and lightweight EVA sole, making it a versatile and stylish option for everyday wear or dress occasions.",

  showPriceCTA: true,
    price: 103.42,
  currency: "CAD",
  budget: "$$$",
  category: "shoes",
  concerns: ["comfort", "dress-style", "everyday-wear"],
  tag: "Heeled Dress Sandals",
images: [
    "/onboarding/calvin-klein-rowena-square.jpg",
    "/onboarding/calvin-klein-rowena-square-side.jpg"
  ],
  affiliateUrl: "https://amzn.to/3M7SG6F"
},


{
  id: "p55",
  slug: "clinique-moisture-surge-eye-96-hour-hydro-filler-concentrate",
  name: "Clinique Moisture Surge Eye 96-Hour Hydro-Filler Concentrate",
  brand: "Clinique",
  description:
    "Ultralight water-gel eye moisturizer that delivers intense hydration to visibly plump, tighten, and brighten the delicate eye area. Helps reduce the appearance of fine, dry lines while providing up to 96 hours of continuous moisture. Allergy tested, fragrance-free, dermatologist and ophthalmologist tested for all skin types.",
  
  showPriceCTA: true,
    price: 51.00, 
  currency: "CAD",
  budget: "$$$",
  category: "skincare",
  concerns: ["fine-lines", "hydration", "eye-care", "sensitive-skin"],
  tag: "Hydrating Eye Gel",

  images: [
    "/onboarding/clinique-moisture-surge-eye-front.jpeg",
    "/onboarding/clinique-moisture-surge-eye-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4kpAfH9"
},

// {
//   id: "p56",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },



{
  id: "p57",
  slug: "coofandy-mens-ribbed-turtleneck-sweater",
  name: "COOFANDY Men's Ribbed Turtleneck Sweater",
  brand: "COOFANDY",
  description:
    "Soft and stretchy ribbed knit turtleneck sweater designed for a slim and modern fit. Crafted from lightweight, breathable fabric that provides warmth and comfort for everyday wear. Versatile styling pairs easily with jeans, dress pants, or layered under jackets for casual or semi-formal occasions.",
  
  showPriceCTA: true,
   price: 40.99, 
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["comfort", "layering-style", "all-season-wear", "modern-style"],
  tag: "Ribbed Turtleneck Sweater",
  images: [
    "/onboarding/coofandy-turtleneck-front.jpg",
    "/onboarding/coofandy-turtleneck-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/4kknBsW"
},
{
  id: "p58",
  slug: "reef-one-slide-sandals",
  name: "REEF One Slide Sandals",
  brand: "REEF",
  description:
    "Lightweight and waterproof slide sandals designed with a cushioned EVA footbed for all-day comfort. Features a padded strap and non-marking outsole for durability and easy everyday wear. Ideal for beach days, gym use, travel, or casual indoor and outdoor activities.",
  
  showPriceCTA: true,
    price: 34.97, 
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["comfort", "waterproof", "casual-wear", "travel-friendly"],
  tag: "Slide Sandals",
  images: [
    "/onboarding/reef-one-slide-front.jpg",
    "/onboarding/reef-one-slide-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/400g8Ww"
},
{
  id: "p59",
  slug: "veracosy-mens-corduroy-memory-foam-slip-on-slippers",
  name: "VeraCosy Men's Corduroy Memory Foam Slip-On Slippers",
  brand: "VeraCosy",
  description:
    "Comfortable closed-toe indoor slippers featuring a soft corduroy upper and plush fleece lining for warmth and breathability. Designed with high-density memory foam cushioning and a non-slip rubber outsole for stability and all-day comfort. Lightweight and foldable, perfect for home, travel, or relaxation.",
  
  showPriceCTA: true,
    price: 32.99, 
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["comfort", "indoor-wear", "anti-slip", "cold-weather"],
  tag: "Memory Foam House Slippers",
  images: [
    "/onboarding/veracosy-slippers-front.jpg",
    "/onboarding/veracosy-slippers-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/4rvmSHM"
},
// {
//   id: "p60",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },

{
  id: "p61",
  slug: "clinique-cheek-pop-blush-heather-pop",
  name: "Clinique Cheek Pop Blush – Heather Pop",
  brand: "Clinique",
  description:
    "Lightweight, buildable powder blush that delivers vibrant yet natural-looking cheek color. The long-wearing, virtually powderless formula allows you to apply a sheer flush or build intensity for a more defined look. Allergy tested and fragrance-free, developed with dermatologist-guided skincare science for all skin tones.",
  
  showPriceCTA: true,
    price: 34.85, 
  currency: "CAD",
  budget: "$$",
  category: "skincare",
  concerns: ["natural-glow", "buildable-coverage", "long-wear", "sensitive-skin"],
  tag: "Powder Blush",
  images: [
   "/onboarding/clinique-heather-pop-blush-front.jpg",
    "/onboarding/clinique-heather-pop-blush-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/3OthG91"
},
{
  id: "p62",
  slug: "btfbm-womens-high-waist-wide-leg-palazzo-pants",
  name: "BTFBM Women's High Waist Wide Leg Palazzo Pants",
  brand: "BTFBM",
  description:
    "Stylish and comfortable high-waist wide leg palazzo pants designed with a pleated front and elastic waistband at the back for an adjustable and flattering fit. Crafted from breathable, soft fabric with a loose silhouette, these versatile trousers are perfect for office wear, casual outings, meetings, parties, or special occasions.",
  
  showPriceCTA: true,
    price: 54.99, 
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["comfort-fit", "office-style", "versatile-outfit", "business-casual"],
  tag: "Wide Leg Palazzo Pants",
  images: [
    "/onboarding/btfbm-palazzo-pants-front.jpg",
  "/onboarding/btfbm-palazzo-pants-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/4cg9hQf"
},
{
  id: "p63",
  slug: "michael-kors-bryant-convertible-shoulder-bag-leather",
  name: "Michael Kors Bryant Convertible Shoulder Bag",
  brand: "Michael Kors",
  description:
    "A chic and versatile convertible shoulder bag crafted from burnished pebbled leather with antique gold-tone hardware. Designed in a sleek pochette silhouette that offers more space than expected, this elegant accessory can be styled as a clutch, wristlet, or shoulder bag for effortless day-to-night glamour.",
  
  showPriceCTA: true,
    price: 159.73, 
  currency: "CAD",
  budget: "$$$",
  category: "bags",
  concerns: ["luxury-style", "everyday-carry", "evening-bag", "gift-idea"],
  tag: "Convertible Leather Shoulder Bag",
  images: [
    "/onboarding/mk-bryant-bag-front.jpg",
    "/onboarding/mk-bryant-bag-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/4bMERFf"
},
{
  id: "p64",
  slug: "clinique-pop-lip-colour-primer-rose-pop-matte",
  name: "Clinique Pop Lip Colour + Primer Lipstick",
  brand: "Clinique",
  description:
    "Richly pigmented Clinique lipstick delivering full-coverage matte color with a built-in smoothing primer. The long-wearing formula provides up to 8 hours of color-true wear while helping lips feel smooth and comfortable. Allergy tested and 100% fragrance free, making it suitable for all skin types and everyday wear.",
  
  showPriceCTA: true,
    price: 28.90, 
  currency: "CAD",
  budget: "$$",
  category: "skincare",
  concerns: ["long-wear", "lip-definition", "hydration", "sensitive-skin"],
  tag: "Matte Lipstick",
  images: [
    "/onboarding/clinique-pop-rose-lipstick-front.jpg",
    "/onboarding/clinique-pop-rose-lipstick-swatch.jpg"
  ],
  affiliateUrl: "https://amzn.to/4kqb8Ec"
},
{
  id: "p65",
  slug: "womens-long-winter-puffer-jacket-insulated-water-repellent",
  name: "Women’s Long Winter Puffer Jacket",
  brand: "Generic",
  description:
    "Warm and stylish long puffer jacket designed for cold weather protection. Made with high-tech insulation to block cold air while maintaining lightweight comfort. Features a stand collar, windproof cuffs, and detachable hood for extra warmth. Water and stain-repellent fabric protects against light rain and spills. Durable, recyclable polyester construction with multiple secure pockets makes this jacket perfect for everyday winter wear and outdoor activities.",

  showPriceCTA: true,
  price: 56.95,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["cold-weather", "water-repellent", "outdoor-comfort", "winter-style"],
  tag: "Winter Puffer Jacket",

  images: [
    "/onboarding/winter-puffer-jacket-product.jpg",
    "/onboarding/winter-puffer-jacket-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4rmjrUh",

},

{
  id: "p66",
  slug: "pointed-toe-knee-high-faux-leather-chunky-heel-boots",
  name: "Women’s Pointed Toe Knee-High Chunky Heel Boots",
  brand: "Generic",
  description:
    "Fashion-forward knee-high boots designed with a sleek pointed toe and streamlined silhouette to visually elongate the legs. Crafted from soft faux leather with a breathable lining and full-length side zipper for easy wear. The chunky block heel provides stability and comfort, while the non-slip rubber outsole ensures confident steps. Stylish and versatile, these boots pair effortlessly with dresses, skirts, or jeans for any occasion.",

  showPriceCTA: true,
  price: 79.99,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["style-elevation", "comfort-heel", "easy-wear", "versatile-outfit"],
  tag: "Pointed Toe Knee-High Boots",

  images: [
    "/onboarding/pointed-knee-high-boots-product.jpg",
    "/onboarding/pointed-knee-high-boots-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4qCfwRW",

},
{
  id: "p67",
  slug: "wrangler-womens-high-rise-fierce-flare-jeans-stretch-32-inseam",
  name: "Wrangler Women’s High Rise Fierce Flare Jeans",
  brand: "Wrangler",
  description:
    "High-rise flare jeans designed to flatter with a curve-hugging fit through the seat and thigh, finished with a contoured waistband for a smooth silhouette. The back rise sits slightly higher for extra coverage while the front is lower for comfort when sitting. Made from authentic cotton-rich denim with stretch for all-day comfort. Finished with Wrangler’s iconic ‘W’ back pocket stitching and leather patch, plus classic five-pocket styling.",

  showPriceCTA: true,
  price: 73.38,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["flattering-fit", "comfort-stretch", "high-rise", "everyday-denim"],
  tag: "High-Rise Flare Jeans",

  images: [
    "/onboarding/wrangler-fierce-flare-product.jpg",
    "/onboarding/wrangler-fierce-flare-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4qKdZcF",

},
{
  id: "p68",
  slug: "ugg-tasman-ii-slipper-chestnut-suede-shearling",
  name: "UGG Tasman II Slipper",
  brand: "UGG",
  description:
    "Premium suede slip-on slippers designed for everyday comfort with a cozy sheepskin lining and lightweight cushioning. Features signature UGGbraid collar detailing and a durable EVA outsole for indoor and outdoor wear. Made with genuine dyed sheep or lamb fur for warmth and softness. Stylish, comfortable, and perfect for lounging or casual outings.",

  showPriceCTA: true,
  price: 149.96,
  currency: "CAD",
  budget: "$$$",
  category: "shoes",
  concerns: ["comfort", "cold-weather", "cozy-style", "indoor-outdoor-wear"],
  tag: "Shearling Slippers",

  images: [
    "/onboarding/ugg-tasman-slipper-product.jpg",
    "/onboarding/ugg-tasman-slipper-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4rSBaT6",
},
{
  id: "p69",
  slug: "athlefit-platform-knee-high-boots-square-toe-black",
  name: "Athlefit Platform Knee High Chunky Boots",
  brand: "Athlefit",
  description:
    "Fashion-forward knee high platform boots designed with a modern square toe and chunky heel for stylish height and comfort. Made from flexible PU leather with a side zipper for easy wear and a snug fit. Durable sole provides all-day comfort, making these boots perfect for everyday wear, work, travel, or special occasions. Versatile design transitions effortlessly from casual outfits to elegant looks.",
  
  showPriceCTA: true,
  price: 79.99,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["comfort", "winter-style", "everyday-wear", "fashion-boots"],
  tag: "Platform Knee High Boots",

  images: [
    "/onboarding/athlefit-knee-high-boots-product.jpg",
    "/onboarding/athlefit-knee-high-boots-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4bXquxL",

},

{
  id: "p89",
  slug: "vidussa-silk-satin-ruched-peplum-blouse",
  name: "VIDUSSA Silk Satin Ruched Peplum Blouse",
  brand: "VIDUSSA",
  description:
    "Elegant silk satin blouse designed with a mock neck, ruched tie front, and flattering peplum tunic silhouette. Crafted from soft, silky satin fabric with a smooth drape for a refined and polished look. Perfect for office wear, business casual outfits, or dressy evening occasions. A versatile statement top that transitions effortlessly from work to night out.",

  showPriceCTA: true,
  price: 32.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["business-casual", "dressy-style", "elegant-look"],
  tag: "Satin Mock Neck Peplum Blouse",

  images: [
    "/onboarding/vidussa-satin-blouse-product.jpg",
    "/onboarding/vidussa-satin-blouse-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4s8t2Ow"
},


{
  id: "p70",
  slug: "agwolf-14k-gold-cross-zircon-stud-earrings",
  name: "AGWOLF 14K Gold Criss-Cross Stud Earrings",
  brand: "AGWOLF",

  description:
    "Elegant criss-cross gold stud earrings designed to elevate any jewelry collection. Featuring a stylish intersecting design that stands out beautifully whether worn alone or stacked with other earrings. Made from high-quality brass and plated with 14K gold for long-lasting shine. Lightweight, hypoallergenic, and comfortable for all-day wear.",

  showPriceCTA: true,
  price: 14.99,
  currency: "CAD",
  budget: "$",
  category: "accessories",
  concerns: ["everyday-style", "hypoallergenic", "lightweight-comfort"],
  tag: "Minimalist Gold Jewelry",

  images: [
    "/onboarding/agwolf-cross-earrings-product.jpg",
    "/onboarding/agwolf-cross-earrings-model.jpg"
  ],

  affiliateUrl: "https://share.google/L2i8DXpyqtHFWjVj5"
},

{
  id: "p71",
  slug: "jetech-iphone-13-pro-max-screen-protector-3pack",
  name: "JETech Tempered Glass Screen Protector (3-Pack)",
  brand: "JETech",
  description:
    "Premium tempered glass screen protector specially designed for iPhone 16 Pro Max (6.9-inch). Built with 9H high hardness glass to protect against scratches, drops, and daily wear. Features ultra-clear transparency and high touch sensitivity for a natural screen experience. The hydrophobic and oleophobic coating resists fingerprints, oil, and smudges. Includes an easy installation tool for perfect alignment and bubble-free application. Designed with 2.5D curved edges and compatible with most phone cases.",

  showPriceCTA: true,
  price: 9.99,
  currency: "CAD",
  budget: "$",
  category: "accessories",
  concerns: ["screen-protection", "scratch-resistance", "fingerprint-resistance"],
  tag: "Amazon's Choice",

  images: [
    "/onboarding/jetech-screen-protector-product.jpg",
    "/onboarding/jetech-screen-protector-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/3MrhZ3Q"
},

{
  id: "p72",
  slug: "Jeyfull-Huggie-Hoop-Earrings-Set-gold-plated",
  name: "Jeyfull Huggie Hoop Earrings Set gold plated",
  brand: "Jeyfull",
  description:
    "Minimalist chunky gold hoop earrings designed for everyday comfort and style. Lightweight and easy to wear with a secure click-top closure. Made with hypoallergenic stainless steel posts and real gold plating for sensitive ears. Simple, elegant, and versatile — perfect for daily wear or as a thoughtful gift.",

  showPriceCTA: true,
  price: 15.99,
  currency: "CAD",
  budget: "$",
  category: "accessories",
  concerns: ["sensitive-ears", "lightweight", "everyday-style"],
  tag: "Chunky Gold Hoop Earrings",

  images: [
    "/onboarding/chunky-hoop-earrings-product.jpg",
    "/onboarding/chunky-hoop-earrings-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4aKM1aD"
},

{
  id: "p73",
  slug: "chunky-drop-earrings",
  name: "Chunky drop Earrings",
  brand: "Shinelab",
  description:
    "Stylish circular drop earrings featuring a chunky twisted knot design with thick geometric links. Lightweight yet sturdy with a smooth finish for comfortable all-day wear. Made from nickel-free hypoallergenic metal that resists oxidation to maintain color over time. A timeless design perfect for casual or formal occasions and ideal for gifting.",

  showPriceCTA: true,
  price: 14.99,
  currency: "CAD",
  budget: "$",
  category: "accessories",
  concerns: ["sensitive-ears", "lightweight", "everyday-style"],
  tag: "Chunky Knot Drop Earrings",

  images: [
    "/onboarding/twisted-knot-earrings-product.jpg",
    "/onboarding/twisted-knot-earrings-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4aTlvMw"
},

{
  id: "p74",
  slug: "lilieandwhite-chunky-gold-hoop-earrings-19mm",
  name: "LILIE&WHITE Chunky Gold Hoop Earrings",
  brand: "LILIE&WHITE",
  description:
    "Minimalist chunky gold hoop earrings designed for everyday comfort and effortless style. Lightweight and easy to wear with a secure click-top closure. Made with hypoallergenic stainless steel posts and real gold plating to protect sensitive ears. Elegant, versatile, and perfect for daily wear or as a thoughtful gift.",

  showPriceCTA: true,
  price: 13.08,
  currency: "CAD",
  budget: "$",
  category: "accessories",
  concerns: ["sensitive-ears", "lightweight", "everyday-style"],
  tag: "Amazon's Choice Chunky Gold Hoops",

  images: [
    "/onboarding/lilieandwhite-hoop-earrings-product.jpg",
    "/onboarding/lilieandwhite-hoop-earrings-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4qVhuNt"
},

{
  id: "p75",
  slug: "arach-cloz-womens-wool-blend-spring-sweater",
  name: "Arach&Cloz Women's Wool Blend Spring Sweater",
  brand: "Arach&Cloz",
  description:
    "Soft and breathable wool-blend pullover sweater designed with a classic V-neck and relaxed loose fit. Lightweight anti-pilling fabric resists wrinkles and provides comfortable everyday wear, perfect for fall and winter styling.",
  price: 37.39,
  showPriceCTA: true,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["comfort", "cold-weather", "everyday-style"],
  tag: "Wool Blend Sweater",
images: [
    "/onboarding/wool-blend-spring-sweater-2.jpg",
    "/onboarding/wool-blend-spring-sweater-2-model.jpg"
  ],
  affiliateUrl: "https://amzn.to/4kLD2KS"
},
{
  id: "p76",
  slug: "square-toe-kitten-heel-thong-sandals",
  name: "Square Toe Kitten Heel Thong Sandals",
  brand: "Generic",
  description:
    "Modern square toe flip-flop sandals featuring slim straps and a sleek silhouette. Designed with a comfortable 2.56-inch kitten heel and soft lining for stability and all-day wear. Cushioned with 4mm latex padding for added support and finished with a lightweight slip-resistant outsole. Easy slip-on style perfect for both casual and dressy occasions.",

  showPriceCTA: true,
  price: 55.50,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["comfort", "dressy-style", "summer-fashion"],
  tag: "Kitten Heel Thong Sandals",

  images: [
    "/onboarding/kitten-heel-sandals-product.jpg",
    "/onboarding/kitten-heel-sandals-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4kMeyRO"
},
{
  id: "p77",
  slug: "high-waisted-wide-leg-yoga-pants",
  name: "High Waisted Wide Leg Yoga Pants",
  brand: "wkwmrpet",
  description:
    "Soft and stretchy wide leg yoga pants made from 85% nylon and 15% spandex for a comfortable all-day fit. Designed with a flattering high-rise waistband that provides support and enhances your silhouette. The full-length flared leg allows unrestricted movement, making them perfect for yoga, Pilates, dancing, lounging, or everyday wear. Features functional front side pockets for added convenience.",

  showPriceCTA: true,
  price: 32.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["comfort", "stretchy-fit", "activewear"],
  tag: "High Rise Wide Leg Yoga Pants",

  images: [
    "/onboarding/wide-leg-yoga-pants-product.jpg",
    "/onboarding/wide-leg-yoga-pants-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4qLJwe7"
},

{
  id: "p78",
  slug: "high-waisted-pleated-bermuda-shorts-women",
  name: "High Waisted Pleated Bermuda Shorts",
  brand: "Feiersi",
  description:
    "Lightweight and breathable women's bermuda shorts made from 94% polyester and 6% spandex for a soft, comfortable fit. Designed with a high-waisted silhouette, elastic back waistband, removable belt, and functional pockets. The relaxed fit with pleated front and folded hem creates a chic look that transitions easily from casual to dressy occasions.",

  showPriceCTA: true,
  price: 29.98,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["summer-style", "comfort", "versatile-fashion"],
  tag: "High Waisted Pleated Shorts",

  images: [
    "/onboarding/pleated-bermuda-shorts-black-product.jpg",
    "/onboarding/pleated-bermuda-shorts-black-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4s4KMu7"
},

{
  id: "p79",
  slug: "high-waisted-pleated-bermuda-shorts-women",
  name: "High Waisted Pleated Bermuda Shorts",
  brand: "Feiersi",
  description:
    "Lightweight and breathable women's bermuda shorts made from 94% polyester and 6% spandex for a soft, comfortable fit. Designed with a high-waisted silhouette, elastic back waistband, removable belt, and functional pockets. The relaxed fit with pleated front and folded hem creates a chic look that transitions easily from casual to dressy occasions.",

  showPriceCTA: true,
  price: 29.98,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["summer-style", "comfort", "versatile-fashion"],
  tag: "High Waisted Pleated Shorts",

  images: [
    "/onboarding/pleated-bermuda-shorts-product.jpg",
    "/onboarding/pleated-bermuda-shorts-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4rWI3Ts"
},


{
  id: "p81",
  slug: "charne-womens-long-sleeve-v-neck-button-blouse",
  name: "Charne Womens Long Sleeve V Neck Button Blouse",
  brand: "Charne",
  description:
    "Lightweight and soft long sleeve blouse made from 100% polyester for a comfortable and breathable feel. Designed with a collared V-neck, button-down front, and loose fit silhouette that covers the hips. Perfect for work, office wear, or casual styling throughout all seasons. Easy to pair with jeans, leggings, shorts, or skirts for versatile everyday looks.",

  showPriceCTA: true,
  price: 26.99,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["casual-style", "workwear", "all-season"],
  tag: "Loose Fit Button Down Blouse",

  images: [
    "/onboarding/charne-blouse-white-product.jpg",
    "/onboarding/charne-blouse-white-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4aJXV4J"
},

{
  id: "p80",
  slug: "charne-womens-long-sleeve-v-neck-button-blouse",
  name: "Charne Womens Long Sleeve V Neck Button Blouse",
  brand: "Charne",
  description:
    "Lightweight and soft long sleeve blouse made from 100% polyester for a comfortable and breathable feel. Designed with a collared V-neck, button-down front, and loose fit silhouette that covers the hips. Perfect for work, office wear, or casual styling throughout all seasons. Easy to pair with jeans, leggings, shorts, or skirts for versatile everyday looks.",

  showPriceCTA: true,
  price: 26.99,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["casual-style", "workwear", "all-season"],
  tag: "Loose Fit Button Down Blouse",

  images: [
    "/onboarding/charne-blouse-product.jpg",
    "/onboarding/charne-blouse-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4aurgBj"
},

{
  id: "p82",
  slug: "levis-womens-cinch-baggy-jeans",
  name: "Levi's Womens Cinch Baggy Jeans",
  brand: "Levi's",
  description:
    "Classic baggy denim redefined with a flattering high-rise fit and no waist gap. Designed with a relaxed silhouette through the hip and thigh and finished with a wide straight leg. Features adjustable back cinch details for a tailored-to-you fit. Made from 100% non-stretch cotton for an authentic denim feel and timeless style.",

  showPriceCTA: true,
  price: 59.97,
  currency: "CAD",
  budget: "$$$",
  category: "clothing",
  concerns: ["denim-style", "high-rise-fit", "relaxed-fit"],
  tag: "#1 Best Seller Baggy Jeans",

  images: [
    "/onboarding/levis-cinch-baggy-jeans-product.jpg",
    "/onboarding/levis-cinch-baggy-jeans-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4aIyEI3"
},
{
  id: "p83",
  slug: "levis-womens-ribcage-bell-bottom-jeans",
  name: "Levi's Women's Ribcage Bell Bottom Jeans",
  brand: "Levi's",
  description:
    "Levi's highest high-rise jean featuring a waist-defining 12-inch rise and a flattering figure-hugging silhouette. Designed to slim the hips and elongate the legs, this style is relaxed through the hip and thigh with a classic bootcut bell bottom leg. Crafted from a comfortable cotton blend for structure with slight stretch.",

  showPriceCTA: true,
  price: 72.50,
  currency: "CAD",
  budget: "$$$",
  category: "clothing",
  concerns: ["high-rise-fit", "figure-flattering", "denim-style"],
  tag: "Ribcage Bell Bottom Jeans",

  images: [
    "/onboarding/levis-ribcage-bell-bottom-product.jpg",
    "/onboarding/levis-ribcage-bell-bottom-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4cF3cwS"
},

{
  id: "p84",
  slug: "sidefeel-high-waist-stretch-flared-jeans",
  name: "SIDEFEEL Women's High Waist Stretch Flared Jeans",
  brand: "SIDEFEEL",
  description:
    "High-waisted stretch denim jeans designed to highlight the waist and flatter your curves. Featuring a stylish dual-button front design, front pockets, and a wide-leg flared bootcut silhouette. Made from a soft, stretchy cotton blend for comfort and flexibility, offering tummy control support for a smooth, confidence-boosting fit. Perfect for casual wear or office styling all year round.",

  showPriceCTA: true,
  price: 54.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["high-rise-fit", "tummy-control", "stretch-comfort"],
  tag: "High Waist Flared Bootcut Jeans",

  images: [
    "/onboarding/sidefeel-flared-jeans-product.jpg",
    "/onboarding/sidefeel-flared-jeans-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4cFVNNN"
},

{
  id: "p85",
  slug: "oyamiki-womens-boho-maxi-pleated-a-line-skirt",
  name: "Oyamiki Women Boho Maxi Pleated A-Line Skirt",
  brand: "Oyamiki",
  description:
    "Flowy bohemian maxi skirt featuring a high elastic waistband and elegant A-line silhouette. Designed with a pleated, asymmetrical tiered hem that moves beautifully with every step. Made from breathable fabric for all-season comfort and finished with practical side pockets. Perfect for beach days, festivals, casual outings, or dressy occasions.",

  showPriceCTA: true,
  price: 28.79,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["boho-style", "comfortable-fit", "flowy-silhouette"],
  tag: "Boho A-Line Maxi Skirt",

  images: [
    "/onboarding/oyamiki-maxi-skirt-product.jpg",
    "/onboarding/oyamiki-maxi-skirt-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4kNF4dz"
},
// {
//   id: "p86",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },

// {
//   id: "p87",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },
{
  id: "p88",
  slug: "zeagoo-womens-turtleneck-chunky-knit-sweater",
  name: "Zeagoo Women's Turtleneck Chunky Knit Sweater",
  brand: "Zeagoo",
  description:
    "Cozy oversized turtleneck sweater crafted from a soft, stretchy knit blend for warmth and comfort during fall and winter. Designed with drop shoulders, a high-low asymmetric hem, and a relaxed loose fit for a modern silhouette. Perfect for pairing with jeans, leggings, skirts, or layering with coats and jackets for a chic seasonal look.",

  showPriceCTA: true,
  price: 39.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["winter-style", "oversized-fit", "soft-knit"],
  tag: "Chunky Turtleneck Pullover",

  images: [
    "/onboarding/zeagoo-turtleneck-sweater-product.jpg",
    "/onboarding/zeagoo-turtleneck-sweater-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/46lqggt"
},

// {
//   id: "p89",
// },

{
  id: "p90",
  slug: "vidussa-satin-off-shoulder-ruched-blouse",
  name: "VIDUSSA Satin Off Shoulder Ruched Blouse",
  brand: "VIDUSSA",
  description:
    "Trendy off-shoulder satin blouse crafted from silky smooth fabric with an elegant drape. Designed with a ruched asymmetrical silhouette to flatter your curves while adding a modern touch. Short sleeve and lightweight, perfect for summer styling from casual daytime outings to sophisticated evening events. A versatile statement top that blends comfort and elegance effortlessly.",

  showPriceCTA: true,
  price: 25.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["summer-style", "dressy-casual", "elegant-look"],
  tag: "Satin One Shoulder Ruched Top",

  images: [
    "/onboarding/vidussa-off-shoulder-top-product.jpg",
    "/onboarding/vidussa-off-shoulder-top-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4awiNh5"
},

// {
//   id: "p91",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },
{
  id: "p92",
  slug: "blooming-jelly-womens-pleated-business-casual-blouse",
  name: "Blooming Jelly Womens Pleated Business Casual Top",
  brand: "Blooming Jelly",
  description:
    "Lightweight and breathable short sleeve blouse crafted from soft textured fabric for all-day summer comfort. Designed with a flattering crew neck, cap sleeves, curved hem, elegant pleated details, and a subtle gold clasp accent. The relaxed fit creates a polished yet effortless look, perfect for business casual outfits, office wear, or dressy everyday styling.",

  showPriceCTA: true,
  price: 26.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["business-casual", "summer-style", "comfortable-fit"],
  tag: "Pleated Short Sleeve Work Blouse",

  images: [
    "/onboarding/blooming-jelly-blouse-black-product.jpg",
    "/onboarding/blooming-jelly-blouse-black-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4tNXdfv"
},

// {
//   id: "p93",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },
{
  id: "p94",
  slug: "blooming-jelly-womens-pleated-business-casual-blouse",
  name: "Blooming Jelly Womens Pleated Business Casual Top",
  brand: "Blooming Jelly",
  description:
    "Lightweight and breathable short sleeve blouse crafted from soft textured fabric for all-day summer comfort. Designed with a flattering crew neck, cap sleeves, curved hem, elegant pleated details, and a subtle gold clasp accent. The relaxed fit creates a polished yet effortless look, perfect for business casual outfits, office wear, or dressy everyday styling.",

  showPriceCTA: true,
  price: 26.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["business-casual", "summer-style", "comfortable-fit"],
  tag: "Pleated Short Sleeve Work Blouse",

  images: [
    "/onboarding/blooming-jelly-blouse-product.jpg",
    "/onboarding/blooming-jelly-blouse-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/3MXRKlA"
},
{
  id: "p95",
  slug: "allegra-k-boho-eyelet-high-waist-midi-skirt",
  name: "Allegra K Boho Eyelet High Waist Midi Skirt",
  brand: "Allegra K",
  description:
    "Elegant high-waisted midi skirt crafted with a breathable cotton shell and soft lining for comfort. Designed with delicate embroidered eyelet details, a flattering A-line silhouette, and a flowy swing shape. Features a back elastic waistband and side zipper for a secure and comfortable fit. Perfect for vacation outfits, beach days, parties, or special summer occasions.",

  showPriceCTA: true,
  price: 69.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["boho-style", "summer-fashion", "flowy-silhouette"],
  tag: "Boho Eyelet Midi Skirt",

  images: [
    "/onboarding/allegra-k-eyelet-skirt-product.jpg",
    "/onboarding/allegra-k-eyelet-skirt-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/3OrGIWh"
},

{
  id: "p96",
  slug: "abardsion-cotton-long-sleeve-basic-tee",
  name: "Abardsion Cotton Long Sleeve Basic Tee",
  brand: "Abardsion",
  description:
    "Soft and stretchy long sleeve cotton tee crafted from a breathable cotton-spandex blend for all-day comfort. Designed with a classic crew neck, slim fit silhouette, and solid color style that layers effortlessly under jackets and cardigans. A versatile year-round base layer perfect for casual wear, office outfits, or everyday styling from fall to spring.",

  showPriceCTA: true,
  price: 24.99,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["basic-layer", "soft-fabric", "all-season"],
  tag: "Slim Fit Cotton Long Sleeve Tee",

  images: [
    "/onboarding/abardsion-long-sleeve-tee-product.jpg",
    "/onboarding/abardsion-long-sleeve-tee-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/40pvMuS"
},
// {
//   id: "p97",
//   slug: "everest-classic-backpack-eggplant-purple",
//   name: "Everest Classic Backpack",
//   brand: "Generic",
//   description:
//     "Lightweight classic backpack made from durable 600D polyester with spacious main compartment and front zipper pocket. Ideal for school, work, travel, and everyday use.",
//   price: null,
//   showPriceCTA: true,
//     // price: 64.99,
//   currency: "CAD",
//   budget: "$$",
//   category: "bags",
//   concerns: ["daily-use", "lightweight", "storage"],
//   tag: "Classic Backpack",
//   images: [
//     "/onboarding/everest-backpack-front.jpg",
//     // "/onboarding/everest-backpack-front-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4kr0iOj"
// },
{
  id: "p98",
  slug: "womens-floral-summer-short-sleeve-sundress",
  name: "Womens Floral Summer Short Sleeve Sundress",
  brand: "Generic",
  description:
    "Lightweight and breathable floral summer dress designed with a flattering round neckline and flowy silhouette. Made from soft, comfortable fabric for all-day wear. Perfect for beach days, summer parties, vacations, or evening occasions. A versatile and elegant dress that transitions effortlessly from casual daytime looks to dressy events.",

  showPriceCTA: true,
  price: 35.49,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["summer-style", "flowy-fit", "party-ready"],
  tag: "Floral Short Sleeve Summer Dress",

  images: [
    "/onboarding/floral-summer-dress-product.jpg",
    "/onboarding/floral-summer-dress-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4tUn8lS"
},

{
  id: "p99",
  slug: "leiyee-womens-batwing-crew-neck-knit-sweater",
  name: "LEIYEE Womens Batwing Crew Neck Knit Sweater",
  brand: "LEIYEE",
  description:
    "Lightweight rib-knit pullover sweater designed with a classic crew neck and stylish batwing dolman sleeves with button details. Features a drop shoulder silhouette and relaxed fit for a soft, comfortable feel. Perfect for fall, winter, and spring styling, easily paired with jeans, skirts, leggings, or layered under jackets for a dressy casual look.",

  showPriceCTA: true,
  price: 38.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["casual-style", "soft-knit", "all-season"],
  tag: "Batwing Button Detail Sweater",

  images: [
    "/onboarding/leiyee-sweater-product.jpg",
    "/onboarding/leiyee-sweater-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4tMeu8M"
},


{
  id: "p100",
  slug: "michael-kors-womens-raina-trainer",
  name: "Michael Kors Womens Raina Trainer",
  brand: "Michael Kors",
  description:
    "Sport-luxe lace-up trainer designed in a classic running silhouette with signature logo-print canvas and metallic accents. Crafted with multi-textured leather details and a durable rubber sole for style and comfort. Perfect for city streets, weekend errands, or casual-chic outfits that blend luxury with everyday wear.",

  showPriceCTA: true,
  price: 118.17,
  currency: "CAD",
  budget: "$$$",
  category: "shoes",
  concerns: ["luxury-style", "everyday-comfort", "streetwear"],
  tag: "Signature Logo Raina Trainer",

  images: [
    "/onboarding/michael-kors-raina-trainer-product.jpg",
    "/onboarding/michael-kors-raina-trainer-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4cMVoct"
},
{
  id: "p101",
  slug: "dream-pairs-espadrille-platform-wedge-sandals",
  name: "Dream Pairs Womens Espadrille Platform Wedge Sandals",
  brand: "DREAM PAIRS",
  description:
    "Chic open-toe espadrille platform wedge sandals designed to elevate your summer style. Featuring a 3.2-inch wedge heel, elastic ankle straps for a secure fit, and a soft PU-covered latex insole for all-day cushioning. The textured thermoplastic rubber sole provides stability and support, making them perfect for both casual and dressy occasions.",

  showPriceCTA: true,
  price: 49.99,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["summer-style", "comfortable-heel", "dressy-casual"],
  tag: "Espadrille Platform Wedges",

  images: [
    "/onboarding/dream-pairs-wedges-product.jpg",
    "/onboarding/dream-pairs-wedges-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4tPiWUj"
},

{
  id: "p102",
  slug: "shoe-land-deverena-low-heel-mule-sandals",
  name: "Shoe Land Deverena Low Heel Mule Sandals",
  brand: "Shoe Land",
  description:
    "Elegant open-toe mule sandals designed with a wide single strap and a chic 2.75-inch kitten heel. Featuring a convenient slip-on style, cushioned insole, and slip-resistant outsole for confident, all-day wear. These versatile low heels pair effortlessly with dresses, skirts, or jeans—perfect for weddings, parties, vacations, or everyday style.",

  showPriceCTA: true,
  price: 57.89,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["comfortable-heel", "dressy-style", "easy-slip-on"],
  tag: "Open Toe Kitten Heel Mules",

  images: [
    "/onboarding/shoe-land-mule-heels-product.jpg",
    "/onboarding/shoe-land-mule-heels-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/3MJOsCu"
},

{
  id: "p103",
  slug: "dream-pairs-karrie-high-stiletto-pump-sandals",
  name: "DREAM PAIRS Women's Karrie High Stiletto Pump Sandals",
  brand: "DREAM PAIRS",
  description:
    "Classic open-toe high stiletto sandals designed to elevate your look with a sleek silhouette and trendy color options. Featuring a 4.5-inch heel with a subtle 0.25-inch platform for added balance. Crafted with a durable TPR rubber sole and latex padded insole for enhanced comfort and stability. Perfect for parties, formal events, and elegant evening styling.",

  showPriceCTA: true,
  price: 74.01,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["high-heel-style", "evening-wear", "comfortable-padding"],
  tag: "High Stiletto Open Toe Heels",

  images: [
    "/onboarding/dream-pairs-karrie-heels-product.jpg",
    "/onboarding/dream-pairs-karrie-heels-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/3MSpm4p"
},


// {
//   id: "p104",
//   slug: "abardsion-cotton-long-sleeve-base-layer-top",
//   name: "Abardsion Cotton Long Sleeve Base Layer Top",
//   brand: "Abardsion",
//   description:
//     "Soft and stretchy long sleeve cotton tee crafted from a breathable 95% cotton and 5% spandex blend. Designed with a classic crew neckline and slim fit silhouette for comfortable layering. Lightweight, skin-friendly, and versatile—perfect as a base layer under jackets or cardigans or styled on its own for casual and business casual outfits year-round.",

//   showPriceCTA: true,
//   price: 24.99,
//   currency: "CAD",
//   budget: "$",
//   category: "clothing",
//   concerns: ["basic-layer", "soft-fabric", "all-season"],
//   tag: "Slim Fit Cotton Long Sleeve Top",

//   images: [
//     "/onboarding/abardsion-base-layer-product.jpg",
//     "/onboarding/abardsion-base-layer-model.jpg"
//   ],

//   affiliateUrl: "https://amzn.to/40pvMuS"
// },

{
  id: "p105",
  slug: "spring-seaon-womens-chiffon-button-down-blouse",
  name: "SPRING SEAON Women's Chiffon Button Down Blouse",
  brand: "SPRING SEAON",
  description:
    "Classic long sleeve chiffon blouse crafted from lightweight textured polyester fabric that is soft, breathable, and not see-through. Designed with a collared neckline, button-down front, and straight fit silhouette that flatters without feeling tight. The curved hem adds a polished touch, making it perfect for business casual, office wear, or everyday styling.",

  showPriceCTA: true,
  price: 36.99,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["business-casual", "lightweight-fabric", "office-style"],
  tag: "Chiffon Collared Button Down Shirt",

  images: [
    "/onboarding/spring-seaon-blouse-product.jpg",
    "/onboarding/spring-seaon-blouse-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/3OBOvAL"
},
{
  id: "p106",
  slug: "oxzksnkey-y2k-halter-backless-tank-top",
  name: "OXZKSNKEY Y2K Halter Backless Tank Top",
  brand: "OXZKSNKEY",
  description:
    "Trendy Y2K-inspired halter tank top featuring a high mock neck and open back design. Crafted from soft, lightweight, and stretchy polyester for a slim and flattering fit. This sleeveless crop cami adds a bold, stylish touch to your summer wardrobe—perfect for nights out, beach days, vacations, or casual outings.",

  showPriceCTA: true,
  price: 32.99,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["y2k-style", "summer-style", "going-out"],
  tag: "Backless High Neck Halter Top",

  images: [
    "/onboarding/oxzksnkey-halter-top-product.jpg",
    "/onboarding/oxzksnkey-halter-top-model.jpeg"
  ],

  affiliateUrl: "https://amzn.to/4b3X1RN"
},

{
  id: "p107",
  slug: "zawapemia-womens-striped-color-block-tshirt",
  name: "ZAWAPEMIA Women's Striped Color Block T-Shirt",
  brand: "ZAWAPEMIA",
  description:
    "Casual striped crew neck T-shirt featuring a trendy triple color block design and relaxed fit silhouette. Made from a soft and stretchy cotton-polyester blend for all-day comfort. Designed with short sleeves and a curved hem, perfect for pairing with jeans, leggings, or layering with a denim jacket for effortless everyday style.",

  showPriceCTA: true,
  price: 15.99,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["casual-style", "comfortable-fit", "everyday-wear"],
  tag: "Striped Color Block Casual Tee",

  images: [
    "/onboarding/zawapemia-striped-tee-product.jpg",
    "/onboarding/zawapemia-striped-tee-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/3OrH1Ap"
},



{
  id: "p108",
  slug: "adidas-womens-grand-court-2-sneakers",
  name: "Adidas Women's Grand Court 2.0",
  brand: "adidas",
  description:
    "Classic lifestyle sneakers inspired by iconic court style. Designed with a synthetic leather upper, lace closure, and Cloudfoam Comfort sockliner for cushioned support throughout the day. Featuring a timeless silhouette that pairs effortlessly with any outfit, these sneakers combine everyday comfort with sporty tradition. Made with at least 50% recycled materials for a more sustainable choice.",

  showPriceCTA: true,
  price: 62.98,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["everyday-comfort", "classic-style", "sporty-look"],
  tag: "#1 Best Seller Classic Sneakers",

  images: [
    "/onboarding/adidas-grand-court-product.jpg",
    "/onboarding/adidas-grand-court-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4kYOTFS"
},

{
  id: "p109",
  slug: "under-armour-mens-tech-2-short-sleeve-tshirt",
  name: "Under Armour Mens Tech 2.0 Short-Sleeve T-Shirt",
  brand: "Under Armour",
  description:
    "Lightweight performance T-shirt made with UA Tech fabric for a quick-drying, ultra-soft feel. Designed to wick sweat and dry fast while featuring anti-odor technology to help prevent unwanted smells. The streamlined fit and shaped hem offer a modern athletic silhouette, making it ideal for training, workouts, or everyday active wear.",

  showPriceCTA: true,
  price: 43.79,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["activewear", "quick-dry", "performance-fit"],
  tag: "UA Tech Performance Tee",

  images: [
    "/onboarding/under-armour-tech-shirt-product.jpg",
    "/onboarding/under-armour-tech-shirt-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4s3t3TD"
},

{
  id: "p110",
  slug: "adidas-womens-run-70s-2-sneakers",
  name: "adidas Women's Run 70s 2.0",
  brand: "adidas",
  description:
    "Classic and stylish women's sneakers designed with a durable leather upper and secure lace-up closure. Featuring Cloudfoam cushioning for all-day comfort and a rubber outsole that provides reliable traction. Perfect for everyday wear, these versatile sneakers complete casual looks with sporty flair.",

  showPriceCTA: true,
  price: 95.00,
  currency: "CAD",
  budget: "$$",
  category: "shoes",
  concerns: ["everyday-comfort", "sporty-style", "casual-wear"],
  tag: "Run 70s Lifestyle Sneakers",

  images: [
    "/onboarding/adidas-run-70s-product.jpg",
    "/onboarding/adidas-run-70s-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/3MNZWVA"
},



{
  id: "p111",
  slug: "tacvasen-mens-classic-cotton-crew-neck-tshirt",
  name: "TACVASEN Mens Classic Cotton Crew Neck T-Shirt",
  brand: "TACVASEN",
  description:
    "Classic short sleeve crew neck T-shirt made from 100% soft, breathable cotton for lightweight comfort. Designed with durable stitching and a resilient fit for long-lasting wear. A versatile wardrobe essential that pairs effortlessly with jeans, slacks, or shorts for a simple and timeless casual look.",

  showPriceCTA: true,
  price: 29.98,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["basic-tee", "breathable-fabric", "everyday-wear"],
  tag: "Classic Cotton Crew Neck Tee",

  images: [
    "/onboarding/tacvasen-cotton-tee-product.jpg",
    "/onboarding/tacvasen-cotton-tee-model.jpg"
  ],

  affiliateUrl: "https://amzn.to/4stIlBF"
}

]