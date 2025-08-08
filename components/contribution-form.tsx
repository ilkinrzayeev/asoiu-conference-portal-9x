'use client'

import { useState } from 'react'

interface ContributionFormProps {
  onNavigate: (view: 'dashboard' | 'paper' | 'contribution') => void
}

const speechTypes = [
  'Keynote',
  'Invited Talk',
  'Panel Discussion',
  'Workshop',
  'Tutorial'
]

const timeScopes = [
  '15 min',
  '20 min',
  '30 min',
  '45 min',
  '60 min',
  '90 min'
]

export default function ContributionForm({ onNavigate }: ContributionFormProps) {
  const [formData, setFormData] = useState({
    opportunities: [] as string[],
    speechTitle: '',
    keywords: '',
    abstract: '',
    briefBio: '',
    speechType: 'Keynote',
    timeScope: '20 min',
    rightAudience: '',
    previousSpeeches: '',
    additionalOpportunities: [] as string[]
  })

  const handleOpportunityChange = (opportunity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      opportunities: checked 
        ? [...prev.opportunities, opportunity]
        : prev.opportunities.filter(o => o !== opportunity)
    }))
  }

  const handleAdditionalOpportunityChange = (opportunity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      additionalOpportunities: checked 
        ? [...prev.additionalOpportunities, opportunity]
        : prev.additionalOpportunities.filter(o => o !== opportunity)
    }))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contribution form data:', formData)
    alert('Contribution submitted successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-orange-600 font-medium">SUBMIT A CONTRIBUTION FORM</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <h3 className="font-medium mb-4">CONTRIBUTION:</h3>
              <div className="text-sm text-orange-500 mb-4">* Denotes Required Field</div>

              <div className="space-y-4">
                <div className="grid grid-cols-12 gap-4 items-start">
                  <label className="col-span-3 text-right text-sm pt-2">Opportunities you are interested in:</label>
                  <div className="col-span-6 grid grid-cols-2 gap-2">
                    {[
                      'Participate as Speaker',
                      'Committee Member',
                      'Reviewer',
                      'Session Chair',
                      'Workshop Moderator',
                      'Attendee'
                    ].map((opportunity) => (
                      <label key={opportunity} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.opportunities.includes(opportunity)}
                          onChange={(e) => handleOpportunityChange(opportunity, e.target.checked)}
                          className="rounded"
                        />
                        <span className="text-sm">{opportunity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Title of speech</label>
                  <input
                    type="text"
                    value={formData.speechTitle}
                    onChange={(e) => handleInputChange('speechTitle', e.target.value)}
                    placeholder="title of proposed speech..."
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                  <span className="text-orange-500">*</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Keywords:</label>
                  <input
                    type="text"
                    value={formData.keywords}
                    onChange={(e) => handleInputChange('keywords', e.target.value)}
                    placeholder="keywords..."
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                  <span className="text-orange-500">*</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-start">
                  <label className="col-span-3 text-right text-sm pt-2">Abstract:</label>
                  <textarea
                    value={formData.abstract}
                    onChange={(e) => handleInputChange('abstract', e.target.value)}
                    placeholder="short abstract (up to 2000 characters)..."
                    rows={4}
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
                    maxLength={2000}
                    required
                  />
                  <span className="text-orange-500">*</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-start">
                  <label className="col-span-3 text-right text-sm pt-2">Brief BIO:</label>
                  <textarea
                    value={formData.briefBio}
                    onChange={(e) => handleInputChange('briefBio', e.target.value)}
                    placeholder="short biography (up to 1500 characters)..."
                    rows={4}
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
                    maxLength={1500}
                    required
                  />
                  <span className="text-orange-500">*</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Speech type:</label>
                  <select
                    value={formData.speechType}
                    onChange={(e) => handleInputChange('speechType', e.target.value)}
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-green-50"
                  >
                    {speechTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <span className="text-green-500">✓</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Time scope:</label>
                  <select
                    value={formData.timeScope}
                    onChange={(e) => handleInputChange('timeScope', e.target.value)}
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-green-50"
                  >
                    {timeScopes.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  <span className="text-green-500">✓</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Right Audience:</label>
                  <input
                    type="text"
                    value={formData.rightAudience}
                    onChange={(e) => handleInputChange('rightAudience', e.target.value)}
                    placeholder="who is the target audience..."
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                  <span className="text-orange-500">*</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Previous speeches:</label>
                  <input
                    type="text"
                    value={formData.previousSpeeches}
                    onChange={(e) => handleInputChange('previousSpeeches', e.target.value)}
                    placeholder="reference (URL) to previous speeches..."
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-green-50"
                  />
                  <span className="text-green-500">✓</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-start">
                  <label className="col-span-3 text-right text-sm pt-2">Additional opportunities:</label>
                  <div className="col-span-6 space-y-2">
                    {[
                      'Exhibition at conference',
                      'Sponsoring conference'
                    ].map((opportunity) => (
                      <label key={opportunity} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.additionalOpportunities.includes(opportunity)}
                          onChange={(e) => handleAdditionalOpportunityChange(opportunity, e.target.checked)}
                          className="rounded"
                        />
                        <span className="text-sm">{opportunity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3"></div>
                  <button
                    type="submit"
                    className="col-span-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => onNavigate('paper')}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Submit Paper
          </button>
        </div>
      </div>
    </div>
  )
}
