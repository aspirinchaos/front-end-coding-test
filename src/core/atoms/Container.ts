import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  ${(p) => p.theme.min('xl')`
    max-width: fit-content;
    padding: 0 50px;
  `};
`;

export default Container;
