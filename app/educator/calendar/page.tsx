'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { useTheme } from '@/components/ThemeProvider'
import { 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Plus,
  ChevronLeft,
  ChevronRight,
  X,
  Search
} from 'lucide-react'

export default function EducatorCalendarPage() {
  const { theme } = useTheme()
  const [currentMonth, setCurrentMonth] = useState(9) // October (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025)
  const [activeView, setActiveView] = useState<'month' | 'week' | 'day'>('month')
  const [showCreateEventModal, setShowCreateEventModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear)

  // Sample events data - in a real app this would come from a database
  const events = [
    { 
      date: 23, 
      title: 'Piano Lesson - Emma Johnson', 
      time: '10:00 AM',
      duration: '1 hour',
      location: 'Room 101',
      type: 'lesson',
      color: 'indigo'
    },
    { 
      date: 23, 
      title: 'Music Theory Class', 
      time: '1:00 PM',
      duration: '1.5 hours',
      location: 'Lecture Hall',
      type: 'class',
      color: 'blue'
    },
    { 
      date: 24, 
      title: 'Piano Lesson - Michael Chen', 
      time: '9:00 AM',
      duration: '1 hour',
      location: 'Room 101',
      type: 'lesson',
      color: 'indigo'
    },
    { 
      date: 24, 
      title: 'Masterclass', 
      time: '4:00 PM',
      duration: '2 hours',
      location: 'Concert Hall',
      type: 'masterclass',
      color: 'slate'
    },
    { 
      date: 25, 
      title: 'Ensemble Practice', 
      time: '2:00 PM',
      duration: '2 hours',
      location: 'Rehearsal Room',
      type: 'practice',
      color: 'purple'
    },
    { 
      date: 26, 
      title: 'Student Recital', 
      time: '6:00 PM',
      duration: '2 hours',
      location: 'Concert Hall',
      type: 'performance',
      color: 'pink'
    },
  ]

  const getEventsForDate = (day: number) => {
    return events.filter(event => event.date === day)
  }

  const upcomingEvents = events
    .filter(event => event.date >= 23)
    .sort((a, b) => a.date - b.date)
    .slice(0, 5)

  return (
    <DashboardLayout type="educator">
      {/* Create Event Modal */}
      {showCreateEventModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`rounded-2xl border max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
            theme === 'dark' 
              ? 'bg-gray-900 border-white/10' 
              : 'bg-white border-gray-200'
          }`}>
            <div className={`p-6 border-b flex items-center justify-between sticky top-0 z-10 ${
              theme === 'dark' 
                ? 'border-white/10 bg-gray-900' 
                : 'border-gray-200 bg-white'
            }`}>
              <h2 className="text-xl font-semibold">Create New Event</h2>
              <button 
                onClick={() => setShowCreateEventModal(false)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'hover:bg-white/10' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              {/* Event Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Event Title</label>
                <input 
                  type="text"
                  placeholder="Enter event title"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Event Type</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="">Select event type</option>
                  <option value="lesson">Lesson</option>
                  <option value="class">Class</option>
                  <option value="practice">Practice</option>
                  <option value="rehearsal">Rehearsal</option>
                  <option value="masterclass">Masterclass</option>
                  <option value="meeting">Meeting</option>
                  <option value="performance">Performance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input 
                    type="date"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-gray-50 border-gray-300'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <input 
                    type="time"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-gray-50 border-gray-300'
                    }`}
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <input 
                      type="number"
                      placeholder="1"
                      min="0"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10' 
                          : 'bg-gray-50 border-gray-300'
                      }`}
                    />
                    <span className="text-sm text-gray-400">hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number"
                      placeholder="30"
                      min="0"
                      max="59"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10' 
                          : 'bg-gray-50 border-gray-300'
                      }`}
                    />
                    <span className="text-sm text-gray-400">minutes</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <MapPin size={16} />
                  Location
                </label>
                <input 
                  type="text"
                  placeholder="Enter location or room number"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>

              {/* Attendees */}
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Users size={16} />
                  Attendees
                </label>
                <input 
                  type="text"
                  placeholder="Add students or participants"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
                <p className="text-xs text-gray-500 mt-2">Separate multiple names with commas</p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea 
                  rows={4}
                  placeholder="Add event description or notes..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                ></textarea>
              </div>

              {/* Repeat */}
              <div>
                <label className="block text-sm font-medium mb-2">Repeat</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="none">Does not repeat</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Every 2 weeks</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              {/* Reminder */}
              <div>
                <label className="block text-sm font-medium mb-2">Reminder</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="none">No reminder</option>
                  <option value="15min">15 minutes before</option>
                  <option value="30min">30 minutes before</option>
                  <option value="1hour">1 hour before</option>
                  <option value="1day">1 day before</option>
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className={`p-6 border-t flex items-center justify-end gap-3 sticky bottom-0 ${
              theme === 'dark' 
                ? 'border-white/10 bg-gray-900' 
                : 'border-gray-200 bg-white'
            }`}>
              <button 
                onClick={() => setShowCreateEventModal(false)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  // Handle event creation logic here
                  setShowCreateEventModal(false)
                }}
                className="px-6 py-2.5 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm"
                style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
              >
                Create Event
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        <div className="p-8 w-full max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-1">Calendar</h1>
          </div>

          {/* View Controls and Actions */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveView('month')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === 'month' 
                    ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setActiveView('week')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === 'week' 
                    ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setActiveView('day')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === 'day' 
                    ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
              >
                Day
              </button>
            </div>

            <button 
              onClick={() => setShowCreateEventModal(true)}
              className="px-5 py-2.5 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm hover:shadow-md flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
            >
              <Plus size={18} />
              <span>New Event</span>
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <GlassCard className={`p-6 border shadow-lg ${
                theme === 'dark' 
                  ? 'border-white/10 bg-white/5 shadow-black/30' 
                  : 'border-gray-200 bg-white shadow-gray-300/30'
              }`}>
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">
                    {months[currentMonth]} {currentYear}
                  </h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={previousMonth}
                      className={`p-2 rounded-lg transition-colors ${
                        theme === 'dark' 
                          ? 'hover:bg-white/10' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => {
                        setCurrentMonth(9)
                        setCurrentYear(2025)
                      }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        theme === 'dark' 
                          ? 'hover:bg-white/10' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Today
                    </button>
                    <button
                      onClick={nextMonth}
                      className={`p-2 rounded-lg transition-colors ${
                        theme === 'dark' 
                          ? 'hover:bg-white/10' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Day Names */}
                <div className="grid grid-cols-7 gap-2 mb-3">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-xs font-semibold text-gray-400 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div key={`empty-${index}`} className="aspect-square"></div>
                  ))}
                  
                  {/* Calendar days */}
                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1
                    const dayEvents = getEventsForDate(day)
                    const isToday = day === 23 && currentMonth === 9 && currentYear === 2025
                    const hasEvents = dayEvents.length > 0
                    
                    return (
                      <div
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`aspect-square p-2 rounded-lg cursor-pointer transition-all border ${
                          isToday
                            ? theme === 'dark'
                              ? 'bg-indigo-500/15 border-indigo-400/50 shadow-md shadow-indigo-900/40'
                              : 'bg-indigo-100 border-indigo-400 shadow-md shadow-indigo-300/40'
                            : hasEvents
                            ? theme === 'dark'
                              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 shadow-sm shadow-black/20 hover:shadow-md'
                              : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 shadow-sm shadow-gray-200/30 hover:shadow-md'
                            : theme === 'dark'
                            ? 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'
                            : 'bg-transparent border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                        }`}
                      >
                        <div className={`text-sm font-semibold mb-1 ${
                          isToday 
                            ? 'text-indigo-300' 
                            : theme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-700'
                        }`}>
                          {day}
                        </div>
                        {hasEvents && (
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map((event, idx) => (
                              <div
                                key={idx}
                                className={`text-[9px] px-1.5 py-0.5 rounded truncate ${
                                  theme === 'dark'
                                    ? 'bg-indigo-500/30 text-indigo-200'
                                    : 'bg-indigo-200 text-indigo-700'
                                }`}
                                title={event.title}
                              >
                                {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-[9px] text-gray-500 pl-1">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </GlassCard>
            </div>

            {/* Upcoming Events Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <GlassCard className={`p-5 border shadow-lg ${
                theme === 'dark' 
                  ? 'border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-black/20' 
                  : 'border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-gray-300/40'
              }`}>
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-lg ${
                      theme === 'dark' ? 'shadow-indigo-900/30' : 'shadow-indigo-500/20'
                    }`}
                    style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                  >
                    <CalendarIcon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-medium mb-0.5">{upcomingEvents.length} Events</div>
                    <div className="text-sm text-gray-500">This Week</div>
                  </div>
                </div>
              </GlassCard>

              {/* Upcoming Events List */}
              <GlassCard className={`p-6 border shadow-md ${
                theme === 'dark' 
                  ? 'border-white/10 bg-white/5 shadow-black/30' 
                  : 'border-gray-200 bg-white shadow-gray-300/30'
              }`}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-semibold">Upcoming Events</h3>
                  <span className="text-xs text-gray-500">{upcomingEvents.length} scheduled</span>
                </div>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div 
                      key={index}
                      className="p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Clock className="text-gray-500" size={12} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium mb-1 truncate">{event.title}</div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock size={11} />
                            <span>Oct {event.date}, {event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <MapPin size={11} />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs bg-${event.color}-600/20 text-${event.color}-300 capitalize`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Calendar Legend */}
              <GlassCard className={`p-5 border shadow-md ${
                theme === 'dark' 
                  ? 'border-white/10 bg-white/5 shadow-black/30' 
                  : 'border-gray-200 bg-white shadow-gray-300/30'
              }`}>
                <h3 className="text-sm font-semibold mb-4">Event Types</h3>
                <div className="space-y-2.5">
                  {[
                    { label: 'Lessons', color: 'indigo' },
                    { label: 'Classes', color: 'blue' },
                    { label: 'Practice', color: 'purple' },
                    { label: 'Rehearsals', color: 'pink' },
                    { label: 'Performances', color: 'rose' },
                    { label: 'Meetings', color: 'slate' },
                  ].map((type, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-${type.color}-500`}></div>
                      <span className="text-sm text-gray-400">{type.label}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
