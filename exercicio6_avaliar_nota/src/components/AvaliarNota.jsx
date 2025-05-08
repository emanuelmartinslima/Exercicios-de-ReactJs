const AvaliarNota = ({nota}) => {
    return (
        <>
            <h1>{nota >= 90 ? 'Excelente' : (nota >= 70 && nota <= 89) ? 'Bom' : 'Precisa melhorar'}</h1>
        </>
    )
}

export default AvaliarNota;