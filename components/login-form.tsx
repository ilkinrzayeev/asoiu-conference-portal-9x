'use client'

import { useState } from 'react'

interface LoginFormProps {
  onLogin: (email: string) => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      onLogin(email)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="text-lg font-medium mb-2">Texniki tapsiriq</h1>
        <p className="text-sm text-gray-600">
          Sisteme bu şekilde daxil olma olmalıdır. Sisteme daxil olduqda.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6 w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-blue-600 font-medium mb-1">AICT Peer Review Form</h2>
          <div className="text-sm font-medium text-gray-700 mb-4">LOGIN:</div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">eMail:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <span className="text-orange-500 text-sm">*</span>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="your password..."
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <span className="text-orange-500 text-sm">*</span>
          </div>

          <div className="text-sm space-y-1">
            <div>
              <span className="text-gray-600">Help: </span>
              <a href="#" className="text-blue-600 hover:underline">I FORGOT MY PASSWORD</a>
            </div>
            <div>
              <a href="#" className="text-blue-600 hover:underline">CREATE NEW ACCOUNT</a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium"
          >
            Login
          </button>
        </form>
      </div>

      <div className="mt-8 text-sm text-gray-600 text-center">
        Login olduqdan sonra aşağıdakı pəncərə çıxacaq.
      </div>
    </div>
  )
}
