import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Lucas Alves',
  description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>{ metadata.title }</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};