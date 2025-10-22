'use client'

import React from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { Users } from 'lucide-react'

export default function EducatorConnectPage() {
  return (
    <DashboardLayout type="educator">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-2">Connect</h1>
        <p className="text-gray-400 mb-8">Network with colleagues</p>
        <GlassCard className="p-12 text-center">
          <Users size={64} className="mx-auto mb-4 text-gray-600" />
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <p className="text-gray-400">Connect feature coming soon</p>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
