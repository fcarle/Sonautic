'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { 
  ClipboardList,
  Plus,
  Search,
  Filter,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  MoreVertical,
  FileAudio,
  FileVideo,
  FileText,
  Music,
  Eye,
  Edit,
  Copy,
  Trash2,
  Send,
  Upload
} from 'lucide-react'

export default function AssignmentsPage() {
  const [activeTab, setActiveTab] = useState<'active' | 'draft' | 'completed' | 'all'>('active')
  const [showNewModal, setShowNewModal] = useState(false)

  const assignments = [
    {
      id: 1,
      title: 'Chopin Etude Op. 10 No. 4',
      description: 'Record a complete performance with focus on even articulation and tempo consistency',
      dueDate: '2024-10-28',
      dueTime: '11:59 PM',
      assignedTo: 24,
      submitted: 18,
      pending: 6,
      status: 'active',
      type: 'audio',
      points: 100,
      createdDate: '2024-10-15'
    },
    {
      id: 2,
      title: 'Bach Invention No. 8 - Video Analysis',
      description: 'Submit a video performance with annotation of articulation and dynamics choices',
      dueDate: '2024-10-30',
      dueTime: '11:59 PM',
      assignedTo: 18,
      submitted: 12,
      pending: 6,
      status: 'active',
      type: 'video',
      points: 150,
      createdDate: '2024-10-18'
    },
    {
      id: 3,
      title: 'Scale Practice - All Major Keys',
      description: 'Record scales in all major keys, 2 octaves, hands together',
      dueDate: '2024-11-05',
      dueTime: '11:59 PM',
      assignedTo: 32,
      submitted: 5,
      pending: 27,
      status: 'active',
      type: 'audio',
      points: 50,
      createdDate: '2024-10-20'
    },
    {
      id: 4,
      title: 'Performance Reflection Essay',
      description: 'Write a 500-word reflection on your midterm recital performance',
      dueDate: '2024-11-08',
      dueTime: '11:59 PM',
      assignedTo: 28,
      submitted: 0,
      pending: 28,
      status: 'active',
      type: 'text',
      points: 75,
      createdDate: '2024-10-22'
    },
    {
      id: 5,
      title: 'Mozart Sonata K.545 - Movement 1',
      description: 'Draft assignment for next week',
      dueDate: '2024-11-12',
      dueTime: '11:59 PM',
      assignedTo: 0,
      submitted: 0,
      pending: 0,
      status: 'draft',
      type: 'video',
      points: 100,
      createdDate: '2024-10-23'
    },
    {
      id: 6,
      title: 'Beethoven Sonata Op. 2 No. 1',
      description: 'First movement complete performance',
      dueDate: '2024-10-15',
      dueTime: '11:59 PM',
      assignedTo: 20,
      submitted: 20,
      pending: 0,
      status: 'completed',
      type: 'audio',
      points: 200,
      createdDate: '2024-09-28'
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'audio': return <FileAudio size={18} className="text-blue-400" />
      case 'video': return <FileVideo size={18} className="text-purple-400" />
      case 'text': return <FileText size={18} className="text-green-400" />
      default: return <Music size={18} className="text-gray-400" />
    }
  }

  const getStatusBadge = (assignment: any) => {
    if (assignment.status === 'draft') {
      return <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-300">Draft</span>
    }
    if (assignment.status === 'completed') {
      return <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300">Completed</span>
    }
    const submissionRate = assignment.assignedTo > 0 ? (assignment.submitted / assignment.assignedTo) * 100 : 0
    if (submissionRate === 100) {
      return <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 flex items-center gap-1">
        <CheckCircle size={12} />
        All Submitted
      </span>
    }
    const daysUntilDue = Math.ceil((new Date(assignment.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    if (daysUntilDue < 2) {
      return <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-300 flex items-center gap-1">
        <AlertCircle size={12} />
        Due Soon
      </span>
    }
    return <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">Active</span>
  }

  const getDaysUntilDue = (dueDate: string) => {
    const days = Math.ceil((new Date(dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    if (days < 0) return 'Overdue'
    if (days === 0) return 'Due today'
    if (days === 1) return 'Due tomorrow'
    return `Due in ${days} days`
  }

  const filteredAssignments = activeTab === 'all' 
    ? assignments 
    : assignments.filter(a => a.status === activeTab)

  const stats = {
    active: assignments.filter(a => a.status === 'active').length,
    draft: assignments.filter(a => a.status === 'draft').length,
    needsReview: assignments.reduce((sum, a) => sum + a.submitted, 0),
    totalStudents: Math.max(...assignments.map(a => a.assignedTo))
  }

  return (
    <DashboardLayout type="educator">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Assignments</h1>
            <p className="text-gray-400">Create, manage, and review student assignments</p>
          </div>
          <button 
            onClick={() => setShowNewModal(true)}
            className="glass-strong px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white/15 transition-all"
          >
            <Plus size={18} />
            <span className="font-medium">Create Assignment</span>
          </button>
        </div>

        {/* Create Assignment Modal */}
        {showNewModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-strong max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 relative">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-1">Create New Assignment</h2>
                  <p className="text-gray-400">Set up a new assignment for your students</p>
                </div>
                <button
                  onClick={() => setShowNewModal(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-all"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* Assignment Type */}
                <div>
                  <label className="block text-sm font-medium mb-3">Assignment Type</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="glass-subtle p-4 rounded-xl hover:bg-white/10 transition-all text-center border-2 border-blue-500">
                      <FileAudio size={24} className="mx-auto mb-2 text-blue-400" />
                      <div className="font-medium">Audio</div>
                      <div className="text-xs text-gray-400 mt-1">Recording submission</div>
                    </button>
                    <button className="glass-subtle p-4 rounded-xl hover:bg-white/10 transition-all text-center border-2 border-transparent hover:border-white/20">
                      <FileVideo size={24} className="mx-auto mb-2 text-purple-400" />
                      <div className="font-medium">Video</div>
                      <div className="text-xs text-gray-400 mt-1">Video performance</div>
                    </button>
                    <button className="glass-subtle p-4 rounded-xl hover:bg-white/10 transition-all text-center border-2 border-transparent hover:border-white/20">
                      <FileText size={24} className="mx-auto mb-2 text-green-400" />
                      <div className="font-medium">Written</div>
                      <div className="text-xs text-gray-400 mt-1">Essay or reflection</div>
                    </button>
                  </div>
                </div>

                {/* Assignment Title */}
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Chopin Etude Op. 10 No. 4"
                    className="w-full glass-subtle px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Provide detailed instructions for the assignment..."
                    className="w-full glass-subtle px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

                {/* Due Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Due Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full glass-subtle px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                      <Calendar size={18} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Due Time</label>
                    <div className="relative">
                      <input
                        type="time"
                        defaultValue="23:59"
                        className="w-full glass-subtle px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                      <Clock size={18} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Points */}
                <div>
                  <label className="block text-sm font-medium mb-2">Points</label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full glass-subtle px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Assign To */}
                <div>
                  <label className="block text-sm font-medium mb-2">Assign To</label>
                  <div className="glass-subtle rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-gray-400" />
                        <span className="text-sm">Select students</span>
                      </div>
                      <button className="text-sm text-blue-400 hover:text-blue-300">
                        Select All
                      </button>
                    </div>
                    <div className="max-h-40 overflow-y-auto space-y-2">
                      {['Sarah Chen', 'Michael Park', 'Emma Rodriguez', 'David Kim', 'Sophie Martinez', 'James Lee'].map((student) => (
                        <label key={student} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded" />
                          <span className="text-sm">{student}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <label className="block text-sm font-medium mb-2">Attachments (Optional)</label>
                  <div className="glass-subtle rounded-xl p-6 border-2 border-dashed border-white/20 hover:border-white/40 transition-all cursor-pointer text-center">
                    <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                    <div className="text-sm text-gray-400 mb-1">
                      Click to upload or drag and drop
                    </div>
                    <div className="text-xs text-gray-500">
                      Sheet music, reference recordings, or instructions
                    </div>
                  </div>
                </div>

                {/* Additional Settings */}
                <div className="space-y-3 glass-subtle rounded-xl p-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium">Allow late submissions</div>
                      <div className="text-xs text-gray-400">Students can submit after due date</div>
                    </div>
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </div>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium">Send notifications</div>
                      <div className="text-xs text-gray-400">Notify students when assigned</div>
                    </div>
                    <div className="relative">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </div>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium">Require video submission</div>
                      <div className="text-xs text-gray-400">Video format required</div>
                    </div>
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => setShowNewModal(false)}
                  className="glass-subtle px-6 py-3 rounded-xl hover:bg-white/10 transition-all font-medium"
                >
                  Cancel
                </button>
                <div className="flex items-center gap-3">
                  <button className="glass-subtle px-6 py-3 rounded-xl hover:bg-white/10 transition-all font-medium">
                    Save as Draft
                  </button>
                  <button className="glass-strong bg-blue-500/20 px-6 py-3 rounded-xl hover:bg-blue-500/30 transition-all font-medium text-blue-300">
                    Publish Assignment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Active Assignments</div>
              <ClipboardList size={18} className="text-blue-400" />
            </div>
            <div className="text-3xl font-bold">{stats.active}</div>
          </GlassCard>
          
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Drafts</div>
              <Edit size={18} className="text-gray-400" />
            </div>
            <div className="text-3xl font-bold">{stats.draft}</div>
          </GlassCard>
          
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Needs Review</div>
              <AlertCircle size={18} className="text-yellow-400" />
            </div>
            <div className="text-3xl font-bold">{stats.needsReview}</div>
          </GlassCard>
          
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Total Students</div>
              <Users size={18} className="text-green-400" />
            </div>
            <div className="text-3xl font-bold">{stats.totalStudents}</div>
          </GlassCard>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                activeTab === 'all' ? 'glass-strong' : 'hover:bg-white/5'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                activeTab === 'active' ? 'glass-strong' : 'hover:bg-white/5'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab('draft')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                activeTab === 'draft' ? 'glass-strong' : 'hover:bg-white/5'
              }`}
            >
              Drafts
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                activeTab === 'completed' ? 'glass-strong' : 'hover:bg-white/5'
              }`}
            >
              Completed
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <GlassCard className="px-4 py-2 flex items-center gap-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search assignments..."
                className="bg-transparent outline-none text-white placeholder-gray-500 w-48"
              />
            </GlassCard>
            <button className="glass-subtle px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all">
              <Filter size={18} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => (
              <GlassCard key={assignment.id} className="p-6 hover:bg-white/5 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 glass-subtle rounded-xl">
                      {getTypeIcon(assignment.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                          {assignment.title}
                        </h3>
                        {getStatusBadge(assignment)}
                      </div>
                      <p className="text-gray-400 mb-3">{assignment.description}</p>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar size={14} />
                          <span>{getDaysUntilDue(assignment.dueDate)}</span>
                          <span className="text-gray-600">•</span>
                          <span>{new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {assignment.dueTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Users size={14} />
                          <span>Assigned to {assignment.assignedTo} students</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <ClipboardList size={14} />
                          <span>{assignment.points} points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                    <MoreVertical size={18} />
                  </button>
                </div>

                {/* Submission Progress */}
                {assignment.status !== 'draft' && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-gray-400">Submission Progress</div>
                      <div className="text-sm font-medium">
                        {assignment.submitted} of {assignment.assignedTo} submitted
                        {assignment.assignedTo > 0 && (
                          <span className="text-gray-500 ml-2">
                            ({Math.round((assignment.submitted / assignment.assignedTo) * 100)}%)
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                        style={{ width: `${assignment.assignedTo > 0 ? (assignment.submitted / assignment.assignedTo) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center gap-3">
                      {assignment.submitted > 0 && (
                        <button className="glass-subtle px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all text-sm">
                          <Eye size={16} />
                          Review {assignment.submitted} Submission{assignment.submitted !== 1 ? 's' : ''}
                        </button>
                      )}
                      {assignment.status === 'draft' && (
                        <button className="glass-strong px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/15 transition-all text-sm">
                          <Send size={16} />
                          Publish Assignment
                        </button>
                      )}
                      <button className="glass-subtle px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all text-sm">
                        <Edit size={16} />
                        Edit
                      </button>
                      <button className="glass-subtle px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all text-sm">
                        <Copy size={16} />
                        Duplicate
                      </button>
                    </div>
                  </div>
                )}

                {assignment.status === 'draft' && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <button className="glass-strong px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/15 transition-all text-sm">
                        <Send size={16} />
                        Publish to Students
                      </button>
                      <button className="glass-subtle px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all text-sm">
                        <Edit size={16} />
                        Edit Draft
                      </button>
                      <button className="glass-subtle px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-red-500/10 text-red-400 transition-all text-sm">
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </GlassCard>
            ))
          ) : (
            <GlassCard className="p-16 text-center">
              <ClipboardList size={64} className="mx-auto mb-4 text-gray-600" />
              <h3 className="text-2xl font-semibold mb-2">No assignments found</h3>
              <p className="text-gray-400 mb-6">
                {activeTab === 'all' 
                  ? 'Create your first assignment to get started'
                  : `No ${activeTab} assignments at the moment`
                }
              </p>
              {activeTab === 'all' && (
                <button 
                  onClick={() => setShowNewModal(true)}
                  className="glass-strong px-6 py-3 rounded-xl hover:bg-white/15 transition-all"
                >
                  <Plus size={18} className="inline mr-2" />
                  Create Assignment
                </button>
              )}
            </GlassCard>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
