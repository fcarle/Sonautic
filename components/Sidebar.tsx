'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  Home, FileText, Bot, CheckSquare, Calendar, 
  Users, BarChart3, Settings, ClipboardList, GraduationCap,
  Menu, X, ChevronLeft, Moon, Sun
} from 'lucide-react'
import { useTheme } from './ThemeProvider'

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

interface SidebarProps {
  type: 'student' | 'educator'
}

export const Sidebar: React.FC<SidebarProps> = ({ type }) => {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const navItems = type === 'student' ? studentNavItems : educatorNavItems

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 glass-strong rounded-xl"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen glass-strong border-r border-white/10 z-40
          flex flex-col transition-all duration-300
          ${isCollapsed ? 'w-20' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo/Header */}
        <div className="p-5 border-b border-white/5">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center gap-3">
                <div className="text-2xl">🐋</div>
                <div>
                  <div className="text-lg font-semibold text-gray-300">
                    Sonautic
                  </div>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors hidden lg:block"
            >
              <ChevronLeft
                size={18}
                className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          {isCollapsed && (
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl">🐋</div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <div className="space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg
                    transition-all duration-200 group
                    ${isActive 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                    }
                  `}
                >
                  <Icon size={18} />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Theme toggle */}
        <div className="px-3 pb-3">
          <button
            onClick={toggleTheme}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/5 ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            {!isCollapsed && (
              <span className="font-medium">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
            )}
          </button>
        </div>

        {/* User info */}
        <div className="p-3 border-t border-white/5">
          {!isCollapsed ? (
            <div className="glass-subtle rounded-lg p-3 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-600/30 flex items-center justify-center text-xs font-semibold text-gray-400">
                  {type === 'student' ? 'AW' : 'PC'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-xs truncate text-gray-300">
                    {type === 'student' ? 'Alex Wilson' : 'Prof. Chen'}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {type === 'student' ? 'Student' : 'Educator'}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-lg bg-slate-600/30 flex items-center justify-center text-xs font-semibold text-gray-400">
                {type === 'student' ? 'AW' : 'PC'}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
        />
      )}
    </>
  )
}
