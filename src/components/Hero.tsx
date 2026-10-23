import styles from '../styles/pages/home.module.css';
import BackgroundImage from './Background';
import background from '../../public/avatarsevenhavens.png';

export default function Hero() {
  return (
    <section id='home' className={styles.hero}>
        <div className={styles.bgGrid} aria-hidden />
        <div className={styles.bgGlow} aria-hidden />
        <div id='bg-image'><BackgroundImage bg={background} b={0.4}/></div>
        
        <div className={styles.content}>
        <h1 className={styles.title}>
            <span className={styles.titleAccent}>Wan Shi Tong</span>
        </h1>
        <p className={styles.subtitle}>
            A Discord application specializing in trivia.
        </p>
        <div className={styles.actions}>
            <a href="#invite" className={styles.btnPrimary}>Invite</a>
        </div>
        </div>
        <div className={styles.scroll} aria-hidden>
        </div>
    </section>
  )
}