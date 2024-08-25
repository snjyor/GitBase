// components/Footer.js
import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">关于我</h3>
            <p className="mt-4 text-base text-gray-300">
              我是一人景, 这是我记录个人技术成长与探索的平台, 分享独立开发网站、学习新技术的点滴心得。分享有趣的AI工具, 正在技术出海探索中。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">快速链接</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/posts" className="text-base text-gray-300 hover:text-white">
                  技术笔记
                </Link>
              </li>
              <li>
                <Link href="/aitools" className="text-base text-gray-300 hover:text-white">
                    AI工具分享
                </Link>
              </li>
              <li>
                <Link href="/oversea" className="text-base text-gray-300 hover:text-white">
                  技术出海
                </Link>
              </li>
              <li>
                <Link href="/reflection" className="text-base text-gray-300 hover:text-white">
                  个人反思
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex'>
            <h3 className="text-sm font-semibold tracking-wider uppercase pr-5 text-base">联系我:</h3>
            <a href="https://github.com/snjyor" target="_blank" className="text-base text-gray-300 pr-3 hover:text-white">
              <Github />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" className="text-base text-gray-300 pr-3 hover:text-white">
              <Twitter />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} 一人景的秘密基地. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}