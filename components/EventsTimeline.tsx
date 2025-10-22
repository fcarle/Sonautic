'use client'

import React from 'react'
import { GlassCard } from './GlassCard'

interface Event {
  type: 'lesson' | 'competition' | 'audition' | 'masterclass' | 'concert'
  title: string
  date: string
  time: string
}

const eventColors = {
  lesson: { bg: 'bg-blue-500/30', border: 'border-blue-400/50', text: 'text-blue-300' },
  competition: { bg: 'bg-red-500/30', border: 'border-red-400/50', text: 'text-red-300' },
  audition: { bg: 'bg-yellow-500/30', border: 'border-yellow-400/50', text: 'text-yellow-300' },
  masterclass: { bg: 'bg-purple-500/30', border: 'border-purple-400/50', text: 'text-purple-300' },
  concert: { bg: 'bg-green-500/30', border: 'border-green-400/50', text: 'text-green-300' },
}

const thisWeekEvents: Event[] = [
  { type: 'lesson', title: 'Piano Lesson with Prof. Anderson', date: 'Today', time: '2:00 PM' },
  { type: 'lesson', title: 'Music Theory', date: 'Tomorrow', time: '10:00 AM' },
  { type: 'masterclass', title: 'Advanced Technique Masterclass', date: 'Wed', time: '4:00 PM' },
]

const nextWeekEvents: Event[] = [
  { type: 'audition', title: 'Spring Concert Audition', date: 'Mon, Oct 28', time: '3:00 PM' },
  { type: 'competition', title: 'Regional Competition', date: 'Sat, Nov 2', time: '9:00 AM' },
  { type: 'concert', title: 'Fall Recital', date: 'Sun, Nov 3', time: '7:00 PM' },
]

export const EventsTimeline: React.FC = () => {
  const renderEvent = (event: Event, index: number) => {
    const colors = eventColors[event.type]
    return (
      <div key={index} className={`${colors.bg} ${colors.border} border rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className={`text-xs font-medium uppercase ${colors.text} mb-1`}>{event.type}</div>
            <div className="font-medium mb-1">{event.title}</div>
            <div className="text-sm text-gray-400">{event.date} • {event.time}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
      
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-400 mb-3">This Week</div>
        <div className="space-y-3">
          {thisWeekEvents.map((event, index) => renderEvent(event, index))}
        </div>
      </div>

      <div>
        <div className="text-sm font-medium text-gray-400 mb-3">Next Week</div>
        <div className="space-y-3">
          {nextWeekEvents.map((event, index) => renderEvent(event, index))}
        </div>
      </div>
    </GlassCard>
  )
}
