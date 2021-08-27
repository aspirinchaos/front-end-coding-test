import styled, { css } from 'styled-components';

export const StoryContainer = styled.div`
  display: flex;
  width: 50%;
  ${(p) => p.theme.max('md')`
    width: 100%;
  `};
  ${(p) => p.theme.min('xl')`
    width: 33%;
  `};
  ${(p) => p.theme.max('sm')`
    flex-wrap: wrap;
  `};
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const side = css`
  width: 50%;
  ${(p) => p.theme.max('sm')`
    width: 100%;
  `};
`;

export const ImageSide = styled.div`
  padding: 5px;
  ${side};
`;

export const TextSide = styled.div`
  padding: 15px;
  ${side};
`;

export const Title = styled.a`
  color: ${(p) => p.theme.colors.main};
  font-size: 1.125rem;
  text-decoration: none;
  font-family: ${(p) => p.theme.font};
  font-weight: 700;
  display: block;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Info = styled.div`
  color: ${(p) => p.theme.colors.secondary};
  font-family: ${(p) => p.theme.font};
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 5px;
`;
