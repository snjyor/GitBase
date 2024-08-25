import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: '一人景',
    template: '%s | 一人景'
  },
  description: '用心记录每一段旅程',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          {/* <Sidebar /> */}
          <main className="flex-1">
            <Layout>{children}</Layout>
          </main>
        </div>
      </body>
    </html>
  )
}