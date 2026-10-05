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

function validar(produto){
  const erros = {};

  const nome = produto.nome.trim();
  if (nome === ''){
    erros.nome = 'Informe o nome do produto';
  } else if (nome.length <3){
    erros.nome = 'O nome deve ter pelo menos 3 caracteres.';
  }


  if (produto.preco === ''){
    erros.preco = 'Informe o preço. '
  } else if(Number(produto.preco<=0)) {
    erros.preco = 'O preço deve ser maior que zero.'
  }


  const estoque = Number(produto.estoque);
  if (produto.estoque === ''){
    erros.estoque = 'Informe a quantidade do estoque. ';
  } else if (!Number.isInteger(estoque)|| estoque < 0){
    erros.estoque = 'Use um número inteiro maior ou igual a zero'
  }

  if (produto.categoria === ''){
    erros.categoria = 'Selecione uma categoria';
  }

  if(produto.descricao.length > 200){
    erros.descricao = 'A descrição pode ter no máximo 200 caracteres.';
  }

  return erros;
}

function FormularioProduto({onCadastrar}){
  const [produto, setProduto] = useState(ESTADO_INICIAL);
  const [erros, setErros] = useState({});

  function atualizarCampo(evento){
    const { name, value, type, checked } = evento.target;
    setProduto({...produto, [name]: type === 'checkbox' ? checked : value});
  }

  function enviar(evento){
    evento.preventDefault();

    const errosEncontrados = validar(produto);
    if (Object.keys(errosEncontrados).length > 0){
      setErros(errosEncontrados);
      return;
    }

    onCadastrar({
      ...produto,
      id: Date.now(),
      nome: produto.nome.trim(),
      preco: Number(produto.preco),
      estoque: Number(produto.estoque),
    });
    setProduto(ESTADO_INICIAL);
    setErros({});
  }

  return(
      <form onSubmit={enviar} noValidate>     
        <Campo id="nome" label="Nome" erro={erros.nome}>
          <input id="nome" name="nome" type="text"
          value={produto.nome} onChange={atualizarCampo} />
        </Campo>
        <Campo id="preco" label="Preço" erro={erros.preco}>
          <input id="preco" name="preco" type="number" step="0.01"
          value={produto.preco} onChange={atualizarCampo} />
        </Campo>
        <Campo id="estoque" label="Estoque" erro={erros.estoque}>
          <input id="estoque" name="estoque" type="number"
          value={produto.estoque} onChange={atualizarCampo} />
        </Campo>
        <Campo id="categoria" label="Categoria" erro={erros.categoria}>
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
        <Campo id="descricao" label="Descrição (opcional)" erro={erros.descricao}>
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