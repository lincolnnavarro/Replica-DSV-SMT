import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import Modal from './components/modal esqueci senha/modal.js';
import modal from './components/modal esqueci senha/modal.js';

function App() {

  const [nomeOuCpf, setNomeOuCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [cadastro, setCadastro] = useState('');
  const [renavam, setRenavam] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [cpf, setCpf] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState(false);

  function handleSubmitLogin() {
    alert("Login inválido")
  }

  function handleSubmitCadastro() {
    alert("Credenciais inválidas")
  }

  function handleSubmitEsqueci() {
    alert("Email enviado")
  }

  /*function handleEnviar() {
    alert("deu certo")
  }*/

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  return(
    <body>
      <header id = 'headerhigh' >
         <div id = 'logo'>
         <img src="/components/images/PMSPT.png" />
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
              <form onSubmit={handleSubmitLogin}>
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
                      <a onClick={() => setIsOpen(true)}>
                      Esqueci minha senha
                      </a> {isOpen && <Modal setIsOpen={setIsOpen}>
                        <div>
                          <div id='headermodal'>
                            <p id='linha'>ESQUECI MINHA SENHA</p>
                          </div>
                          <div id='divmodal'>
                          Informe seu CPF ou CNPJ para receber as instruções por e-mail.
                          </div> 
                          <form onSubmit={handleSubmitEsqueci}>
                          <div id="divmodal2">
                            <input id='emailEsqueci' type='text' value={cpf} onChange={e => setCpf(e.target.value)} />
                          </div>
                          <div id="divmodal3">
                            <button id='botaomodal' type='submit'>Enviar</button> 
                          </div> 
                          </form>
                        </div>
                      </Modal>}
                    </span>
                  </div>
                  <input id="login" type='password' value={senha} onChange={f => setSenha(f.target.value)}/>
                </div>
                  <button id='botao' type='submit'>Entrar no sistema</button>
              </form>
              </div>
            </div>
          </div>
          <div id="caixa2">
            <div id="cadastro">
              <div id='divflex'>
                <h2>É meu primeiro acesso</h2>
                <p id='pcadastro'>Informe o seu CPF ou CNPJ e Renavam válido referente ao seu documento.</p>
                <form id='formCadastro' onSubmit={handleSubmitCadastro}>
                  <input type='radio' id='cpfcnpj' name='cpfcnpj' value={() => setCpfCnpj(cpfCnpj = false)}/>
                  <label id='cpfcnpj' for='cpfcnpj'>Pessoa Física</label> &nbsp;
                  <input type='radio' id='cpfcnpj' name='cpfcnpj' value={() => setCpfCnpj(cpfCnpj = true)}/>
                  <label id='cpfcnpj' for='cpfcnpj'>Pessoa Jurídica</label>
                </form>
                <div id='divCadastro'>
                  <input id="login" type='text' value={cadastro} onChange={f => setCadastro(f.target.value)}/>
                </div>
                <div id='divCadastro'>
                  <input id="login" type='text' value={renavam} onChange={f => setRenavam(f.target.value)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </body>
  )
}

export default App;
