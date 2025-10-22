'use client'

import React, { useState } from 'react'
import { 
  X, 
  Upload, 
  Calendar, 
  Clock, 
  Users, 
  FileText,
  Paperclip,
  AlertCircle,
  Music,
  Video,
  FileAudio,
  FilePlus,
  Tag,
  CheckSquare
} from 'lucide-react'

interface NewAssignmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewAssignmentModal({ isOpen, onClose }: NewAssignmentModalProps) {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string>('recording')
  const [attachments, setAttachments] = useState<string[]>([])

  if (!isOpen) return null

  const students = [
    'Emma Wilson', 'James Lee', 'Sarah Martinez', 'Michael Brown', 
    'Lisa Chen', 'David Park', 'Sophie Anderson', 'Ryan Thompson'
  ]

  const assignmentTypes = [
    { id: 'recording', label: 'Audio/Video Recording', icon: Video },
    { id: 'practice', label: 'Practice Session', icon: Music },
    { id: 'theory', label: 'Theory Assignment', icon: FileText },
    { id: 'performance', label: 'Performance Prep', icon: Users },
  ]

  const toggleStudent = (student: string) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter(s => s !== student))
    } else {
      setSelectedStudents([...selectedStudents, student])
    }
  }

  const selectAllStudents = () => {
    if (selectedStudents.length === students.length) {
      setSelectedStudents([])
    } else {
      setSelectedStudents([...students])
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 glass-strong border-b border-white/10 px-8 py-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">Create New Assignment</h2>
              <p className="text-sm text-gray-400">Set up a new assignment for your students</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl glass-subtle hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Assignment Title */}
          <div>
            <label className="block text-sm font-semibold mb-2">Assignment Title *</label>
            <input
              type="text"
              placeholder="e.g., Mozart Sonata K. 545 - First Movement"
              className="w-full glass-subtle rounded-xl px-4 py-3 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all placeholder:text-gray-500"
            />
          </div>

          {/* Assignment Type */}
          <div>
            <label className="block text-sm font-semibold mb-3">Assignment Type *</label>
            <div className="grid grid-cols-2 gap-3">
              {assignmentTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`glass-subtle rounded-xl p-4 border transition-all ${
                      selectedType === type.id
                        ? 'border-primary-400 bg-primary-500/10'
                        : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedType === type.id
                          ? 'bg-primary-500/20'
                          : 'bg-white/5'
                      }`}>
                        <Icon size={20} className={selectedType === type.id ? 'text-primary-400' : 'text-gray-400'} />
                      </div>
                      <span className={`text-sm font-medium ${selectedType === type.id ? 'text-primary-400' : ''}`}>
                        {type.label}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2">Description & Instructions</label>
            <textarea
              placeholder="Provide detailed instructions for this assignment..."
              rows={4}
              className="w-full glass-subtle rounded-xl px-4 py-3 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all resize-none placeholder:text-gray-500"
            />
          </div>

          {/* Due Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Due Date *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="date"
                  className="w-full glass-subtle rounded-xl pl-11 pr-4 py-3 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Due Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="time"
                  className="w-full glass-subtle rounded-xl pl-11 pr-4 py-3 border border-white/10 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                  defaultValue="23:59"
                />
              </div>
            </div>
          </div>

          {/* Assign to Students */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-semibold">Assign to Students *</label>
              <button
                onClick={selectAllStudents}
                className="text-xs text-primary-400 hover:text-primary-300 transition-colors font-medium"
              >
                {selectedStudents.length === students.length ? 'Deselect All' : 'Select All'}
              </button>
            </div>
            <div className="glass-subtle rounded-xl p-4 border border-white/10 max-h-48 overflow-y-auto">
              <div className="space-y-2">
                {students.map((student) => (
                  <label
                    key={student}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student)}
                      onChange={() => toggleStudent(student)}
                      className="w-4 h-4 rounded border-white/20 text-primary-500 focus:ring-2 focus:ring-primary-400/20"
                    />
                    <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center text-xs font-semibold text-primary-400">
                      {student.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm">{student}</span>
                  </label>
                ))}
              </div>
            </div>
            {selectedStudents.length > 0 && (
              <div className="mt-2 text-xs text-gray-400">
                {selectedStudents.length} student{selectedStudents.length !== 1 ? 's' : ''} selected
              </div>
            )}
          </div>

          {/* Attachments */}
          <div>
            <label className="block text-sm font-semibold mb-2">Attachments (Optional)</label>
            <button className="w-full glass-subtle rounded-xl p-4 border border-dashed border-white/20 hover:border-primary-400 hover:bg-primary-500/5 transition-all">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Paperclip className="text-gray-400" size={20} />
                </div>
                <div className="text-sm font-medium">Click to upload files</div>
                <div className="text-xs text-gray-400">Sheet music, reference recordings, or practice materials</div>
              </div>
            </button>
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-semibold mb-3">Submission Requirements</label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 glass-subtle rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/20 text-primary-500 focus:ring-2 focus:ring-primary-400/20"
                  defaultChecked
                />
                <span className="text-sm">Require audio/video recording</span>
              </label>
              <label className="flex items-center gap-3 p-3 glass-subtle rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/20 text-primary-500 focus:ring-2 focus:ring-primary-400/20"
                />
                <span className="text-sm">Require practice log/notes</span>
              </label>
              <label className="flex items-center gap-3 p-3 glass-subtle rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/20 text-primary-500 focus:ring-2 focus:ring-primary-400/20"
                />
                <span className="text-sm">Allow multiple submissions</span>
              </label>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold mb-2">Tags (Optional)</label>
            <div className="flex flex-wrap gap-2">
              {['Technique', 'Performance', 'Competition Prep', 'Scales', 'Repertoire'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1.5 glass-subtle rounded-full text-xs hover:bg-primary-500/10 hover:text-primary-400 hover:border-primary-400/50 border border-white/10 transition-all"
                >
                  {tag}
                </button>
              ))}
              <button className="px-3 py-1.5 glass-subtle rounded-full text-xs hover:bg-white/10 border border-dashed border-white/20 transition-all flex items-center gap-1">
                <Tag size={12} />
                Add Tag
              </button>
            </div>
          </div>

          {/* Info Banner */}
          <div className="glass-subtle rounded-xl p-4 border border-primary-400/30 bg-primary-500/5">
            <div className="flex gap-3">
              <AlertCircle className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-primary-400">Note:</span> Students will receive an email notification and see this assignment in their dashboard once you create it.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 glass-strong border-t border-white/10 px-8 py-6 rounded-b-3xl">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-6 py-2.5 glass-subtle rounded-xl hover:bg-white/10 transition-colors font-medium"
            >
              Cancel
            </button>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 glass-subtle rounded-xl hover:bg-white/10 transition-colors font-medium">
                Save as Draft
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl hover:from-primary-600 hover:to-purple-600 transition-all font-semibold shadow-lg shadow-primary-500/20">
                Create Assignment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
