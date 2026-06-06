import './globals.css'
import Header from '../components/Header';

export const metadata = {
  title: 'Aspect Ratio | Content Creation Agency',
  description: 'Aspect Ratio creates video, web, SEO, advertising, and brand storytelling content for growth-focused businesses.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
