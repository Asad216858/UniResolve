import { Link, useNavigate } from 'react-router-dom';

export default function SubmitRequest() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/student');
  };

  return (
    <div className="bg-background font-body text-on-surface antialiased min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 max-w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.06)] border-b border-indigo-100/20">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tight text-indigo-900 dark:text-indigo-100 font-headline">Academic Concierge</span>
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium" to="/student">Dashboard</Link>
            <Link className="text-indigo-700 font-semibold border-b-2 border-indigo-700 transition-all text-sm py-1" to="/student/submit">Submit Case</Link>
            <a className="text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium" href="#">My Trackers</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-slate-600" data-icon="notifications">notifications</span>
          </button>
          <div className="flex items-center gap-3 pl-2 border-l border-outline-variant/30">
            <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8KK06nCrsNjHc50LFZrE3PVsXjg13IwQg1wxdocVpcOqhYesy2Hc6OMQM6WcpnEP4Vg7jKKxxqrhSHbRyHNLsJAbByBTWGobO542j5DvbJbRXC9T8T0Yy4iQopzjyMXlkVfkvMQZHre6BPitPzbolG0_ckbeaoGYeSCWHm16ZpfDiMKwjd9ZSO66t9LM_kcXUcPoeq0N_P86bCnZLnbJ4heEWI6oG-nqVu2J6wTRZXSCqTXwcGPLlT2UOurkhziTHknrNnIzEFw" />
            <Link to="/login" className="text-sm font-semibold text-indigo-900">Logout</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 max-w-5xl mx-auto">
        {/* Success Banner */}
        <div className="mb-8 p-4 bg-primary-gradient rounded-lg shadow-lg flex items-center justify-between glass-effect">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            </div>
            <div>
              <p className="text-white font-semibold">Previous Request Logged Successfully</p>
              <p className="text-white/80 text-sm">Tracking ID: <span className="font-mono font-bold">#SC-12345</span></p>
            </div>
          </div>
          <button className="text-white/60 hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Submission Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-on-surface font-headline leading-tight">Formal Request<br/>Submission</h1>
              <p className="text-on-surface-variant leading-relaxed">Your submission will be routed directly to the administration office for review. Please provide detailed information to expedite the process.</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary">
              <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Automated Routing</h3>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">domain</span>
                <div>
                  <p className="text-xs text-on-surface-variant font-medium">Academic Department</p>
                  <p className="text-on-surface font-semibold">Computer Science</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Process Timeline</h4>
              <div className="space-y-6 relative">
                <div className="flex gap-4">
                  <div className="z-10 w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
                  <p className="text-sm text-on-surface font-medium">Submission Received</p>
                </div>
                <div className="flex gap-4">
                  <div className="z-10 w-2 h-2 rounded-full bg-surface-container-highest mt-1.5 shrink-0"></div>
                  <p className="text-sm text-on-surface-variant">Departmental Review (24h)</p>
                </div>
                <div className="flex gap-4">
                  <div className="z-10 w-2 h-2 rounded-full bg-surface-container-highest mt-1.5 shrink-0"></div>
                  <p className="text-sm text-on-surface-variant">Resolution Drafting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-lg shadow-[0_20px_40px_rgba(25,28,29,0.06)] p-8 md:p-10">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Complaint Title</label>
                  <input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all py-3 px-4 rounded-t-md text-lg font-medium placeholder:text-outline" placeholder="Briefly summarize the issue..." type="text" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Category</label>
                    <div className="relative">
                      <select className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all py-3 px-4 rounded-t-md appearance-none text-on-surface">
                        <option>Academic Quality</option>
                        <option>Facility Issues</option>
                        <option>Administrative Delays</option>
                        <option>Harassment/Behavioral</option>
                        <option>Tuition &amp; Finance</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                    </div>
                  </div>
                  <div className="space-y-2 opacity-60">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Assigned Department</label>
                    <div className="w-full bg-surface-container border-0 border-b-2 border-outline-variant/10 py-3 px-4 rounded-t-md text-on-surface-variant font-medium">
                      Computer Science
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Detailed Narrative</label>
                  <textarea className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all py-4 px-4 rounded-t-md text-on-surface leading-relaxed placeholder:text-outline" placeholder="Describe the situation in detail, including dates and people involved..." rows="6"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Supporting Evidence</label>
                  <div className="group relative border-2 border-dashed border-outline-variant/40 rounded-lg p-10 transition-all hover:border-primary/40 hover:bg-primary/5 flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary">upload_file</span>
                    </div>
                    <p className="text-on-surface font-semibold">Drop files here or <span className="text-primary underline">browse</span></p>
                    <p className="text-xs text-on-surface-variant mt-2">Maximum file size: 15MB (PDF, JPG, PNG)</p>
                    <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
                  <Link to="/student" className="w-full text-center sm:w-auto px-8 py-3 text-sm font-bold text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
                    CANCEL
                  </Link>
                  <button className="w-full sm:w-auto px-10 py-3 bg-primary-gradient text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2" type="submit">
                    SUBMIT COMPLAINT
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="mt-auto py-12 px-6 border-t border-indigo-100/10 text-center">
        <p className="text-sm text-on-surface-variant font-medium">University Academic Concierge System © 2024</p>
        <div className="flex justify-center gap-6 mt-4">
          <a className="text-xs text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest font-bold" href="#">Privacy Policy</a>
          <a className="text-xs text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest font-bold" href="#">Help Center</a>
          <a className="text-xs text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest font-bold" href="#">Terms of Use</a>
        </div>
      </footer>
    </div>
  );
}
