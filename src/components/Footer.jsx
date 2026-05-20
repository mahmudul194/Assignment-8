import { Sun, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 pt-20 pb-10 px-4 rounded-t-[3rem] w-full overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Sun className="text-orange-500" size={36} />
            <span className="text-3xl font-black text-white tracking-tighter">SunCart</span>
          </Link>
          <p className="text-slate-400 text-lg max-w-sm leading-relaxed mb-8">
            Your one-stop shop for everything summer. Providing sunny vibes and premium essentials since 2026.
          </p>
          <div className="flex gap-4">
            <a className="w-12 h-12 bg-white/5 hover:bg-orange-500 transition-colors rounded-full flex items-center justify-center text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a className="w-12 h-12 bg-white/5 hover:bg-orange-500 transition-colors rounded-full flex items-center justify-center text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a className="w-12 h-12 bg-white/5 hover:bg-orange-500 transition-colors rounded-full flex items-center justify-center text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h6 className="text-white font-bold text-lg mb-6 tracking-wide">Contact</h6> 
          <ul className="space-y-4 font-medium text-slate-400">
            <li>
              <a className="hover:text-orange-400 transition-colors flex items-center gap-3"><MapPin size={18}/> 123 Summer Lane</a>
            </li>
            <li>
              <a className="hover:text-orange-400 transition-colors flex items-center gap-3"><Phone size={18}/> +1 (800) 123-4567</a>
            </li>
            <li>
              <a className="hover:text-orange-400 transition-colors flex items-center gap-3"><Mail size={18}/> hello@suncart.com</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h6 className="text-white font-bold text-lg mb-6 tracking-wide">Legal</h6> 
          <ul className="space-y-4 font-medium text-slate-400">
            <li><Link href="/terms" className="hover:text-orange-400 transition-colors">Terms of use</Link></li>
            <li><Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacy policy</Link></li>
            <li><Link href="/cookie" className="hover:text-orange-400 transition-colors">Cookie policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-medium">
        <p>&copy; {new Date().getFullYear()} SunCart Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
