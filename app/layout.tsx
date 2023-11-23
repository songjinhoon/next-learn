import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import React, { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode; }) {
  return (
    <html lang='en'>
    <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}