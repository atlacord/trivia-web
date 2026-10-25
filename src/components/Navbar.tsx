'use client';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import styles from '../styles/navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/invite', label: 'Invite' },
  { href: '/support', label: 'Support' },
];

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        <span className={styles.logoIcon}></span>
        <span className={styles.logoAccent}>Wan Shi Tong</span>
      </a>
      <div className={styles.burger}>
        <Hamburger toggled={isOpen} toggle={setOpen} color='#ffe8b4' />
      </div>
      <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
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