const VerificarDesconto = ({temDesconto}) => {
    return (
        <>
            <h1>{temDesconto ? 'Desconto aplicado' : 'Sem desconto'}</h1>
        </>
    )
}

export default VerificarDesconto;