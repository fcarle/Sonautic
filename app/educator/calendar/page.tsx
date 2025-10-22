'use client'

import React from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { Calendar as CalendarIcon } from 'lucide-react'

export default function EducatorCalendarPage() {
  return (
    <DashboardLayout type="educator">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-2">Calendar</h1>
        <p className="text-gray-400 mb-8">Your teaching schedule</p>
        <GlassCard className="p-12 text-center">
          <CalendarIcon size={64} className="mx-auto mb-4 text-gray-600" />
          <h3 className="text-xl font-semibold mb-2">Calendar</h3>
          <p className="text-gray-400">Calendar integration coming soon</p>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
