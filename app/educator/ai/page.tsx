'use client'

import React from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { SonnyAI } from '@/components/SonnyAI'

export default function EducatorAIPage() {
  return (
    <DashboardLayout type="educator">
      <div className="h-screen flex flex-col">
        <SonnyAI />
      </div>
    </DashboardLayout>
  )
}
