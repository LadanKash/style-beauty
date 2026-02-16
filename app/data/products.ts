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
//   slug: "dream-pairs-platform-mini-winter-boots",
//   name: "DREAM PAIRS Platform Mini Winter Boots",
//   brand: "DREAM PAIRS",
//   description:
//     "Cozy platform mini snow boots crafted in soft suede with plush faux-fur lining and a cushioned memory foam insole for warmth, comfort, and everyday winter wear.",
//   price: 54.99,
//   currency: "CAD",
//   budget: "$",
//   category: "clothing",
//   concerns: ["warmth", "winter", "comfort", "outdoor"],
//   tag: "Winter essential",
//   images: [
//      "/onboarding/dreampairs-mini.jpeg",
//     "/onboarding/dreampairs-mini-model.jpeg"
//   ],
//   affiliateUrl: "https://amzn.to/3ZAB5ak"
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
//   slug: "guess-ladies-silver-gold-bracelet-watch",
//   name: "Guess Ladies Dress Silver & Gold Tone Stainless Steel Bracelet Watch",
//   brand: "Guess",
//   description:
//     "Elegant and petite two-tone stainless steel watch featuring a polished silver and gold case with crystal accents, sunray white dial, and quartz analog movement. Perfect for both everyday wear and dress occasions.",
//   price: null,
//   showPriceCTA: true,
//     // price: 133.98, 
//   currency: "CAD",
//   budget: "$$",
//   category: "accessories",
//   concerns: ["elegant-style", "everyday-wear", "lightweight"],
//   tag: "Two-Tone Crystal Watch",
//  images: [
//     // "/onboarding/guess-gold-watch-front.jpeg",
//     "/onboarding/guess-gold-watch-model.png"
//   ],
//   affiliateUrl: "https://amzn.to/4qjhVB3"
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
//   slug: "womens-long-sleeve-peplum-bodycon-midi-work-dress",
//   name: "Women's Long Sleeve Peplum Bodycon Midi Dress",
//   brand: "Generic",
//   description:
//     "Elegant slim-fit midi dress featuring a classic crew neckline, long sleeves, and flattering high-waisted peplum detail. Designed with a concealed back zipper and body-hugging silhouette for a polished professional look. Perfect for office wear, business meetings, interviews, church, or formal casual occasions.",
//   price: 69.99,
//   showPriceCTA: true,
//     // price: 0, 
//   currency: "CAD",
//   budget: "$$",
//   category: "clothing",
//   concerns: ["office-style", "formal-wear", "slimming-fit", "work-outfit"],
//   tag: "Peplum Bodycon Work Dress",
//   images: [
//     // "/onboarding/peplum-midi-dress-front.jpg",
//     // "/onboarding/peplum-midi-dress-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4r2572S"
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
  category: "clothing",
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
//   slug: "womens-winter-hooded-puffer-jacket-insulated",
//   name: "Women's Winter Hooded Puffer Jacket",
//   brand: "Generic",
//   description:
//     "Warm and lightweight winter puffer jacket designed with advanced insulation to block cold air. Features a detachable hood, windproof cuffs, and water- and stain-repellent fabric for reliable cold-weather protection. Includes multiple secure pockets and durable recyclable polyester construction, making it perfect for daily wear and outdoor winter activities.",
//   price: null,
//   showPriceCTA: true,
//     // price: 0, 
//   currency: "CAD",
//   budget: "$$",
//   category: "clothing",
//   concerns: ["cold-weather", "water-resistant", "outdoor-activities", "comfort"],
//   tag: "Winter Puffer Jacket",
//   images: [
//     // "/onboarding/womens-puffer-jacket-front.jpg",
//     // "/onboarding/womens-puffer-jacket-model.jpg"
//   ],
//   affiliateUrl: "https://amzn.to/4tuSsYb"
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

}

]