'use client'

import { useState } from 'react'
import CoAuthorForm from './co-author-form'

interface PaperSubmissionProps {
  onNavigate: (view: 'dashboard' | 'paper' | 'contribution') => void
}

// Conference topics data - can be managed from admin panel
const conferenceTopics = [
  'Data Science and Advanced Analytics',
  'Data Engineering',
  'High Performance Computing',
  'Machine Learning and Other AI Techniques',
  'Software Engineering',
  'Cyber Security and Best Practices',
  'Emerging Trends and Technologies in ICT Application',
  'Communication, network and hardware',
  'Signal Processing',
  'ICT in Business Administration, Governance, Finance and Economy',
  'ICT in Education and Research',
  'ICT in Medicine and Health Care'
]

interface CoAuthor {
  id: string
  title: string
  name: string
  surname: string
  email: string
  affiliation: string
  position: string
  country: string
  city: string
}

export default function PaperSubmission({ onNavigate }: PaperSubmissionProps) {
  const [formData, setFormData] = useState({
    contactAuthor: 'Elviz Ismayilov',
    title: '',
    keywords: '',
    abstract: '',
    paperType: 'Full Research Paper',
    selectedTopics: [] as string[],
    file: null as File | null
  })

  const [coAuthors, setCoAuthors] = useState<CoAuthor[]>([])
  const [showCoAuthorForm, setShowCoAuthorForm] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleTopicChange = (topic: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedTopics: checked 
        ? [...prev.selectedTopics, topic]
        : prev.selectedTopics.filter(t => t !== topic)
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, file }))
  }

  const addCoAuthor = () => {
    setShowCoAuthorForm(true)
  }

  const handleCoAuthorSave = (coAuthor: Omit<CoAuthor, 'id'>) => {
    const newCoAuthor: CoAuthor = {
      ...coAuthor,
      id: Date.now().toString()
    }
    setCoAuthors(prev => [...prev, newCoAuthor])
    setShowCoAuthorForm(false)
  }

  const removeCoAuthor = (id: string) => {
    setCoAuthors(prev => prev.filter(ca => ca.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Paper submission data:', { formData, coAuthors })
    alert('Paper submitted successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <div className="bg-teal-600 text-white px-4 py-2">
        <nav className="flex flex-wrap gap-4 text-sm">
          <button onClick={() => onNavigate('dashboard')} className="hover:bg-teal-500 px-2 py-1 rounded">Home</button>
          <button className="hover:bg-teal-500 px-2 py-1 rounded">About</button>
          <button className="hover:bg-teal-500 px-2 py-1 rounded">Guides for Authors</button>
          <button className="hover:bg-teal-500 px-2 py-1 rounded">Technical Program</button>
          <button className="hover:bg-teal-500 px-2 py-1 rounded">Call for Contribution</button>
          <button className="hover:bg-teal-500 px-2 py-1 rounded">Travel / Hotel</button>
          <button className="hover:bg-teal-500 px-2 py-1 rounded">Registration</button>
          <button className="hover:bg-teal-500 px-2 py-1 rounded">Contact Us</button>
        </nav>
      </div>

      <div className="bg-teal-700 text-white px-4 py-2">
        <nav className="flex flex-wrap gap-4 text-sm">
          <button onClick={() => onNavigate('dashboard')} className="hover:bg-teal-600 px-2 py-1 rounded">My Home</button>
          <button className="hover:bg-teal-600 px-2 py-1 rounded">My Profile</button>
          <button className="bg-teal-600 px-2 py-1 rounded">Submit a Paper</button>
          <button className="hover:bg-teal-600 px-2 py-1 rounded">Submit Camera Ready</button>
          <button onClick={() => onNavigate('contribution')} className="hover:bg-teal-600 px-2 py-1 rounded">Submit a Contribution</button>
          <button className="hover:bg-teal-600 px-2 py-1 rounded">My All Submissions</button>
          <button className="hover:bg-teal-600 px-2 py-1 rounded">Change Password</button>
          <button className="hover:bg-teal-600 px-2 py-1 rounded">Sign Out</button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-orange-600 font-medium">PAPER SUBMISSION</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <h3 className="font-medium mb-4">Paper Details:</h3>
              <div className="text-sm text-orange-500 mb-4">* Denotes Required Field</div>

              <div className="space-y-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Contact / Main Author:</label>
                  <input
                    type="text"
                    value={formData.contactAuthor}
                    onChange={(e) => handleInputChange('contactAuthor', e.target.value)}
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Title:</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="title of paper..."
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
                    placeholder="keywords of paper..."
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
                    placeholder="abstract of paper..."
                    rows={4}
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
                    required
                  />
                  <span className="text-orange-500">*</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Type of Paper:</label>
                  <select
                    value={formData.paperType}
                    onChange={(e) => handleInputChange('paperType', e.target.value)}
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-green-50"
                  >
                    <option>Full Research Paper</option>
                    <option>Short Paper</option>
                    <option>Position Paper</option>
                  </select>
                  <span className="text-green-500">✓</span>
                </div>

                <div className="grid grid-cols-12 gap-4 items-start">
                  <label className="col-span-3 text-right text-sm pt-2">Choose session of interest:</label>
                  <div className="col-span-6 space-y-2">
                    {conferenceTopics.map((topic) => (
                      <label key={topic} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.selectedTopics.includes(topic)}
                          onChange={(e) => handleTopicChange(topic, e.target.checked)}
                          className="rounded"
                        />
                        <span className="text-sm">{topic}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-3"></div>
                  <button
                    type="button"
                    onClick={addCoAuthor}
                    className="col-span-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium"
                  >
                    Add Co-author
                  </button>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <label className="col-span-3 text-right text-sm">Upload your paper (.PDF):</label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="col-span-6 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-green-50"
                  />
                  <span className="text-green-500">✓</span>
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

        {/* Co-authors List */}
        {coAuthors.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-medium mb-4">Co-authors:</h3>
            {coAuthors.map((coAuthor) => (
              <div key={coAuthor.id} className="mb-4 p-4 border border-gray-200 rounded">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Co-Author {coAuthors.indexOf(coAuthor) + 1}:</h4>
                  <button
                    onClick={() => removeCoAuthor(coAuthor.id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Remove this co-author
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Name:</strong> {coAuthor.name}</div>
                  <div><strong>Surname:</strong> {coAuthor.surname}</div>
                  <div><strong>Email:</strong> {coAuthor.email}</div>
                  <div><strong>Affiliation:</strong> {coAuthor.affiliation}</div>
                  <div><strong>Position:</strong> {coAuthor.position}</div>
                  <div><strong>Country:</strong> {coAuthor.country}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Co-author Form Modal */}
        {showCoAuthorForm && (
          <CoAuthorForm
            onSave={handleCoAuthorSave}
            onCancel={() => setShowCoAuthorForm(false)}
          />
        )}

        <div className="mt-6 text-sm text-gray-600">
          <p>
            Add Co-author <span className="line-through">burdugda ora elave olacaq bu pencere cixmalıdır</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
