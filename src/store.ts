


import { createContext } from "react";

const initialState = {
  first: 'Jack',
  last: 'smith',
};

export type UserState = typeof initialState;

const context = createContext<UserState>(initialState);

export default context;