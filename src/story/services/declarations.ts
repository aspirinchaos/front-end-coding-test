export interface StoryItem {
  by: string;
  score: number;
  title: string;
  url: string;
  time: number;
}

export interface User {
  id: string;
  karma: number;
}

export interface Story {
  id: number;
  title: string;
  url: string;
  timestamp: number;
  score: number;
  authorId: string;
  authorKarma: number;
}
