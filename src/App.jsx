import { useState } from 'react';
import './App.css';

const CATEGORIAS = ['Alimentos', 'Bebidas', 'Limpeza', 'Higiene'];

const ESTADO_INICIAL = {
  nome: '',
  preco: '',
  estoque: '',
  categoria: '',
  descricao: '',
  ativo: true,
};


function App(){
  const [produto, setProduto] = useState(ESTADO_INICIAL);

  function atualizarCampo(evento){
    const {name, value, type, checked } = evento.target;
    setProduto({...produto, [name]: type === 'checkbox' ? checked : value});
  }
  
  return(
    <div className="app">
      <h1>Cadastro de Produtos</h1>
      <form>
        <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text"
          value={produto.nome} onChange={atualizarCampo}/>
        </div>
        <div className="campo">
          <label htmlFor="preco">Preço</label>
          <input id="preco" name="preco" type="number" step="0.01"
          value={produto.preco} onChange={atualizarCampo}/>
        </div>
        <div className="campo">
          <label htmlFor="estoque">Estoque</label>
          <input id="estoque" name="estoque" type="number"
          value={produto.estoque} onChange={atualizarCampo}/>
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" name="categoria" 
          value={produto.categoria} onChange={atualizarCampo}>
          <option value="">Selecione...</option>
          {CATEGORIAS.map((categoria)=> (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
          </select>
        </div>
        <div className="campo">
          <label htmlFor="descricao">Descrição</label>
          <textarea id="descricao" name="descricao" rows="3"
          value={produto.descricao} onChange={atualizarCampo}/>
        </div>
      </form>
      <pre>{JSON.stringify(produto, null, 2)}</pre>
    </div>
  );
}

export default App;