import * as S from "./styles";

import logo from "../../../src/assets/images/contatos.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FiltrarContatos } from "../store/reducers/filtro";

const Header = () => {
  const [pagina, setPagina] = useState(true);
  const [conteudo, setConteudo] = useState("+");

  function ChangeImg() {
    setPagina(!pagina);
    setConteudo(pagina ? "↩" : "+");
  }

  const dispatch = useDispatch();

  const pesquisa = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(FiltrarContatos(e.target.value));
  };

  return (
    <S.Container>
      <S.AddContact
        to={pagina ? "/novoContato" : "/home"}
        onClick={() => ChangeImg()}
      >
        {conteudo}
      </S.AddContact>
      <div>
        <S.Logo src={logo} />
        <S.H1>Contatos web</S.H1>
      </div>
      <S.Search onChange={pesquisa} placeholder="Pesquisar contato" />
    </S.Container>
  );
};
export default Header;
