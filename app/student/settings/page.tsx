'use client'

import React from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GlassCard } from '@/components/GlassCard'
import { Settings as SettingsIcon } from 'lucide-react'

export default function SettingsPage() {
  return (
    <DashboardLayout type="student">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-gray-400 mb-8">Manage your account and preferences</p>
        <GlassCard className="p-12 text-center">
          <SettingsIcon size={64} className="mx-auto mb-4 text-gray-600" />
          <h3 className="text-xl font-semibold mb-2">Settings</h3>
          <p className="text-gray-400">Settings panel coming soon</p>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}
