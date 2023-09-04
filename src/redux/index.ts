import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { NavState, navReducer } from "./nav.store";
import { useSelector } from "react-redux";

export interface RootState {
 nav: NavState;
}

const reducers = combineReducers({
 nav: navReducer,
});

export const appStore = configureStore({
 reducer: reducers,
 devTools: process.env.NODE_ENV !== "production",
});

export const useStoreNav = () =>
 useSelector<RootState, NavState>((state) => state.nav);

export * from "./nav.store";
