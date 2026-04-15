import { useScroll, useTransform } from 'framer-motion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useScrollState } from './hooks/useScrollState';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Footer from './components/Footer';

// Styles
import styles from './App.module.css';

function App() {
  const scrolled = useScrollState(50);
  const { scrollTo } = useSmoothScroll();
  
  // Motion Scroll Transforms
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const servicesImageScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.1]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <div className={styles.appContainer}>
      <Navbar scrolled={scrolled} handleScrollTo={handleScrollTo} />
      
      <main>
        <Hero heroImageY={heroImageY} />
        <Philosophy />
        <Services servicesImageScale={servicesImageScale} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
