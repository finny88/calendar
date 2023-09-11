/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Copyright } from './Copyright';

test('renders copyright', () => {
  const { getByText } = render(<Copyright />);
  const linkElement = getByText(/Copyright/i);
  expect(linkElement).toBeDefined();
});
