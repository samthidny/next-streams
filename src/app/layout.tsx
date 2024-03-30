import ServerNavigation from "@/ui/server-navigation";
import Navigation from "../ui/navigation"
import './../app.css';
import { Roboto } from 'next/font/google'
import Footer from "@/ui/footer";

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
        <ServerNavigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}