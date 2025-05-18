import type { Metadata } from 'next';
import './globals.css';

import { Open_Sans, VT323 } from 'next/font/google';
import clsx from 'clsx';

const pixel = VT323({
  weight: '400',
  subsets: ['latin'],
})

const open = Open_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '',
  description: 'collection of personal dev projects',
  icons: 'https://64.media.tumblr.com/avatar_63ed1d13b42f_512.png'
};

const bodyClasses = clsx(
  open.className,
  `pixel-${pixel.className}`
)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={bodyClasses}>
        {children}
      </body>
    </html>
  )
}
