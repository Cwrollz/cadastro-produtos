import { useState } from 'react';
import Campo from './Campo';

const CATEGORIAS = ['Alimentos', 'Bebidas', 'Limpeza', 'Higiene'];
const ESTADO_INICIAL = {
  nome : '',
  preco : '',
  estoque: '',
  categoria: '',
  descricao: '',
  ativo: true,
};

function FormularioProduto({onCadastrar}){
  const [produto, setProduto] = useState(ESTADO_INICIAL);

  function atualizarCampo(evento){
    const { name, value, type, checked } = evento.target;
    setProduto({...produto, [name]: type === 'checkbox' ? checked : value});
  }

  function cadastrar(evento){
    evento.preventDefault();

    onCadastrar({
      ...produto,
      id: Date.now(),
      preco: Number(produto.preco),
      estoque: Number(produto.estoque),
    });
    setProduto(ESTADO_INICIAL);
  }

  return(
      <form onSubmit={cadastrar}>     
        <Campo id="nome" label="Nome">
          <input id="nome" name="nome" type="text"
          value={produto.nome} onChange={atualizarCampo} />
        </Campo>
        <Campo id="preco" label="Preço">
          <input id="preco" name="preco" type="number" step="0.01"
          value={produto.preco} onChange={atualizarCampo} />
        </Campo>
        <Campo id="estoque" label="Estoque">
          <input id="estoque" name="estoque" type="number"
          value={produto.estoque} onChange={atualizarCampo} />
        </Campo>
        <Campo id="categoria" label="Categoria">
          <select id="categoria" name="categoria"
          value={produto.categoria} onChange={atualizarCampo}>
            <option value="">Selecione...</option>
            {CATEGORIAS.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </Campo>
        <Campo id="descricao" label="Descrição">
          <textarea id="descricao" name="descricao" rows="3"
          value={produto.descricao} onChange={atualizarCampo} />
        </Campo>
        <div className="Campo-checkbox">
          <input id="ativo" name="ativo" type="checkbox" 
          checked = {produto.ativo} onChange={atualizarCampo} />
          <label htmlFor="ativo">Produto ativo</label>
        </div>
            <button type="submit">Cadastrar</button>
      </form>
  );
}

export default FormularioProduto;