export const TOP_STORIES_URL =
  'https://hacker-news.firebaseio.com/v0/topstories.json';

export const STORY_ITEM_URL = (id: number): string =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export const USER_URL = (id: string): string =>
  ` https://hacker-news.firebaseio.com/v0/user/${id}.json`;
