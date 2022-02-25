export default function Home() {
  return (
    <>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Formulário</title>
    <form id="topo" action="_" method="post" className="modelo1">
      <h1 className="center">
        Inquerito FMX
        <br />
        <span className="titulo2">Agradecemos que preencha todos os campos.</span>
      </h1>
      <div className="espaco">
        <div className="rotulos">Nome:</div>
        <input
          className="boxcolor"
          id="nome"
          type="text"
          name="nome"
          placeholder=" Nome completo"
        />
      </div>
      <div className="espaco">
        <div className="rotulos">Associacao :</div>
        <input
          className="boxcolor"
          id="Associacao"
          type="text"
          name="Associacao"
          placeholder=" Associacao em que pertence."
        />
      </div>
      <div className="espaco">
        <div className="rotulos">Contacto :</div>
        <input
          className="boxcolor"
          id="Contacto"
          type="contacto"
          name="Contacto"
          placeholder=" Numero valido."
        />
      </div>
      <div className="espaco">
        <div className="rotulos"> E-mail:</div>
        <input
          className="boxcolor"
          id="email"
          type="email"
          name="email"
          placeholder=" E-mail Válido."
        />
      </div>
      <div className="espaco">
        <div className="rotulos"> Data de nascimento:</div>
        <input type="date" id="demo" />
        <br />
        <button onclick="getValue()">Definir data</button>
        <div className="espaco">
          <div className="rotulos"> Qual e o seu rating ?:</div>
          <input
            className="boxcolor"
            id="rating"
            name="rating"
            placeholder=" Rating FIDE."
          />
        </div>
        <div className="espaco">
          <div className="rotulos">Lichess:</div>
          <input
            className="boxcolor"
            id="lichess"
            type="lihess"
            name="email"
            placeholder=" LichessID."
          />
        </div>
        <div className="espaco"></div>
      </div>
    </form>
  </>
  )
}  