'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { useTheme } from '@/components/ThemeProvider'
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  CheckCircle,
  Clock,
  Award,
  Calendar,
  FileText,
  Target,
  Activity
} from 'lucide-react'

export default function EducatorStatsPage() {
  const { theme } = useTheme()
  const [timePeriod, setTimePeriod] = useState<'week' | 'month' | 'semester' | 'year'>('month')

  // Helper function to get progress bar color based on percentage
  const getProgressColor = (progress: number) => {
    if (progress < 30) {
      return 'linear-gradient(90deg, #EF4444, #DC2626)' // red
    } else if (progress < 50) {
      return 'linear-gradient(90deg, #F97316, #EA580C)' // orange
    } else if (progress < 70) {
      return 'linear-gradient(90deg, #EAB308, #CA8A04)' // yellow
    } else if (progress < 85) {
      return 'linear-gradient(90deg, #84CC16, #65A30D)' // light green
    } else {
      return 'linear-gradient(90deg, #22C55E, #16A34A)' // green
    }
  }

  // Sample data - in a real app this would come from a database
  const stats = {
    totalStudents: 24,
    activeStudents: 21,
    totalAssignments: 156,
    completedAssignments: 142,
    avgCompletionRate: 87,
    totalLessons: 48,
    upcomingLessons: 12,
    avgPracticeTime: 4.2,
  }

  const studentProgress = [
    { name: 'Emma Johnson', progress: 95, assignments: 12, practiceHours: 28.5, trend: 'up' },
    { name: 'Michael Chen', progress: 88, assignments: 11, practiceHours: 24.2, trend: 'up' },
    { name: 'Sarah Williams', progress: 92, assignments: 12, practiceHours: 31.8, trend: 'up' },
    { name: 'David Brown', progress: 78, assignments: 9, practiceHours: 18.4, trend: 'down' },
    { name: 'Lisa Anderson', progress: 85, assignments: 10, practiceHours: 22.7, trend: 'up' },
    { name: 'James Wilson', progress: 91, assignments: 12, practiceHours: 27.3, trend: 'up' },
    { name: 'Emily Davis', progress: 89, assignments: 11, practiceHours: 25.9, trend: 'up' },
    { name: 'Chris Martinez', progress: 82, assignments: 10, practiceHours: 21.5, trend: 'up' },
  ]

  const weeklyActivity = [
    { day: 'Mon', submissions: 8, lessons: 6, practiceHours: 42 },
    { day: 'Tue', submissions: 12, lessons: 7, practiceHours: 38 },
    { day: 'Wed', submissions: 6, lessons: 5, practiceHours: 35 },
    { day: 'Thu', submissions: 15, lessons: 8, practiceHours: 48 },
    { day: 'Fri', submissions: 10, lessons: 6, practiceHours: 40 },
    { day: 'Sat', submissions: 4, lessons: 3, practiceHours: 28 },
    { day: 'Sun', submissions: 2, lessons: 1, practiceHours: 18 },
  ]

  const assignmentTypes = [
    { type: 'Practice', count: 45, percentage: 29 },
    { type: 'Theory', count: 32, percentage: 21 },
    { type: 'Composition', count: 28, percentage: 18 },
    { type: 'Performance', count: 24, percentage: 15 },
    { type: 'Scales', count: 18, percentage: 12 },
    { type: 'Other', count: 9, percentage: 5 },
  ]

  const maxSubmissions = Math.max(...weeklyActivity.map(d => d.submissions))
  const maxPracticeHours = Math.max(...weeklyActivity.map(d => d.practiceHours))

  return (
    <DashboardLayout type="educator">
      <div className="w-full flex justify-center">
        <div className="p-8 w-full max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-1">Stats</h1>
          </div>

          {/* Time Period Selector */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => setTimePeriod('week')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                timePeriod === 'week' 
                  ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                  : 'bg-white/10 text-gray-400 hover:bg-white/15'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setTimePeriod('month')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                timePeriod === 'month' 
                  ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                  : 'bg-white/10 text-gray-400 hover:bg-white/15'
              }`}
            >
              This Month
            </button>
            <button
              onClick={() => setTimePeriod('semester')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                timePeriod === 'semester' 
                  ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                  : 'bg-white/10 text-gray-400 hover:bg-white/15'
              }`}
            >
              This Semester
            </button>
            <button
              onClick={() => setTimePeriod('year')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                timePeriod === 'year' 
                  ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                  : 'bg-white/10 text-gray-400 hover:bg-white/15'
              }`}
            >
              This Year
            </button>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Students */}
            <GlassCard className={`p-6 border shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-white/5 shadow-black/30' 
                : 'border-gray-200 bg-white shadow-gray-300/30'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-lg ${
                    theme === 'dark' ? 'shadow-indigo-900/30' : 'shadow-indigo-500/20'
                  }`}
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  <Users className="text-white" size={20} />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-xs">
                  <TrendingUp size={14} />
                  <span>+3</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stats.totalStudents}</div>
              <div className="text-sm text-gray-400">Total Students</div>
            </GlassCard>

            {/* Completion Rate */}
            <GlassCard className={`p-6 border shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-white/5 shadow-black/30' 
                : 'border-gray-200 bg-white shadow-gray-300/30'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-lg ${
                    theme === 'dark' ? 'shadow-indigo-900/30' : 'shadow-indigo-500/20'
                  }`}
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  <CheckCircle className="text-white" size={20} />
                </div>
                <div className="flex items-center gap-1 text-indigo-400 text-xs">
                  <TrendingUp size={14} />
                  <span>+5%</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stats.avgCompletionRate}%</div>
              <div className="text-sm text-gray-400">Completion Rate</div>
            </GlassCard>

            {/* Total Assignments */}
            <GlassCard className={`p-6 border shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-white/5 shadow-black/30' 
                : 'border-gray-200 bg-white shadow-gray-300/30'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-lg ${
                    theme === 'dark' ? 'shadow-indigo-900/30' : 'shadow-indigo-500/20'
                  }`}
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  <FileText className="text-white" size={20} />
                </div>
                <div className="flex items-center gap-1 text-indigo-400 text-xs">
                  <TrendingUp size={14} />
                  <span>+12</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stats.totalAssignments}</div>
              <div className="text-sm text-gray-400">Total Assignments</div>
            </GlassCard>

            {/* Avg Practice Time */}
            <GlassCard className={`p-6 border shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-white/5 shadow-black/30' 
                : 'border-gray-200 bg-white shadow-gray-300/30'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-lg ${
                    theme === 'dark' ? 'shadow-indigo-900/30' : 'shadow-indigo-500/20'
                  }`}
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  <Clock className="text-white" size={20} />
                </div>
                <div className="flex items-center gap-1 text-indigo-400 text-xs">
                  <TrendingUp size={14} />
                  <span>+0.4h</span>
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stats.avgPracticeTime}h</div>
              <div className="text-sm text-gray-400">Avg Practice Time</div>
            </GlassCard>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Weekly Activity Chart */}
            <GlassCard className={`p-6 border shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-white/5 shadow-black/30' 
                : 'border-gray-200 bg-white shadow-gray-300/30'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold">Weekly Activity</h3>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(57, 73, 126, 0.9)' }}></div>
                    <span className="text-gray-400">Submissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(57, 73, 126, 0.6)' }}></div>
                    <span className="text-gray-400">Practice Hours</span>
                  </div>
                </div>
              </div>
              <div className="h-64">
                <svg className="w-full h-full" viewBox="0 0 600 250">
                  {/* Grid lines */}
                  <line x1="50" y1="200" x2="550" y2="200" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1" />
                  <line x1="50" y1="150" x2="550" y2="150" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1" />
                  <line x1="50" y1="100" x2="550" y2="100" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1" />
                  <line x1="50" y1="50" x2="550" y2="50" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1" />
                  
                  {/* Bars */}
                  {weeklyActivity.map((day, index) => {
                    const x = 80 + index * 70
                    const submissionHeight = (day.submissions / maxSubmissions) * 140
                    const practiceHeight = (day.practiceHours / maxPracticeHours) * 140
                    
                    return (
                      <g key={index}>
                        {/* Submission bar */}
                        <rect
                          x={x - 12}
                          y={200 - submissionHeight}
                          width="12"
                          height={submissionHeight}
                          fill="rgba(57, 73, 126, 0.9)"
                          rx="2"
                          opacity="0.9"
                        />
                        {/* Practice hours bar */}
                        <rect
                          x={x + 2}
                          y={200 - practiceHeight}
                          width="12"
                          height={practiceHeight}
                          fill="rgba(57, 73, 126, 0.6)"
                          rx="2"
                          opacity="0.8"
                        />
                        {/* Day label */}
                        <text
                          x={x}
                          y="225"
                          fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'}
                          fontSize="12"
                          textAnchor="middle"
                        >
                          {day.day}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>
            </GlassCard>

            {/* Assignment Types Breakdown */}
            <GlassCard className={`p-6 border shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-white/5 shadow-black/30' 
                : 'border-gray-200 bg-white shadow-gray-300/30'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold">Assignment Types</h3>
                <span className="text-xs text-gray-400">Total: {assignmentTypes.reduce((acc, curr) => acc + curr.count, 0)}</span>
              </div>
              <div className="space-y-4">
                {assignmentTypes.map((type, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{type.type}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">{type.count}</span>
                        <span className="text-sm font-medium" style={{ color: '#39497E' }}>{type.percentage}%</span>
                      </div>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${
                      theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="h-full rounded-full transition-all duration-500" 
                        style={{ 
                          width: `${type.percentage}%`,
                          background: getProgressColor(type.percentage)
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Student Progress Table */}
          <GlassCard className={`p-6 border shadow-lg ${
            theme === 'dark' 
              ? 'border-white/10 bg-white/5 shadow-black/30' 
              : 'border-gray-200 bg-white shadow-gray-300/30'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold">Student Progress</h3>
              <button 
                className="px-4 py-2 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm hover:shadow-md"
                style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
              >
                View All Students
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Student</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Progress</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Assignments</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Practice Hours</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {studentProgress.map((student, index) => (
                    <tr 
                      key={index}
                      className={`border-b transition-colors cursor-pointer ${
                        theme === 'dark' 
                          ? 'border-white/5 hover:bg-white/5' 
                          : 'border-gray-100 hover:bg-gray-50'
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                            style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                          >
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium">{student.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`flex-1 h-2 rounded-full overflow-hidden ${
                            theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'
                          }`} style={{ minWidth: '100px' }}>
                          <div 
                            className="h-full rounded-full transition-all duration-300" 
                            style={{ 
                              width: `${student.progress}%`,
                              background: getProgressColor(student.progress)
                            }}
                          ></div>
                          </div>
                          <span className="text-sm font-medium" style={{ minWidth: '40px' }}>{student.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm">{student.assignments}/12</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm font-medium">{student.practiceHours}h</span>
                      </td>
                      <td className="py-4 px-4">
                        {student.trend === 'up' ? (
                          <div className="flex items-center gap-1 text-indigo-400">
                            <TrendingUp size={16} />
                            <span className="text-xs">+8%</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-gray-500">
                            <TrendingDown size={16} />
                            <span className="text-xs">-3%</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </div>
    </DashboardLayout>
  )
}
