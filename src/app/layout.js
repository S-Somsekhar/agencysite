// src/app/layout.jsx
import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LaunchLab — Web Solutions for Bold Ideas',
  description: 'LaunchLab is a digital agency that builds high-performing websites for startups, brands, and creators.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">LaunchLab</h1>
          <nav className="flex gap-6 text-sm font-medium text-white">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-20 bg-slate-900 min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-[#0f0f1a] py-4 text-center text-sm text-gray-500 border-t border-slate-800">
          <div>© {new Date().getFullYear()} LaunchLab. All rights reserved.</div>
          Prototype by {" "}
          <Link
          href="https://sitenest.clientnesthq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
          >
          SiteNest
        </Link>
        </footer>
      </body>
    </html>
  )
}
