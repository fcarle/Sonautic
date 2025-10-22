'use client'

import React from 'react'
import { GlassCard } from './GlassCard'

interface PracticeDay {
  day: string
  hours: number
}

const mockData: PracticeDay[] = [
  { day: 'Mon', hours: 4.0 },
  { day: 'Tue', hours: 3.3 },
  { day: 'Wed', hours: 3.7 },
  { day: 'Thu', hours: 4.2 },
  { day: 'Fri', hours: 3.8 },
  { day: 'Sat', hours: 5.1 },
  { day: 'Sun', hours: 2.9 },
]

export const PracticeChart: React.FC = () => {
  const maxHours = Math.max(...mockData.map(d => d.hours))

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold mb-6">Practice Stats - Last 7 Days</h3>
      <div className="flex items-end justify-between gap-4 h-48">
        {mockData.map((day, index) => {
          const heightPercent = (day.hours / maxHours) * 100
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-xs text-gray-400">{day.hours}h</div>
              <div className="w-full bg-gradient-to-t from-primary-500 to-primary-300 rounded-t-lg relative overflow-hidden"
                   style={{ height: `${heightPercent}%` }}>
                <div className="absolute inset-0 bg-white/10"></div>
              </div>
              <div className="text-sm font-medium text-gray-300">{day.day}</div>
            </div>
          )
        })}
      </div>
      <div className="mt-6 text-center">
        <div className="text-2xl font-bold text-primary-400">27.0 hours</div>
        <div className="text-sm text-gray-400">Total this week</div>
      </div>
    </GlassCard>
  )
}
