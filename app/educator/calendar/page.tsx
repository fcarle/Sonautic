'use client'

import React from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { Calendar as CalendarIcon } from 'lucide-react'

export default function EducatorCalendarPage() {
  return (
    <DashboardLayout type="educator">
      <div className="p-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-1">Calendar</h1>
          <p className="text-sm text-gray-500">Your teaching schedule</p>
        </div>
        <GlassCard className="p-12 text-center">
          <CalendarIcon size={64} className="mx-auto mb-4 text-gray-600" />
          <h3 className="text-xl font-semibold mb-2">Calendar</h3>
          <p className="text-gray-400">Calendar integration coming soon</p>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
