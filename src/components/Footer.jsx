import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="booking" className={styles.footer}>
      <div className="container">
        <motion.div 
          className={styles.main}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.title}>Vamos Agendar Uma Experiência?</h2>
          <button className={styles.btn}>Agendar Agora</button>
        </motion.div>
        <div className={styles.bottom}>
          <span>© 2026 Pethaus Estúdio de Bem-Estar</span>
          <div style={{ display: 'flex', gap: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem' }}>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
