import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';

describe(('Test Button component'), () => {
    test('Element exist', () => {
        ComponentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('Sidebar toggle', () => {
        ComponentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
