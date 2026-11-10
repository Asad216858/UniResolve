import { Link } from 'react-router-dom';

export default function StaffDashboard() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen">
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.06)] fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 max-w-full border-b border-indigo-100/20">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tight text-indigo-900 dark:text-indigo-100">Academic Concierge</span>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-indigo-700 dark:text-indigo-400 font-semibold border-b-2 border-indigo-700 py-1" to="/staff">Dashboard</Link>
            <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 py-1 transition-colors" href="#">Students</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 py-1 transition-colors" href="#">Reports</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pr-4 border-r border-outline-variant/30">
            <div className="text-right">
              <p className="text-sm font-bold text-on-surface">Elena Rodriguez</p>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Coordinator</span>
            </div>
            <img alt="User profile avatar" className="h-10 w-10 rounded-full object-cover border-2 border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-MdjI_zwGhMamHaLoRagcmzVUVFMN6t6KDKwW4sBD-j6yhpLEkdQGdkUmP4hi-AgrZ1fzAc3-EYGkKzf85O5iUrHylFIeVcv0wF323KcGTNdLN_3RRSpr9OOS5AW9qnTmYvEEXvdk3Mnv0uAkD5Nr1ZPOg_mUkCN__kVcpxb7dbfFuAXj-U3G8gvAe0jjP8wMNMCf5ZcwVSW4PdDvcNO4VXJgioS-7NHSpHNDW5pndnX6pm_Vo2K-GXhDcZqHJ2i1zqBhVmN64g" />
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <Link to="/login" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-error hover:bg-error-container/20 rounded-lg transition-all">
              <span className="material-symbols-outlined">logout</span>
              Logout
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 pb-12 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Staff Overview</h1>
          <p className="text-on-surface-variant">Welcome back, Elena. Here's the current status of your assigned complaints.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] border-l-4 border-primary">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/5 rounded-lg">
                <span className="material-symbols-outlined text-primary">assignment_ind</span>
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Assigned</span>
            </div>
            <h3 className="text-3xl font-black text-on-surface mb-1">12</h3>
            <p className="text-sm text-on-surface-variant font-medium">Assigned to Me</p>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] border-l-4 border-secondary">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary/5 rounded-lg">
                <span className="material-symbols-outlined text-secondary">pending_actions</span>
              </div>
              <span className="text-xs font-bold text-secondary tracking-widest uppercase">Action Needed</span>
            </div>
            <h3 className="text-3xl font-black text-on-surface mb-1">08</h3>
            <p className="text-sm text-on-surface-variant font-medium">Pending Response</p>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] border-l-4 border-error">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-error/5 rounded-lg">
                <span className="material-symbols-outlined text-error">priority_high</span>
              </div>
              <span className="text-xs font-bold text-error tracking-widest uppercase">Critical</span>
            </div>
            <h3 className="text-3xl font-black text-on-surface mb-1">03</h3>
            <p className="text-sm text-on-surface-variant font-medium">Escalated</p>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] border-l-4 border-tertiary-fixed-dim">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-tertiary-fixed/20 rounded-lg">
                <span className="material-symbols-outlined text-on-tertiary-fixed-variant">check_circle</span>
              </div>
              <span className="text-xs font-bold text-on-tertiary-fixed-variant tracking-widest uppercase">Success</span>
            </div>
            <h3 className="text-3xl font-black text-on-surface mb-1">42</h3>
            <p className="text-sm text-on-surface-variant font-medium">Resolved This Month</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-surface-container">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
                <input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all" placeholder="Search student name or ID..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <select className="bg-surface-container-low border-none rounded-lg text-sm font-medium py-2.5 px-4 focus:ring-2 focus:ring-primary">
                <option>All Statuses</option>
                <option>Pending</option>
                <option>Escalated</option>
                <option>Resolved</option>
              </select>
              <select className="bg-surface-container-low border-none rounded-lg text-sm font-medium py-2.5 px-4 focus:ring-2 focus:ring-primary">
                <option>All Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <button className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary-container transition-all">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Apply Filters
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase tracking-widest">Case ID</th>
                  <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase tracking-widest">Student</th>
                  <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase tracking-widest">Issue Type</th>
                  <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase tracking-widest">Date Filed</th>
                  <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase tracking-widest">Priority</th>
                  <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-black text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                <tr className="hover:bg-surface-container-low transition-colors border-l-4 border-error">
                  <td className="px-6 py-5">
                    <span className="font-mono text-xs font-bold text-on-surface-variant">#CMP-9402</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-primary text-xs font-bold">JD</div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Jordan Davies</p>
                        <p className="text-xs text-on-surface-variant">S129384</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-on-surface">Tuition Billing Error</p>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Oct 24, 2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center rounded-md bg-error-container/40 px-2 py-1 text-xs font-bold text-error">HIGH</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-error"></span>
                      <span className="text-xs font-bold text-error uppercase">Escalated</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary hover:underline text-sm font-bold">View Case</button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-5">
                    <span className="font-mono text-xs font-bold text-on-surface-variant">#CMP-9388</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">SM</div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Sarah Miller</p>
                        <p className="text-xs text-on-surface-variant">S129502</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-on-surface">Dormitory Maintenance</p>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Oct 25, 2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center rounded-md bg-secondary-container/40 px-2 py-1 text-xs font-bold text-on-secondary-container">MEDIUM</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-secondary"></span>
                      <span className="text-xs font-bold text-secondary uppercase">Pending</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary hover:underline text-sm font-bold">View Case</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-surface-container-low/30 flex justify-between items-center">
            <span className="text-xs font-medium text-on-surface-variant">Showing 2 of 65 results</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-white border border-outline-variant/30 rounded text-xs font-bold text-on-surface-variant hover:bg-primary hover:text-white transition-all">Previous</button>
              <button className="px-3 py-1 bg-primary text-white rounded text-xs font-bold">1</button>
              <button className="px-3 py-1 bg-white border border-outline-variant/30 rounded text-xs font-bold text-on-surface-variant hover:bg-primary hover:text-white transition-all">2</button>
              <button className="px-3 py-1 bg-white border border-outline-variant/30 rounded text-xs font-bold text-on-surface-variant hover:bg-primary hover:text-white transition-all">Next</button>
            </div>
          </div>
        </div>
      </main>

      <button className="fixed bottom-8 right-8 h-14 w-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">add</span>
        <span className="absolute right-16 bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">New Case</span>
      </button>
    </div>
  );
}
