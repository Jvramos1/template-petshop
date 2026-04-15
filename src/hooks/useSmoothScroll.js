import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    const l = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    setLenisInstance(l);

    function raf(time) {
      l.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      l.destroy();
    };
  }, []);

  const scrollTo = (id) => {
    if (lenisInstance) {
      const target = document.querySelector(id);
      if (target) lenisInstance.scrollTo(target);
    }
  };

  return { lenisInstance, scrollTo };
};
