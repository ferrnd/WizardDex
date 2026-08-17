import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <main className={styles.container}>
            <h1>404</h1>

            <h2>Página não encontrada</h2>

            <p>A página que você tentou acessar não existe.</p>

            <Link href="/" className={styles.button}>
                Voltar para Home
            </Link>
        </main>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5fe3bbcf3122b760681a6b0c9d35e0819c65300e
