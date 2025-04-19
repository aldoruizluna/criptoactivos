import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
  it('muestra el título y el toggle de referido', () => {
    render(
      <Header
        referralEnabled={true}
        onToggleReferral={() => {}}
        search=""
        onSearch={() => {}}
      />
    );
    expect(screen.getByText('Criptoactivos.Wiki')).toBeInTheDocument();
    expect(screen.getByText(/Mostrar enlaces de referido/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar proyectos...')).toBeInTheDocument();
  });

  it('llama a onToggleReferral cuando se hace click en el switch', async () => {
    const onToggle = jest.fn();
    render(
      <Header
        referralEnabled={false}
        onToggleReferral={onToggle}
        search=""
        onSearch={() => {}}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalledWith(true);
  });

  it('llama a onSearch cuando se escribe en el input', async () => {
    const onSearch = jest.fn();
    render(
      <Header
        referralEnabled={true}
        onToggleReferral={() => {}}
        search=""
        onSearch={onSearch}
      />
    );
    const input = screen.getByPlaceholderText('Buscar proyectos...');
    await userEvent.type(input, 'Binance');
    expect(onSearch).toHaveBeenCalled();
  });
});
