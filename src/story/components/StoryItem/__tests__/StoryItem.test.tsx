import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import theme from 'core/services/theme';
import { Story } from 'story/services/declarations';

import StoryItem from '..';

const mockStory: Story = {
  authorId: 'authorId',
  authorKarma: 1000,
  id: 77777777,
  score: 100,
  timestamp: 1629888872,
  title: 'Test story item',
  url: 'https://test.story/article',
};

describe('StoryItem component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <StoryItem story={mockStory} />
      </ThemeProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
