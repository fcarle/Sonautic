'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { CheckSquare, Circle, Calendar, Flag, Plus, Filter, Upload, X, Mic, Music, FileAudio, Loader } from 'lucide-react'

export default function TasksPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState<any>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [recordingNote, setRecordingNote] = useState('')

  const tasks = [
    {
      title: 'Practice Chopin Etude Op. 10 No. 4',
      description: 'Focus on tempo consistency, aim for 120 BPM',
      due: 'Today',
      priority: 'high',
      completed: false,
      assignedBy: 'Prof. Anderson',
      tags: ['Practice', 'Etudes']
    },
    {
      title: 'Record Bach Invention No. 8',
      description: 'Full performance recording for assignment',
      due: 'Tomorrow',
      priority: 'high',
      completed: false,
      assignedBy: 'Prof. Anderson',
      tags: ['Recording', 'Assignment']
    },
    {
      title: 'Review music theory chapter 5',
      description: 'Prepare for next week\'s quiz',
      due: 'In 3 days',
      priority: 'medium',
      completed: false,
      assignedBy: 'Self',
      tags: ['Theory']
    },
    {
      title: 'Practice scales - All major keys',
      description: '2 octaves, hands together',
      due: 'In 5 days',
      priority: 'medium',
      completed: false,
      assignedBy: 'Prof. Anderson',
      tags: ['Practice', 'Technique']
    },
    {
      title: 'Listen to Horowitz performance',
      description: 'Analyze interpretation and phrasing',
      due: 'No due date',
      priority: 'low',
      completed: true,
      assignedBy: 'Self',
      tags: ['Listening']
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-400/50 bg-red-500/10'
      case 'medium': return 'border-yellow-400/50 bg-yellow-500/10'
      case 'low': return 'border-blue-400/50 bg-blue-500/10'
      default: return 'border-gray-400/50 bg-gray-500/10'
    }
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const handleSubmitWork = (task: any) => {
    setSelectedTask(task)
    setShowSubmitModal(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const handleSubmit = async () => {
    if (!uploadedFile) return
    
    setIsUploading(true)
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      setShowSubmitModal(false)
      setUploadedFile(null)
      setRecordingNote('')
      // Here you would typically show a success message
    }, 2000)
  }

  const handleCloseModal = () => {
    setShowSubmitModal(false)
    setUploadedFile(null)
    setRecordingNote('')
    setSelectedTask(null)
  }

  return (
    <DashboardLayout type="student">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Tasks</h1>
            <p className="text-gray-400">Manage your practice goals and assignments</p>
          </div>
          <button className="glass-strong px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/15">
            <Plus size={18} />
            New Task
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === 'all' ? 'glass-strong' : 'glass-subtle hover:glass'
            }`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === 'active' ? 'glass-strong' : 'glass-subtle hover:glass'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === 'completed' ? 'glass-strong' : 'glass-subtle hover:glass'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Tasks list */}
        <div className="space-y-4">
          {filteredTasks.map((task, index) => (
            <GlassCard
              key={index}
              className={`p-6 ${getPriorityColor(task.priority)} border`}
            >
              <div className="flex items-start gap-4">
                <button className="mt-1 p-2 hover:bg-white/10 rounded-lg">
                  {task.completed ? (
                    <CheckSquare size={20} className="text-green-400" />
                  ) : (
                    <Circle size={20} className="text-gray-400" />
                  )}
                </button>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
                      {task.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {task.priority === 'high' && (
                        <Flag size={16} className="text-red-400" />
                      )}
                      <Calendar size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-400">{task.due}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-3">{task.description}</p>
                  
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.assignedBy === 'Self' 
                          ? 'bg-purple-500/20 text-purple-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {task.assignedBy === 'Self' ? 'Self-assigned' : `Assigned by ${task.assignedBy}`}
                      </span>
                      {task.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-2 py-1 rounded-full glass-subtle">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {!task.completed && task.tags.includes('Recording') && (
                      <button
                        onClick={() => handleSubmitWork(task)}
                        className="glass-strong px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/15 transition-all text-sm"
                      >
                        <Upload size={16} />
                        Submit Work
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <GlassCard className="p-12 text-center">
            <CheckSquare size={64} className="mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2">No tasks found</h3>
            <p className="text-gray-400">
              {filter === 'completed' ? 'No completed tasks yet' : 'Create your first task to get started'}
            </p>
          </GlassCard>
        )}
      </div>

      {/* Submit Work Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-strong rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-white/10">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Submit Recording</h2>
                <p className="text-gray-400 text-sm">{selectedTask?.title}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-white/10 rounded-lg transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Upload Area */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Recording File</label>
              <div className="relative">
                <input
                  type="file"
                  accept="audio/*,video/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="glass border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  {uploadedFile ? (
                    <>
                      <FileAudio size={48} className="mb-3 text-green-400" />
                      <p className="text-lg font-medium mb-1">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-400">
                        {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          setUploadedFile(null)
                        }}
                        className="mt-3 text-sm text-red-400 hover:text-red-300"
                      >
                        Remove file
                      </button>
                    </>
                  ) : (
                    <>
                      <Upload size={48} className="mb-3 text-gray-400" />
                      <p className="text-lg font-medium mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-400">
                        Audio or video files (MP3, WAV, MP4, etc.)
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Recording Tips */}
            <div className="glass-subtle rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <Mic size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Recording Tips</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Ensure good audio quality and minimal background noise</li>
                    <li>• Record in a quiet environment</li>
                    <li>• Play through the entire piece without stopping</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                value={recordingNote}
                onChange={(e) => setRecordingNote(e.target.value)}
                placeholder="Any comments about this recording..."
                className="w-full glass rounded-xl p-4 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400/50 placeholder-gray-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCloseModal}
                className="flex-1 glass px-6 py-3 rounded-xl hover:bg-white/10 transition-all font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!uploadedFile || isUploading}
                className="flex-1 glass-strong px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center gap-2"
              >
                {isUploading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload size={20} />
                    Submit Recording
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
