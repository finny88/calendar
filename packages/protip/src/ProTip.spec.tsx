/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { ProTip } from './ProTip';

test('renders ProTip', () => {
  const { getByText } = render(<ProTip />);
  const linkElement = getByText(/Mui/i);
  expect(linkElement).toBeDefined();
});
