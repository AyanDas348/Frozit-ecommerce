import type { Metadata } from 'next';
import './globals.scss';
import { Providers } from '@/redux/provider';



export const metadata: Metadata = {
  title: 'Frozit - Time Ki Bachat, Eat Fresh Fatafat',
  description: 'Time Ki Bachat, Eat Fresh Fatafat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
