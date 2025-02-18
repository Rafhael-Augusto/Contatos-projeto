import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as idUnico } from "uuid";

type contato = {
  name: string;
  email: string;
  number: string;
  id: string;
};

type ContatosState = {
  itens: contato[];
};

const initialState: ContatosState = {
  itens: [],
};

const ContatosSlice = createSlice({
  name: "novoContato",
  initialState,

  reducers: {
    AddContato: (state, action: PayloadAction<contato>) => {
      const novoContato = {
        ...action.payload,
      };

      if (novoContato.name !== "") {
        novoContato.id = idUnico();
        state.itens = [novoContato, ...state.itens];
      }
    },
    RemoveContato: (state, action: PayloadAction<contato>) => {
      const Contato = action.payload;

      console.log(Contato.id);
      if (state.itens.find((contatin) => contatin.id === Contato.id)) {
        const ContatoFiltrado = state.itens.filter((p) => p.id !== Contato.id);
        state.itens = ContatoFiltrado;
      }
    },
    AtualizarContato: (state, action: PayloadAction<contato>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      );

      if (index !== -1) {
        state.itens[index] = action.payload;
      }
    },
  },
});

export const { AddContato, RemoveContato, AtualizarContato } =
  ContatosSlice.actions;
export default ContatosSlice.reducer;
