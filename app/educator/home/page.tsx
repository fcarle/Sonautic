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

          <button className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group">
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

          <button className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group">
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

          <button className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group">
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
    </DashboardLayout>
  )
}
