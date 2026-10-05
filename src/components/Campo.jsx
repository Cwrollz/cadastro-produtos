function Campo({id, label, erro, children}){
    return(
        <div className={erro ? 'campo com-erro': 'campo'}>
            <label htmlFor={id}>{label}</label>
            {children}
            {erro && <span className="erro">{erro}</span>}
        </div>
    )
}

export default Campo;