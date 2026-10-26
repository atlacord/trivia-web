import { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://trivia.atlacord.com'),
  title: 'Wan Shi Tong | Invite',
  description: 'A Discord application specializing in trivia.',
  openGraph: {
    title: 'Wan Shi Tong | Invite',
    description: 'A Discord application specializing in trivia.',
    url: 'https://trivia.atlacord.com/invite',
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
  return redirect('https://discord.com/oauth2/authorize?client_id=1555245594438533221&permissions=805306368&integration_type=0&scope=bot+applications.commands');
};