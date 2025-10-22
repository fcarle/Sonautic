'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { Folder, FileAudio, FileVideo, FileText, File, Plus, Search, Grid, List, MoreVertical } from 'lucide-react'

export default function FilesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')

  const files = [
    { name: 'Chopin Etude Op. 10 No. 4 - Take 1.mp3', type: 'audio', size: '4.2 MB', date: 'Today, 2:30 PM', folder: 'Etudes' },
    { name: 'Chopin Etude Op. 10 No. 4 - Take 2.mp3', type: 'audio', size: '4.1 MB', date: 'Today, 3:15 PM', folder: 'Etudes' },
    { name: 'Bach Invention No. 8 - Practice.mp4', type: 'video', size: '24.8 MB', date: 'Yesterday', folder: 'Bach' },
    { name: 'Scale Practice C Major.mp3', type: 'audio', size: '2.1 MB', date: 'Yesterday', folder: 'Scales' },
    { name: 'Assignment Notes - Mozart.pdf', type: 'pdf', size: '156 KB', date: '2 days ago', folder: 'Assignments' },
    { name: 'Practice Journal October.txt', type: 'text', size: '8 KB', date: '3 days ago', folder: 'Journal' },
  ]

  const folders = [
    { name: 'Etudes', count: 24, color: 'blue' },
    { name: 'Bach', count: 18, color: 'purple' },
    { name: 'Scales', count: 32, color: 'green' },
    { name: 'Assignments', count: 12, color: 'yellow' },
    { name: 'Recordings', count: 45, color: 'pink' },
    { name: 'Journal', count: 8, color: 'orange' },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'audio': return <FileAudio size={20} className="text-blue-400" />
      case 'video': return <FileVideo size={20} className="text-purple-400" />
      case 'pdf': return <FileText size={20} className="text-red-400" />
      case 'text': return <File size={20} className="text-gray-400" />
      default: return <File size={20} />
    }
  }

  return (
    <DashboardLayout type="student">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Files</h1>
            <p className="text-gray-400">Your personal music workspace</p>
          </div>
          <div className="flex items-center gap-3">
            <GlassCard className="px-4 py-2 flex items-center gap-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                className="bg-transparent outline-none text-white placeholder-gray-500 w-64"
              />
            </GlassCard>
            <button className="glass-strong px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/15">
              <Plus size={18} />
              Upload
            </button>
            <div className="flex gap-1 glass-subtle rounded-xl p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'glass' : 'hover:bg-white/5'}`}
              >
                <List size={18} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'glass' : 'hover:bg-white/5'}`}
              >
                <Grid size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Folders */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Folders</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {folders.map((folder, index) => (
              <GlassCard key={index} className="p-4 hover:bg-white/10 cursor-pointer">
                <Folder size={32} className={`text-${folder.color}-400 mb-3`} />
                <div className="font-medium mb-1">{folder.name}</div>
                <div className="text-xs text-gray-400">{folder.count} files</div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Recent files */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Files</h3>
          <GlassCard className="overflow-hidden">
            <div className="divide-y divide-white/10">
              {files.map((file, index) => (
                <div key={index} className="p-4 hover:bg-white/5 cursor-pointer transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {getFileIcon(file.type)}
                      <div className="flex-1">
                        <div className="font-medium mb-1">{file.name}</div>
                        <div className="text-xs text-gray-400">{file.folder} • {file.size}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-sm text-gray-400">{file.date}</div>
                      <button className="p-2 hover:bg-white/10 rounded-lg">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Empty state (hidden for now but showing structure) */}
        {files.length === 0 && (
          <GlassCard className="p-12 text-center">
            <Folder size={64} className="mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2">No files yet</h3>
            <p className="text-gray-400 mb-6">Upload your first practice recording or document</p>
            <button className="glass-strong px-6 py-3 rounded-xl hover:bg-white/15">
              <Plus size={18} className="inline mr-2" />
              Upload File
            </button>
          </GlassCard>
        )}
      </div>
    </DashboardLayout>
  )
}
