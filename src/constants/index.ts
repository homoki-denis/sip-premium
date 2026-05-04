const NAV_LINKS = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
] as const;

const COCKTAIL_LIST = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Caten Malbee",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
] as const;

const MOCKTAIL_LIST = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
] as const;

const PROFILE_LIST = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
] as const;

const FEATURE_LIST = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
] as const;

const GOOD_LIST = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
] as const;

const STORE_INFO = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
} as const;

const OPENING_HOURS = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
] as const;

const SOCIALS = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
] as const;

const ALL_COCKTAILS = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
] as const;

export {
  NAV_LINKS,
  COCKTAIL_LIST,
  MOCKTAIL_LIST,
  PROFILE_LIST,
  FEATURE_LIST,
  GOOD_LIST,
  OPENING_HOURS,
  STORE_INFO,
  SOCIALS,
  ALL_COCKTAILS,
};
