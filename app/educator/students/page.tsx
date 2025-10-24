'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { useTheme } from '@/components/ThemeProvider'
import { 
  GraduationCap,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Mail,
  Calendar,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  AlertCircle,
  Music,
  Award,
  Target,
  BarChart3,
  Eye,
  MessageSquare,
  FileText,
  Video,
  Mic
} from 'lucide-react'

export default function StudentsPage() {
  const { theme } = useTheme()
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  const [activeTab, setActiveTab] = useState<'all' | 'advanced' | 'intermediate' | 'beginner'>('all')

  const students = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'SC',
      instrument: 'Piano',
      level: 'Advanced',
      year: 'Senior',
      email: 'sarah.chen@music.edu',
      practiceHours: 28.5,
      practiceChange: 12,
      assignmentsCompleted: 12,
      assignmentsPending: 2,
      averageGrade: 94,
      lastSubmission: 'Today, 10:15 AM',
      nextLesson: 'Tomorrow, 2:00 PM',
      status: 'active',
      recentActivity: [
        { type: 'submission', title: 'Chopin Etude Op. 10 No. 4', time: '2 hours ago', status: 'needs-review' },
        { type: 'practice', title: 'Practice session - 2.5 hours', time: '5 hours ago' },
        { type: 'lesson', title: 'Weekly lesson completed', time: '2 days ago' }
      ]
    },
    {
      id: 2,
      name: 'Michael Park',
      avatar: 'MP',
      instrument: 'Piano',
      level: 'Intermediate',
      year: 'Junior',
      email: 'michael.park@music.edu',
      practiceHours: 22.3,
      practiceChange: -5,
      assignmentsCompleted: 10,
      assignmentsPending: 4,
      averageGrade: 87,
      lastSubmission: 'Yesterday, 3:45 PM',
      nextLesson: 'Oct 25, 3:30 PM',
      status: 'active',
      recentActivity: [
        { type: 'submission', title: 'Bach Invention No. 8', time: '1 day ago', status: 'reviewed' },
        { type: 'practice', title: 'Practice session - 1.8 hours', time: '1 day ago' },
        { type: 'message', title: 'Sent a question about technique', time: '3 days ago' }
      ]
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      avatar: 'ER',
      instrument: 'Piano',
      level: 'Advanced',
      year: 'Graduate',
      email: 'emma.rodriguez@music.edu',
      practiceHours: 35.2,
      practiceChange: 8,
      assignmentsCompleted: 14,
      assignmentsPending: 1,
      averageGrade: 96,
      lastSubmission: '3 days ago',
      nextLesson: 'Oct 24, 4:00 PM',
      status: 'active',
      recentActivity: [
        { type: 'submission', title: 'Midterm Recital Performance', time: '3 days ago', status: 'reviewed' },
        { type: 'practice', title: 'Practice session - 4.2 hours', time: '1 day ago' },
        { type: 'competition', title: 'Registered for National Competition', time: '5 days ago' }
      ]
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: 'DK',
      instrument: 'Piano',
      level: 'Intermediate',
      year: 'Sophomore',
      email: 'david.kim@music.edu',
      practiceHours: 18.7,
      practiceChange: 15,
      assignmentsCompleted: 8,
      assignmentsPending: 5,
      averageGrade: 82,
      lastSubmission: '5 days ago',
      nextLesson: 'Oct 26, 1:00 PM',
      status: 'attention',
      recentActivity: [
        { type: 'submission', title: 'Scale Practice - Major Keys', time: '5 days ago', status: 'needs-review' },
        { type: 'practice', title: 'Practice session - 1.2 hours', time: '2 days ago' },
        { type: 'lesson', title: 'Missed weekly lesson', time: '1 week ago', status: 'missed' }
      ]
    },
    {
      id: 5,
      name: 'Sophie Martinez',
      avatar: 'SM',
      instrument: 'Piano',
      level: 'Advanced',
      year: 'Senior',
      email: 'sophie.martinez@music.edu',
      practiceHours: 31.8,
      practiceChange: 6,
      assignmentsCompleted: 13,
      assignmentsPending: 2,
      averageGrade: 91,
      lastSubmission: 'Today, 9:20 AM',
      nextLesson: 'Tomorrow, 10:00 AM',
      status: 'active',
      recentActivity: [
        { type: 'submission', title: 'Beethoven Sonata Analysis', time: '3 hours ago', status: 'needs-review' },
        { type: 'practice', title: 'Practice session - 3.5 hours', time: '6 hours ago' },
        { type: 'audition', title: 'Orchestra audition scheduled', time: '2 days ago' }
      ]
    },
    {
      id: 6,
      name: 'James Lee',
      avatar: 'JL',
      instrument: 'Piano',
      level: 'Beginner',
      year: 'Freshman',
      email: 'james.lee@music.edu',
      practiceHours: 14.2,
      practiceChange: 3,
      assignmentsCompleted: 6,
      assignmentsPending: 3,
      averageGrade: 85,
      lastSubmission: '2 days ago',
      nextLesson: 'Oct 25, 5:00 PM',
      status: 'active',
      recentActivity: [
        { type: 'submission', title: 'First Performance Recording', time: '2 days ago', status: 'reviewed' },
        { type: 'practice', title: 'Practice session - 1.5 hours', time: '1 day ago' },
        { type: 'lesson', title: 'Weekly lesson completed', time: '4 days ago' }
      ]
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'submission': return <FileText size={16} className="text-blue-400" />
      case 'practice': return <Music size={16} className="text-purple-400" />
      case 'lesson': return <Video size={16} className="text-green-400" />
      case 'message': return <MessageSquare size={16} className="text-yellow-400" />
      case 'competition': return <Award size={16} className="text-orange-400" />
      case 'audition': return <Mic size={16} className="text-pink-400" />
      default: return <Clock size={16} className="text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    if (status === 'attention') {
      return <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300">Needs Attention</span>
    }
    return <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300">Active</span>
  }

  const filteredStudents = activeTab === 'all' 
    ? students 
    : students.filter(s => s.level.toLowerCase() === activeTab)

  return (
    <DashboardLayout type="educator">
      <div className="w-full flex justify-center">
        <div className="p-8 w-full max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-1">Students</h1>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'all' 
                    ? 'text-white shadow-md border border-white/20' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
                style={activeTab === 'all' ? { background: '#39497E' } : {}}
              >
                All Students
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'advanced' 
                    ? 'text-white shadow-md border border-white/20' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
                style={activeTab === 'advanced' ? { background: '#39497E' } : {}}
              >
                Advanced
              </button>
              <button
                onClick={() => setActiveTab('intermediate')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'intermediate' 
                    ? 'text-white shadow-md border border-white/20' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
                style={activeTab === 'intermediate' ? { background: '#39497E' } : {}}
              >
                Intermediate
              </button>
              <button
                onClick={() => setActiveTab('beginner')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'beginner' 
                    ? 'text-white shadow-md border border-white/20' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
                style={activeTab === 'beginner' ? { background: '#39497E' } : {}}
              >
                Beginner
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-3 px-4 py-3 border rounded-lg focus-within:border-indigo-500 transition-colors ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-gray-50 border-gray-300'
              }`}>
                <Search size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students..."
                  className={`bg-transparent outline-none ${
                    theme === 'dark' ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'
                  } w-48`}
                />
              </div>
              <button className={`px-4 py-3 rounded-lg flex items-center gap-2 transition-all border ${
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-gray-100 border-gray-200 hover:bg-gray-200'
              }`}>
                <Filter size={18} />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Students List */}
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <GlassCard key={student.id} className={`p-6 transition-all group border shadow-md ${
                theme === 'dark' 
                  ? 'border-white/10 bg-white/5 hover:bg-white/10 shadow-black/30 hover:shadow-black/40' 
                  : 'border-gray-200 bg-white hover:bg-gray-50 shadow-gray-300/30 hover:shadow-gray-400/40'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  {/* Student Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div 
                      className={`w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold border ${
                        theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'
                      }`}
                      style={{ color: '#39497E' }}
                    >
                      {student.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 
                          className="text-xl font-semibold transition-colors"
                          style={{ color: 'inherit' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#39497E'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                          {student.name}
                        </h3>
                        {getStatusBadge(student.status)}
                        <span className="text-sm text-gray-400">
                          {student.instrument} • {student.level} • {student.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Mail size={14} />
                          {student.email}
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          Next lesson: {student.nextLesson}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setSelectedStudent(selectedStudent === student.id ? null : student.id)}
                      className="px-4 py-2 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm hover:shadow-md flex items-center gap-2"
                      style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                    >
                      <Eye size={16} />
                      {selectedStudent === student.id ? 'Hide' : 'View'} Timeline
                    </button>
                    <button className={`p-2 rounded-lg transition-all ${
                      theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                    }`}>
                      <MessageSquare size={16} />
                    </button>
                    <button className={`p-2 rounded-lg transition-all ${
                      theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                    }`}>
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>

                {/* Timeline - CRM Style */}
                {selectedStudent === student.id && (
                  <div className={`mt-6 pt-6 border-t ${
                    theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                      <Clock size={16} />
                      Recent Activity Timeline
                    </h4>
                    <div className="space-y-3">
                      {student.recentActivity.map((activity, index) => (
                        <div key={index} className={`flex items-start gap-3 p-4 rounded-lg border transition-all ${
                          theme === 'dark' 
                            ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                            : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                        }`}>
                          <div className={`p-2 rounded-lg mt-0.5 ${
                            theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                          }`}>
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="font-medium">{activity.title}</div>
                              {activity.status === 'needs-review' && (
                                <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-500/20 text-yellow-300">
                                  Needs Review
                                </span>
                              )}
                              {activity.status === 'reviewed' && (
                                <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-300">
                                  Reviewed
                                </span>
                              )}
                              {activity.status === 'missed' && (
                                <span className="px-2 py-0.5 rounded-full text-xs bg-red-500/20 text-red-300">
                                  Missed
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-400">{activity.time}</div>
                          </div>
                          {activity.status === 'needs-review' && (
                            <button 
                              className="px-3 py-1.5 text-white rounded-lg text-xs font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm hover:shadow-md"
                              style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                            >
                              Review Now
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    <button className={`w-full mt-4 py-2 rounded-lg text-sm transition-all border ${
                      theme === 'dark' 
                        ? 'bg-white/5 hover:bg-white/10 border-white/10' 
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                    }`}>
                      View Full Timeline
                    </button>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>

          {/* Empty State */}
          {filteredStudents.length === 0 && (
            <GlassCard className={`p-16 text-center border shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-white/5 shadow-black/30' 
                : 'border-gray-200 bg-white shadow-gray-300/30'
            }`}>
              <GraduationCap size={64} className="mx-auto mb-4 text-gray-600" />
              <h3 className="text-2xl font-semibold mb-2">No students found</h3>
              <p className="text-gray-400 mb-6">
                {activeTab === 'all' 
                  ? 'Add your first student to get started'
                  : `No ${activeTab} level students found`
                }
              </p>
              {activeTab === 'all' && (
                <button 
                  className="px-6 py-3 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm hover:shadow-md inline-flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  <Plus size={18} />
                  Add Student
                </button>
              )}
            </GlassCard>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
