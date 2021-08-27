import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  fullWidth?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(p) => p.direction || 'row'};
  align-items: ${(p) => p.alignItems || 'flex-start'};
  justify-content: ${(p) => p.justifyContent || 'flex-start'};
  flex-wrap: ${(p) => p.wrap || 'nowrap'};
  ${(p) => (p.fullWidth ? 'width: 100%' : '')};
`;

export default Flex;
