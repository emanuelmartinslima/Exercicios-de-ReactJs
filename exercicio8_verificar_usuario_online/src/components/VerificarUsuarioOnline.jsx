const VerificarUsuarioOnline = ({online}) => {
    return (
        <>
            <h1>{online ? 'Usuário online' : 'Usuário offline'}</h1>
        </>
    )
}

export default VerificarUsuarioOnline;