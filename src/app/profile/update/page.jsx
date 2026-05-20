"use client";

import { useState } from "react";
import { useSession, updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, UploadCloud } from "lucide-react";
import Link from "next/link";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [photoUrl, setPhotoUrl] = useState(session?.user?.image || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  if (!isPending && !session) {
    router.push("/login");
    return null;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await updateUser({
      name: name,
      image: photoUrl,
    });

    if (error) {
      setError(error.message || "Failed to update profile.");
      setLoading(false);
    } else {
      router.push("/profile");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 w-full py-8">
      <Link href="/profile" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold mb-8 transition-colors">
        <ArrowLeft size={20} /> Back to Profile
      </Link>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 sm:p-12 animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Edit Information</h2>
        <p className="text-slate-500 mb-8">Update your personal details below.</p>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm font-medium border border-red-100 flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {error}
          </div>
        )}

        <form onSubmit={handleUpdate} className="space-y-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <img 
              src={photoUrl || session?.user?.image || `https://ui-avatars.com/api/?name=${name || 'User'}&background=random`} 
              alt="Preview" 
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md bg-white shrink-0"
            />
            <div className="w-full">
              <label className="block text-sm font-bold text-slate-700 mb-2">Photo URL</label>
              <div className="relative">
                <input 
                  type="url" 
                  placeholder="https://example.com/photo.jpg" 
                  className="w-full pl-12 pr-5 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-orange-500 transition-shadow text-slate-800"
                  required 
                  value={photoUrl} 
                  onChange={(e) => setPhotoUrl(e.target.value)} 
                />
                <UploadCloud className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">Link to an external image to update your avatar.</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-orange-500 transition-shadow text-slate-800 font-medium"
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          
          <div className="pt-6 border-t border-slate-100 flex gap-4 justify-end">
            <Link href="/profile" className="btn btn-ghost rounded-2xl font-bold px-8">
              Cancel
            </Link>
            <button 
              type="submit" 
              disabled={loading || isPending}
              className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-2xl font-bold px-8 shadow-lg shadow-orange-500/30 disabled:opacity-70"
            >
              {loading ? <span className="loading loading-spinner"></span> : <><Save size={18} /> Save Changes</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
