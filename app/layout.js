import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.scripturesparkapp.com'), // Replace with your actual URL
  title: 'Scripture Spark | AI-Powered Bible Study',
  description: 'Enhance your Bible study with AI-generated flashcards. Scripture Spark helps you memorize verses, understand context, and deepen your faith.',
  keywords: 'Bible study, flashcards, AI, scripture memorization, Christian education',
  author: 'Scripture Spark Team',
  openGraph: {
    title: 'Scripture Spark | AI-Powered Bible Study',
    description: 'Enhance your Bible study with AI-generated flashcards.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Scripture Spark' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scripture Spark | AI-Powered Bible Study',
    description: 'Enhance your Bible study with AI-generated flashcards.',
    images: ['/twitter-image.jpg'],
    creator: '@ScriptureSparkApp', // Replace with your Twitter handle
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6', // Matches the blue color used in the design
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
