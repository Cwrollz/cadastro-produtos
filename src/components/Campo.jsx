function Campo({id, label, children}){
    return(
        <div className="campo">
            <label htmlFor={id}>{label}</label>
            {children}
        </div>
    )
}

export default Campo;