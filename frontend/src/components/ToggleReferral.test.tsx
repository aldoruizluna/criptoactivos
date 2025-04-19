import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleReferral from './ToggleReferral';
import React from 'react';

describe('ToggleReferral', () => {
  it('muestra el label y el switch', () => {
    render(<ToggleReferral checked={true} onChange={() => {}} />);
    expect(screen.getByText(/Mostrar enlaces de referido/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('llama a onChange cuando se hace click', async () => {
    const onChange = jest.fn();
    render(<ToggleReferral checked={false} onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
