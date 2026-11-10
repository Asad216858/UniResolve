import { Link, useParams } from 'react-router-dom';

export default function CaseDetail() {
  const { id } = useParams();

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 max-w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.06)] border-b border-indigo-100/20 font-inter antialiased">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tight text-indigo-900 dark:text-indigo-100">Academic Concierge</span>
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium" to="/student">Dashboard</Link>
            <Link className="text-indigo-700 font-semibold border-b-2 border-indigo-700 transition-all text-sm py-1" to="/student/case/29440">Complaints</Link>
            <a className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium" href="#">Resources</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <span className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-slate-50 rounded-full cursor-pointer transition-colors" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-on-surface">Alex Rivera</p>
              <p className="text-[10px] text-on-surface-variant">Student ID: 2024-8832</p>
            </div>
            <img alt="User profile avatar" className="w-9 h-9 rounded-full object-cover border border-outline-variant/20 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaW6yTh4Kd5fljUYy0OEfhQdwtb9g-Ksb6CUlyubwiI-ThDlJ2Lj2rrQWWGtR4wA7pjN0L4dO2V_51YAvhF7JcWh7i5Jr3xOAPxJGRvV3lm_IZ4UulQH5C3qmFtAHnWdoQog8aB2innRYtwAXqqFsRvik7-uTJvmbP-Mt0Y8qVGLa_YekQkL5EQ1q_gkeG4SCEAMoAlRJczBgpFBT0kakGcCwRtCSw4EMDiylNImMMMOx5IDEeCpOl5Ptpf4Vf_Pf39iczm2yJzw" />
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant mb-4">
              <Link className="hover:text-primary transition-colors" to="/student">My Requests</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface">Case Details</span>
            </nav>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black text-on-background tracking-tight">Case #AC-{id}</h1>
              <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[11px] font-bold tracking-wider flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                IN PROGRESS
              </span>
            </div>
            <p className="text-on-surface-variant text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              Submitted on October 14, 2023 • 09:42 AM
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-lg border border-outline-variant/50 text-on-surface font-semibold text-sm hover:bg-surface-container-high transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Export Case PDF
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold text-sm hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
              Message Support
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-surface-container">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-on-surface-variant tracking-widest">DEPARTMENT</span>
                    <p className="text-base font-semibold text-primary">Office of the Registrar</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-on-surface-variant tracking-widest">COMPLAINT TYPE</span>
                    <p className="text-base font-semibold text-on-surface">Tuition Fee Discrepancy</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-on-background">Incorrect Scholarship Credit Application</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-on-surface-variant leading-relaxed">
                      I am writing to formally report an issue regarding my tuition statement for the Fall 2023 semester. Despite receiving an official confirmation for the 'Academic Excellence' scholarship (Ref: SCH-2023-011) which covers 40% of the tuition fee, the current balance reflected in the student portal shows the full amount without any credit applied.
                    </p>
                    <p className="text-on-surface-variant leading-relaxed">
                      I have already attempted to refresh the portal and cleared my cache, but the discrepancy persists. This is affecting my ability to complete my course registration as the system requires a cleared balance.
                    </p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h3 className="text-sm font-bold text-on-surface mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">attachment</span>
                    Attached Evidence (3)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">picture_as_pdf</span>
                        <div>
                          <p className="text-xs font-bold text-on-surface truncate max-w-[150px]">Scholarship_Letter.pdf</p>
                          <p className="text-[10px] text-on-surface-variant">1.2 MB • Oct 14</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">visibility</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">image</span>
                        <div>
                          <p className="text-xs font-bold text-on-surface truncate max-w-[150px]">Portal_Screenshot.png</p>
                          <p className="text-[10px] text-on-surface-variant">2.4 MB • Oct 14</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">visibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6 px-4">
              <h2 className="text-xl font-bold text-on-background flex items-center gap-3">
                <span className="material-symbols-outlined">history</span>
                Case Progression
              </h2>
              <div className="relative space-y-10 pl-6">
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-surface-container-highest"></div>
                <div className="relative">
                  <div className="absolute -left-[23px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background ring-4 ring-primary/10"></div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-on-surface">Investigation Initiated</h4>
                      <span className="text-[10px] font-medium text-on-surface-variant">Oct 16, 2023 • 02:15 PM</span>
                    </div>
                    <p className="text-sm text-on-surface-variant">Case has been reviewed and assigned to the Finance Verification team for audit. Estimated resolution time: 3-5 business days.</p>
                    <div className="mt-3 p-3 bg-surface-container-low rounded-lg text-xs italic text-on-surface-variant border-l-2 border-primary/20">
                      "We are cross-referencing your award letter with the central scholarship database." — Admin System
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[19px] top-1 w-2 h-2 rounded-full bg-surface-container-highest"></div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-on-surface">Case Routed</h4>
                      <span className="text-[10px] font-medium text-on-surface-variant">Oct 15, 2023 • 11:30 AM</span>
                    </div>
                    <p className="text-sm text-on-surface-variant">Department head acknowledged receipt and moved the ticket to 'Under Review'.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[19px] top-1 w-2 h-2 rounded-full bg-surface-container-highest"></div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-on-surface">Complaint Submitted</h4>
                      <span className="text-[10px] font-medium text-on-surface-variant">Oct 14, 2023 • 09:42 AM</span>
                    </div>
                    <p className="text-sm text-on-surface-variant">System received the initial report and generated Tracking ID #AC-29440.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_10px_30px_rgba(25,28,29,0.04)]">
              <span className="text-[11px] font-bold text-on-surface-variant tracking-widest block mb-4 uppercase">Assigned Staff</span>
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
                <img alt="Staff profile" className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwsY3iqHfXwCckb5QQvJlZ42DnvjnjwlhrYamelK4j51nXW3o_acuPQpByleoSBqV7FrA24_0uaqlqsVZYRZ5bNaAFrlUfT_fox8-OsHiO7dnNCWfvji3sdz6FvnEqdCq0nTxmwEr9lKu3vOvcRwgdtlbA78VS6mQUy8ZR6NUK8apZqO2EV-bj173F5ESe3v5BbcF9YBVUbCJZazzeG-tnMwRWibhrNlVTAJCmV0X8NzHCxuANfgUg_NiK6gDMwPwXfXicbwMr2A" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Dr. Sarah Jenkins</p>
                  <p className="text-[11px] text-on-surface-variant">Senior Registrar Officer</p>
                  <div className="mt-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] font-medium text-emerald-600">Active on Case</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-surface-container space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant">Response Rating</span>
                  <span className="text-on-surface font-bold">4.9/5.0</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant">Office Hours</span>
                  <span className="text-on-surface font-bold">09:00 - 17:00</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <h4 className="text-sm font-bold text-primary mb-3">Quick Help</h4>
              <ul className="space-y-3">
                <li>
                  <a className="text-xs text-on-surface flex items-center gap-2 hover:text-primary transition-colors group" href="#">
                    <span className="material-symbols-outlined text-[18px] text-primary/60 group-hover:text-primary">menu_book</span>
                    Scholarship Policy Guide
                  </a>
                </li>
                <li>
                  <a className="text-xs text-on-surface flex items-center gap-2 hover:text-primary transition-colors group" href="#">
                    <span className="material-symbols-outlined text-[18px] text-primary/60 group-hover:text-primary">help</span>
                    FAQ: Tuition Discrepancies
                  </a>
                </li>
                <li>
                  <a className="text-xs text-on-surface flex items-center gap-2 hover:text-primary transition-colors group" href="#">
                    <span className="material-symbols-outlined text-[18px] text-primary/60 group-hover:text-primary">support_agent</span>
                    Escalation Procedure
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-indigo-100/10 px-6 py-3 flex justify-around items-center z-50">
        <Link to="/student" className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-indigo-700">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment_late</span>
          <span className="text-[10px] font-bold">Complaints</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>
    </div>
  );
}
