'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, FileText, Bot, CheckSquare, Calendar, 
  Users, BarChart3, Settings, ClipboardList, GraduationCap 
} from 'lucide-react'

interface NavItem {
  label: string
  path: string
  icon: React.ElementType
}

const studentNavItems: NavItem[] = [
  { label: 'Home', path: '/student/home', icon: Home },
  { label: 'Files', path: '/student/files', icon: FileText },
  { label: 'Sonny AI', path: '/student/ai', icon: Bot },
  { label: 'Tasks', path: '/student/tasks', icon: CheckSquare },
  { label: 'Calendar', path: '/student/calendar', icon: Calendar },
  { label: 'Connect', path: '/student/connect', icon: Users },
  { label: 'Stats', path: '/student/stats', icon: BarChart3 },
  { label: 'Settings', path: '/student/settings', icon: Settings },
]

const educatorNavItems: NavItem[] = [
  { label: 'Home', path: '/educator/home', icon: Home },
  { label: 'Files', path: '/educator/files', icon: FileText },
  { label: 'Sonny AI', path: '/educator/ai', icon: Bot },
  { label: 'Assignments', path: '/educator/assignments', icon: ClipboardList },
  { label: 'Students', path: '/educator/students', icon: GraduationCap },
  { label: 'Connect', path: '/educator/connect', icon: Users },
  { label: 'Calendar', path: '/educator/calendar', icon: Calendar },
  { label: 'Stats', path: '/educator/stats', icon: BarChart3 },
  { label: 'Settings', path: '/educator/settings', icon: Settings },
]

interface NavigationProps {
  type: 'student' | 'educator'
}

export const Navigation: React.FC<NavigationProps> = ({ type }) => {
  const pathname = usePathname()
  const navItems = type === 'student' ? studentNavItems : educatorNavItems

  return (
    <nav className="glass-strong sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sonautic
            </div>
            <div className="px-2 py-1 text-xs rounded-full glass-subtle">
              {type === 'student' ? 'Student' : 'Educator'}
            </div>
          </div>
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-white/15 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
