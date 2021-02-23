import './App.css';
import React, {useState} from 'react';


function App() {

  const [nomeOuCpf, setNomeOuCpf] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit() {
    alert("Login inválido")
  }

  return(
    <body>
      <header id = 'headerhigh' >
         <div id = 'logo'>
         <img src="/components/images/PMSPT.png" alt="Logo Prefeitura" />
        </div><p id = 'h1titulo' >
          DSV Digital
        </p>
        <span>
          Versão 1.0
        </span>
      </header>
        <nav></nav>
        <div id = "corpo">
          <p id = "texto1">
          O DSV DIGITAL é uma ferramenta desenvolvida pela Secretaria Municipal de Mobilidade e Transportes de São Paulo - 
          SMT, através do Departamento de Operação do Sistema Viário - DSV, para viabilizar o atendimento mais ágil aos 
          proprietários de veículos. Através deste canal, o usuário poderá iniciar processos de: Indicação de Condutor, 
          Defesa da Autuação, 2ª via de Notificações de Autuação e Auto de infração de Trânsito - AIT.
          </p>
          <p id = "texto2">
          Se você já é cadastrado, basta usar seu e-mail e senha.<br/>Se este for seu primeiro acesso, será necessário ter em mãos seu CPF ou CNPJ e RENAVAM.
          </p>
          <div id = "caixa1">
            <div id = "loginput">
              <div>
              <h2>Já sou cadastrado</h2>
              <form onSubmit={handleSubmit}>
                <div id = "divlogin">
                  Login:
                  <input id="login" type='text' value={nomeOuCpf} onChange={e => setNomeOuCpf(e.target.value)}/>
                </div>
                <div id = "divlogin">
                  <div>
                    <span id = 'span1'>
                      Senha:
                    </span>
                    <span id = 'span2'>
                      Esqueci minha senha
                    </span>
                  </div>
                  <input id="login" type='password' value={senha} onChange={f => setSenha(f.target.value)}/>
                </div>
              </form>
              </div>
            </div>
          </div>
          <div id="caixa2">
            <div id="cadastro">
              <div>
                <h2>É meu primeiro acesso</h2>
              </div>
            </div>
          </div>
        </div>
    </body>
  )
}

export default App;
