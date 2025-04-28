export interface Message {
  text: string;
  games: Game[];
  role: "user" | "assistant";
  date: Date;
}

export interface Game {
  slug: string;
  name: string;
  playtime: number;
  platforms: Platform[];
  stores: StoreElement[];
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number | null;
  suggestions_count: number;
  updated: Date;
  id: number;
  score: string;
  clip: null;
  tags: Tag[];
  esrb_rating: EsrbRating | null;
  user_game: null;
  reviews_count: number;
  saturated_color: Color;
  dominant_color: Color;
  short_screenshots: ShortScreenshot[];
  parent_platforms: Platform[];
  genres: Genre[];
  storeLinks: StoreLink[];
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export enum Color {
  The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
  id: number;
  name: Name;
  slug: Slug;
  name_en: Name;
  name_ru: NameRu;
}

export enum Name {
  Mature = "Mature",
  RatingPending = "Rating Pending",
  Teen = "Teen",
}

export enum NameRu {
  РейтингОбсуждается = "Рейтинг обсуждается",
  С13Лет = "С 13 лет",
  С17Лет = "С 17 лет",
}

export enum Slug {
  Mature = "mature",
  RatingPending = "rating-pending",
  Teen = "teen",
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Platform {
  platform: Genre;
}

export interface Rating {
  id: number;
  title: Title;
  count: number;
  percent: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface StoreLink {
  id: number;
  game_id: number;
  store_id: number;
  url: string;
  store: StoreLinkStore;
}

export interface StoreLinkStore {
  id: number;
  name: string;
}

export interface StoreElement {
  store: Genre;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: Language;
  games_count: number;
  image_background: string;
}

export enum Language {
  Eng = "eng",
  Rus = "rus",
}
