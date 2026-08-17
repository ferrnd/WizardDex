import styles from './sobre.module.css';

export default function Sobre() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Sobre</h1>
            
            <div className={styles.infoCard}>
                <p><strong>Curso:</strong> Desenvolvimento de Sistemas</p>
                <p><strong>Turma:</strong> 2TDS1</p>
                <p><strong>Professores:</strong> Thiago e Marcelo</p>
            </div>

            <h2 className={styles.subtitle}>Integrantes da Equipe</h2>
            <ul className={styles.lista}>
                <li>Fernando Santos</li>
                <li>Yasmin Oliveira</li>
                <li>Luiz Felipe</li>
            </ul>
        </main>
    );
}