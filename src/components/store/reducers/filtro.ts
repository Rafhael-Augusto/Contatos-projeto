import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type pesquisaitem = {
  pesquisa: string;
};

const initialState: pesquisaitem = {
  pesquisa: "",
};

const FiltroSlice = createSlice({
  name: "Filtrar",
  initialState,

  reducers: {
    FiltrarContatos: (state, action: PayloadAction<string>) => {
      const PalavrasChave = action.payload;
      state.pesquisa = PalavrasChave;
    },
  },
});

export const { FiltrarContatos } = FiltroSlice.actions;
export default FiltroSlice.reducer;
