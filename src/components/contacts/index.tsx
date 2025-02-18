import { useSelector } from "react-redux";
import { RootReducer } from "../store";
import { v4 as idUnico } from "uuid";

import * as S from "./styles";
import Contact from "../contact";

const Contatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.itens);
  const pesquisa = useSelector((state: RootReducer) => state.filtro.pesquisa);

  const contatosFiltrados = contatos.filter((contato) =>
    contato.name.toLocaleLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <S.Container>
      <S.Title>Contatos</S.Title>
      <S.ContactsList>
        {contatosFiltrados.map((contact) => {
          return (
            <Contact
              key={idUnico()}
              name={contact.name}
              email={contact.email}
              number={contact.number}
              id={contact.id}
            />
          );
        })}
      </S.ContactsList>
    </S.Container>
  );
};

export default Contatos;
