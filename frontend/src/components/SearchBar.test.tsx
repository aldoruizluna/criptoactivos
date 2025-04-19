import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import React from 'react';

describe('SearchBar', () => {
  it('renderiza el input de búsqueda', () => {
    render(<SearchBar value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Buscar proyectos...')).toBeInTheDocument();
  });

  it('llama a onChange cuando se escribe', async () => {
    const onChange = jest.fn();
    render(<SearchBar value="" onChange={onChange} />);
    const input = screen.getByPlaceholderText('Buscar proyectos...');
    await userEvent.type(input, 'Binance');
    expect(onChange).toHaveBeenCalled();
  });
});
