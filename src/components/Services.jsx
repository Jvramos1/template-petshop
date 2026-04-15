import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Services.module.css';

const SERVICES = [
  { name: 'Banho Terapêutico', price: 'A partir de R$120' },
  { name: 'Tosa Styling', price: 'A partir de R$180' },
  { name: 'Spa Day & Massagem', price: 'A partir de R$250' },
  { name: 'Cuidado Odontológico', price: 'Sob Consulta' },
];

const Services = ({ servicesImageScale }) => {
  return (
    <section id="services" className={`container ${styles.services}`}>
      <div className={styles.grid}>
        <div>
          <h3 className={styles.header}>Nossos Serviços // Craft</h3>
          <div className={styles.list}>
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index}
                className={styles.item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.itemTitle}>
                  <span style={{ fontSize: '1rem', opacity: 0.4 }}>0{index + 1}</span>
                  {service.name}
                </div>
                <div className={styles.itemPrice}>{service.price}</div>
                <ArrowUpRight strokeWidth={1} style={{ opacity: 0.3 }} />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div className={styles.imageWrapper}>
           <motion.img 
              src="/cat-spa.png" 
              alt="Cat Spa" 
              className={styles.image}
              style={{ scale: servicesImageScale }}
           />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
