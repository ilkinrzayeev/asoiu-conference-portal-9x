'use client'

interface DashboardProps {
  user: string
  onNavigate: (view: 'dashboard' | 'paper' | 'contribution') => void
}

export default function Dashboard({ user, onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <div className="bg-green-600 text-white">
        <div className="px-4 py-2 text-center text-sm">
          You are Welcome <span className="font-medium">Elviz Ismayilov</span>!
        </div>
        <nav className="bg-green-700 px-4 py-2">
          <div className="flex flex-wrap gap-4 text-sm">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="hover:bg-green-600 px-2 py-1 rounded"
            >
              My Home
            </button>
            <button className="hover:bg-green-600 px-2 py-1 rounded">My Profile</button>
            <button 
              onClick={() => onNavigate('paper')}
              className="hover:bg-green-600 px-2 py-1 rounded"
            >
              Submit a Paper
            </button>
            <button className="hover:bg-green-600 px-2 py-1 rounded">Submit Camera Ready</button>
            <button 
              onClick={() => onNavigate('contribution')}
              className="hover:bg-green-600 px-2 py-1 rounded"
            >
              Submit a Contribution
            </button>
            <button className="hover:bg-green-600 px-2 py-1 rounded">My All Submissions</button>
            <button className="hover:bg-green-600 px-2 py-1 rounded">Change Password</button>
            <button className="hover:bg-green-600 px-2 py-1 rounded">Sign Out</button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-orange-600 font-medium">MY HOME</h2>
          </div>

          <div className="p-4">
            {/* Submitted Papers Section */}
            <div className="mb-6">
              <h3 className="text-orange-600 font-medium mb-3">Submitted Papers:</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">No</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">PaperID</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Paper Title</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Status</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Docs</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">View</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Edit</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Withdraw</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm" colSpan={8}>
                        No submitted papers yet
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* My other Contributions Section */}
            <div>
              <h3 className="text-orange-600 font-medium mb-3">My other Contributions:</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">No</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Contribution type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Title</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Status</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">View</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Edit</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium">Withdraw</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm" colSpan={7}>
                        No contributions yet
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 text-sm text-gray-600 space-y-2">
          <p>
            Ondna sonra Submit a Paper vurduqda aşağıdakı şəkildə sisteme məqaleni göndərmək 
            pəncərəsi çıxsın.
          </p>
          <p>
            Məqaləni dolduranda aşağıdakı informasiyaları doldurmaq lazımdır. Burda olan zəruri 
            məlumatlarla önəmlidir. Aşağıda konfransın mövzuları admin panelindən dəyişən olmalıdır. 
            Çünki konfransın mövzusu dəyişdikdə orda onun alt məlumatları update olmalıdır.
          </p>
          <p className="font-medium">Add Co-author</p>
          <p>
            Burada məqalənin bir neçə həmmüəllifi olmalıdır. Onun həmmüəllifləri əlavə etmək olsun. 
            Düyməni vurduqdan sonra.
          </p>
        </div>
      </div>
    </div>
  )
}
