'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { CheckSquare, Circle, Calendar, Flag, Plus, Filter } from 'lucide-react'

export default function TasksPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

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
    </DashboardLayout>
  )
}
