'use client'

import React from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { BarChart3 } from 'lucide-react'

export default function StatsPage() {
  return (
    <DashboardLayout type="student">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-2">Stats</h1>
        <p className="text-gray-400 mb-8">Your practice statistics and insights</p>
        <GlassCard className="p-12 text-center">
          <BarChart3 size={64} className="mx-auto mb-4 text-gray-600" />
          <h3 className="text-xl font-semibold mb-2">Statistics</h3>
          <p className="text-gray-400">Detailed stats view coming soon</p>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
