import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import theme from 'core/services/theme';

import {
  StoryContainer,
  Image,
  ImageSide,
  TextSide,
  Title,
  Info,
} from '../styles';

describe('StoryItem styles', () => {
  describe('StoryContainer', () => {
    it('renders correctly', () => {
      const { container } = render(
        <StoryContainer theme={theme}>Content</StoryContainer>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('has correct styles', () => {
      const { container } = render(
        <StoryContainer theme={theme}>Content</StoryContainer>,
      );
      expect(container.firstChild).toHaveStyleRule('display', 'flex');
      expect(container.firstChild).toHaveStyleRule('width', '50%');
      expect(container.firstChild).toHaveStyleRule('width', '100%', {
        media: `(max-width:${theme.breakpoints.md}px)`,
      });
      expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap', {
        media: `(max-width:${theme.breakpoints.sm}px)`,
      });
      expect(container.firstChild).toHaveStyleRule('width', '33%', {
        media: `(min-width:${theme.breakpoints.xl}px)`,
      });
    });
  });
  describe('Image', () => {
    it('renders correctly', () => {
      const { container } = render(<Image />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('has correct styles', () => {
      const { container } = render(<Image />);
      expect(container.firstChild).toHaveStyleRule('height', 'auto');
      expect(container.firstChild).toHaveStyleRule('max-width', '100%');
    });
  });
  describe('ImageSide', () => {
    it('renders correctly', () => {
      const { container } = render(
        <ImageSide theme={theme}>Content</ImageSide>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('has correct styles', () => {
      const { container } = render(
        <ImageSide theme={theme}>Content</ImageSide>,
      );
      expect(container.firstChild).toHaveStyleRule('padding', '5px');
      expect(container.firstChild).toHaveStyleRule('width', '50%');
      expect(container.firstChild).toHaveStyleRule('width', '100%', {
        media: `(max-width:${theme.breakpoints.sm}px)`,
      });
    });
  });
  describe('TextSide', () => {
    it('renders correctly', () => {
      const { container } = render(<TextSide theme={theme}>Content</TextSide>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('has correct styles', () => {
      const { container } = render(<TextSide theme={theme}>Content</TextSide>);
      expect(container.firstChild).toHaveStyleRule('padding', '15px');
      expect(container.firstChild).toHaveStyleRule('width', '50%');
      expect(container.firstChild).toHaveStyleRule('width', '100%', {
        media: `(max-width:${theme.breakpoints.sm}px)`,
      });
    });
  });
  describe('Title', () => {
    it('renders correctly', () => {
      const { container } = render(<Title theme={theme}>Content</Title>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('has correct styles', () => {
      const { container } = render(<Title theme={theme}>Content</Title>);
      expect(container.firstChild).toHaveStyleRule('color', theme.colors.main);
      expect(container.firstChild).toHaveStyleRule('font-family', theme.font);
      expect(container.firstChild).toHaveStyleRule('font-size', '1.125rem');
      expect(container.firstChild).toHaveStyleRule('text-decoration', 'none');
      expect(container.firstChild).toHaveStyleRule('font-weight', '700');
      expect(container.firstChild).toHaveStyleRule('display', 'block');
      expect(container.firstChild).toHaveStyleRule('margin-bottom', '10px');
      expect(container.firstChild).toHaveStyleRule(
        'text-decoration',
        'underline',
        {
          modifier: ':hover',
        },
      );
    });
  });
  describe('Info', () => {
    it('renders correctly', () => {
      const { container } = render(<Info theme={theme}>Content</Info>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('has correct styles', () => {
      const { container } = render(<Info theme={theme}>Content</Info>);
      expect(container.firstChild).toHaveStyleRule(
        'color',
        theme.colors.secondary,
      );
      expect(container.firstChild).toHaveStyleRule('font-family', theme.font);
      expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem');
      expect(container.firstChild).toHaveStyleRule('font-weight', '300');
      expect(container.firstChild).toHaveStyleRule('margin-bottom', '5px');
    });
  });
});
