import Navigation from "./ui/navigation"
import './app.css';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="App">
        
        <Navigation />
        {children}
        
      </body>
    </html>
  )
}