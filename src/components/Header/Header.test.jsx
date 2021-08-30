import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DataProvider } from '../../providers/Context/DataContext';
import { lightTheme } from '../../utils/themes';
import Header from './Header.component';

beforeEach(() => {
  render(
    <HashRouter>
      <DataProvider>
        <ThemeProvider theme={lightTheme}>
          <Header />
        </ThemeProvider>
      </DataProvider>
    </HashRouter>
  );
});

describe('Header tests', () => {
  test('should render the logo', () => {
    const logoFirstPart = screen.getByText('Wize');
    const logoSecondPart = screen.getByText('line');
    expect(logoFirstPart).toBeInTheDocument();
    expect(logoSecondPart).toBeInTheDocument();
  });

  test('should render search input', () => {
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  test('should render the toggle', () => {
    const toggler = screen.getByTestId('Toggle');
    expect(toggler).toBeInTheDocument();
  });
});
