import { AppButton, ThemeButton } from './AppButton';
import { render, screen } from '@testing-library/react';
console.log(ThemeButton)
describe(('Test Button component'), () => {
    test('Have an element with text "TEST"', () => {
        render(<AppButton theme="clear">TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    })
})
