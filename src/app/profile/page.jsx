import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Mail, Edit2, ShieldCheck, MapPin } from "lucide-react";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <div className="max-w-4xl mx-auto px-4 w-full">
      <div className="mb-10 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Account Overview</h1>
        <p className="text-slate-500 mt-2">Manage your personal information and preferences.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden animate__animated animate__fadeInUp">
        
        <div className="h-48 bg-gradient-to-r from-orange-400 to-amber-300 relative">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>
        
        <div className="px-8 sm:px-12 pb-12 relative -mt-20">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-10">
            <div className="relative">
              <img 
                src={user.image || `https://ui-avatars.com/api/?name=${user.name}&background=random`} 
                alt={user.name} 
                className="w-40 h-40 object-cover rounded-full border-8 border-white shadow-xl bg-white"
              />
              <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
            </div>
            
            <div className="text-center sm:text-left flex-1 pb-2">
              <h2 className="text-3xl font-black text-slate-900">{user.name}</h2>
              <p className="text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-2 mt-1">
                <ShieldCheck size={16} className="text-green-500"/> Verified Member
              </p>
            </div>
            
            <Link href="/profile/update" className="btn bg-slate-900 hover:bg-slate-800 text-white rounded-2xl px-6 h-12 shadow-lg shadow-slate-900/20 border-none shrink-0 font-bold mb-2">
              <Edit2 size={16} /> Edit Profile
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Info</p>
              <div className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="bg-white p-3 rounded-xl shadow-sm"><Mail className="text-slate-400" size={20}/></div>
                {user.email}
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Location</p>
              <div className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="bg-white p-3 rounded-xl shadow-sm"><MapPin className="text-slate-400" size={20}/></div>
                No location set
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
