const VerificarIdade = ({idade}) => {
    return (
        <>
            <h1>{idade >= 18 ? 'Você é adulto!' : 'Você é menor de idade...'}</h1>
        </>
    )
}

export default VerificarIdade;