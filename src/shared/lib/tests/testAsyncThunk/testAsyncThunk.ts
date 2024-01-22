import { AsyncThunkAction, DeepPartial, Dispatch } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsynkThunk<Return, Arg, RejectedValue> {
    dispatch: Dispatch;
    getState: () => IStateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
    api: jest.MockedFunctionDeep<AxiosStatic>

    constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<IStateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as IStateSchema)
        this.api = mockedAxios;
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api });

        return result;
    }
}
