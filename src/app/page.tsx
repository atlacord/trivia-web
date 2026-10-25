import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Wan Shi Tong',
  description: 'A Discord application specializing in trivia.',
  openGraph: {
    title: 'Wan Shi Tong',
    description: 'A Discord application specializing in trivia.',
    url: 'https://trivia.atlacord.com',
    siteName: 'Wan Shi Tong',
    images: [
      {
        url: '/icon.png',
        width: 48,
        height: 48,
        alt: 'Website logo'
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>
  );
}