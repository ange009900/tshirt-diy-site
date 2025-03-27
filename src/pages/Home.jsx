
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Tee不亏 · 情绪T恤DIY</h1>
      <p className="mb-6">把你的情绪，印在T恤上。</p>
      <Link to="/design" className="bg-black text-white px-4 py-2 rounded">
        开始设计
      </Link>
    </div>
  )
}
