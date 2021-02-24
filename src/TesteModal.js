import React, {useState, useRef} from 'react';
import Modal from './components/modal esqueci senha/modal';
import './index.css';
import './App.css';

function App () {
  const modal = useRef(null)

  return(
    <body>
      <div className='App'>
        <h1>React App</h1>
        <button onClick={() => modal.current.open()}>Clique aqui</button>
      </div>
      <Modal ref={modal}>
        Hello Barbie
      </Modal>
    </body>
  )
}

export default App;