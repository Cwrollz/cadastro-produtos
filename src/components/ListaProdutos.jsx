function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ListaProdutos({ produtos }) {
    if (produtos.length === 0) {
        return <p className="vazio">Nenhum produto cadastrado</p>
    }

    return (
        <ul className="lista-produtos">
            {produtos.map((p) => (
                <li key={p.id}>
                    <strong>{p.nome}</strong>
                    <span>{p.categoria}</span>
                    <span>{formatarPreco(p.preco)}</span>
                    <span>{p.descricao}</span>
                    <span>{p.estoque} unidade(s)</span>
                    {!p.ativo && <span className="tag-inativo">inativo</span>}
                </li>
            ))}
        </ul>
    );
}

export default ListaProdutos;