'use client';
import { useState } from 'react';
import styles from '../styles/navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/invite', label: 'Invite' },
  { href: '/support', label: 'Support' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        <span className={styles.logoAccent}>Wan Shi Tong</span>
      </a>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={open ? styles.lineOpen : ''} />
        <span className={open ? styles.lineOpen : ''} />
        <span className={open ? styles.lineOpen : ''} />
      </button>


      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
        </li>
      </ul>
    </nav>
  );
}