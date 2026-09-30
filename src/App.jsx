import { useState } from 'react';
import FormularioProduto from './components/FormularioProduto';
import ListaProdutos from './components/ListaProdutos';
import './App.css';

function App(){
  const [produtos, setProdutos] = useState([]);

  function cadastrarProduto(novoProduto){
    setProdutos([...produtos, novoProduto]);
  }

  return(
    <div className="app">
      <h1>Cadastro de Produtos</h1>
      <FormularioProduto onCadastrar={cadastrarProduto}/>

      <h2>Produtos Cadastrados</h2>
      <ListaProdutos produtos={produtos}/>
    </div>
  );
}

export default App;