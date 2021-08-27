import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { SvgIcon } from '..';

describe('SvgIcon atom', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SvgIcon width={100} height={100}>
        <path />
      </SvgIcon>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
