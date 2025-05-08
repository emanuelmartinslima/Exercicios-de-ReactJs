import { useState } from 'react';
import styles from './Button.module.css';

const Button = ({logado}) => {
    const [isLogado, setLogado] = useState(logado);

    const [classe, setClasse] = useState(styles.btnEntrar);

    function handleLogado(){
        let state = isLogado ? false : true;
        let stateClass = classe == styles.btnEntrar ? styles.btnSair : styles.btnEntrar;
        setLogado(state);
        setClasse(stateClass);
    }

    return (
        <>
            <button onClick={handleLogado} className={classe} href="#">{isLogado ? 'Sair' : 'Entrar'}</button>
        </>
    )
}

 export default Button;