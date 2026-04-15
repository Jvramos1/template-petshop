import { motion } from 'framer-motion';
import styles from './Philosophy.module.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className={styles.philosophy}>
      <div className="container">
        <motion.h2 
          className={styles.text}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Acreditamos que o <span className={styles.highlight}>bem-estar</span> do seu pet deve refletir a harmonia do seu próprio estilo de vida. <br />Sem barulho, sem estresse. <span className={styles.highlight}>Apenas calma.</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default Philosophy;
