import * as S from "./styles";

import EditImg from "../../assets/images/edit.jpg";
import DoneImg from "../../assets/images/checkmark-64.png";
import DeleteImg from "../../assets/images/delete.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AtualizarContato, RemoveContato } from "../store/reducers/contatos";

export type Prop = {
  name: string;
  email: string;
  number: string;
  id: string;
};

const Contact = ({ name, email, number, id }: Prop) => {
  const [editMode, setEditMode] = useState(false);
  const [nameEditado, setNameEditado] = useState(name);
  const [emailEditado, setEmailEditado] = useState(email);
  const [numberEditado, setNumberEditado] = useState(number);

  function editar() {
    setEditMode(!editMode);

    if (editMode) {
      dispatch(
        AtualizarContato({
          name: nameEditado,
          email: emailEditado,
          number: numberEditado,
          id,
        })
      );
    }
  }

  const dispatch = useDispatch();

  return (
    <S.Contact>
      <img
        src="https://i1.sndcdn.com/artworks-LOxH48k89pWYyTVy-3PRS8w-t500x500.jpg"
        alt=""
      />
      <input
        value={nameEditado}
        disabled={!editMode}
        onChange={(e) => setNameEditado(e.target.value)}
      ></input>
      <input
        value={emailEditado}
        disabled={!editMode}
        onChange={(e) => setEmailEditado(e.target.value)}
      ></input>
      <input
        value={numberEditado}
        disabled={!editMode}
        onChange={(e) => setNumberEditado(e.target.value)}
      ></input>

      <div>
        <S.Edit onClick={editar} color="#00FFFF">
          <img src={editMode ? DoneImg : EditImg} alt="Editar contato" />
        </S.Edit>
        <S.Edit
          onClick={() => dispatch(RemoveContato({ name, email, number, id }))}
          color="#FF5A5F"
        >
          <img src={DeleteImg} alt="Deletar contato" />
        </S.Edit>
      </div>
    </S.Contact>
  );
};

export default Contact;
