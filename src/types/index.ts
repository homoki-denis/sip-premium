import {
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
} from "../constants";

export type NavLink = (typeof NAV_LINKS)[number];
export type CocktailList = (typeof COCKTAIL_LIST)[number];
export type MocktailList = (typeof MOCKTAIL_LIST)[number];
export type ProfileList = (typeof PROFILE_LIST)[number];
export type FeatureList = (typeof FEATURE_LIST)[number];
export type GoodList = (typeof GOOD_LIST)[number];
export type OpeningHours = (typeof OPENING_HOURS)[number];
export type StoreInfo = typeof STORE_INFO;
export type Socials = (typeof SOCIALS)[number];
export type AllCocktails = (typeof ALL_COCKTAILS)[number];
