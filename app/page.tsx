'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Default to student view
    router.push('/student/home')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass rounded-3xl p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Sonautic</h1>
        <p className="text-gray-400 mb-8">Loading...</p>
      </div>
    </div>
  )
}
