import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Wan Shi Tong</span>
        </div>
        <nav className={styles.links}>
          <a href="/">Home</a>
          <a href="/invite">Invite</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </nav>
        <p className={styles.legal}>
          Copyright 2026 Kyle S & Avatar Community Network.<br></br>
          Wan Shi Tong and all related titles, logos, and characters are copyrights of Viacom International, Inc., a subsidiary of Skydance Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}