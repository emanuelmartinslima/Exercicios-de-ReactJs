const saudacaoUsuario = ({autenticacao}) => {
    return (
        <>
            {autenticacao && <h1>Bem-vindo, usuário!</h1>}
        </>
    )
}

export default saudacaoUsuario;