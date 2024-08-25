// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '一人景',
  description: '记录个人技术成长与探索的平台，分享独立开发网站、学习新技术的点滴心得。这里不仅有前沿 AI 工具的使用技巧，还有关于技术如何走向国际市场的深度探讨。希望每一篇文章都能为读者带来启发，成为你技术旅途中的一盏明灯。',
}

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          一人景
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">用心记录每一段旅程</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
        记录个人技术成长与探索的平台，分享开发网站、学习新技术的点滴心得。这里不仅有前沿 AI 工具的使用技巧，还有关于技术如何走向国际市场的从零探索。希望每一篇文章都能为读者带来启发，成为你技术旅途中的一盏明灯。
        </p>
      </section>

      <ArticleList articles={allPostsData} />
    </div>
  )
}
