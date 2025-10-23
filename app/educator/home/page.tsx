'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard, StatCard, CountdownCard } from '@/components/GlassCard'
import { NewAssignmentModal } from '@/components/NewAssignmentModal'
import { 
  ClipboardList, 
  FileCheck, 
  Calendar,
  Users,
  TrendingUp,
  Clock,
  Award,
  Play,
  CheckCircle,
  AlertCircle,
  Star,
  MessageSquare,
  Download,
  Upload,
  ChevronRight,
  BarChart3,
  Bell,
  BookOpen,
  Video,
  Music,
  FileAudio,
  FilePlus,
  UserCheck,
  Trophy,
  Target,
  Zap
} from 'lucide-react'

export default function EducatorHome() {
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null)
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null)
  const [showNewAssignment, setShowNewAssignment] = useState(false)
  const [showReviewQueue, setShowReviewQueue] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [showManageLessons, setShowManageLessons] = useState(false)

  return (
    <DashboardLayout type="educator">
      <div className="p-8">
        {/* Welcome header with quick stats */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, Prof. Chen! 👋</h1>
            <p className="text-gray-400">Here's your teaching overview for today</p>
          </div>
          <div className="glass-strong rounded-2xl p-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">24</div>
              <div className="text-xs text-gray-400 mt-1">Active Students</div>
            </div>
          </div>
        </div>

        {/* Enhanced stats row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <StatCard
            icon={<FileCheck size={24} />}
            label="To Review"
            value="6"
            color="blue"
          />
          <StatCard
            icon={<ClipboardList size={24} />}
            label="To Assign"
            value="3"
            color="purple"
          />
          <StatCard
            icon={<Calendar size={24} />}
            label="Lessons Today"
            value="5"
            color="green"
          />
          <StatCard
            icon={<Users size={24} />}
            label="Students"
            value="24"
            color="yellow"
          />
          <StatCard
            icon={<TrendingUp size={24} />}
            label="Avg Progress"
            value="+12%"
            color="pink"
          />
          <StatCard
            icon={<Award size={24} />}
            label="Completed"
            value="48"
            color="orange"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button 
            onClick={() => setShowNewAssignment(true)}
            className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                <FilePlus className="text-primary-400" size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">New Assignment</div>
                <div className="text-xs text-gray-400">Create & assign</div>
              </div>
            </div>
          </button>

          <button 
            onClick={() => setShowReviewQueue(true)}
            className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <UserCheck className="text-green-400" size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Review Queue</div>
                <div className="text-xs text-gray-400">6 pending</div>
              </div>
            </div>
          </button>

          <button 
            onClick={() => setShowAnalytics(true)}
            className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <BarChart3 className="text-purple-400" size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Analytics</div>
                <div className="text-xs text-gray-400">Class overview</div>
              </div>
            </div>
          </button>

          <button 
            onClick={() => setShowManageLessons(true)}
            className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                <Calendar className="text-yellow-400" size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Schedule</div>
                <div className="text-xs text-gray-400">Manage lessons</div>
              </div>
            </div>
          </button>
        </div>

        {/* Competition Countdown Banner */}
        <div className="mb-8">
          <div className="glass-strong rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 transition-all cursor-pointer">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                  <Trophy size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">Regional Competition</div>
                  <div className="text-gray-400">8 students participating - review final submissions</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-primary-400">14</div>
                <div className="text-sm text-gray-400">Days Left</div>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Actions & Class Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Urgent Reviews */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <AlertCircle className="text-red-400" size={20} />
                  Urgent Reviews
                </h3>
                <span className="text-sm text-red-400">6 submissions</span>
              </div>
              <div className="space-y-3">
                {[
                  { 
                    student: 'Emma Wilson', 
                    piece: 'Mozart Sonata K. 545 - Final Recording',
                    submitted: '2 hours ago',
                    duration: '8:34',
                    type: 'video',
                    priority: 'high',
                    dueDate: 'Competition entry - Due today'
                  },
                  { 
                    student: 'James Lee', 
                    piece: 'Hanon Exercises #1-5',
                    submitted: '5 hours ago',
                    duration: '12:15',
                    type: 'audio',
                    priority: 'high',
                    dueDate: 'Weekly practice - Due today'
                  },
                  { 
                    student: 'Sarah Martinez', 
                    piece: 'Debussy Clair de Lune - Work in Progress',
                    submitted: '1 day ago',
                    duration: '5:47',
                    type: 'audio',
                    priority: 'medium',
                    dueDate: 'Assignment - Due tomorrow'
                  },
                ].map((submission, index) => (
                  <div 
                    key={index}
                    className="glass-subtle rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group"
                    onClick={() => setSelectedSubmission(selectedSubmission === index ? null : index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        submission.type === 'video' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                      } group-hover:scale-105 transition-transform`}>
                        {submission.type === 'video' ? (
                          <Video className="text-purple-400" size={24} />
                        ) : (
                          <FileAudio className="text-blue-400" size={24} />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium group-hover:text-primary-400 transition-colors">
                              {submission.student}
                            </div>
                            <div className="text-sm text-gray-400 mt-1">{submission.piece}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              submission.priority === 'high' 
                                ? 'bg-red-500/20 text-red-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {submission.priority === 'high' ? 'Urgent' : 'Today'}
                            </span>
                            <span className="text-xs text-gray-500">{submission.duration}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {submission.submitted}
                          </span>
                          <span className="text-gray-400">{submission.dueDate}</span>
                        </div>

                        {selectedSubmission === index && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                              <button className="flex-1 glass-strong rounded-lg px-4 py-2.5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                                <Play size={16} />
                                Play & Review
                              </button>
                              <button className="flex-1 glass-strong rounded-lg px-4 py-2.5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                                <MessageSquare size={16} />
                                Add Feedback
                              </button>
                              <button className="glass-strong rounded-lg px-4 py-2.5 hover:bg-white/10 transition-colors flex items-center justify-center">
                                <Download size={16} />
                              </button>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-400">Quick Rating:</span>
                              {[1, 2, 3, 4, 5].map((rating) => (
                                <button 
                                  key={rating}
                                  className="hover:scale-110 transition-transform"
                                >
                                  <Star size={16} className="text-gray-600 hover:text-yellow-400 hover:fill-yellow-400" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm text-primary-400 hover:text-primary-300 transition-colors flex items-center justify-center gap-1 py-2">
                View All Submissions (6) <ChevronRight size={16} />
              </button>
            </GlassCard>
          </div>

          {/* Class Performance Overview */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4">Class Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Submission Rate</span>
                    <span className="text-sm font-semibold">88%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Avg Practice Time</span>
                    <span className="text-sm font-semibold">4.2h/day</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">On-Time Completion</span>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Bell className="text-yellow-400" size={20} />
                Needs Attention
              </h3>
              <div className="space-y-3">
                <div className="glass-subtle rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="text-sm font-medium mb-1">Michael Brown</div>
                  <div className="text-xs text-gray-400">No submissions this week</div>
                </div>
                <div className="glass-subtle rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="text-sm font-medium mb-1">Lisa Chen</div>
                  <div className="text-xs text-gray-400">Practice time -40%</div>
                </div>
                <div className="glass-subtle rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="text-sm font-medium mb-1">David Park</div>
                  <div className="text-xs text-gray-400">3 missed lessons</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Student deadlines timeline */}
        <GlassCard className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Student Deadlines Timeline</h3>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded-lg glass-subtle hover:bg-white/10 transition-colors text-xs">All</button>
              <button className="px-3 py-1 rounded-lg glass-subtle hover:bg-white/10 transition-colors text-xs">Urgent</button>
              <button className="px-3 py-1 rounded-lg glass-subtle hover:bg-white/10 transition-colors text-xs">This Week</button>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { student: 'Emma Wilson', assignment: 'Mozart Sonata K. 545 - Final Recording', due: 'Today, 11:59 PM', priority: 'high', progress: 100, avatar: 'EW' },
              { student: 'James Lee', assignment: 'Hanon Exercises #1-5', due: 'Today, 11:59 PM', priority: 'high', progress: 100, avatar: 'JL' },
              { student: 'Sarah Martinez', assignment: 'Debussy Clair de Lune', due: 'Tomorrow, 11:59 PM', priority: 'medium', progress: 75, avatar: 'SM' },
              { student: 'Michael Brown', assignment: 'Bach Prelude in C Major', due: 'In 2 days', priority: 'medium', progress: 30, avatar: 'MB' },
              { student: 'Lisa Chen', assignment: 'Chopin Nocturne Op. 9 No. 2', due: 'In 3 days', priority: 'low', progress: 60, avatar: 'LC' },
              { student: 'David Park', assignment: 'Scales & Arpeggios - All Keys', due: 'In 4 days', priority: 'low', progress: 45, avatar: 'DP' },
            ].map((deadline, index) => {
              const priorityColor = {
                high: 'border-red-400/50 bg-red-500/10',
                medium: 'border-yellow-400/50 bg-yellow-500/10',
                low: 'border-blue-400/50 bg-blue-500/10',
              }[deadline.priority]

              return (
                <div 
                  key={index} 
                  className={`${priorityColor} border rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group`}
                  onClick={() => setSelectedStudent(selectedStudent === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center font-semibold text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                      {deadline.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-medium group-hover:text-primary-400 transition-colors">{deadline.student}</div>
                          <div className="text-sm text-gray-400">{deadline.assignment}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-300">Due: {deadline.due}</div>
                          <div className={`text-xs ${
                            deadline.progress >= 80 ? 'text-green-400' :
                            deadline.progress >= 50 ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {deadline.progress}% complete
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full transition-all ${
                            deadline.progress >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                            deadline.progress >= 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                            'bg-gradient-to-r from-red-500 to-pink-500'
                          }`}
                          style={{ width: `${deadline.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </GlassCard>

        {/* Recent Activity & Upcoming Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Reviews */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Reviews</h3>
              <button className="text-sm text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1">
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { student: 'Emma Wilson', piece: 'Chopin Etude Op. 10 No. 4', rating: 4.5, feedback: 'Excellent tempo control. Work on dynamics in the middle section.', date: '1 hour ago', avatar: 'EW' },
                { student: 'James Lee', piece: 'Bach Invention No. 8', rating: 4.0, feedback: 'Good articulation. Practice left hand independence.', date: '2 hours ago', avatar: 'JL' },
                { student: 'Sarah Martinez', piece: 'Hanon Exercises', rating: 4.8, feedback: 'Perfect evenness and clarity. Ready for next level.', date: '3 hours ago', avatar: 'SM' },
                { student: 'David Park', piece: 'Debussy Arabesque', rating: 3.5, feedback: 'Focus on pedaling technique and voicing.', date: '5 hours ago', avatar: 'DP' },
              ].map((review, index) => (
                <div key={index} className="glass-subtle rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center font-semibold text-sm text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-medium">{review.student}</div>
                          <div className="text-sm text-gray-400">{review.piece}</div>
                        </div>
                        <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                          <Star className="text-yellow-400 fill-yellow-400" size={12} />
                          <span className="text-xs font-semibold text-yellow-400">{review.rating}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mb-2">{review.feedback}</div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Upcoming Lessons */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Today's Schedule</h3>
              <span className="text-sm text-gray-400">5 lessons</span>
            </div>
            <div className="space-y-3">
              {[
                { student: 'Emma Wilson', time: '2:00 PM', duration: '60 min', type: 'Piano - Advanced', status: 'upcoming', avatar: 'EW', color: 'blue' },
                { student: 'Michael Brown', time: '3:30 PM', duration: '45 min', type: 'Music Theory', status: 'upcoming', avatar: 'MB', color: 'purple' },
                { student: 'Lisa Chen', time: '4:30 PM', duration: '60 min', type: 'Piano - Intermediate', status: 'upcoming', avatar: 'LC', color: 'green' },
                { student: 'James Lee', time: '6:00 PM', duration: '45 min', type: 'Piano - Advanced', status: 'upcoming', avatar: 'JL', color: 'yellow' },
                { student: 'Sarah Martinez', time: '7:00 PM', duration: '60 min', type: 'Performance Prep', status: 'upcoming', avatar: 'SM', color: 'pink' },
              ].map((lesson, index) => (
                <div key={index} className="glass-subtle rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-${lesson.color}-500/20 flex items-center justify-center font-semibold text-${lesson.color}-400 group-hover:scale-105 transition-transform`}>
                      {lesson.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium group-hover:text-primary-400 transition-colors">{lesson.student}</div>
                        <div className="text-sm font-medium text-gray-300">{lesson.time}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">{lesson.type}</div>
                        <div className="text-xs text-gray-500">{lesson.duration}</div>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Video className="text-primary-400" size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 glass-strong rounded-lg px-4 py-2.5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
              <Calendar size={16} />
              View Full Calendar
            </button>
          </GlassCard>
        </div>
      </div>

      {/* New Assignment Modal */}
      <NewAssignmentModal 
        isOpen={showNewAssignment}
        onClose={() => setShowNewAssignment(false)}
      />

      {/* Review Queue Modal */}
      {showReviewQueue && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-strong rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <FileCheck className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Review Queue</h2>
                    <p className="text-sm text-gray-400">Student submissions awaiting your feedback</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">6</div>
                    <div className="text-xs text-gray-400">Pending</div>
                  </div>
                  <button
                    onClick={() => setShowReviewQueue(false)}
                    className="w-10 h-10 rounded-xl glass-subtle hover:bg-white/10 transition-colors flex items-center justify-center"
                  >
                    <span className="text-2xl">×</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { 
                    student: 'Emma Wilson', 
                    piece: 'Mozart Sonata K. 545',
                    type: 'video',
                    duration: '8:34',
                    submitted: '2h ago',
                    priority: 'urgent',
                    avatar: 'EW'
                  },
                  { 
                    student: 'James Lee', 
                    piece: 'Hanon Exercises #1-5',
                    type: 'audio',
                    duration: '12:15',
                    submitted: '5h ago',
                    priority: 'urgent',
                    avatar: 'JL'
                  },
                  { 
                    student: 'Sarah Martinez', 
                    piece: 'Debussy Clair de Lune',
                    type: 'audio',
                    duration: '5:47',
                    submitted: '1d ago',
                    priority: 'normal',
                    avatar: 'SM'
                  },
                  { 
                    student: 'Michael Brown', 
                    piece: 'Bach Prelude in C',
                    type: 'video',
                    duration: '6:23',
                    submitted: '1d ago',
                    priority: 'normal',
                    avatar: 'MB'
                  },
                  { 
                    student: 'Lisa Chen', 
                    piece: 'Chopin Nocturne Op. 9',
                    type: 'audio',
                    duration: '9:45',
                    submitted: '2d ago',
                    priority: 'normal',
                    avatar: 'LC'
                  },
                  { 
                    student: 'David Park', 
                    piece: 'Scales & Arpeggios',
                    type: 'video',
                    duration: '10:12',
                    submitted: '2d ago',
                    priority: 'normal',
                    avatar: 'DP'
                  },
                ].map((submission, index) => (
                  <div 
                    key={index}
                    className="glass-subtle rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center font-semibold text-sm text-primary-400 group-hover:bg-primary-500/30 transition-colors">
                          {submission.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-sm group-hover:text-primary-400 transition-colors">
                            {submission.student}
                          </div>
                          <div className="text-xs text-gray-500">{submission.submitted}</div>
                        </div>
                      </div>
                      {submission.priority === 'urgent' && (
                        <span className="px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-400">
                          Urgent
                        </span>
                      )}
                    </div>

                    <div className="mb-3">
                      <div className="text-sm text-gray-300 mb-2 line-clamp-1">{submission.piece}</div>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          submission.type === 'video' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                        }`}>
                          {submission.type === 'video' ? (
                            <Video className="text-purple-400" size={16} />
                          ) : (
                            <FileAudio className="text-blue-400" size={16} />
                          )}
                        </div>
                        <span className="text-xs text-gray-400">{submission.duration}</span>
                      </div>
                    </div>

                    <button className="w-full glass-strong rounded-lg px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                      <Play size={14} />
                      Review Now
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
                <div className="text-sm text-gray-400">
                  Average review time: <span className="text-white font-medium">8 min</span>
                </div>
                <button className="text-sm text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1">
                  View All Submissions <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manage Lessons Modal */}
      {showManageLessons && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-strong rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <Calendar className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Manage Lessons</h2>
                    <p className="text-sm text-gray-400">Schedule and organize your teaching calendar</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="glass-strong rounded-xl px-4 py-2 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium">
                    <Clock className="text-primary-400" size={16} />
                    Today
                  </button>
                  <button className="glass-strong rounded-xl px-4 py-2 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium bg-primary-500/20 text-primary-400">
                    <FilePlus size={16} />
                    New Lesson
                  </button>
                  <button
                    onClick={() => setShowManageLessons(false)}
                    className="w-10 h-10 rounded-xl glass-subtle hover:bg-white/10 transition-colors flex items-center justify-center"
                  >
                    <span className="text-2xl">×</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              {/* Week Navigation */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-xl glass-subtle hover:bg-white/10 transition-colors flex items-center justify-center">
                    ←
                  </button>
                  <div className="glass-subtle rounded-xl px-4 py-2">
                    <div className="font-semibold">Week of October 23, 2025</div>
                    <div className="text-xs text-gray-400">5 lessons scheduled</div>
                  </div>
                  <button className="w-10 h-10 rounded-xl glass-subtle hover:bg-white/10 transition-colors flex items-center justify-center">
                    →
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg glass-subtle hover:bg-white/10 transition-colors text-xs bg-primary-500/20 text-primary-400">
                    Day
                  </button>
                  <button className="px-3 py-1.5 rounded-lg glass-subtle hover:bg-white/10 transition-colors text-xs">
                    Week
                  </button>
                  <button className="px-3 py-1.5 rounded-lg glass-subtle hover:bg-white/10 transition-colors text-xs">
                    Month
                  </button>
                </div>
              </div>

              {/* Today's Schedule */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold">Today's Schedule</h3>
                  <span className="px-2 py-1 rounded-full text-xs bg-primary-500/20 text-primary-400">
                    Thursday, Oct 23
                  </span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { 
                      student: 'Emma Wilson', 
                      time: '2:00 PM - 3:00 PM', 
                      duration: '60 min', 
                      type: 'Piano - Advanced',
                      focus: 'Mozart Sonata K. 545',
                      status: 'confirmed',
                      location: 'Studio A',
                      avatar: 'EW',
                      color: 'blue'
                    },
                    { 
                      student: 'Michael Brown', 
                      time: '3:30 PM - 4:15 PM', 
                      duration: '45 min', 
                      type: 'Music Theory',
                      focus: 'Harmonic Analysis',
                      status: 'confirmed',
                      location: 'Room 204',
                      avatar: 'MB',
                      color: 'purple'
                    },
                    { 
                      student: 'Lisa Chen', 
                      time: '4:30 PM - 5:30 PM', 
                      duration: '60 min', 
                      type: 'Piano - Intermediate',
                      focus: 'Chopin Nocturne',
                      status: 'pending',
                      location: 'Studio A',
                      avatar: 'LC',
                      color: 'green'
                    },
                    { 
                      student: 'James Lee', 
                      time: '6:00 PM - 6:45 PM', 
                      duration: '45 min', 
                      type: 'Piano - Advanced',
                      focus: 'Bach Inventions',
                      status: 'confirmed',
                      location: 'Studio B',
                      avatar: 'JL',
                      color: 'yellow'
                    },
                    { 
                      student: 'Sarah Martinez', 
                      time: '7:00 PM - 8:00 PM', 
                      duration: '60 min', 
                      type: 'Performance Prep',
                      focus: 'Competition rehearsal',
                      status: 'confirmed',
                      location: 'Studio A',
                      avatar: 'SM',
                      color: 'pink'
                    },
                  ].map((lesson, index) => (
                    <div 
                      key={index}
                      className="glass-subtle rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-${lesson.color}-500/20 flex items-center justify-center font-semibold text-${lesson.color}-400 group-hover:scale-105 transition-transform`}>
                          {lesson.avatar}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="font-medium text-lg group-hover:text-primary-400 transition-colors">
                                {lesson.student}
                              </div>
                              <div className="text-sm text-gray-400">{lesson.type}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                lesson.status === 'confirmed' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-yellow-500/20 text-yellow-400'
                              }`}>
                                {lesson.status === 'confirmed' ? '✓ Confirmed' : 'Pending'}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm mb-3">
                            <span className="flex items-center gap-1.5 text-gray-300">
                              <Clock size={14} />
                              {lesson.time}
                            </span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{lesson.duration}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{lesson.location}</span>
                          </div>

                          <div className="glass-subtle rounded-lg p-3 mb-3">
                            <div className="text-xs text-gray-400 mb-1">Lesson Focus</div>
                            <div className="text-sm">{lesson.focus}</div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button className="flex-1 glass-strong rounded-lg px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-medium">
                              <Video size={14} />
                              Join Video Call
                            </button>
                            <button className="flex-1 glass-strong rounded-lg px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-xs font-medium">
                              <MessageSquare size={14} />
                              Send Message
                            </button>
                            <button className="glass-strong rounded-lg px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-center text-xs font-medium">
                              <BookOpen size={14} />
                            </button>
                            <button className="glass-strong rounded-lg px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-center text-xs font-medium">
                              ⋮
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming This Week */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Upcoming This Week</h3>
                  <span className="text-sm text-gray-400">12 more lessons</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { day: 'Friday', date: 'Oct 24', count: 4, students: ['EW', 'MB', 'LC', 'JL'] },
                    { day: 'Saturday', date: 'Oct 25', count: 6, students: ['SM', 'DP', 'EW', 'MB', 'LC', 'JL'] },
                    { day: 'Sunday', date: 'Oct 26', count: 2, students: ['EW', 'SM'] },
                  ].map((day, index) => (
                    <div 
                      key={index}
                      className="glass-subtle rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-semibold group-hover:text-primary-400 transition-colors">
                            {day.day}
                          </div>
                          <div className="text-sm text-gray-400">{day.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-400">{day.count}</div>
                          <div className="text-xs text-gray-400">lessons</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {day.students.map((avatar, i) => (
                          <div 
                            key={i}
                            className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center font-semibold text-xs text-primary-400"
                          >
                            {avatar}
                          </div>
                        ))}
                        {day.count > day.students.length && (
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs text-gray-400">
                            +{day.count - day.students.length}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="glass-subtle rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Calendar className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">17</div>
                      <div className="text-xs text-gray-400">This Week</div>
                    </div>
                  </div>
                </div>
                <div className="glass-subtle rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="text-green-400" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">15</div>
                      <div className="text-xs text-gray-400">Confirmed</div>
                    </div>
                  </div>
                </div>
                <div className="glass-subtle rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                      <AlertCircle className="text-yellow-400" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">2</div>
                      <div className="text-xs text-gray-400">Pending</div>
                    </div>
                  </div>
                </div>
                <div className="glass-subtle rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Clock className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">18h</div>
                      <div className="text-xs text-gray-400">Total Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Modal */}
      {showAnalytics && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-strong rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <BarChart3 className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Class Analytics</h2>
                    <p className="text-sm text-gray-400">Comprehensive overview of your class performance</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAnalytics(false)}
                  className="w-10 h-10 rounded-xl glass-subtle hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="glass-subtle rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="text-blue-400" size={20} />
                    <span className="text-xs text-green-400">↑ 8%</span>
                  </div>
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-xs text-gray-400">Active Students</div>
                </div>
                <div className="glass-subtle rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="text-green-400" size={20} />
                    <span className="text-xs text-green-400">↑ 12%</span>
                  </div>
                  <div className="text-2xl font-bold">88%</div>
                  <div className="text-xs text-gray-400">Submission Rate</div>
                </div>
                <div className="glass-subtle rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="text-purple-400" size={20} />
                    <span className="text-xs text-green-400">↑ 5%</span>
                  </div>
                  <div className="text-2xl font-bold">4.2h</div>
                  <div className="text-xs text-gray-400">Avg Practice/Day</div>
                </div>
                <div className="glass-subtle rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <CheckCircle className="text-yellow-400" size={20} />
                    <span className="text-xs text-green-400">↑ 3%</span>
                  </div>
                  <div className="text-2xl font-bold">92%</div>
                  <div className="text-xs text-gray-400">On-Time Rate</div>
                </div>
              </div>

              {/* Performance Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="text-green-400" size={20} />
                    Class Performance
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Submission Rate</span>
                        <span className="text-sm font-semibold text-green-400">88%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Avg Practice Time</span>
                        <span className="text-sm font-semibold text-purple-400">4.2h/day</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-primary-500 to-purple-500 h-2.5 rounded-full" style={{ width: '84%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">On-Time Completion</span>
                        <span className="text-sm font-semibold text-blue-400">92%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Engagement Score</span>
                        <span className="text-sm font-semibold text-yellow-400">85%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Award className="text-yellow-400" size={20} />
                    Top Performers
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Emma Wilson', score: 98, practice: '5.2h/day', avatar: 'EW', rank: 1 },
                      { name: 'Sarah Martinez', score: 96, practice: '4.8h/day', avatar: 'SM', rank: 2 },
                      { name: 'James Lee', score: 94, practice: '4.5h/day', avatar: 'JL', rank: 3 },
                      { name: 'Lisa Chen', score: 92, practice: '4.3h/day', avatar: 'LC', rank: 4 },
                    ].map((student, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                          student.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                          student.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                          student.rank === 3 ? 'bg-orange-500/20 text-orange-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          #{student.rank}
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center font-semibold text-sm text-primary-400">
                          {student.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{student.name}</div>
                          <div className="text-xs text-gray-400">{student.practice}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-400">{student.score}</div>
                          <div className="text-xs text-gray-500">score</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Student List with Details */}
              <div className="glass-subtle rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">All Students Overview</h3>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg glass-subtle hover:bg-white/10 transition-colors text-xs">All</button>
                    <button className="px-3 py-1.5 rounded-lg glass-subtle hover:bg-white/10 transition-colors text-xs">Active</button>
                    <button className="px-3 py-1.5 rounded-lg glass-subtle hover:bg-white/10 transition-colors text-xs">At Risk</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-2 text-xs font-medium text-gray-400">Student</th>
                        <th className="text-center py-3 px-2 text-xs font-medium text-gray-400">Submissions</th>
                        <th className="text-center py-3 px-2 text-xs font-medium text-gray-400">Practice Time</th>
                        <th className="text-center py-3 px-2 text-xs font-medium text-gray-400">On-Time</th>
                        <th className="text-center py-3 px-2 text-xs font-medium text-gray-400">Score</th>
                        <th className="text-center py-3 px-2 text-xs font-medium text-gray-400">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Emma Wilson', avatar: 'EW', submissions: '12/12', practice: '5.2h', onTime: '100%', score: 98, trend: 'up' },
                        { name: 'Sarah Martinez', avatar: 'SM', submissions: '11/12', practice: '4.8h', onTime: '95%', score: 96, trend: 'up' },
                        { name: 'James Lee', avatar: 'JL', submissions: '12/12', practice: '4.5h', onTime: '100%', score: 94, trend: 'up' },
                        { name: 'Lisa Chen', avatar: 'LC', submissions: '10/12', practice: '4.3h', onTime: '90%', score: 92, trend: 'neutral' },
                        { name: 'David Park', avatar: 'DP', submissions: '9/12', practice: '3.8h', onTime: '85%', score: 88, trend: 'down' },
                        { name: 'Michael Brown', avatar: 'MB', submissions: '8/12', practice: '3.2h', onTime: '75%', score: 82, trend: 'down' },
                      ].map((student, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                          <td className="py-3 px-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center font-semibold text-xs text-primary-400">
                                {student.avatar}
                              </div>
                              <span className="text-sm font-medium">{student.name}</span>
                            </div>
                          </td>
                          <td className="text-center py-3 px-2 text-sm">{student.submissions}</td>
                          <td className="text-center py-3 px-2 text-sm">{student.practice}</td>
                          <td className="text-center py-3 px-2">
                            <span className={`text-sm ${
                              parseInt(student.onTime) >= 90 ? 'text-green-400' :
                              parseInt(student.onTime) >= 80 ? 'text-yellow-400' :
                              'text-red-400'
                            }`}>
                              {student.onTime}
                            </span>
                          </td>
                          <td className="text-center py-3 px-2">
                            <span className="text-sm font-semibold">{student.score}</span>
                          </td>
                          <td className="text-center py-3 px-2">
                            <span className={`text-lg ${
                              student.trend === 'up' ? 'text-green-400' :
                              student.trend === 'down' ? 'text-red-400' :
                              'text-gray-400'
                            }`}>
                              {student.trend === 'up' ? '↑' : student.trend === 'down' ? '↓' : '→'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
