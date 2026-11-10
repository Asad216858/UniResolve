import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="bg-background text-on-surface flex h-screen overflow-hidden">
      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col h-full py-6 bg-slate-50 dark:bg-slate-950 w-64 border-r border-indigo-100/10 text-sm font-medium">
        <div className="px-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>account_balance</span>
            </div>
            <div>
              <h1 className="text-lg font-black text-indigo-900 dark:text-indigo-100 leading-tight">Admin Portal</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">System Management</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1 px-4">
          <Link className="flex items-center px-4 py-3 bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-sm rounded-lg mx-2 transition-transform duration-200" to="/admin">
            <span className="material-symbols-outlined mr-3">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 mx-2 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
            <span className="material-symbols-outlined mr-3">school</span>
            <span>Students</span>
          </a>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 mx-2 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
            <span className="material-symbols-outlined mr-3">badge</span>
            <span>Staff</span>
          </a>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 mx-2 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
            <span className="material-symbols-outlined mr-3">domain</span>
            <span>Departments</span>
          </a>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 mx-2 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
            <span className="material-symbols-outlined mr-3">category</span>
            <span>Complaint Types</span>
          </a>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 mx-2 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
            <span className="material-symbols-outlined mr-3">alt_route</span>
            <span>Routing Rules</span>
          </a>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 mx-2 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
            <span className="material-symbols-outlined mr-3">analytics</span>
            <span>Reports</span>
          </a>
        </nav>
        <div className="mt-auto px-4 space-y-1">
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 mx-2 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
            <span className="material-symbols-outlined mr-3">settings</span>
            <span>Settings</span>
          </a>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 mx-2 rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
            <span className="material-symbols-outlined mr-3">help_outline</span>
            <span>Help Center</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto relative flex flex-col">
        {/* TopNavBar */}
        <header className="fixed top-0 lg:static w-full z-50 flex justify-between items-center px-6 py-3 max-w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.06)] border-b border-indigo-100/20 lg:shadow-none lg:bg-transparent lg:border-none">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight text-indigo-900 dark:text-indigo-100 lg:hidden">Academic Concierge</span>
            <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10">
              <span className="material-symbols-outlined text-slate-400 mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-slate-400" placeholder="Search complaints, students..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-50 rounded-full transition-colors relative">
              <span className="material-symbols-outlined text-slate-600">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-outline-variant/20 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-on-surface">Dr. Julian Vance</p>
                <p className="text-[10px] text-on-surface-variant">System Administrator</p>
              </div>
              <Link to="/login">
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoS79KvxeFI4nN7kB0rX75q8rT919Pe4ye2jcIqXD24TYPsYis7hvaYU3mJEcenehpG2Ex3PsBRVE30svu8bXgYuDQxAgOA83Gn91Ng4fcEUfwvamcLYO6-F1-vx5NjhSA_GuJFxmMYadkUukBIGIz8VrtIHlDFQQS7TT8soDT5Sl2xxdHvcJ11cE-bawZ2PY2J_cPEHmRzjOHydMB3PkRI9IsDTr8nuIPAQvj6-LEIEQY14Yp8vRc01lackYbu1Oa5Gx-JjCR6g" />
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard Content Container */}
        <div className="mt-20 lg:mt-0 px-8 py-8 max-w-7xl mx-auto w-full">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-on-background tracking-tight">System Overview</h2>
            <p className="text-on-surface-variant mt-1">Institutional performance and active case monitoring.</p>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] group hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-50 text-primary rounded-xl">
                  <span className="material-symbols-outlined">folder_open</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <h3 className="text-label-md text-on-surface-variant font-medium">Total Complaints</h3>
              <p className="text-3xl font-bold text-on-surface mt-1">1,284</p>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] group hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Active</span>
              </div>
              <h3 className="text-label-md text-on-surface-variant font-medium">Open Cases</h3>
              <p className="text-3xl font-bold text-on-surface mt-1">42</p>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] group hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-xl">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">94%</span>
              </div>
              <h3 className="text-label-md text-on-surface-variant font-medium">Resolved</h3>
              <p className="text-3xl font-bold text-on-surface mt-1">1,242</p>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] group hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">-2h</span>
              </div>
              <h3 className="text-label-md text-on-surface-variant font-medium">Avg. Response</h3>
              <p className="text-3xl font-bold text-on-surface mt-1">18.5h</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)]">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface">Complaints by Department</h3>
                    <p className="text-sm text-on-surface-variant">Volume distribution across university faculties</p>
                  </div>
                  <select className="bg-surface-container-low border-none rounded-lg text-xs font-semibold focus:ring-primary py-2 px-4">
                    <option>Last 30 Days</option>
                    <option>Last Quarter</option>
                  </select>
                </div>
                <div className="flex items-end justify-between h-64 gap-4 px-2">
                  <div className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="w-full bg-primary-container/20 rounded-t-lg h-[65%] group-hover:bg-primary transition-colors relative">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">142</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Engineering</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="w-full bg-primary-container/20 rounded-t-lg h-[85%] group-hover:bg-primary transition-colors relative">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">210</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Sciences</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="w-full bg-primary-container rounded-t-lg h-[100%] transition-colors relative">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-100">284</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Business</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="w-full bg-primary-container/20 rounded-t-lg h-[40%] group-hover:bg-primary transition-colors relative">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">88</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Arts</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="w-full bg-primary-container/20 rounded-t-lg h-[55%] group-hover:bg-primary transition-colors relative">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">112</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Medicine</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="w-full bg-primary-container/20 rounded-t-lg h-[30%] group-hover:bg-primary transition-colors relative">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">45</span>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Law</span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low p-8 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-on-surface">Escalated Cases</h3>
                  <button className="text-sm font-semibold text-primary hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl flex items-center justify-between border-l-4 border-error shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">EJ</div>
                      <div>
                        <p className="font-bold text-sm text-on-surface">Elena J. <span className="font-normal text-on-surface-variant">#CMP-9204</span></p>
                        <p className="text-xs text-on-surface-variant">Grade dispute - Advanced Calculus III</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase">Time Open</p>
                        <p className="text-xs font-bold text-error">48 Hours</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl flex items-center justify-between border-l-4 border-amber-400 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">MR</div>
                      <div>
                        <p className="font-bold text-sm text-on-surface">Marcus R. <span className="font-normal text-on-surface-variant">#CMP-9188</span></p>
                        <p className="text-xs text-on-surface-variant">Facility access issue - Lab 4B</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase">Time Open</p>
                        <p className="text-xs font-bold text-amber-600">12 Hours</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
              <div className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] h-full sticky top-24">
                <h3 className="text-xl font-bold text-on-surface mb-8">System Activity</h3>
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-surface-container-high">
                  <div className="relative flex items-start gap-6 group">
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-white flex items-center justify-center ring-4 ring-white shadow-sm">
                      <span className="material-symbols-outlined text-indigo-600 text-lg">check_circle</span>
                    </div>
                    <div className="ml-12 pt-1">
                      <p className="text-xs text-on-surface-variant mb-1">2 minutes ago</p>
                      <p className="text-sm font-semibold text-on-surface leading-snug">Complaint #CMP-8821 Resolved</p>
                      <p className="text-xs text-on-surface-variant mt-1">Handled by Sarah Chen (Academic Affairs)</p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-6 group">
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-white flex items-center justify-center ring-4 ring-white shadow-sm">
                      <span className="material-symbols-outlined text-amber-500 text-lg">forward</span>
                    </div>
                    <div className="ml-12 pt-1">
                      <p className="text-xs text-on-surface-variant mb-1">1 hour ago</p>
                      <p className="text-sm font-semibold text-on-surface leading-snug">Auto-Routing Triggered</p>
                      <p className="text-xs text-on-surface-variant mt-1">4 cases moved to "Urgent Review" category</p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-6 group">
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-white flex items-center justify-center ring-4 ring-white shadow-sm">
                      <span className="material-symbols-outlined text-primary text-lg">add_box</span>
                    </div>
                    <div className="ml-12 pt-1">
                      <p className="text-xs text-on-surface-variant mb-1">3 hours ago</p>
                      <p className="text-sm font-semibold text-on-surface leading-snug">New Complaint Submitted</p>
                      <p className="text-xs text-on-surface-variant mt-1">Student ID: #S-10928 (Faculty of Arts)</p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-6 group">
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-white flex items-center justify-center ring-4 ring-white shadow-sm">
                      <span className="material-symbols-outlined text-slate-400 text-lg">edit</span>
                    </div>
                    <div className="ml-12 pt-1">
                      <p className="text-xs text-on-surface-variant mb-1">5 hours ago</p>
                      <p className="text-sm font-semibold text-on-surface leading-snug">Routing Rule Updated</p>
                      <p className="text-xs text-on-surface-variant mt-1">Dr. Vance modified priority for 'Harassment' tags</p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-6 group">
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-white flex items-center justify-center ring-4 ring-white shadow-sm">
                      <span className="material-symbols-outlined text-indigo-600 text-lg">monitoring</span>
                    </div>
                    <div className="ml-12 pt-1">
                      <p className="text-xs text-on-surface-variant mb-1">Yesterday</p>
                      <p className="text-sm font-semibold text-on-surface leading-snug">Monthly Report Generated</p>
                      <p className="text-xs text-on-surface-variant mt-1">July report is now available in the analytics tab</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-10 py-3 bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded-lg text-sm font-bold text-on-surface flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">history</span>
                  View Full Audit Log
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
