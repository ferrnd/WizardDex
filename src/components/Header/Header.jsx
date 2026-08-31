import styles from './Header.module.css';
import Link from 'next/link';
import TrocaTema from '../TrocaTema/TrocaTema';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profileBox}>
        <img 
          src="https://www.catho.com.br/carreira-sucesso/wp-content/uploads/sites/3/2017/06/Harry-Potter.jpg" 
          alt="Foto de Perfil" 
          className={styles.avatar}
        />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link href="/personagens" className={styles.navLink}>Personagens</Link>
          </li>
          <li>
            <Link href="/sobre" className={styles.navLink}>Sobre</Link>
          </li>
        </ul>
      </nav>
      <h2 className={styles.title}>WizardDex</h2>
      
      <TrocaTema />
    </header>
  );
}