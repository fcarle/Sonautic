'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { useTheme } from '@/components/ThemeProvider'
import { 
  Folder, 
  FileAudio, 
  FileVideo, 
  FileText, 
  File, 
  Plus, 
  Search, 
  Grid, 
  List, 
  MoreVertical,
  Users,
  BookOpen,
  Music,
  Upload,
  FolderOpen,
  Star,
  Clock
} from 'lucide-react'

export default function EducatorFilesPage() {
  const { theme } = useTheme()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  const [activeTab, setActiveTab] = useState<'all' | 'teaching' | 'submissions' | 'shared'>('all')

  const folders = [
    { name: 'Curriculum Materials', count: 156, icon: BookOpen },
    { name: 'Student Submissions', count: 89, icon: Users },
    { name: 'Sheet Music Library', count: 234, icon: Music },
    { name: 'Reference Recordings', count: 67, icon: FileAudio },
    { name: 'Assignment Templates', count: 45, icon: FileText },
    { name: 'Shared Resources', count: 28, icon: FolderOpen },
  ]

  const recentFiles = [
    { 
      name: 'Mozart Sonata K.545 - Analysis.pdf', 
      type: 'pdf', 
      size: '2.4 MB', 
      date: 'Today, 11:30 AM', 
      folder: 'Curriculum Materials',
      category: 'teaching',
      sharedWith: 12
    },
    { 
      name: 'Sarah Chen - Chopin Etude Op. 10 No. 4.mp3', 
      type: 'audio', 
      size: '5.8 MB', 
      date: 'Today, 10:15 AM', 
      folder: 'Student Submissions',
      category: 'submissions',
      student: 'Sarah Chen'
    },
    { 
      name: 'Week 8 Assignment - Baroque Interpretation.mp4', 
      type: 'video', 
      size: '45.2 MB', 
      date: 'Yesterday', 
      folder: 'Assignment Templates',
      category: 'teaching',
      sharedWith: 24
    },
    { 
      name: 'Michael Park - Bach Invention No. 8.mp4', 
      type: 'video', 
      size: '28.3 MB', 
      date: 'Yesterday', 
      folder: 'Student Submissions',
      category: 'submissions',
      student: 'Michael Park'
    },
    { 
      name: 'Scales Technique Guide.pdf', 
      type: 'pdf', 
      size: '1.2 MB', 
      date: '2 days ago', 
      folder: 'Shared Resources',
      category: 'shared',
      sharedWith: 48
    },
    { 
      name: 'Beethoven Sonata No. 8 - Reference Performance.mp3', 
      type: 'audio', 
      size: '12.4 MB', 
      date: '3 days ago', 
      folder: 'Reference Recordings',
      category: 'teaching'
    },
    { 
      name: 'Emma Rodriguez - Midterm Recital.mp4', 
      type: 'video', 
      size: '156.7 MB', 
      date: '3 days ago', 
      folder: 'Student Submissions',
      category: 'submissions',
      student: 'Emma Rodriguez'
    },
    { 
      name: 'Music Theory Worksheet - Intervals.pdf', 
      type: 'pdf', 
      size: '892 KB', 
      date: '4 days ago', 
      folder: 'Curriculum Materials',
      category: 'teaching',
      sharedWith: 18
    },
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

  const filteredFiles = activeTab === 'all' 
    ? recentFiles 
    : recentFiles.filter(file => file.category === activeTab)

  return (
    <DashboardLayout type="educator">
      <div className="w-full flex justify-center">
        <div className="p-8 w-full max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-1">Files</h1>
          </div>

          {/* Search and Actions Bar */}
          <div className="flex items-center gap-3 mb-8">
            <div className={`flex-1 flex items-center gap-3 px-4 py-3 border rounded-lg focus-within:border-indigo-500 transition-colors ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-gray-50 border-gray-300'
            }`}>
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search files..."
                className={`flex-1 bg-transparent outline-none ${
                  theme === 'dark' ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>
            <button 
              className="px-5 py-3 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm hover:shadow-md flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
            >
              <Plus size={18} />
              <span>Upload</span>
            </button>
            <div className={`flex gap-1 rounded-lg p-1 border ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-gray-100 border-gray-200'
            }`}>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? theme === 'dark'
                      ? 'bg-white/10'
                      : 'bg-white'
                    : 'hover:bg-white/5'
                }`}
              >
                <List size={18} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? theme === 'dark'
                      ? 'bg-white/10'
                      : 'bg-white'
                    : 'hover:bg-white/5'
                }`}
              >
                <Grid size={18} />
              </button>
            </div>
          </div>

          {/* Storage Overview */}
          <GlassCard className={`p-6 mb-8 border shadow-lg ${
            theme === 'dark' 
              ? 'border-white/10 bg-white/5 shadow-black/30' 
              : 'border-gray-200 bg-white shadow-gray-300/30'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Storage Used</div>
                <div className="text-2xl font-bold">4.2 GB <span className="text-base text-gray-400 font-normal">of 8 GB</span></div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#39497E' }}>619</div>
                  <div className="text-xs text-gray-400">Total Files</div>
                </div>
                <div className={`h-12 w-px ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-300'}`}></div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#39497E' }}>89</div>
                  <div className="text-xs text-gray-400">Submissions</div>
                </div>
                <div className={`h-12 w-px ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-300'}`}></div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: '#39497E' }}>156</div>
                  <div className="text-xs text-gray-400">Teaching Materials</div>
                </div>
              </div>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${
              theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'
            }`}>
              <div className="h-full" style={{ width: '52.5%', background: '#39497E' }}></div>
            </div>
          </GlassCard>

          {/* Folders */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Folders</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {folders.map((folder, index) => {
                const IconComponent = folder.icon
                return (
                  <GlassCard key={index} className={`p-5 cursor-pointer transition-all group border shadow-sm hover:shadow-md ${
                    theme === 'dark' 
                      ? 'border-white/10 bg-white/5 hover:bg-white/10 shadow-black/20 hover:shadow-black/40' 
                      : 'border-gray-200 bg-white hover:bg-gray-100 shadow-gray-200/40 hover:shadow-gray-300/50'
                  }`}>
                    <IconComponent size={32} className="mb-3 group-hover:scale-110 transition-transform" style={{ color: '#39497E' }} />
                    <div className="font-medium mb-1 text-sm">{folder.name}</div>
                    <div className="text-xs text-gray-400">{folder.count} files</div>
                  </GlassCard>
                )
              })}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'all' 
                    ? 'text-white shadow-md border border-white/20' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
                style={activeTab === 'all' ? { background: '#39497E' } : {}}
              >
                All Files
              </button>
              <button
                onClick={() => setActiveTab('teaching')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'teaching' 
                    ? 'text-white shadow-md border border-white/20' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
                style={activeTab === 'teaching' ? { background: '#39497E' } : {}}
              >
                Teaching Materials
              </button>
              <button
                onClick={() => setActiveTab('submissions')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'submissions' 
                    ? 'text-white shadow-md border border-white/20' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
                style={activeTab === 'submissions' ? { background: '#39497E' } : {}}
              >
                Student Submissions
              </button>
              <button
                onClick={() => setActiveTab('shared')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'shared' 
                    ? 'text-white shadow-md border border-white/20' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/15'
                }`}
                style={activeTab === 'shared' ? { background: '#39497E' } : {}}
              >
                Shared
              </button>
            </div>
            <div className="text-sm text-gray-400">
              {filteredFiles.length} {filteredFiles.length === 1 ? 'file' : 'files'}
            </div>
          </div>

          {/* Recent files */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock size={20} />
              Recent Files
            </h3>
            <GlassCard className={`overflow-hidden border shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-white/5 shadow-black/30' 
                : 'border-gray-200 bg-white shadow-gray-300/30'
            }`}>
              {filteredFiles.length > 0 ? (
                <div className={`divide-y ${theme === 'dark' ? 'divide-white/10' : 'divide-gray-200'}`}>
                  {filteredFiles.map((file, index) => (
                    <div key={index} className={`p-5 cursor-pointer transition-all group ${
                      theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <div className="flex-shrink-0">
                            {getFileIcon(file.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium mb-1 truncate transition-colors" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = '#39497E'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>{file.name}</div>
                            <div className="text-xs text-gray-400 flex items-center gap-2">
                              <span>{file.folder}</span>
                              <span>•</span>
                              <span>{file.size}</span>
                              {file.student && (
                                <>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Users size={12} />
                                    {file.student}
                                  </span>
                                </>
                              )}
                              {file.sharedWith && (
                                <>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Users size={12} />
                                    Shared with {file.sharedWith}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 flex-shrink-0 ml-4">
                          <div className="text-sm text-gray-400">{file.date}</div>
                          <button className={`p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                            theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                          }`}>
                            <Star size={16} />
                          </button>
                          <button className={`p-2 rounded-lg transition-colors ${
                            theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                          }`}>
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <Folder size={64} className="mx-auto mb-4 text-gray-600" />
                  <h3 className="text-xl font-semibold mb-2">No files in this category</h3>
                  <p className="text-gray-400">Try selecting a different filter or upload new files</p>
                </div>
              )}
            </GlassCard>
          </div>

          {/* Empty state for completely empty */}
          {recentFiles.length === 0 && (
            <GlassCard className={`p-16 text-center border shadow-lg ${
              theme === 'dark' 
                ? 'border-white/10 bg-white/5 shadow-black/30' 
                : 'border-gray-200 bg-white shadow-gray-300/30'
            }`}>
              <Upload size={64} className="mx-auto mb-4 text-gray-600" />
              <h3 className="text-2xl font-semibold mb-2">No files yet</h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Upload teaching materials, reference recordings, or assignment templates to get started
              </p>
              <button 
                className="px-6 py-3 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm hover:shadow-md inline-flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
              >
                <Plus size={18} />
                Upload First File
              </button>
            </GlassCard>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
