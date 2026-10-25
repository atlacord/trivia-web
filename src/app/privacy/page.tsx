import Navbar from '@/components/Navbar'
import Link from 'next/link';
import styles from '../../styles/pages/privacy.module.css'
import Footer from '@/components/Footer';
import BackgroundImage from '@/components/Background';
import background from '../../../public/avatarsevenhavens.png';

export default function Page() {
  return (
    <main className={styles.page}>
    <>
      <Navbar/>
    </>
     <div className={styles.glow} aria-hidden="true" />
      <div id='bg-image'><BackgroundImage bg={background} b={0.15}/></div>
     <div className={styles.layout}>
       <article className={styles.article}>
         <header className={styles.header}>
           <p className={styles.eyebrow}>Legal</p>
           <h1 className={styles.title}>Privacy <span className={styles.titleAccent}>Policy</span></h1>
            <p className={styles.meta}>Last updated October 23, 2026</p>
            <p className={styles.lead}>Wan Shi Tong is a trivia application for Discord that allows users to test their knowledge by responding to a series of questions related to a user-provided topic.<br></br><br></br></p>
         </header>

         <section id='data-collection' className={styles.section}>
           <h2>Information we collect</h2>
           <p>We collect basic usage data for analysis purposes. This includes the following:</p>
            <ul className='list-disc pl-5'>
                <li>Guild ID</li>
                <li>Trivia topics</li>
                <li>Trivia session scores</li>
            </ul>
            <p><b>We do not collect or store any user data.</b></p>
         </section>
       </article>
     </div>
     <div className={styles.contact}>
      <p>If you have any questions or concerns, please email <Link href='mailto:admin@atlacord.com'>admin@atlacord.com</Link>, or visit the Avatar server at <Link href='https://discord.gg/avatar'>https://discord.gg/avatar</Link> and contact the admin team via modmail.</p>
    </div>
    <>
      <Footer/>
    </>
   </main>
  )
}