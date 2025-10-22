'use client'

import React, { useState } from 'react'
import Link from 'next/link'
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
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-transparent">
                  Sonautic
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {type === 'student' ? 'Student Portal' : 'Educator Portal'}
                </div>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors hidden lg:block"
            >
              <ChevronLeft
                size={20}
                className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
          {isCollapsed && (
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-transparent text-center mt-2">
              S
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`
                    flex items-center gap-3 px-3 py-3 rounded-xl
                    transition-all duration-200 group
                    ${isActive 
                      ? 'bg-white/15 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <Icon size={20} className={isActive ? 'text-primary-400' : ''} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                  {isActive && !isCollapsed && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500"></div>
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
        <div className="p-4 border-t border-white/10">
          {!isCollapsed ? (
            <div className="glass-subtle rounded-xl p-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-bold">
                  {type === 'student' ? 'A' : 'P'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">
                    {type === 'student' ? 'Alex Wilson' : 'Prof. Chen'}
                  </div>
                  <div className="text-xs text-gray-400 truncate">
                    {type === 'student' ? 'Piano Performance' : 'Piano Faculty'}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-bold">
                {type === 'student' ? 'A' : 'P'}
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
