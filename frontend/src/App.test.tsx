import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renderiza la introducción y layout principal', () => {
    render(<App />);
    expect(screen.getByText('La Guía Definitiva de Web3 y Crypto para Hispanohablantes')).toBeInTheDocument();
    // Puede aparecer más de una vez (header y strong)
    expect(screen.getAllByText('Criptoactivos.Wiki').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Categorías')).toBeInTheDocument();
    expect(screen.getByText('Filtros')).toBeInTheDocument();
  });
});
