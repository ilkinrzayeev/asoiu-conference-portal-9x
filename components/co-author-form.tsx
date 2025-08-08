'use client'

import { useState } from 'react'

interface CoAuthorFormProps {
  onSave: (coAuthor: {
    title: string
    name: string
    surname: string
    email: string
    affiliation: string
    position: string
    country: string
    city: string
  }) => void
  onCancel: () => void
}

const titles = [
  'Prof.',
  'Assoc.Prof.',
  'Asst.Prof.',
  'Dr.',
  'Mr.',
  'Ms.',
  'Mrs.'
]

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Argentina',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bangladesh',
  'Belgium',
  'Brazil',
  'Canada',
  'China',
  'France',
  'Germany',
  'India',
  'Italy',
  'Japan',
  'Turkey',
  'United Kingdom',
  'United States'
]

export default function CoAuthorForm({ onSave, onCancel }: CoAuthorFormProps) {
  const [formData, setFormData] = useState({
    title: 'Assoc.Prof.',
    name: '',
    surname: '',
    email: '',
    affiliation: '',
    position: '',
    country: 'Afghanistan',
    city: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.surname && formData.email && formData.affiliation) {
      onSave(formData)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gray-200 px-4 py-3 flex justify-between items-center">
          <h3 className="font-medium">Co-Author 1:</h3>
          <button
            onClick={onCancel}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
          >
            Remove this co-author
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-12 gap-4 items-center">
            <label className="col-span-4 text-right text-sm">Title/Salutation</label>
            <select
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-green-50"
            >
              {titles.map(title => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>
            <span className="text-green-500">✓</span>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <label className="col-span-4 text-right text-sm">Name:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="co-author's name"
              className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <span className="text-orange-500">*</span>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <label className="col-span-4 text-right text-sm">Surname:</label>
            <input
              type="text"
              value={formData.surname}
              onChange={(e) => handleInputChange('surname', e.target.value)}
              placeholder="co-author's surname"
              className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <span className="text-orange-500">*</span>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <label className="col-span-4 text-right text-sm">eMail:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="co-author's email address"
              className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <span className="text-orange-500">*</span>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <label className="col-span-4 text-right text-sm">Affiliation/Organization:</label>
            <input
              type="text"
              value={formData.affiliation}
              onChange={(e) => handleInputChange('affiliation', e.target.value)}
              placeholder="co-author's affiliation"
              className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <span className="text-orange-500">*</span>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <label className="col-span-4 text-right text-sm">Position</label>
            <input
              type="text"
              value={formData.position}
              onChange={(e) => handleInputChange('position', e.target.value)}
              placeholder="co-author's position"
              className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-green-50"
            />
            <span className="text-green-500">✓</span>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <label className="col-span-4 text-right text-sm">Country</label>
            <select
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-green-50"
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <span className="text-green-500">✓</span>
          </div>

          <div className="grid grid-cols-12 gap-4 items-center">
            <label className="col-span-4 text-right text-sm">City</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="co-author's city / region"
              className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <span className="text-orange-500">*</span>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4"></div>
            <div className="col-span-6 flex gap-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium"
              >
                Add Co-author
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>

        <div className="p-6 pt-0 text-sm text-gray-600">
          <p>
            Burada lazım olan məlumatlar daxil edilir. Sonra lazım olmasa silmək mümkün olsun. 
            Düyməni vurduqdan sonra.
          </p>
          <p className="mt-2">
            Ondan sonra Submit a contribution form olmalıdır burada konfransa dəstək olan kim varsa, 
            o qeydiyyatdan keçsin.
          </p>
        </div>
      </div>
    </div>
  )
}
