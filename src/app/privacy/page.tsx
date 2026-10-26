import { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar'
import styles from '../../styles/pages/privacy.module.css'
import Footer from '@/components/Footer';
import BackgroundImage from '@/components/Background';
import background from '../../../public/library.jpg';

export const metadata: Metadata = {
  metadataBase: new URL('https://trivia.atlacord.com'),
  title: 'Wan Shi Tong | Privacy Policy',
  description: 'A Discord application specializing in trivia.',
  openGraph: {
    title: 'Wan Shi Tong | Home',
    description: 'A Discord application specializing in trivia.',
    url: 'https://trivia.atlacord.com/privacy',
    siteName: 'Wan Shi Tong',
    images: [
      {
        url: '/thumbnail.png',
        width: 80,
        height: 80
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Wan Shi Tong | Privacy Policy',
    description: 'A Discord application specializing in trivia.',
    images: ['/thumbnail.png']
  }
};

export const viewport: Viewport = {
  themeColor: '#ffe395',
};

export default function Page() {
  return (
    <main className={styles.page}>
    <head>
      <Script id='gtm'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${process.env.GTM_ID}');
        `}
      </Script>
    </head>
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
      <p>If you have any questions or concerns, please email <Link href='mailto:admin@atlacord.com'>admin@atlacord.com</Link>, or visit the Avatar server at <Link href='https://trivia.atlacord.com/support?utm_source=privacy-policy'>https://discord.gg/avatar</Link> and contact the admin team via modmail.</p>
    </div>
    <>
      <Footer/>
    </>
   </main>
  )
}