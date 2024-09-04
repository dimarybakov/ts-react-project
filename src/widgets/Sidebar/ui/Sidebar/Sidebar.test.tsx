import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderWithTranslations(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
