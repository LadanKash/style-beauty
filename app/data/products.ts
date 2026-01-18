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
      "Lifted, firmer, youthful-looking skin — a silky cream that visibly smooths lines and restores firmness for face and neck.",
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
    concerns: ["hydration", "wrinkles", "firmness", "puffiness", "dark-circles"],
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
    price: 106.00,
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
  price: 212.0,
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


];

