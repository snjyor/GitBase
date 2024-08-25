'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Github, Sun, Moon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { path: '/', label: '首页' },
  { path: '/posts', label: '技术笔记' },
  { path: '/artict', label: 'AI工具分享' },
  { path: '/oversea', label: '技术出海' },
  { path: '/reflection', label: '个人反思' }
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    let isMounted = true;
    const checkLoginStatus = async () => {
      if (!isMounted) return;
      setIsLoading(true);
      try {
        const response = await fetch('/api/check-auth');
        const data = await response.json();
        if (isMounted) setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error('Failed to check auth status:', error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    checkLoginStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setIsLoggedIn(false);
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">一人景</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
                  item.path === pathname && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Show when={isLoggedIn} otherwise={<ShowLoginButton />}>
            <ShowLogoutButton handleLogout={handleLogout} />
          </Show>
          <button onClick={toggleTheme} className="p-2">
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </header>
  )
}


function Show(props) {
  const {when, otherwise=null, children} = props
  return when ? children : otherwise
}


function ShowLoginButton() {
  return (
    <Link href="/login">
      <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>登录</Button>
    </Link>
  )
}

function ShowLogoutButton(props) {
  const {handleLogout} = props
  return (
    <>
      <Link href="/admin">
        <Button variant="ghost">Admin</Button>
      </Link>
      <Button onClick={handleLogout} variant="outline">登出</Button>
    </>
  )
}