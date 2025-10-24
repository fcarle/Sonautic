'use client'

import React, { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { useTheme } from '@/components/ThemeProvider'
import { 
  Users, 
  Music, 
  Play, 
  Pause,
  X,
  Upload,
  Filter,
  Search,
  UserPlus,
  UserCheck
} from 'lucide-react'

type InstrumentTag = 'Pianist' | 'Violinist' | 'Singer' | 'Guitarist' | 'Cellist' | 'Flutist' | 'Drummer' | 'Bassist'

interface Post {
  id: number
  author: string
  role: string
  instrument: InstrumentTag
  timeAgo: string
  textContent?: string
  audioTitle?: string
  audioFile?: string
  duration?: string
  avatar: string
}

interface Person {
  id: number
  name: string
  role: string
  instrument: InstrumentTag
  avatar: string
  isFriend: boolean
}

export default function EducatorConnectPage() {
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState<'Friends' | 'Everyone'>('Everyone')
  const [selectedInstrument, setSelectedInstrument] = useState<InstrumentTag | 'All'>('All')
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [showFindFriends, setShowFindFriends] = useState(false)
  const [playingPost, setPlayingPost] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [friendSearchQuery, setFriendSearchQuery] = useState('')
  const [hasAudio, setHasAudio] = useState(false)

  // Mock data for posts
  const mockPosts: Post[] = [
    {
      id: 1,
      author: 'Sarah Williams',
      role: 'Music Professor',
      instrument: 'Pianist',
      timeAgo: '2 hours ago',
      audioTitle: 'Chopin Nocturne in E-flat Major, Op. 9, No. 2',
      audioFile: 'audio1.mp3',
      duration: '4:23',
      textContent: 'Finally feeling comfortable with this piece! The rubato in measures 12-16 was challenging but it\'s coming together.',
      avatar: 'SW'
    },
    {
      id: 2,
      author: 'Michael Chen',
      role: 'Violin Instructor',
      instrument: 'Violinist',
      timeAgo: '5 hours ago',
      textContent: 'Just finished an incredible masterclass on baroque interpretation. The insights on bow technique were eye-opening! Would love to discuss with fellow string players.',
      avatar: 'MC'
    },
    {
      id: 3,
      author: 'Emma Johnson',
      role: 'Vocal Coach',
      instrument: 'Singer',
      timeAgo: '1 day ago',
      audioTitle: 'Mozart - Der Hölle Rache (Queen of the Night aria)',
      audioFile: 'audio3.mp3',
      duration: '3:02',
      avatar: 'EJ'
    },
    {
      id: 4,
      author: 'David Rodriguez',
      role: 'Guitar Professor',
      instrument: 'Guitarist',
      timeAgo: '2 days ago',
      audioTitle: 'Asturias (Leyenda) - Isaac Albéniz',
      audioFile: 'audio4.mp3',
      duration: '5:48',
      textContent: 'Working on this Spanish classical piece. The tremolo technique requires so much precision!',
      avatar: 'DR'
    },
    {
      id: 5,
      author: 'Lisa Anderson',
      role: 'Cello Instructor',
      instrument: 'Cellist',
      timeAgo: '3 days ago',
      textContent: 'Looking for chamber music partners for a Brahms piano trio performance next month. Any pianists or violinists interested?',
      avatar: 'LA'
    },
    {
      id: 6,
      author: 'James Wilson',
      role: 'Flute Professor',
      instrument: 'Flutist',
      timeAgo: '4 days ago',
      audioTitle: 'Debussy - Syrinx for Solo Flute',
      audioFile: 'audio6.mp3',
      duration: '3:18',
      avatar: 'JW'
    }
  ]

  // Mock data for people to add as friends
  const mockPeople: Person[] = [
    {
      id: 1,
      name: 'Sarah Williams',
      role: 'Music Professor',
      instrument: 'Pianist',
      avatar: 'SW',
      isFriend: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Violin Instructor',
      instrument: 'Violinist',
      avatar: 'MC',
      isFriend: true
    },
    {
      id: 3,
      name: 'Emma Johnson',
      role: 'Vocal Coach',
      instrument: 'Singer',
      avatar: 'EJ',
      isFriend: false
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Guitar Professor',
      instrument: 'Guitarist',
      avatar: 'DR',
      isFriend: false
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Cello Instructor',
      instrument: 'Cellist',
      avatar: 'LA',
      isFriend: true
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Flute Professor',
      instrument: 'Flutist',
      avatar: 'JW',
      isFriend: false
    },
    {
      id: 7,
      name: 'Rachel Green',
      role: 'Piano Instructor',
      instrument: 'Pianist',
      avatar: 'RG',
      isFriend: false
    },
    {
      id: 8,
      name: 'Thomas Brown',
      role: 'Drum Instructor',
      instrument: 'Drummer',
      avatar: 'TB',
      isFriend: false
    }
  ]

  const instruments: InstrumentTag[] = ['Pianist', 'Violinist', 'Singer', 'Guitarist', 'Cellist', 'Flutist', 'Drummer', 'Bassist']

  const filteredPosts = mockPosts.filter(post => {
    const matchesInstrument = selectedInstrument === 'All' || post.instrument === selectedInstrument
    const matchesSearch = post.author.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         (post.audioTitle && post.audioTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (post.textContent && post.textContent.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesInstrument && matchesSearch
  })

  const filteredPeople = mockPeople.filter(person => 
    person.name.toLowerCase().includes(friendSearchQuery.toLowerCase()) ||
    person.role.toLowerCase().includes(friendSearchQuery.toLowerCase()) ||
    person.instrument.toLowerCase().includes(friendSearchQuery.toLowerCase())
  )

  const togglePlay = (postId: number) => {
    if (playingPost === postId) {
      setPlayingPost(null)
    } else {
      setPlayingPost(postId)
    }
  }

  return (
    <DashboardLayout type="educator">
      {/* Find Friends Modal */}
      {showFindFriends && (
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
              <h2 className="text-xl font-semibold">Find Friends</h2>
              <button 
                onClick={() => setShowFindFriends(false)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'hover:bg-white/10' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for musicians..."
                  value={friendSearchQuery}
                  onChange={(e) => setFriendSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>

              {/* People List */}
              <div className="space-y-3">
                {filteredPeople.map(person => (
                  <div 
                    key={person.id}
                    className={`p-4 rounded-lg border transition-all ${
                      theme === 'dark'
                        ? 'bg-white/5 hover:bg-white/10 border-white/10'
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                      >
                        {person.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold">{person.name}</h4>
                        <p className="text-xs text-gray-400">{person.role}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-600/20 text-indigo-300">
                          {person.instrument}
                        </span>
                        <button 
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                            person.isFriend
                              ? theme === 'dark'
                                ? 'bg-green-600/20 text-green-300 border border-green-600/30'
                                : 'bg-green-100 text-green-700 border border-green-300'
                              : 'text-white border border-white/20 shadow-sm'
                          }`}
                          style={!person.isFriend ? { background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' } : {}}
                        >
                          {person.isFriend ? (
                            <>
                              <UserCheck size={16} />
                              Friends
                            </>
                          ) : (
                            <>
                              <UserPlus size={16} />
                              Add Friend
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Post Modal */}
      {showCreatePost && (
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
              <h2 className="text-xl font-semibold">Create New Post</h2>
              <button 
                onClick={() => setShowCreatePost(false)}
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
              {/* Text Content */}
              <div>
                <label className="block text-sm font-medium mb-2">What's on your mind?</label>
                <textarea 
                  rows={4}
                  placeholder="Share your thoughts, questions, or updates with the community..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                ></textarea>
              </div>

              {/* Instrument Tag */}
              <div>
                <label className="block text-sm font-medium mb-2">Instrument</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="">Select instrument</option>
                  {instruments.map(inst => (
                    <option key={inst} value={inst}>{inst}</option>
                  ))}
                </select>
              </div>

              {/* Add Audio Toggle */}
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox"
                  id="addAudio"
                  checked={hasAudio}
                  onChange={(e) => setHasAudio(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="addAudio" className="text-sm font-medium flex items-center gap-2">
                  <Music size={16} />
                  Add audio recording
                </label>
              </div>

              {/* Audio Upload - Conditional */}
              {hasAudio && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Audio Title</label>
                    <input 
                      type="text"
                      placeholder="e.g., Chopin Nocturne in E-flat Major"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-white/5 border-white/10' 
                          : 'bg-gray-50 border-gray-300'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Audio File</label>
                    <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                      theme === 'dark'
                        ? 'border-white/10 hover:border-white/20 hover:bg-white/5'
                        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                    }`}>
                      <Upload size={48} className="mx-auto mb-3 text-gray-500" />
                      <div className="text-sm font-medium mb-1">Click to upload audio</div>
                      <div className="text-xs text-gray-500">MP3, WAV, or M4A (max 50MB)</div>
                    </div>
                  </div>
                </>
              )}

              {/* Visibility */}
              <div>
                <label className="block text-sm font-medium mb-2">Visibility</label>
                <select className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-gray-50 border-gray-300'
                }`}>
                  <option value="everyone">Everyone</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
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
                onClick={() => setShowCreatePost(false)}
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
                  // Handle post creation logic here
                  setShowCreatePost(false)
                }}
                className="px-6 py-2.5 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm"
                style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        <div className="p-8 w-full max-w-4xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold mb-1">Connect</h1>
              <p className="text-sm text-gray-500">Share and discover musical performances</p>
            </div>
            <button
              onClick={() => setShowFindFriends(true)}
              className="px-4 py-2 text-white rounded-lg text-sm font-medium transition-all backdrop-blur-xl border border-white/20 shadow-sm hover:shadow-md flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
            >
              <UserPlus size={18} />
              Find Friends
            </button>
          </div>

          {/* Create Post Button */}
          <GlassCard className={`p-4 mb-6 border shadow-md ${
            theme === 'dark' 
              ? 'border-white/10 bg-white/5 shadow-black/30' 
              : 'border-gray-200 bg-white shadow-gray-300/30'
          }`}>
            <button
              onClick={() => setShowCreatePost(true)}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                theme === 'dark'
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                >
                  DM
                </div>
                <span className="text-gray-400">Share your latest performance...</span>
              </div>
            </button>
          </GlassCard>

          {/* Filters */}
          <GlassCard className={`p-4 mb-6 border shadow-md ${
            theme === 'dark' 
              ? 'border-white/10 bg-white/5 shadow-black/30' 
              : 'border-gray-200 bg-white shadow-gray-300/30'
          }`}>
            <div className="space-y-4">
              {/* Feed Type Toggle */}
              <div className="flex items-center gap-3">
                <Filter size={18} className="text-gray-400" />
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setActiveFilter('Everyone')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === 'Everyone' 
                        ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                        : 'bg-white/10 text-gray-400 hover:bg-white/15'
                    }`}
                  >
                    Everyone
                  </button>
                  <button 
                    onClick={() => setActiveFilter('Friends')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === 'Friends' 
                        ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                        : 'bg-white/10 text-gray-400 hover:bg-white/15'
                    }`}
                  >
                    Friends
                  </button>
                </div>
              </div>

              {/* Instrument Filter */}
              <div className="flex items-center gap-3 flex-wrap">
                <Music size={18} className="text-gray-400" />
                <button 
                  onClick={() => setSelectedInstrument('All')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedInstrument === 'All' 
                      ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                      : 'bg-white/10 text-gray-400 hover:bg-white/15'
                  }`}
                >
                  All
                </button>
                {instruments.map(instrument => (
                  <button 
                    key={instrument}
                    onClick={() => setSelectedInstrument(instrument)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedInstrument === instrument 
                        ? 'bg-indigo-500/80 text-white shadow-md border border-indigo-400/30' 
                        : 'bg-white/10 text-gray-400 hover:bg-white/15'
                    }`}
                  >
                    {instrument}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by musician or piece..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-gray-50 border-gray-300'
                  }`}
                />
              </div>
            </div>
          </GlassCard>

          {/* Posts Feed */}
          <div className="space-y-4">
            {filteredPosts.length === 0 ? (
              <GlassCard className={`p-12 border shadow-md text-center ${
                theme === 'dark' 
                  ? 'border-white/10 bg-white/5 shadow-black/30' 
                  : 'border-gray-200 bg-white shadow-gray-300/30'
              }`}>
                <Music size={64} className="mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                <p className="text-gray-400">Try adjusting your filters</p>
              </GlassCard>
            ) : (
              filteredPosts.map(post => (
                <GlassCard key={post.id} className={`p-5 border shadow-md ${
                  theme === 'dark' 
                    ? 'border-white/10 bg-white/5 shadow-black/30' 
                    : 'border-gray-200 bg-white shadow-gray-300/30'
                }`}>
                  {/* Post Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                    >
                      {post.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold">{post.author}</h4>
                          <p className="text-xs text-gray-400">{post.role}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-600/20 text-indigo-300">
                            {post.instrument}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{post.timeAgo}</p>
                    </div>
                  </div>

                  {/* Text Content */}
                  {post.textContent && (
                    <div className="mb-4">
                      <p className="text-sm leading-relaxed">{post.textContent}</p>
                    </div>
                  )}

                  {/* Audio Player - Conditional */}
                  {post.audioFile && post.audioTitle && (
                    <div className={`p-4 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10'
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <button 
                          onClick={() => togglePlay(post.id)}
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white transition-all hover:scale-105"
                          style={{ background: 'linear-gradient(135deg, rgba(57, 73, 126, 0.9), rgba(57, 73, 126, 0.7))' }}
                        >
                          {playingPost === post.id ? (
                            <Pause size={20} />
                          ) : (
                            <Play size={20} className="ml-0.5" />
                          )}
                        </button>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-sm truncate">{post.audioTitle}</h5>
                          <p className="text-xs text-gray-500">{post.duration}</p>
                        </div>
                      </div>
                      {/* Waveform placeholder */}
                      <div className={`h-16 rounded-lg overflow-hidden ${
                        theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                      }`}>
                        <div className="h-full flex items-center gap-0.5 px-2">
                          {Array.from({ length: 60 }).map((_, i) => (
                            <div 
                              key={i}
                              className={`flex-1 rounded-full transition-all ${
                                playingPost === post.id && i < 30
                                  ? 'bg-indigo-500'
                                  : theme === 'dark' 
                                  ? 'bg-white/20' 
                                  : 'bg-gray-300'
                              }`}
                              style={{ 
                                height: `${20 + Math.random() * 60}%`,
                                opacity: playingPost === post.id && i < 30 ? 1 : 0.6
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </GlassCard>
              ))
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
