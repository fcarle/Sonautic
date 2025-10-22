'use client'

import React, { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

interface DashboardLayoutProps {
  children: ReactNode
  type: 'student' | 'educator'
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, type }) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar type={type} />
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  )
}
