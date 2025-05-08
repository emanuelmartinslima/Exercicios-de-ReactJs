const VerificarEstudante = ({estudante}) => {
    return (
        <>
            <h1>{estudante ? 'Você é um estudante' : 'Você não é um estudante'}</h1>
        </>
    )
}

export default VerificarEstudante;