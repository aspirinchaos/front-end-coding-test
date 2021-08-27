import React from 'react';

import useStories from 'story/services/use-stories';

import { Flex } from 'core/atoms';
import StoryItem from 'story/components/StoryItem';

const StoriesPage: React.FC = () => {
  const stories = useStories();

  return (
    <Flex fullWidth wrap={'wrap'}>
      {stories.map((story) => (
        <StoryItem key={story.id} story={story} />
      ))}
    </Flex>
  );
};

export default StoriesPage;
