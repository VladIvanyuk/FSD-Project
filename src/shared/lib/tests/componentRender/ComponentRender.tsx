import { render } from '@testing-library/react'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types/types'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router'
import { i18nForTest } from 'shared/config'

export interface IComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<IStateSchema>
}

export const ComponentRender = (component: ReactNode, options: IComponentRenderOptions = {}): any => {
    const {
        route,
        initialState
    } = options;

    return render(
        <StoreProvider initialState={initialState} >
            <MemoryRouter initialEntries={[route || '/']}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
