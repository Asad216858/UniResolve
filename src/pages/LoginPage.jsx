import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden min-h-screen bg-background font-body text-on-surface">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-container blur-[100px]"></div>
      </div>
      <div className="w-full max-w-[440px] z-10">
        {/* Brand Identity Anchor */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-20 h-20 bg-primary-container rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-primary/10">
            <span className="material-symbols-outlined text-on-primary-container text-4xl" data-icon="school">school</span>
          </div>
          <h1 className="font-headline text-3xl font-black tracking-tight text-primary mb-2">Academic Concierge</h1>
          <p className="text-on-surface-variant font-medium">Student Complaint Management System</p>
        </div>
        {/* Login Card */}
        <div className="bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,29,0.06)] rounded-xl p-8 md:p-10 border border-outline-variant/10">
          <form className="space-y-6">
            {/* Input Fields */}
            <div className="space-y-5">
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1" htmlFor="identifier">Email or Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-xl" data-icon="alternate_email">alternate_email</span>
                  </div>
                  <input className="w-full pl-11 pr-4 py-4 bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg transition-all text-on-surface placeholder-outline/50" id="identifier" name="identifier" placeholder="e.g. j.doe@university.edu" required type="text" />
                </div>
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1" htmlFor="password">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-xl" data-icon="lock">lock</span>
                  </div>
                  <input className="w-full pl-11 pr-12 py-4 bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg transition-all text-on-surface placeholder-outline/50" id="password" name="password" placeholder="••••••••" required type="password" />
                  <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-xl" data-icon="visibility">visibility</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Notice Section */}
            <div className="bg-primary-fixed/30 p-4 rounded-lg flex gap-3 items-start border border-primary-fixed-dim/20">
              <span className="material-symbols-outlined text-primary text-xl mt-0.5" data-icon="info">info</span>
              <p className="text-sm leading-relaxed text-on-primary-fixed-variant">
                First login? You'll be prompted to change your password for enhanced security.
              </p>
            </div>
            {/* Actions */}
            <div className="pt-2">
              <Link to="/student" className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                Sign In
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </div>
            <div className="flex items-center justify-center pt-2">
              <a className="text-sm font-semibold text-primary hover:text-primary-container transition-colors" href="#">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
        {/* Footer Meta */}
        <div className="mt-12 text-center">
          <p className="text-xs text-on-surface-variant font-medium tracking-wide">
            © 2024 UNIVERSITY ADMINISTRATION PORTAL
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a className="text-xs text-outline hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs text-outline hover:text-primary transition-colors" href="#">Technical Support</a>
          </div>
        </div>
      </div>
      {/* Support Context Section (Asymmetric Detail) */}
      <div className="hidden lg:block fixed bottom-12 right-12 max-w-xs">
        <div className="glass-panel p-6 rounded-xl border border-white/40 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-tertiary"></div>
            <span className="text-xs font-bold text-tertiary uppercase tracking-tighter">System Status</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            All complaint management services are currently operational. If you experience issues logging in, please contact the IT Service Desk.
          </p>
        </div>
      </div>
    </main>
  );
}
