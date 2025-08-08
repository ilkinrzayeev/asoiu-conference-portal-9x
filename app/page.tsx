'use client'

import { useState } from 'react'
import LoginForm from '@/components/login-form'
import Dashboard from '@/components/dashboard'
import PaperSubmission from '@/components/paper-submission'
import ContributionForm from '@/components/contribution-form'

export default function Home() {
  const [currentView, setCurrentView] = useState<'login' | 'dashboard' | 'paper' | 'contribution'>('login')
  const [user, setUser] = useState<string>('')

  const handleLogin = (email: string) => {
    setUser(email)
    setCurrentView('dashboard')
  }

  const handleNavigation = (view: 'dashboard' | 'paper' | 'contribution') => {
    setCurrentView(view)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {currentView === 'login' && (
        <LoginForm onLogin={handleLogin} />
      )}
      
      {currentView === 'dashboard' && (
        <Dashboard 
          user={user} 
          onNavigate={handleNavigation}
        />
      )}
      
      {currentView === 'paper' && (
        <PaperSubmission onNavigate={handleNavigation} />
      )}
      
      {currentView === 'contribution' && (
        <ContributionForm onNavigate={handleNavigation} />
      )}
    </div>
  )
}
