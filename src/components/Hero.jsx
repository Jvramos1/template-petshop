import { motion } from 'framer-motion';
import { staggerContainer, textReveal, imageReveal } from '../animations';
import styles from './Hero.module.css';

const Hero = ({ heroImageY }) => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div
          className={styles.content}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={textReveal} className={styles.title}>
              Onde
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1 variants={textReveal} className={styles.title}>
              O Cuidado
            </motion.h1>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1 
              variants={textReveal} 
              className={styles.title} 
              style={{ paddingBottom: '0.5rem' }}
            >
              Vira Tranquilidade.
            </motion.h1>
          </div>
          <motion.p variants={textReveal} className={styles.subtitle}>
            Um santuário moderno de bem-estar pet. 
            Elevamos a experiência de cuidado do seu animal com precisão, calma e conforto absoluto.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className={styles.imageWrapper}
        variants={imageReveal}
        initial="hidden"
        animate="show"
      >
        <motion.img
          src="/hero-dog.png"
          alt="Majestic Dog"
          className={styles.image}
          style={{ y: heroImageY }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
