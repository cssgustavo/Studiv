import "./About.css";

const About = () => {
  return (
    <div className="containerAbout">
      <div className="box">
        <p className="aboutP">
          A técnica, aliás, foi desenvolvida no final dos anos 80 pelo italiano
          Francesco Cirillo, que procurava uma maneira de aumentar sua
          produtividade nos estudos durante os primeiros anos de universidade.
          Para isso, ele utilizou um timer de cozinha para organizar suas
          tarefas. A técnica se baseia na ideia de que dividindo o nosso fluxo
          de trabalho em blocos de concentração intensa, conseguimos melhorar a
          agilidade do cérebro e estimular nosso foco. Em outras palavras,
          melhoramos nossa gestão do tempo e ficamos mais eficientes.
        </p>
        <p className="aboutP">
          No nosso site, usamos 3 tipos diferentes de intensidades:
        </p>
        <p className="aboutP">
          Soft: você exercerá suas aticidades dentro de 20 minutos, e descansará
          7.
        </p>
        <p className="aboutP">
          Normal: você exercerá suas aticidades dentro de 25 minutos, e
          descansará 5.
        </p>
        <p className="aboutP">
          Extended: você exercerá suas aticidades dentro de 50 minutos, e
          descansará 10.
        </p>
      </div>
    </div>
  );
};

export default About;
