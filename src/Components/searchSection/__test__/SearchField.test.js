import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const SearchField = () => (
  <div className="container">
    SearchField
  </div>
);

describe('SearchField', () => {
  test('render React component', () => {
    render(<SearchField />);
    expect(screen.getByText('SearchField')).toBeInTheDocument();
  });
});
