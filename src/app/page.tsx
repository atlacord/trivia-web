import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Wan Shi Tong',
  description: 'A Discord application specializing in trivia.'
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