import type { Metadata, Viewport } from 'next';
import { Noto_Serif } from 'next/font/google';
import './globals.css';

const notoSerif = Noto_Serif({
  variable: '--font-noto-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trivia.atlacord.com'),
  title: 'Wan Shi Tong',
  description: 'A Discord application specializing in trivia.',
  openGraph: {
    title: 'Wan Shi Tong',
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
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
      </body>
    </html>
  );
}
