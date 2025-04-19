import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('muestra todas las categorías principales', () => {
    render(<Sidebar />);
    expect(screen.getByText('Destacados')).toBeInTheDocument();
    expect(screen.getByText('Exchanges')).toBeInTheDocument();
    expect(screen.getByText('DeFi')).toBeInTheDocument();
    expect(screen.getByText('NFT')).toBeInTheDocument();
    expect(screen.getByText('Layer 1/2')).toBeInTheDocument();
    expect(screen.getByText('Wallets')).toBeInTheDocument();
    expect(screen.getByText('Staking')).toBeInTheDocument();
    expect(screen.getByText('Lending')).toBeInTheDocument();
    expect(screen.getByText('Para Hispanohablantes')).toBeInTheDocument();
  });

  it('muestra todos los filtros principales', () => {
    render(<Sidebar />);
    expect(screen.getByLabelText('Comisión mínima')).toBeInTheDocument();
    expect(screen.getByLabelText('Disponible en')).toBeInTheDocument();
    expect(screen.getByLabelText('Tipo de proyecto')).toBeInTheDocument();
  });
});
