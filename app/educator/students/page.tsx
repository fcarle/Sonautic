'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
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
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')

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

  return (
    <DashboardLayout type="educator">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Students</h1>
            <p className="text-gray-400">View progress, timelines, and manage your students</p>
          </div>
          <button className="glass-strong px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white/15 transition-all">
            <Plus size={18} />
            <span className="font-medium">Add Student</span>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Total Students</div>
              <GraduationCap size={18} className="text-blue-400" />
            </div>
            <div className="text-3xl font-bold">{students.length}</div>
          </GlassCard>
          
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Avg Practice Hours</div>
              <Clock size={18} className="text-purple-400" />
            </div>
            <div className="text-3xl font-bold">
              {(students.reduce((sum, s) => sum + s.practiceHours, 0) / students.length).toFixed(1)}h
            </div>
          </GlassCard>
          
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Pending Reviews</div>
              <AlertCircle size={18} className="text-yellow-400" />
            </div>
            <div className="text-3xl font-bold">
              {students.reduce((sum, s) => sum + s.assignmentsPending, 0)}
            </div>
          </GlassCard>
          
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Avg Grade</div>
              <Award size={18} className="text-green-400" />
            </div>
            <div className="text-3xl font-bold">
              {Math.round(students.reduce((sum, s) => sum + s.averageGrade, 0) / students.length)}%
            </div>
          </GlassCard>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <button className="glass-strong px-4 py-2 rounded-xl font-medium transition-all">
              All Students
            </button>
            <button className="hover:bg-white/5 px-4 py-2 rounded-xl font-medium transition-all">
              Advanced
            </button>
            <button className="hover:bg-white/5 px-4 py-2 rounded-xl font-medium transition-all">
              Intermediate
            </button>
            <button className="hover:bg-white/5 px-4 py-2 rounded-xl font-medium transition-all">
              Beginner
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <GlassCard className="px-4 py-2 flex items-center gap-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                className="bg-transparent outline-none text-white placeholder-gray-500 w-48"
              />
            </GlassCard>
            <button className="glass-subtle px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all">
              <Filter size={18} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Students List */}
        <div className="space-y-4">
          {students.map((student) => (
            <GlassCard key={student.id} className="p-6 hover:bg-white/5 transition-all">
              <div className="flex items-start justify-between mb-4">
                {/* Student Info */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-16 h-16 rounded-xl glass-strong flex items-center justify-center text-xl font-bold">
                    {student.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{student.name}</h3>
                      {getStatusBadge(student.status)}
                      <span className="text-sm text-gray-400">
                        {student.instrument} • {student.level} • {student.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
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

                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="glass-subtle p-3 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Practice Hours</div>
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-bold">{student.practiceHours}h</div>
                          <div className={`flex items-center text-xs ${student.practiceChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {student.practiceChange > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                            {Math.abs(student.practiceChange)}%
                          </div>
                        </div>
                      </div>
                      <div className="glass-subtle p-3 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Assignments</div>
                        <div className="text-lg font-bold">
                          {student.assignmentsCompleted}/{student.assignmentsCompleted + student.assignmentsPending}
                        </div>
                      </div>
                      <div className="glass-subtle p-3 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Avg Grade</div>
                        <div className="text-lg font-bold">{student.averageGrade}%</div>
                      </div>
                      <div className="glass-subtle p-3 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Last Submission</div>
                        <div className="text-sm font-medium">{student.lastSubmission}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setSelectedStudent(selectedStudent === student.id ? null : student.id)}
                    className="glass-subtle px-4 py-2 rounded-xl hover:bg-white/10 transition-all text-sm"
                  >
                    <Eye size={16} className="inline mr-2" />
                    {selectedStudent === student.id ? 'Hide' : 'View'} Timeline
                  </button>
                  <button className="glass-subtle px-3 py-2 rounded-xl hover:bg-white/10 transition-all">
                    <MessageSquare size={16} />
                  </button>
                  <button className="glass-subtle px-3 py-2 rounded-xl hover:bg-white/10 transition-all">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>

              {/* Timeline - CRM Style */}
              {selectedStudent === student.id && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                    <Clock size={16} />
                    Recent Activity Timeline
                  </h4>
                  <div className="space-y-3">
                    {student.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 glass-subtle p-4 rounded-lg hover:bg-white/5 transition-all">
                        <div className="p-2 glass rounded-lg mt-0.5">
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
                          <button className="glass-strong px-3 py-1.5 rounded-lg text-xs hover:bg-white/15 transition-all">
                            Review Now
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 glass-subtle py-2 rounded-lg text-sm hover:bg-white/10 transition-all">
                    View Full Timeline
                  </button>
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Empty State */}
        {students.length === 0 && (
          <GlassCard className="p-16 text-center">
            <GraduationCap size={64} className="mx-auto mb-4 text-gray-600" />
            <h3 className="text-2xl font-semibold mb-2">No students yet</h3>
            <p className="text-gray-400 mb-6">Add your first student to get started</p>
            <button className="glass-strong px-6 py-3 rounded-xl hover:bg-white/15 transition-all">
              <Plus size={18} className="inline mr-2" />
              Add Student
            </button>
          </GlassCard>
        )}
      </div>
    </DashboardLayout>
  )
}
