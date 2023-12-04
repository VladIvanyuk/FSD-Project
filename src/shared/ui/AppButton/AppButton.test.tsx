import { AppButton, ButtonTheme } from './AppButton';
import { render, screen } from '@testing-library/react';
describe(('Test Button component'), () => {
    test('Element exist', () => {
        render(<AppButton theme={ButtonTheme.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })

    test('Have an element with text "TEST"', () => {
        render(<AppButton theme={ButtonTheme.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    })
})
