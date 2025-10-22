'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard, StatCard, CountdownCard } from '@/components/GlassCard'
import { PracticeChart } from '@/components/PracticeChart'
import { EventsTimeline } from '@/components/EventsTimeline'
import { 
  ClipboardList, 
  Calendar, 
  Trophy, 
  Clock, 
  TrendingUp, 
  Award,
  Music,
  Play,
  CheckCircle,
  Target,
  Star,
  BookOpen,
  Headphones,
  Download,
  Upload,
  ChevronRight,
  Flame,
  Zap,
  MessageSquare
} from 'lucide-react'

export default function StudentHome() {
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null)

  return (
    <DashboardLayout type="student">
      <div className="p-8">
        {/* Welcome header with streak */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, Alex! 👋</h1>
            <p className="text-gray-400">Here's what's happening with your music practice</p>
          </div>
          <div className="glass-strong rounded-2xl p-4 flex items-center gap-3">
            <Flame className="text-orange-500" size={32} />
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-gray-400">Day Streak</div>
            </div>
          </div>
        </div>

        {/* Enhanced stats row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard
            icon={<ClipboardList size={24} />}
            label="Assignments Due"
            value="6"
            color="blue"
          />
          <StatCard
            icon={<Calendar size={24} />}
            label="Events This Week"
            value="5"
            color="purple"
          />
          <StatCard
            icon={<Clock size={24} />}
            label="Practice Hours"
            value="27.0"
            color="green"
          />
          <StatCard
            icon={<TrendingUp size={24} />}
            label="Improvement"
            value="+15%"
            color="yellow"
          />
          <StatCard
            icon={<Award size={24} />}
            label="Achievements"
            value="24"
            color="pink"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                <Upload className="text-primary-400" size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Submit Work</div>
                <div className="text-xs text-gray-400">Upload recording</div>
              </div>
            </div>
          </button>

          <button className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <Headphones className="text-purple-400" size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Ask Sonny</div>
                <div className="text-xs text-gray-400">AI practice help</div>
              </div>
            </div>
          </button>

          <button className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <BookOpen className="text-green-400" size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Resources</div>
                <div className="text-xs text-gray-400">Sheet music</div>
              </div>
            </div>
          </button>

          <button className="glass-strong rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                <Target className="text-yellow-400" size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Set Goals</div>
                <div className="text-xs text-gray-400">Track progress</div>
              </div>
            </div>
          </button>
        </div>

        {/* Countdown Banner */}
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
                  <div className="text-gray-400">Prepare your best pieces</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-primary-400">14</div>
                <div className="text-sm text-gray-400">Days Left</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <PracticeChart />
          </div>
          <div>
            {/* Practice Goals */}
            <GlassCard className="p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Weekly Goals</h3>
                <Zap className="text-yellow-400" size={20} />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Practice Time</span>
                    <span className="text-sm font-semibold">27/30 hrs</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Assignments</span>
                    <span className="text-sm font-semibold">4/6 done</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Recordings</span>
                    <span className="text-sm font-semibold">3/5 uploaded</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Recent Achievements */}
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 glass-subtle rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                    <Star className="text-yellow-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Perfect Week</div>
                    <div className="text-xs text-gray-400">7 days in a row</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass-subtle rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Music className="text-purple-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Master Level</div>
                    <div className="text-xs text-gray-400">100 pieces learned</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass-subtle rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="text-green-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Speed Demon</div>
                    <div className="text-xs text-gray-400">+20 BPM improvement</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Events and Submissions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <EventsTimeline />
          
          {/* Current Practice Pieces */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4">Current Repertoire</h3>
            <div className="space-y-3">
              {[
                { title: 'Chopin - Nocturne Op. 9 No. 2', difficulty: 'Advanced', progress: 85, status: 'Performance Ready' },
                { title: 'Mozart - Sonata K. 545', difficulty: 'Intermediate', progress: 60, status: 'In Progress' },
                { title: 'Debussy - Clair de Lune', difficulty: 'Advanced', progress: 40, status: 'Learning' },
                { title: 'Bach - Prelude in C Major', difficulty: 'Beginner', progress: 95, status: 'Polishing' },
              ].map((piece, index) => (
                <div 
                  key={index} 
                  className="glass-subtle rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group"
                  onClick={() => setSelectedSubmission(index)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="font-medium mb-1 group-hover:text-primary-400 transition-colors">{piece.title}</div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          piece.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                          piece.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {piece.difficulty}
                        </span>
                        <span className="text-xs text-gray-400">{piece.status}</span>
                      </div>
                    </div>
                    <Play className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">Progress</span>
                      <span className="text-xs font-semibold">{piece.progress}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-purple-500 h-1.5 rounded-full transition-all" 
                        style={{ width: `${piece.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Recent submissions */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Submissions & Feedback</h3>
            <button className="text-sm text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1">
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {[
              { 
                title: 'Chopin Etude Op. 10 No. 4', 
                status: 'Reviewed', 
                feedback: 'Great progress on tempo! Your right hand technique has improved significantly. Focus on left hand articulation in measures 24-32.',
                date: '2 days ago',
                rating: 4.5,
                teacher: 'Prof. Martinez',
                hasAudio: true
              },
              { 
                title: 'Bach Invention No. 8', 
                status: 'Pending Review', 
                feedback: null, 
                date: '1 day ago',
                rating: null,
                teacher: 'Prof. Martinez',
                hasAudio: true
              },
              { 
                title: 'Scales & Arpeggios - C Major', 
                status: 'Reviewed', 
                feedback: 'Keep working on evenness between fingers. Try practicing with different rhythmic patterns.',
                date: '3 days ago',
                rating: 4.0,
                teacher: 'Prof. Martinez',
                hasAudio: true
              },
              { 
                title: 'Sight Reading Exercise #12', 
                status: 'Reviewed', 
                feedback: 'Excellent improvement! Your reading speed is much better.',
                date: '5 days ago',
                rating: 5.0,
                teacher: 'Prof. Martinez',
                hasAudio: false
              },
            ].map((submission, index) => (
              <div 
                key={index} 
                className="glass-subtle rounded-xl p-5 hover:bg-white/10 transition-all cursor-pointer group"
                onClick={() => setSelectedSubmission(selectedSubmission === index ? null : index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                        <Music className="text-primary-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium mb-1 group-hover:text-primary-400 transition-colors">{submission.title}</div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className={`px-2 py-1 rounded-full ${
                            submission.status === 'Reviewed' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {submission.status}
                          </span>
                          <span className="text-gray-400">{submission.teacher}</span>
                          <span className="text-gray-500">{submission.date}</span>
                        </div>
                      </div>
                      {submission.rating && (
                        <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full">
                          <Star className="text-yellow-400 fill-yellow-400" size={14} />
                          <span className="text-sm font-semibold text-yellow-400">{submission.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    {submission.feedback && (
                      <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-start gap-2">
                          <MessageSquare className="text-primary-400 mt-0.5" size={16} />
                          <p className="text-sm text-gray-300 flex-1">{submission.feedback}</p>
                        </div>
                      </div>
                    )}

                    {selectedSubmission === index && (
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                        {submission.hasAudio && (
                          <button className="flex-1 glass-strong rounded-lg px-4 py-2 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                            <Play size={16} />
                            <span className="text-sm">Play Recording</span>
                          </button>
                        )}
                        <button className="flex-1 glass-strong rounded-lg px-4 py-2 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                          <Download size={16} />
                          <span className="text-sm">Download</span>
                        </button>
                        <button className="flex-1 glass-strong rounded-lg px-4 py-2 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                          <MessageSquare size={16} />
                          <span className="text-sm">Reply</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
