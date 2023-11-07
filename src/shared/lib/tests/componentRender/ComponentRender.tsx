import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router'
import { i18nForTest } from 'shared/config'

export interface IComponentRenderOptions {
    route?: string
}

export const ComponentRender = (component: ReactNode, options: IComponentRenderOptions = {}): any => {
    const {
        route
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
