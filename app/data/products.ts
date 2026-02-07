export type Product = {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: "skincare" | "haircare" | "bags" | "accessories" | "clothing";
  concerns: string[];
  price: number;               // real price
  currency?: "USD" | "CAD";    
  budget: "$" | "$$" | "$$$";  //  stays for filters & quiz
  description: string;
  images?: string[];
  tag?: string;
  affiliateUrl: string;
};

const budgetFromPrice = (price: number) => {
  if (price < 35) return "$";
  if (price < 80) return "$$";
  return "$$$";
};


export const products: Product[] = [
  {
  id: "p1",
  slug: "clinique-smart-repair-face-neck-cream",
  brand: "Clinique",
  name: "Clinique Smart Repair Face & Neck Cream",
  category: "skincare",
  concerns: ["wrinkles", "firmness", "hydration"],
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
  category: "clothing",
  concerns: ["winter", "warmth", "everyday"],
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
  category: "clothing",
  concerns: ["winter", "outdoor", "warmth"],
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
  price: 54.99,
  currency: "CAD",
  budget: "$",
  category: "clothing",
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
  price: 129.33,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
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
  price: 67.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
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
  price: 79.37,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["party", "formal", "evening"],
  tag: "Elegant heels",
  images: [
    "/onboarding/aisicoo-heels.jpg",
    "/onboarding/aisicoo-heels-model.png"
  ],
  affiliateUrl: "https://amzn.to/4pYqqkH"
}, 


{
  id: "p29",
  slug: "dream-pairs-platform-mini-winter-boots",
  name: "DREAM PAIRS Platform Mini Winter Boots",
  brand: "DREAM PAIRS",
  description:
    "Cozy platform mini snow boots crafted in soft suede with plush faux-fur lining and a cushioned memory foam insole for warmth, comfort, and everyday winter wear.",
  price: 54.99,
  currency: "CAD",
  budget: "$",
  category: "clothing",
  concerns: ["warmth", "winter", "comfort", "outdoor"],
  tag: "Winter essential",
  images: [
     "/onboarding/dreampairs-mini.jpeg",
    "/onboarding/dreampairs-mini-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/3ZAB5ak"
},
{
  id: "p30",
  slug: "bellroy-tokyo-wonder-tote-15l",
  name: "Bellroy Tokyo Wonder Tote (15L)",
  brand: "Bellroy",
  description:
    "A sleek everyday tote with smart internal organization, a padded 16-inch laptop sleeve, and a wide zip opening, crafted from durable water-resistant materials.",
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
  price: 62.99,
  currency: "CAD",
  budget: "$$",
  category: "clothing",
  concerns: ["cold-weather", "slip-resistance", "comfort"],
  tag: "Winter Chelsea Boots",
  images: [
    "/onboarding/chelsea-boots-front.jpeg",
    "/onboarding/chelsea-boots-model.jpeg"
  ],
  affiliateUrl: "https://amzn.to/4q8mbmU"
}

];

