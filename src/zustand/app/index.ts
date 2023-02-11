import { GetState, SetState, StateCreator, StoreApi } from 'zustand';

export interface AppSlice {
    app: {
        homePageLoads: number;
        setHomePageLoads: (homePageLoads: number) => void;
    };
}

const setSlice = (
    param: (state: AppSlice['app']) => Partial<AppSlice['app']>,
    set: (partial: AppSlice | Partial<AppSlice> | ((state: AppSlice) => AppSlice | Partial<AppSlice>)) => void
) =>
    set((state) => ({
        app: { ...state.app, ...param(state.app) }
    }));

export const appInitialState: AppSlice = {
    app: {
        homePageLoads: 0,
        setHomePageLoads: () => {}
    }
};

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
    app: {
        ...appInitialState.app,
        setHomePageLoads: (homePageLoads: number) => setSlice(() => ({ homePageLoads }), set)
    }
});

export default createAppSlice as (
    set: SetState<AppSlice>,
    get: GetState<AppSlice>,
    api: StoreApi<AppSlice>
) => AppSlice;
