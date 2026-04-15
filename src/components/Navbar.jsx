import styles from './Navbar.module.css';

const Navbar = ({ scrolled, handleScrollTo }) => {
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>Pethaus.</div>
        <nav className={styles.links}>
          <a href="#philosophy" onClick={(e) => handleScrollTo(e, '#philosophy')} className={styles.link}>Filosofia</a>
          <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className={styles.link}>Serviços</a>
          <a href="#booking" onClick={(e) => handleScrollTo(e, '#booking')} className={styles.link}>Agendar</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
