import { configureStore } from "@reduxjs/toolkit";

import ContatosReducer from "./reducers/contatos";
import FiltrosReducer from "./reducers/filtro";

export const store = configureStore({
  reducer: {
    contatos: ContatosReducer,
    filtro: FiltrosReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
