import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const HeroSection = () => (
  <div class="container">
    HeroSection
  </div>
);

describe('HeroSection', () => {
  test('render React component', () => {
    render(<HeroSection />);
    expect(screen.getByText('HeroSection')).toBeInTheDocument();
  });
});