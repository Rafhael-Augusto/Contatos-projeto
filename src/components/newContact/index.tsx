import { useState } from "react";
import * as S from "./styles";
import Contatos from "../contacts";
import { useDispatch } from "react-redux";
import { AddContato } from "../store/reducers/contatos";
import { v4 } from "uuid";

const NewContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <S.Container>
        <h2>Novo Contato</h2>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            setId(v4());
            dispatch(AddContato({ name, email, number, id }));
            console.log("submite");
          }}
        >
          <div>
            <S.TextArea
              onChange={(e) => {
                setName(e.target.value);
              }}
              width="200px"
              type="text"
              value={name}
              placeholder="Nome do contato"
            />
            <S.TextArea
              onChange={(e) => setEmail(e.target.value)}
              width="200px"
              type="email"
              value={email}
              placeholder="E-mail"
            />
          </div>

          <div>
            <S.TextArea
              onChange={(e) => setNumber(e.target.value)}
              width="180px"
              value={number}
              type="number"
              placeholder="Telefone"
            />
          </div>

          <S.Submit>Criar</S.Submit>
        </S.Form>
      </S.Container>
      <Contatos />
    </>
  );
};

export default NewContact;
