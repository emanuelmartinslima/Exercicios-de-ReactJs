const VerificarNivel = ({nivel}) => {
    return (
        <>
            <h1>{nivel == 'iniciante' ? 'Bem-vindo, iniciante' : nivel == 'intermediário' ? 'Você está progredindo' : 'Parabéns, especialista'}!</h1>
        </>
    )
}

export default VerificarNivel;