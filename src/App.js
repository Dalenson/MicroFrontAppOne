import './App.css';
import React, { useState } from 'react';
import { IframeMessageProxy } from 'iframe-message-proxy';

function App() {
  
  const [mensagem, setMensagem] = useState();

  return (
    <div>
      <header>
        <p>Aplicativo um</p>
        <p>{mensagem}</p>
        <button onClick={clickButton}>Buscar mensagem Satélite</button>
      </header>
    </div>
  );

  async function clickButton() {
    const {response} = await IframeMessageProxy.sendMessage({
      action: 'getDados',
      content: 'Rquisição',
    });
    setMensagem(response.name,toString());
  }
}

export default App;
