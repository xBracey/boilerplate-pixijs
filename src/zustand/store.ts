import { useEffect, useState } from 'react';
import create, { GetState, SetState, StoreApi } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import createAppSlice, { appInitialState, AppSlice } from './app';

type GetFunctionKeys<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => void ? K : never;
}[keyof T];

type OmittedFunctionKeys<T> = Omit<T, GetFunctionKeys<T>>;

export type RootState = AppSlice;

export const useZustandStore = create<RootState>()(
    devtools(
        persist(
            (set, get, api) => ({
                ...createAppSlice(
                    set as unknown as SetState<AppSlice>,
                    get as GetState<AppSlice>,
                    api as unknown as StoreApi<AppSlice>
                )
            }),
            {
                name: 'zustandStore',
                partialize: (state) => ({
                    app: {
                        homePageLoads: state.app.homePageLoads
                    }
                }),
                merge: (persistedState: any, currentState) => {
                    return {
                        ...currentState,
                        app: {
                            ...currentState.app,
                            ...persistedState.app
                        }
                    };
                }
            }
        )
    )
);

const initialState: RootState = {
    ...appInitialState
};

export const useHydratedStore = <T extends keyof OmittedFunctionKeys<RootState>>(
    key: T
): OmittedFunctionKeys<RootState>[T] => {
    const [state, setState] = useState(initialState[key]);
    const zustandState = useZustandStore((persistedState) => persistedState[key]);

    useEffect(() => {
        setState(zustandState);
    }, [zustandState]);

    return state;
};
