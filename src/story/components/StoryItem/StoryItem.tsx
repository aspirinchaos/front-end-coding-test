import React from 'react';

import IMAGE from 'core/assets/image.png';
import { Story } from 'story/services/declarations';

import { Flex, CalendarIcon, KarmaIcon, StarIcon, UserIcon } from 'core/atoms';
import formatTimestamp from 'core/services/format-timestamp';
import {
  StoryContainer,
  Image,
  ImageSide,
  TextSide,
  Title,
  Info,
} from './styles';

interface StoryItemProps {
  story: Story;
}

const StoryItem: React.FC<StoryItemProps> = ({ story }) => (
  <StoryContainer>
    <ImageSide>
      <Image src={IMAGE} />
    </ImageSide>
    <TextSide>
      <Title href={story.url} target={'_blank'}>
        {story.title}
      </Title>
      <Flex justifyContent={'space-between'}>
        <Info>
          <CalendarIcon /> {formatTimestamp(story.timestamp)}
        </Info>
        <Info>
          <StarIcon /> {story.score}
        </Info>
      </Flex>
      <Flex justifyContent={'space-between'}>
        <Info>
          <UserIcon /> {story.authorId}
        </Info>
        <Info>
          <KarmaIcon /> {story.authorKarma}
        </Info>
      </Flex>
    </TextSide>
  </StoryContainer>
);

export default StoryItem;
