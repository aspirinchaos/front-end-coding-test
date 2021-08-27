import { toast } from 'react-toastify';

import { TOP_STORIES_URL, STORY_ITEM_URL, USER_URL } from './constants';
import { Story, StoryItem, User } from './declarations';

const fetch10Stories = async (): Promise<number[]> => {
  const response = await fetch(TOP_STORIES_URL);
  const data = await response.json();
  return data.sort(() => 0.5 - Math.random()).slice(0, 10);
};

const fetchStoryItem = async (id: number): Promise<StoryItem> => {
  const response = await fetch(STORY_ITEM_URL(id));
  return response.json();
};

const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(USER_URL(id));
  return response.json();
};

const fetchStories = async (): Promise<Story[]> => {
  try {
    const storiesIds = await fetch10Stories();
    const stories = await Promise.all(
      storiesIds.map(async (id) => {
        const story = await fetchStoryItem(id);
        const author = await fetchUser(story.by);

        return {
          id,
          title: story.title,
          url: story.url,
          timestamp: story.time,
          score: story.score,
          authorId: story.by,
          authorKarma: author.karma,
        };
      }),
    );

    return stories.sort((a, b) => a.score - b.score);
  } catch (error) {
    toast.error('Something went wrong with API');
    return [];
  }
};

export default fetchStories;
