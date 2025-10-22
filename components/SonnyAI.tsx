'use client'

import React, { useState } from 'react'
import { GlassCard } from './GlassCard'
import { Send, Mic, Square, Sparkles, TrendingUp, Calendar, CheckSquare, BarChart } from 'lucide-react'

const WhaleAnimation: React.FC<{ isListening: boolean }> = ({ isListening }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className={`relative ${isListening ? 'animate-whale-pulse' : ''}`}>
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Whale body */}
          <ellipse cx="60" cy="60" rx="40" ry="30" fill="url(#whaleGradient)" />
          
          {/* Tail */}
          <path
            d="M20 60 Q10 50, 5 55 Q10 60, 5 65 Q10 70, 20 60"
            fill="url(#whaleGradient)"
            opacity="0.8"
          />
          
          {/* Fin */}
          <path
            d="M60 85 Q55 95, 60 100 Q65 95, 60 85"
            fill="url(#whaleGradient)"
            opacity="0.7"
          />
          
          {/* Eye */}
          <circle cx="75" cy="55" r="3" fill="white" />
          
          {/* Water spout */}
            {isListening && (
              <>
                <path
                  d="M85 40 Q87 25, 85 20"
                  stroke="#39497E"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                  className="animate-pulse"
                />
                <path
                  d="M90 35 Q93 20, 92 15"
                  stroke="#39497E"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                  className="animate-pulse"
                  style={{ animationDelay: '0.3s' }}
                />
              </>
            )}          <defs>
            <linearGradient id="whaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#39497E" />
              <stop offset="100%" stopColor="#8797cf" />
            </linearGradient>
          </defs>
        </svg>
        
        {isListening && (
          <div className="absolute inset-0 rounded-full bg-primary-500/20 animate-ping"></div>
        )}
      </div>
    </div>
  )
}

const VoiceLevelMeter: React.FC<{ level: number }> = ({ level }) => {
  return (
    <div className="flex items-center gap-1 px-3">
      {[...Array(10)].map((_, i) => {
        const isActive = i < Math.floor(level * 10)
        return (
          <div
            key={i}
            className={`w-1 rounded-full transition-all ${
              isActive 
                ? i < 6 ? 'bg-green-400 h-4' : i < 8 ? 'bg-yellow-400 h-5' : 'bg-red-400 h-6'
                : 'bg-gray-600 h-3'
            }`}
          />
        )
      })}
    </div>
  )
}

export const SonnyAI: React.FC = () => {
  const [message, setMessage] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [voiceLevel, setVoiceLevel] = useState(0.5)
  const [isVoiceMode, setIsVoiceMode] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Sonny, your AI music practice assistant. I can help you analyze your recordings, plan your practice sessions, and track your progress. What would you like to work on today?"
    }
  ])

  const quickActions = [
    { icon: <Sparkles size={16} />, label: 'Analyze last take', color: 'blue' },
    { icon: <TrendingUp size={16} />, label: 'Summarize practice week', color: 'purple' },
    { icon: <BarChart size={16} />, label: 'Create plan', color: 'green' },
    { icon: <CheckSquare size={16} />, label: 'Set task', color: 'yellow' },
    { icon: <Calendar size={16} />, label: 'Add to calendar', color: 'pink' },
  ]

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true)
      setIsVoiceMode(true)
      // Simulate recording timer and voice level
      const timer = setInterval(() => {
        setRecordingTime(prev => prev + 1)
        setVoiceLevel(Math.random() * 0.8 + 0.2)
      }, 1000)
      // Store timer to clear later in real implementation
    } else {
      setIsRecording(false)
      setRecordingTime(0)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="h-full flex flex-col">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-2xl ${
                msg.role === 'user'
                  ? 'glass-strong rounded-2xl p-4'
                  : 'glass rounded-2xl p-4'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <Sparkles size={16} />
                  </div>
                  <span className="font-semibold">Sonny</span>
                </div>
              )}
              <p className="text-gray-100 leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        
        {/* Voice mode visualization */}
        {isVoiceMode && (
          <GlassCard className="p-6">
            <WhaleAnimation isListening={isRecording} />
            {isRecording && (
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">{formatTime(recordingTime)}</div>
                <div className="text-sm text-gray-400 mb-4">Listening...</div>
                <VoiceLevelMeter level={voiceLevel} />
              </div>
            )}
          </GlassCard>
        )}
      </div>

      {/* Quick actions */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="glass-subtle rounded-xl px-4 py-2 text-sm font-medium hover:glass transition-all flex items-center gap-2"
            >
              {action.icon}
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="p-6 pt-0">
        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleRecording}
              className={`p-3 rounded-xl transition-all ${
                isRecording
                  ? 'bg-red-500/30 text-red-400 hover:bg-red-500/40'
                  : 'bg-primary-500/20 text-primary-400 hover:bg-primary-500/30'
              }`}
            >
              {isRecording ? <Square size={20} /> : <Mic size={20} />}
            </button>
            
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Sonny anything about your practice..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              disabled={isRecording}
            />
            
            <button className="p-3 rounded-xl bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 transition-all">
              <Send size={20} />
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
