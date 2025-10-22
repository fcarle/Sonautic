'use client'

import React from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { ClipboardList } from 'lucide-react'

export default function AssignmentsPage() {
  return (
    <DashboardLayout type="educator">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-2">Assignments</h1>
        <p className="text-gray-400 mb-8">Create and manage assignments</p>
        <GlassCard className="p-12 text-center">
          <ClipboardList size={64} className="mx-auto mb-4 text-gray-600" />
          <h3 className="text-xl font-semibold mb-2">Assignments</h3>
          <p className="text-gray-400">Assignments management coming soon</p>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
