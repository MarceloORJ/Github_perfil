import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario, nome}) => {
    /* const usuario = {
        nome: 'Marcelo Oliveira',
        avatar: 'https://github.com/MarceloORJ.png'
    } */

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
        )
}

//export default function() {
//export default () => {
export default Perfil;