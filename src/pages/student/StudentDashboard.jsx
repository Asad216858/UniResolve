import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 max-w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.06)] border-b border-indigo-100/20 font-inter antialiased">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold tracking-tight text-indigo-900 dark:text-indigo-100">Academic Concierge</span>
          <div className="hidden md:flex items-center ml-8 gap-6 h-full">
            <Link className="text-indigo-700 dark:text-indigo-400 font-semibold border-b-2 border-indigo-700 py-4 h-full" to="/student">Dashboard</Link>
            <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors py-4" href="#">History</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors py-4" href="#">Resources</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 pr-4 border-r border-outline-variant/30">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-on-surface">Julianne Sterling</p>
              <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-medium">Faculty of Humanities</p>
            </div>
            <img alt="User profile avatar" className="w-10 h-10 rounded-full border-2 border-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAteBNC3MbpYYYlmBT74uMrI-ClU_lp0Xy4ZUtccPy0m-3BdLLinY3J0S-_HtbP57kcC8GMawWPhlgQKS10dYxMBGKfcLP8nFO-CH4t1BDVM1yWA1bIRy94ScqtyumzylsSwNLkZiazopTqneLEMfYDHLkmyEzP-278IM45BvJ3xhH4N9OA-Hi7ZqXIF8re3XpRGF4KF5PqqLcasd02TcJnPr6ZGj9DgYALLQupn--Gf0TdXYjWjegOZz2_-Q7DtPO8YocRFYCP_A" />
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-slate-500 hover:text-indigo-600 transition-all scale-98 active:opacity-80">notifications</button>
            <button className="material-symbols-outlined text-slate-500 hover:text-indigo-600 transition-all scale-98 active:opacity-80">account_circle</button>
            <Link to="/login" className="text-sm font-semibold text-error hover:bg-error-container/20 px-3 py-1.5 rounded-lg transition-colors">Logout</Link>
          </div>
        </div>
      </nav>
      
      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {/* Header & CTA Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h1 className="text-[2.75rem] font-extrabold tracking-tight leading-tight text-indigo-950">
              Welcome back, Julianne.
            </h1>
            <p className="text-body-lg text-on-surface-variant mt-2 max-w-xl leading-relaxed">
              Track your current academic requests and submit new feedback to the faculty administration.
            </p>
          </div>
          <Link to="/student/submit" className="group flex items-center gap-3 bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            <span className="material-symbols-outlined" data-weight="fill">add_circle</span>
            Submit New Complaint
          </Link>
        </header>
        
        {/* Summary Bento Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_20px_40px_rgba(25,28,29,0.03)] border-b-4 border-indigo-200">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">fact_check</span>
              <span className="text-xs font-bold text-on-surface-variant px-2 py-1 bg-surface-container rounded">ALL TIME</span>
            </div>
            <h3 className="text-label-md text-on-surface-variant font-semibold uppercase tracking-widest">Total Complaints</h3>
            <p className="text-4xl font-black text-on-surface mt-1">12</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_20px_40px_rgba(25,28,29,0.03)] border-b-4 border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-slate-400 text-3xl">pending_actions</span>
              <span className="text-xs font-bold text-slate-500 px-2 py-1 bg-slate-100 rounded">ACTION NEEDED</span>
            </div>
            <h3 className="text-label-md text-on-surface-variant font-semibold uppercase tracking-widest">Pending</h3>
            <p className="text-4xl font-black text-on-surface mt-1">02</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_20px_40px_rgba(25,28,29,0.03)] border-b-4 border-blue-200">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-blue-600 text-3xl">hourglass_empty</span>
              <span className="text-xs font-bold text-blue-600 px-2 py-1 bg-blue-50 rounded">ACTIVE</span>
            </div>
            <h3 className="text-label-md text-on-surface-variant font-semibold uppercase tracking-widest">In Progress</h3>
            <p className="text-4xl font-black text-on-surface mt-1">04</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-[0_20px_40px_rgba(25,28,29,0.03)] border-b-4 border-emerald-200">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-emerald-600 text-3xl">task_alt</span>
              <span className="text-xs font-bold text-emerald-600 px-2 py-1 bg-emerald-50 rounded">COMPLETED</span>
            </div>
            <h3 className="text-label-md text-on-surface-variant font-semibold uppercase tracking-widest">Resolved</h3>
            <p className="text-4xl font-black text-on-surface mt-1">06</p>
          </div>
        </section>

        {/* Main Content Area: Recent Complaints */}
        <section className="bg-surface-container-lowest rounded-2xl shadow-[0_20px_40px_rgba(25,28,29,0.04)] overflow-hidden">
          <div className="px-8 py-6 flex justify-between items-center bg-surface-container-low/30">
            <div>
              <h2 className="text-xl font-bold text-indigo-950">Recent Activity</h2>
              <p className="text-sm text-on-surface-variant">View the status and history of your recent submissions.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-surface-container rounded-lg transition-colors material-symbols-outlined text-slate-500">search</button>
              <button className="p-2 hover:bg-surface-container rounded-lg transition-colors material-symbols-outlined text-slate-500">filter_list</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-surface-container">
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Tracking ID</th>
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Title</th>
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Type</th>
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Priority</th>
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                <tr className="hover:bg-surface-container-low/40 transition-colors group cursor-pointer" onClick={() => window.location.href='/student/case/88421'}>
                  <td className="px-8 py-6 font-mono text-xs text-on-surface-variant">#AC-88421</td>
                  <td className="px-8 py-6">
                    <span className="block font-semibold text-on-surface group-hover:text-primary transition-colors">Missing Grade: HIS-402 Exam</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant font-medium">Academic Appeal</td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold text-on-error-container bg-error-container/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                      ESCALATED
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-2 py-0.5 rounded border border-error/20 text-[10px] font-black text-error bg-error/5">CRITICAL</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant">Oct 24, 2023</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors group cursor-pointer" onClick={() => window.location.href='/student/case/88403'}>
                  <td className="px-8 py-6 font-mono text-xs text-on-surface-variant">#AC-88403</td>
                  <td className="px-8 py-6">
                    <span className="block font-semibold text-on-surface group-hover:text-primary transition-colors">Hostel Wi-Fi Connectivity Issue</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant font-medium">Facilities</td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-bold text-blue-700 bg-blue-50">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      IN PROGRESS
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-2 py-0.5 rounded border border-blue-200 text-[10px] font-black text-blue-600 bg-blue-50/50">MEDIUM</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant">Oct 22, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-8 py-4 bg-surface-container-low/10 flex justify-center">
            <button className="text-sm font-bold text-primary hover:text-primary-container transition-colors py-2 px-6">View All Submission History</button>
          </div>
        </section>

        {/* Help Section */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-indigo-900 rounded-2xl p-10 text-white relative overflow-hidden flex flex-col justify-center min-h-[240px]">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-3">Need immediate assistance?</h2>
              <p className="text-indigo-200 mb-6 max-w-md">Our student support officers are available 24/7 for urgent academic or administrative crises.</p>
              <div className="flex gap-4">
                <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">Live Chat</button>
                <button className="border border-indigo-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-indigo-800 transition-colors">Call Helpdesk</button>
              </div>
            </div>
            <div className="absolute right-[-10%] top-[-20%] w-[300px] h-[300px] bg-indigo-800/30 rounded-full blur-3xl"></div>
            <div className="absolute right-[5%] bottom-[-10%] w-[200px] h-[200px] bg-indigo-600/20 rounded-full blur-2xl"></div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(25,28,29,0.03)] border border-outline-variant/10">
            <h3 className="font-bold text-lg mb-4 text-indigo-950">Guide Resources</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-on-surface hover:text-primary cursor-pointer group">
                <span className="material-symbols-outlined text-indigo-300 group-hover:text-primary transition-colors">description</span>
                Complaint Submission Policy
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface hover:text-primary cursor-pointer group">
                <span className="material-symbols-outlined text-indigo-300 group-hover:text-primary transition-colors">gavel</span>
                Student Rights &amp; Redressal
              </li>
              <li className="flex items-center gap-3 text-sm text-on-surface hover:text-primary cursor-pointer group">
                <span className="material-symbols-outlined text-indigo-300 group-hover:text-primary transition-colors">contact_support</span>
                Frequently Asked Questions
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Navigation Shell Support (Responsive) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full glass-panel border-t border-indigo-100/30 flex justify-around items-center py-3 px-4 z-50">
        <Link to="/student" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" data-weight="fill">dashboard</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[10px] font-bold">History</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">library_books</span>
          <span className="text-[10px] font-bold">Docs</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold">Account</span>
        </button>
      </div>
    </div>
  );
}
