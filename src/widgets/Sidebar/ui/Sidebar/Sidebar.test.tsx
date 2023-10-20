import { getByTestId, getByText, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe(('Test Button component'), () => {
    test('Element exist', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

})
