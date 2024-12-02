import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario, userUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${userUsuario}.png`}/>
            <h1 className={styles.name}>Dev Name: { nomeUsuario } / Dev Github User: {userUsuario}</h1>
        </header>
    )
}

export default Perfil;