import { Metadata, Viewport } from 'next'
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://trivia.atlacord.com'),
  title: 'Wan Shi Tong | Home',
  description: 'A Discord application specializing in trivia.',
  openGraph: {
    title: 'Wan Shi Tong | Home',
    description: 'A Discord application specializing in trivia.',
    url: 'https://trivia.atlacord.com',
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
    title: 'Wan Shi Tong',
    description: 'A Discord application specializing in trivia.',
    images: ['/thumbnail.png']
  }
};

export const viewport: Viewport = {
  themeColor: '#ffe395',
};

export default function Home() {
  return (
    <>
      <head>
        <Script id='gtm'>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.GTM_ID}');
            <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MHV9NJBJPG');
            </script>
          `}
        </Script>
      </head>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>
  );
}