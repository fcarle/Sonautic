import React, { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'strong' | 'subtle'
  hover?: boolean
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false 
}) => {
  const variantClass = {
    default: 'glass',
    strong: 'glass-strong',
    subtle: 'glass-subtle'
  }[variant]

  const hoverClass = hover ? 'hover:bg-white/10 hover:border-white/20 cursor-pointer' : ''

  return (
    <div className={`${variantClass} rounded-2xl ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}

interface StatCardProps {
  icon: ReactNode
  label: string
  value: string | number
  color?: string
}

export const StatCard: React.FC<StatCardProps> = ({ icon, label, value, color = 'blue' }) => {
  return (
    <GlassCard className="p-6" hover>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl bg-${color}-500/20 text-${color}-400`}>
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-sm text-gray-400">{label}</div>
        </div>
      </div>
    </GlassCard>
  )
}

interface CountdownCardProps {
  event: string
  days: number
}

export const CountdownCard: React.FC<CountdownCardProps> = ({ event, days }) => {
  return (
    <GlassCard className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/30">
      <div className="text-center">
        <div className="text-5xl font-bold mb-2">{days}</div>
        <div className="text-sm text-gray-300">days until</div>
        <div className="text-lg font-semibold mt-2">{event}</div>
      </div>
    </GlassCard>
  )
}
