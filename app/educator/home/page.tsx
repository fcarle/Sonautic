'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { useTheme } from '@/components/ThemeProvider'
import { 
  Clock,
  Calendar,
  CheckCircle,
  X,
  MapPin,
  Users
} from 'lucide-react'

export default function EducatorHome() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showCreateEventModal, setShowCreateEventModal] = useState(false)
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const [showCreateAssignmentModal, setShowCreateAssignmentModal] = useState(false)
  const { theme } = useTheme()

  return (
    <DashboardLayout type="educator">
      {/* Create Assignment Modal */}
      {showCreateAssignmentModal && (
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
              <h2 className="text-xl font-semibold">Create New Assignment</h2>
              <button 
                onClick={() => setShowCreateAssignmentModal(false)}
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
              {/* Assignment Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Assignment Title</label>
                <input 
                  type="text"
                  placeholder="e.g., Bach Prelude Practice"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>

              {/* Student Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Assign To Student</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="">Select student</option>
                  <option value="emma">Emma Johnson</option>
                  <option value="michael">Michael Chen</option>
                  <option value="sarah">Sarah Williams</option>
                  <option value="david">David Brown</option>
                  <option value="lisa">Lisa Anderson</option>
                  <option value="james">James Wilson</option>
                  <option value="emily">Emily Davis</option>
                  <option value="chris">Chris Martinez</option>
                </select>
              </div>

              {/* Assignment Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Assignment Type</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="">Select type</option>
                  <option value="practice">Practice</option>
                  <option value="theory">Theory</option>
                  <option value="composition">Composition</option>
                  <option value="performance">Performance</option>
                  <option value="sight-reading">Sight Reading</option>
                  <option value="scales">Scales & Technique</option>
                  <option value="recording">Recording</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Difficulty Level */}
              <div>
                <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="">Select difficulty</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {/* Due Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Due Date</label>
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
                  <label className="block text-sm font-medium mb-2">Due Time</label>
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

              {/* Description/Instructions */}
              <div>
                <label className="block text-sm font-medium mb-2">Instructions</label>
                <textarea 
                  rows={5}
                  placeholder="Add detailed instructions for the assignment..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                ></textarea>
              </div>

              {/* Resources/Materials */}
              <div>
                <label className="block text-sm font-medium mb-2">Resources & Materials</label>
                <input 
                  type="text"
                  placeholder="e.g., Sheet music, audio recordings, etc."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>

              {/* Expected Practice Time */}
              <div>
                <label className="block text-sm font-medium mb-2">Expected Practice Time</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <input 
                      type="number"
                      placeholder="0"
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

              {/* Points/Grade */}
              <div>
                <label className="block text-sm font-medium mb-2">Points/Grade</label>
                <input 
                  type="number"
                  placeholder="e.g., 100"
                  min="0"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>

              {/* Notification */}
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox"
                  id="notifyStudent"
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="notifyStudent" className="text-sm font-medium">
                  Send notification to student
                </label>
              </div>
            </div>

            {/* Modal Footer */}
            <div className={`p-6 border-t flex items-center justify-end gap-3 sticky bottom-0 ${
              theme === 'dark' 
                ? 'border-white/10 bg-gray-900' 
                : 'border-gray-200 bg-white'
            }`}>
              <button 
                onClick={() => setShowCreateAssignmentModal(false)}
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
                  // Handle assignment creation logic here
                  setShowCreateAssignmentModal(false)
                }}
                className="px-6 py-2.5 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-lg"
                style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
              >
                Create Assignment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Task Modal */}
      {showAddTaskModal && (
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
              <h2 className="text-xl font-semibold">Add New Task</h2>
              <button 
                onClick={() => setShowAddTaskModal(false)}
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
              {/* Task Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Task Title</label>
                <input 
                  type="text"
                  placeholder="Enter task title"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="">Select category</option>
                  <option value="teaching">Teaching</option>
                  <option value="planning">Planning</option>
                  <option value="grading">Grading</option>
                  <option value="administrative">Administrative</option>
                  <option value="communication">Communication</option>
                  <option value="resources">Resources</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium mb-2">Priority</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="">Select priority</option>
                  <option value="high">High (Urgent)</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              {/* Due Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Due Date</label>
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
                  <label className="block text-sm font-medium mb-2">Due Time</label>
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

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea 
                  rows={4}
                  placeholder="Add task description or notes..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                ></textarea>
              </div>

              {/* Related Student (Optional) */}
              <div>
                <label className="block text-sm font-medium mb-2">Related Student (Optional)</label>
                <input 
                  type="text"
                  placeholder="Enter student name"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
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
                onClick={() => setShowAddTaskModal(false)}
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
                  // Handle task creation logic here
                  setShowAddTaskModal(false)
                }}
                className="px-6 py-2.5 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-lg"
                style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

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

              {/* Recurrence */}
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
                className="px-6 py-2.5 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-lg"
                style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
              >
                Create Event
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-8 max-w-6xl">
        {/* Welcome header */}
        <div className="mb-6">
          <h1 className="text-2xl font-medium mb-2">Welcome, David!</h1>
          <p className="text-sm text-gray-500">Here's what's happening today</p>
        </div>

        {/* Navigation tabs */}
        <div className="flex items-center gap-2 mb-8">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'overview' 
                ? 'text-white backdrop-blur-xl border border-white/20 shadow-lg' 
                : 'bg-white/10 text-gray-400 hover:bg-white/15'
            }`}
            style={activeTab === 'overview' ? { background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' } : {}}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('assignments')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'assignments' 
                ? 'text-white backdrop-blur-xl border border-white/20 shadow-lg' 
                : 'bg-white/10 text-gray-400 hover:bg-white/15'
            }`}
            style={activeTab === 'assignments' ? { background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' } : {}}
          >
            Assignments
          </button>
          <button 
            onClick={() => setActiveTab('tasks')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'tasks' 
                ? 'text-white backdrop-blur-xl border border-white/20 shadow-lg' 
                : 'bg-white/10 text-gray-400 hover:bg-white/15'
            }`}
            style={activeTab === 'tasks' ? { background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' } : {}}
          >
            Tasks
          </button>
          <button 
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'events' 
                ? 'text-white backdrop-blur-xl border border-white/20 shadow-lg' 
                : 'bg-white/10 text-gray-400 hover:bg-white/15'
            }`}
            style={activeTab === 'events' ? { background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' } : {}}
          >
            Events
          </button>
          <button 
            onClick={() => setActiveTab('deadlines')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'deadlines' 
                ? 'text-white backdrop-blur-xl border border-white/20 shadow-lg' 
                : 'bg-white/10 text-gray-400 hover:bg-white/15'
            }`}
            style={activeTab === 'deadlines' ? { background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' } : {}}
          >
            Deadlines
          </button>
          <button 
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'timeline' 
                ? 'text-white backdrop-blur-xl border border-white/20 shadow-lg' 
                : 'bg-white/10 text-gray-400 hover:bg-white/15'
            }`}
            style={activeTab === 'timeline' ? { background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' } : {}}
          >
            Timeline
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Countdown Card */}
            <GlassCard className="p-5 mb-8 border border-white/5">
              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  <Calendar className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-medium mb-0.5">14 Days</div>
                  <div className="text-sm text-gray-500">Until Regional Competition</div>
                </div>
              </div>
            </GlassCard>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Assignments Due */}
              <GlassCard className="p-6 border border-white/5">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-semibold">Assignments Due</h3>
                  <span className="text-xs text-gray-500">6 pending</span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Bach Prelude Practice', time: 'Today, 5:00 PM', completed: false },
                    { title: 'Music Theory Quiz', time: 'Tomorrow, 9:00 AM', completed: false },
                    { title: 'Composition Exercise', time: 'Mar 25, 2:00 PM', completed: false },
                    { title: 'Sight Reading Practice', time: 'Mar 24, 4:00 PM', completed: false },
                    { title: 'Scale Practice Recording', time: 'Mar 27, 6:00 PM', completed: false },
                    { title: 'Ensemble Part Review', time: 'Mar 28, 3:00 PM', completed: true },
                  ].map((assignment, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        assignment.completed ? 'bg-green-500/20' : 'bg-white/10'
                      }`}>
                        {assignment.completed && (
                          <CheckCircle className="text-green-400" size={14} />
                        )}
                        {!assignment.completed && (
                          <Clock className="text-gray-500" size={12} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{assignment.title}</div>
                        <div className="text-xs text-gray-500">{assignment.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Events Tomorrow */}
              <GlassCard className="p-6 border border-white/5">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-semibold">Events Tomorrow</h3>
                  <span className="text-xs text-gray-500">5 scheduled</span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Piano Lesson', time: '9:00 AM', tag: 'Lesson', color: 'indigo' },
                    { title: 'Theory Class', time: '11:00 AM', tag: 'Class', color: 'blue' },
                    { title: 'Practice Session', time: '2:00 PM', tag: 'Practice', color: 'purple' },
                    { title: 'Ensemble Rehearsal', time: '4:00 PM', tag: 'Rehearsal', color: 'pink' },
                    { title: 'Masterclass', time: '6:00 PM', tag: 'Masterclass', color: 'slate' },
                  ].map((event, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                        <Clock className="text-gray-500" size={12} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{event.title}</div>
                        <div className="text-xs text-gray-500">{event.time}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs bg-${event.color}-600/20 text-${event.color}-300`}>
                        {event.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Practice Hours Chart */}
            <GlassCard className="p-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold">Practice Hours (Last 7 Days)</h3>
              </div>
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 700 250">
                  {/* Grid lines */}
                  <line x1="50" y1="200" x2="650" y2="200" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1" />
                  <line x1="50" y1="150" x2="650" y2="150" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1" />
                  <line x1="50" y1="100" x2="650" y2="100" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1" />
                  <line x1="50" y1="50" x2="650" y2="50" stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeWidth="1" />
                  
                  {/* Y-axis labels */}
                  <text x="30" y="205" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">0</text>
                  <text x="30" y="155" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">2</text>
                  <text x="30" y="105" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">4</text>
                  <text x="30" y="55" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">6</text>
                  <text x="30" y="30" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">8</text>
                  
                  {/* X-axis labels */}
                  <text x="85" y="225" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">Mon</text>
                  <text x="185" y="225" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">Tue</text>
                  <text x="285" y="225" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">Wed</text>
                  <text x="385" y="225" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">Thu</text>
                  <text x="485" y="225" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">Fri</text>
                  <text x="585" y="225" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">Sat</text>
                  <text x="650" y="225" fill={theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'} fontSize="12">Sun</text>
                  
                  {/* Data line */}
                  <polyline
                    points="100,175 200,125 300,180 400,100 500,110 600,150 670,50"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Data points */}
                  <circle cx="100" cy="175" r="4" fill="#6366f1" />
                  <circle cx="200" cy="125" r="4" fill="#ec4899" />
                  <circle cx="300" cy="180" r="4" fill="#6366f1" />
                  <circle cx="400" cy="100" r="4" fill="#ec4899" />
                  <circle cx="500" cy="110" r="4" fill="#ec4899" />
                  <circle cx="600" cy="150" r="4" fill="#ec4899" />
                  <circle cx="670" cy="50" r="4" fill="#ec4899" />
                </svg>
              </div>
            </GlassCard>
          </>
        )}

        {/* Assignments Tab */}
        {activeTab === 'assignments' && (
          <div className="space-y-6">
            <GlassCard className="p-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">All Assignments</h3>
                <button 
                  onClick={() => setShowCreateAssignmentModal(true)}
                  className="px-4 py-2 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  Create Assignment
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    title: 'Bach Prelude Practice', 
                    student: 'Emma Johnson', 
                    dueDate: 'Today, 5:00 PM', 
                    status: 'pending',
                    difficulty: 'Advanced'
                  },
                  { 
                    title: 'Music Theory Quiz', 
                    student: 'Michael Chen', 
                    dueDate: 'Tomorrow, 9:00 AM', 
                    status: 'pending',
                    difficulty: 'Intermediate'
                  },
                  { 
                    title: 'Composition Exercise', 
                    student: 'Sarah Williams', 
                    dueDate: 'Mar 25, 2:00 PM', 
                    status: 'in-progress',
                    difficulty: 'Advanced'
                  },
                  { 
                    title: 'Sight Reading Practice', 
                    student: 'David Brown', 
                    dueDate: 'Mar 24, 4:00 PM', 
                    status: 'pending',
                    difficulty: 'Beginner'
                  },
                  { 
                    title: 'Scale Practice Recording', 
                    student: 'Lisa Anderson', 
                    dueDate: 'Mar 27, 6:00 PM', 
                    status: 'pending',
                    difficulty: 'Intermediate'
                  },
                  { 
                    title: 'Ensemble Part Review', 
                    student: 'James Wilson', 
                    dueDate: 'Mar 28, 3:00 PM', 
                    status: 'completed',
                    difficulty: 'Advanced'
                  },
                  { 
                    title: 'Chopin Etude Analysis', 
                    student: 'Emily Davis', 
                    dueDate: 'Mar 29, 1:00 PM', 
                    status: 'in-progress',
                    difficulty: 'Advanced'
                  },
                  { 
                    title: 'Rhythm Exercises', 
                    student: 'Chris Martinez', 
                    dueDate: 'Mar 30, 10:00 AM', 
                    status: 'pending',
                    difficulty: 'Beginner'
                  },
                ].map((assignment, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-base font-semibold mb-1">{assignment.title}</h4>
                        <p className="text-sm text-gray-400">Student: {assignment.student}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          assignment.status === 'completed' 
                            ? 'bg-green-600/20 text-green-300' 
                            : assignment.status === 'in-progress'
                            ? 'bg-yellow-600/20 text-yellow-300'
                            : 'bg-red-600/20 text-red-300'
                        }`}>
                          {assignment.status === 'completed' ? 'Completed' : assignment.status === 'in-progress' ? 'In Progress' : 'Pending'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>Due: {assignment.dueDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        <span>{assignment.difficulty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <GlassCard className="p-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">My Tasks</h3>
                <button 
                  onClick={() => setShowAddTaskModal(true)}
                  className="px-4 py-2 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  Add Task
                </button>
              </div>
              
              {/* Task Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-red-600/10 border border-red-600/20">
                  <div className="text-2xl font-bold text-red-400 mb-1">3</div>
                  <div className="text-sm text-red-300">Urgent</div>
                </div>
                <div className="p-4 rounded-lg bg-yellow-600/10 border border-yellow-600/20">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">5</div>
                  <div className="text-sm text-yellow-300">In Progress</div>
                </div>
                <div className="p-4 rounded-lg bg-green-600/10 border border-green-600/20">
                  <div className="text-2xl font-bold text-green-400 mb-1">12</div>
                  <div className="text-sm text-green-300">Completed Today</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { 
                    title: 'Review student recordings', 
                    category: 'Teaching',
                    priority: 'high',
                    dueTime: 'Today, 3:00 PM',
                    completed: false
                  },
                  { 
                    title: 'Prepare lesson plans for next week', 
                    category: 'Planning',
                    priority: 'high',
                    dueTime: 'Today, 6:00 PM',
                    completed: false
                  },
                  { 
                    title: 'Grade theory assignments', 
                    category: 'Grading',
                    priority: 'medium',
                    dueTime: 'Tomorrow, 10:00 AM',
                    completed: false
                  },
                  { 
                    title: 'Update student progress reports', 
                    category: 'Administrative',
                    priority: 'medium',
                    dueTime: 'Tomorrow, 2:00 PM',
                    completed: false
                  },
                  { 
                    title: 'Schedule parent-teacher conferences', 
                    category: 'Communication',
                    priority: 'high',
                    dueTime: 'Oct 24, 4:00 PM',
                    completed: false
                  },
                  { 
                    title: 'Order new sheet music', 
                    category: 'Resources',
                    priority: 'low',
                    dueTime: 'Oct 25, 12:00 PM',
                    completed: false
                  },
                  { 
                    title: 'Respond to student emails', 
                    category: 'Communication',
                    priority: 'medium',
                    dueTime: 'Oct 24, 9:00 AM',
                    completed: false
                  },
                  { 
                    title: 'Practice new teaching piece', 
                    category: 'Personal',
                    priority: 'low',
                    dueTime: 'Oct 26, 5:00 PM',
                    completed: false
                  },
                  { 
                    title: 'Update curriculum materials', 
                    category: 'Planning',
                    priority: 'medium',
                    dueTime: 'Oct 27, 1:00 PM',
                    completed: true
                  },
                  { 
                    title: 'Submit attendance records', 
                    category: 'Administrative',
                    priority: 'high',
                    dueTime: 'Oct 23, 11:00 AM',
                    completed: true
                  },
                ].map((task, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg transition-colors cursor-pointer border ${
                      task.completed 
                        ? 'bg-white/5 border-white/5 opacity-60' 
                        : 'bg-white/5 hover:bg-white/10 border-white/5'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button 
                        className={`mt-1 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                          task.completed 
                            ? 'bg-green-500/20 border-green-500' 
                            : 'bg-white/10 border-gray-600'
                        } border`}
                      >
                        {task.completed && (
                          <CheckCircle className="text-green-400" size={14} />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                            {task.title}
                          </h4>
                          <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                            task.priority === 'high' 
                              ? 'bg-red-600/20 text-red-300' 
                              : task.priority === 'medium'
                              ? 'bg-yellow-600/20 text-yellow-300'
                              : 'bg-blue-600/20 text-blue-300'
                          }`}>
                            {task.priority === 'high' ? 'Urgent' : task.priority === 'medium' ? 'Medium' : 'Low'}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{task.dueTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            <span>{task.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <GlassCard className="p-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Upcoming Events</h3>
                <button 
                  onClick={() => setShowCreateEventModal(true)}
                  className="px-4 py-2 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  Create Event
                </button>
              </div>

              {/* Calendar Week View */}
              <div className="grid grid-cols-7 gap-3 mb-8">
                {[
                  { day: 'Mon', date: '23', isToday: true, eventCount: 4 },
                  { day: 'Tue', date: '24', isToday: false, eventCount: 5 },
                  { day: 'Wed', date: '25', isToday: false, eventCount: 3 },
                  { day: 'Thu', date: '26', isToday: false, eventCount: 6 },
                  { day: 'Fri', date: '27', isToday: false, eventCount: 4 },
                  { day: 'Sat', date: '28', isToday: false, eventCount: 2 },
                  { day: 'Sun', date: '29', isToday: false, eventCount: 1 },
                ].map((day, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg text-center cursor-pointer transition-colors ${
                      day.isToday 
                        ? 'bg-indigo-600/20 border-2 border-indigo-600' 
                        : 'bg-white/5 border border-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs text-gray-400 mb-1">{day.day}</div>
                    <div className={`text-lg font-semibold mb-1 ${day.isToday ? 'text-indigo-400' : ''}`}>
                      {day.date}
                    </div>
                    <div className="text-xs text-gray-500">{day.eventCount} events</div>
                  </div>
                ))}
              </div>

              {/* Today's Events */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-4">TODAY - October 23</h4>
                <div className="space-y-3">
                  {[
                    { 
                      title: 'Morning Practice Session', 
                      time: '8:00 AM - 9:30 AM',
                      location: 'Studio A',
                      type: 'Practice',
                      color: 'purple',
                      attendees: 3
                    },
                    { 
                      title: 'Piano Lesson - Emma Johnson', 
                      time: '10:00 AM - 11:00 AM',
                      location: 'Room 101',
                      type: 'Lesson',
                      color: 'indigo',
                      attendees: 1
                    },
                    { 
                      title: 'Music Theory Class', 
                      time: '1:00 PM - 2:30 PM',
                      location: 'Lecture Hall',
                      type: 'Class',
                      color: 'blue',
                      attendees: 15
                    },
                    { 
                      title: 'Student Recital Preparation', 
                      time: '3:00 PM - 5:00 PM',
                      location: 'Concert Hall',
                      type: 'Rehearsal',
                      color: 'pink',
                      attendees: 8
                    },
                  ].map((event, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="text-base font-semibold mb-1">{event.title}</h5>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${event.color}-600/20 text-${event.color}-300`}>
                          {event.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">{event.attendees} attendee{event.attendees > 1 ? 's' : ''}</span>
                        <button className="text-indigo-400 hover:text-indigo-300 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tomorrow's Events */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-4">TOMORROW - October 24</h4>
                <div className="space-y-3">
                  {[
                    { 
                      title: 'Piano Lesson - Michael Chen', 
                      time: '9:00 AM - 10:00 AM',
                      location: 'Room 101',
                      type: 'Lesson',
                      color: 'indigo',
                      attendees: 1
                    },
                    { 
                      title: 'Advanced Theory Workshop', 
                      time: '11:00 AM - 12:30 PM',
                      location: 'Studio B',
                      type: 'Class',
                      color: 'blue',
                      attendees: 10
                    },
                    { 
                      title: 'Ensemble Practice', 
                      time: '2:00 PM - 4:00 PM',
                      location: 'Rehearsal Room',
                      type: 'Practice',
                      color: 'purple',
                      attendees: 6
                    },
                    { 
                      title: 'Masterclass with Guest Artist', 
                      time: '4:00 PM - 6:00 PM',
                      location: 'Concert Hall',
                      type: 'Masterclass',
                      color: 'slate',
                      attendees: 20
                    },
                    { 
                      title: 'Faculty Meeting', 
                      time: '6:30 PM - 7:30 PM',
                      location: 'Conference Room',
                      type: 'Meeting',
                      color: 'gray',
                      attendees: 12
                    },
                  ].map((event, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="text-base font-semibold mb-1">{event.title}</h5>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${event.color}-600/20 text-${event.color}-300`}>
                          {event.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">{event.attendees} attendee{event.attendees > 1 ? 's' : ''}</span>
                        <button className="text-indigo-400 hover:text-indigo-300 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Deadlines Tab */}
        {activeTab === 'deadlines' && (
          <div className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <GlassCard className="p-4 border border-white/5">
                <div className="text-sm text-gray-400 mb-1">Overdue</div>
                <div className="text-2xl font-bold text-red-400">2</div>
              </GlassCard>
              <GlassCard className="p-4 border border-white/5">
                <div className="text-sm text-gray-400 mb-1">Due Today</div>
                <div className="text-2xl font-bold text-orange-400">4</div>
              </GlassCard>
              <GlassCard className="p-4 border border-white/5">
                <div className="text-sm text-gray-400 mb-1">This Week</div>
                <div className="text-2xl font-bold text-yellow-400">8</div>
              </GlassCard>
              <GlassCard className="p-4 border border-white/5">
                <div className="text-sm text-gray-400 mb-1">This Month</div>
                <div className="text-2xl font-bold text-blue-400">15</div>
              </GlassCard>
            </div>

            {/* Overdue Items */}
            <GlassCard className="p-6 border border-red-600/20 bg-red-600/5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-semibold text-red-400">Overdue Items</h3>
                <span className="text-xs text-red-400">2 items</span>
              </div>
              <div className="space-y-3">
                {[
                  { 
                    title: 'Submit Recital Program', 
                    type: 'Administrative',
                    dueDate: 'Oct 21, 2025',
                    daysOverdue: 2
                  },
                  { 
                    title: 'Grade Theory Exams', 
                    type: 'Grading',
                    dueDate: 'Oct 20, 2025',
                    daysOverdue: 3
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-red-600/10 hover:bg-red-600/15 transition-colors cursor-pointer border border-red-600/20"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-red-300">{item.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{item.type}</p>
                      </div>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-red-600/20 text-red-300">
                        {item.daysOverdue} days overdue
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-red-400">
                      <Clock size={12} />
                      <span>Was due: {item.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Due Today */}
            <GlassCard className="p-6 border border-orange-600/20 bg-orange-600/5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-semibold text-orange-400">Due Today</h3>
                <span className="text-xs text-orange-400">4 items</span>
              </div>
              <div className="space-y-3">
                {[
                  { 
                    title: 'Review Student Recordings', 
                    type: 'Teaching',
                    time: '3:00 PM',
                    student: 'Emma Johnson'
                  },
                  { 
                    title: 'Prepare Lesson Plans', 
                    type: 'Planning',
                    time: '6:00 PM',
                    student: null
                  },
                  { 
                    title: 'Bach Prelude Assignment', 
                    type: 'Assignment',
                    time: '5:00 PM',
                    student: 'Michael Chen'
                  },
                  { 
                    title: 'Submit Attendance Records', 
                    type: 'Administrative',
                    time: '11:00 AM',
                    student: null
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-orange-600/10 hover:bg-orange-600/15 transition-colors cursor-pointer border border-orange-600/20"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        {item.student && (
                          <p className="text-xs text-gray-400 mt-1">Student: {item.student}</p>
                        )}
                      </div>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-orange-600/20 text-orange-300">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-orange-400">
                      <Clock size={12} />
                      <span>Today, {item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* This Week */}
            <GlassCard className="p-6 border border-white/5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-semibold">Due This Week</h3>
                <span className="text-xs text-gray-500">8 items</span>
              </div>
              <div className="space-y-3">
                {[
                  { 
                    title: 'Music Theory Quiz', 
                    type: 'Assignment',
                    dueDate: 'Tomorrow, 9:00 AM',
                    student: 'Sarah Williams',
                    priority: 'high'
                  },
                  { 
                    title: 'Update Student Progress Reports', 
                    type: 'Administrative',
                    dueDate: 'Oct 24, 2:00 PM',
                    student: null,
                    priority: 'medium'
                  },
                  { 
                    title: 'Composition Exercise', 
                    type: 'Assignment',
                    dueDate: 'Oct 25, 2:00 PM',
                    student: 'David Brown',
                    priority: 'medium'
                  },
                  { 
                    title: 'Schedule Parent-Teacher Conferences', 
                    type: 'Communication',
                    dueDate: 'Oct 24, 4:00 PM',
                    student: null,
                    priority: 'high'
                  },
                  { 
                    title: 'Order New Sheet Music', 
                    type: 'Resources',
                    dueDate: 'Oct 25, 12:00 PM',
                    student: null,
                    priority: 'low'
                  },
                  { 
                    title: 'Scale Practice Recording', 
                    type: 'Assignment',
                    dueDate: 'Oct 27, 6:00 PM',
                    student: 'Lisa Anderson',
                    priority: 'medium'
                  },
                  { 
                    title: 'Update Curriculum Materials', 
                    type: 'Planning',
                    dueDate: 'Oct 27, 1:00 PM',
                    student: null,
                    priority: 'medium'
                  },
                  { 
                    title: 'Ensemble Part Review', 
                    type: 'Assignment',
                    dueDate: 'Oct 28, 3:00 PM',
                    student: 'James Wilson',
                    priority: 'low'
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-semibold">{item.title}</h4>
                          <span className={`w-2 h-2 rounded-full ${
                            item.priority === 'high' 
                              ? 'bg-red-500' 
                              : item.priority === 'medium'
                              ? 'bg-yellow-500'
                              : 'bg-blue-500'
                          }`}></span>
                        </div>
                        {item.student && (
                          <p className="text-xs text-gray-400">Student: {item.student}</p>
                        )}
                      </div>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-indigo-600/20 text-indigo-300">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>{item.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Upcoming (This Month) */}
            <GlassCard className="p-6 border border-white/5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-semibold">Later This Month</h3>
                <span className="text-xs text-gray-500">7 more items</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { title: 'Chopin Etude Analysis', dueDate: 'Oct 29', type: 'Assignment' },
                  { title: 'Rhythm Exercises', dueDate: 'Oct 30', type: 'Assignment' },
                  { title: 'Mid-Term Performance Review', dueDate: 'Oct 31', type: 'Administrative' },
                  { title: 'Faculty Meeting', dueDate: 'Oct 30', type: 'Meeting' },
                  { title: 'Student Recital Planning', dueDate: 'Oct 31', type: 'Planning' },
                  { title: 'Equipment Maintenance Check', dueDate: 'Oct 29', type: 'Administrative' },
                  { title: 'Workshop Preparation', dueDate: 'Oct 31', type: 'Teaching' },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock size={12} />
                          <span>{item.dueDate}</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded text-xs bg-gray-600/20 text-gray-400">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            {/* Filter Options */}
            <GlassCard className="p-4 border border-white/5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-medium text-gray-400">Filter:</span>
                <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-all backdrop-blur-xl border border-white/20 text-white shadow-lg" 
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}>
                  All Activities
                </button>
                <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-gray-400 hover:bg-white/15 transition-colors">
                  Assignments
                </button>
                <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-gray-400 hover:bg-white/15 transition-colors">
                  Events
                </button>
                <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-gray-400 hover:bg-white/15 transition-colors">
                  Tasks
                </button>
                <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-gray-400 hover:bg-white/15 transition-colors">
                  Student Activity
                </button>
              </div>
            </GlassCard>

            {/* Timeline */}
            <GlassCard className="p-6 border border-white/5">
              <h3 className="text-lg font-semibold mb-6">Activity Timeline</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-16 top-0 bottom-0 w-1 rounded-full" style={{ background: 'rgba(57, 73, 126, 0.3)' }}></div>

                {/* Timeline items */}
                <div className="space-y-6">
                  {/* Today */}
                  <div className="relative flex items-start gap-6">
                    <div className="flex flex-col items-center w-16 flex-shrink-0">
                      <div 
                        className={`w-10 h-10 rounded-full border-4 flex items-center justify-center z-10 ${
                          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                        }`}
                        style={{ borderColor: 'rgba(57, 73, 126, 1)' }}
                      >
                        <span className="text-xs font-bold" style={{ color: 'rgba(57, 73, 126, 1)' }}>NOW</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="text-sm text-gray-400">Today - October 23, 2025</div>
                    </div>
                  </div>

                  {/* Timeline Entry - Assignment Submitted */}
                  <div className="relative flex items-start gap-6">
                    <div className="flex flex-col items-center w-16 flex-shrink-0">
                      <div className="text-xs text-gray-500 mb-2 whitespace-nowrap">2:30 PM</div>
                      <div 
                        className={`w-10 h-10 rounded-full border-3 flex items-center justify-center z-10 ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                        style={{ borderColor: 'rgba(57, 73, 126, 0.8)', borderWidth: '3px' }}
                      >
                        <CheckCircle size={18} style={{ color: 'rgba(57, 73, 126, 1)' }} />
                      </div>
                    </div>
                    <div className={`flex-1 p-4 rounded-lg border transition-colors cursor-pointer ${
                      theme === 'dark' 
                        ? 'bg-white/5 hover:bg-white/10 border-white/5' 
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold mb-1">Assignment Completed</h4>
                          <p className="text-sm text-gray-400">Emma Johnson submitted "Bach Prelude Practice"</p>
                        </div>
                        <span 
                          className="px-3 py-1 rounded-full text-xs text-white"
                          style={{ background: 'rgba(57, 73, 126, 0.8)' }}
                        >
                          Submitted
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Entry - Task Completed */}
                  <div className="relative flex items-start gap-6">
                    <div className="flex flex-col items-center w-16 flex-shrink-0">
                      <div className="text-xs text-gray-500 mb-2 whitespace-nowrap">12:15 PM</div>
                      <div 
                        className={`w-10 h-10 rounded-full border-3 flex items-center justify-center z-10 ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                        style={{ borderColor: 'rgba(57, 73, 126, 0.8)', borderWidth: '3px' }}
                      >
                        <CheckCircle size={18} style={{ color: 'rgba(57, 73, 126, 1)' }} />
                      </div>
                    </div>
                    <div className={`flex-1 p-4 rounded-lg border transition-colors cursor-pointer ${
                      theme === 'dark' 
                        ? 'bg-white/5 hover:bg-white/10 border-white/5' 
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold mb-1">Task Completed</h4>
                          <p className="text-sm text-gray-400">You completed "Update curriculum materials"</p>
                        </div>
                        <span 
                          className="px-3 py-1 rounded-full text-xs text-white"
                          style={{ background: 'rgba(57, 73, 126, 0.8)' }}
                        >
                          Task
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Entry - Lesson */}
                  <div className="relative flex items-start gap-6">
                    <div className="flex flex-col items-center w-16 flex-shrink-0">
                      <div className="text-xs text-gray-500 mb-2 whitespace-nowrap">10:00 AM</div>
                      <div 
                        className={`w-10 h-10 rounded-full border-3 flex items-center justify-center z-10 ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                        style={{ borderColor: 'rgba(57, 73, 126, 0.8)', borderWidth: '3px' }}
                      >
                        <Calendar size={18} style={{ color: 'rgba(57, 73, 126, 1)' }} />
                      </div>
                    </div>
                    <div className={`flex-1 p-4 rounded-lg border transition-colors cursor-pointer ${
                      theme === 'dark' 
                        ? 'bg-white/5 hover:bg-white/10 border-white/5' 
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold mb-1">Lesson Completed</h4>
                          <p className="text-sm text-gray-400">Piano Lesson with Michael Chen - Room 101</p>
                        </div>
                        <span 
                          className="px-3 py-1 rounded-full text-xs text-white"
                          style={{ background: 'rgba(57, 73, 126, 0.8)' }}
                        >
                          Lesson
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Entry - Practice */}
                  <div className="relative flex items-start gap-6">
                    <div className="flex flex-col items-center w-16 flex-shrink-0">
                      <div className="text-xs text-gray-500 mb-2 whitespace-nowrap">8:30 AM</div>
                      <div 
                        className={`w-10 h-10 rounded-full border-3 flex items-center justify-center z-10 ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                        style={{ borderColor: 'rgba(57, 73, 126, 0.8)', borderWidth: '3px' }}
                      >
                        <Clock size={18} style={{ color: 'rgba(57, 73, 126, 1)' }} />
                      </div>
                    </div>
                    <div className={`flex-1 p-4 rounded-lg border transition-colors cursor-pointer ${
                      theme === 'dark' 
                        ? 'bg-white/5 hover:bg-white/10 border-white/5' 
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold mb-1">Practice Session</h4>
                          <p className="text-sm text-gray-400">Morning practice session completed - Studio A</p>
                        </div>
                        <span 
                          className="px-3 py-1 rounded-full text-xs text-white"
                          style={{ background: 'rgba(57, 73, 126, 0.8)' }}
                        >
                          Practice
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Yesterday */}
                  <div className="relative flex items-start gap-6">
                    <div className="flex flex-col items-center w-16 flex-shrink-0">
                      <div 
                        className={`w-10 h-10 rounded-full border-4 z-10 ${
                          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                        }`}
                        style={{ borderColor: 'rgba(57, 73, 126, 0.6)' }}
                      ></div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="text-sm text-gray-400">Yesterday - October 22, 2025</div>
                    </div>
                  </div>

                  {/* Timeline Entry - Assignment Created */}
                  <div className="relative flex items-start gap-6">
                    <div className="flex flex-col items-center w-16 flex-shrink-0">
                      <div className="text-xs text-gray-500 mb-2 whitespace-nowrap">6:45 PM</div>
                      <div 
                        className={`w-10 h-10 rounded-full border-3 flex items-center justify-center z-10 ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                        style={{ borderColor: 'rgba(57, 73, 126, 0.8)', borderWidth: '3px' }}
                      >
                        <span className="text-lg font-bold" style={{ color: 'rgba(57, 73, 126, 1)' }}>+</span>
                      </div>
                    </div>
                    <div className={`flex-1 p-4 rounded-lg border transition-colors cursor-pointer ${
                      theme === 'dark' 
                        ? 'bg-white/5 hover:bg-white/10 border-white/5' 
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold mb-1">Assignment Created</h4>
                          <p className="text-sm text-gray-400">Created "Composition Exercise" for Sarah Williams</p>
                        </div>
                        <span 
                          className="px-3 py-1 rounded-full text-xs text-white"
                          style={{ background: 'rgba(57, 73, 126, 0.8)' }}
                        >
                          Assignment
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Load More */}
                  <div className="relative flex items-start gap-6">
                    <div className="w-16 flex-shrink-0"></div>
                    <div className="flex-1">
                      <button className={`w-full p-3 rounded-lg border text-sm transition-colors ${
                        theme === 'dark'
                          ? 'bg-white/5 hover:bg-white/10 border-white/5 text-gray-400 hover:text-white'
                          : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-600 hover:text-gray-900'
                      }`}>
                        Load More Activities
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Other tabs placeholder */}
        {activeTab !== 'overview' && activeTab !== 'assignments' && activeTab !== 'tasks' && activeTab !== 'events' && activeTab !== 'deadlines' && activeTab !== 'timeline' && (
          <GlassCard className="p-12 border border-white/5 text-center">
            <h3 className="text-xl font-semibold mb-2 capitalize">{activeTab}</h3>
            <p className="text-gray-500">Content for {activeTab} coming soon...</p>
          </GlassCard>
        )}
      </div>
    </DashboardLayout>
  )
}
