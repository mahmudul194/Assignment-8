"use client";

import { useState } from "react";
import { signUp, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await signUp.email({
      email,
      password,
      name,
      image: photoUrl || undefined,
    });

    if (error) {
      setError(error.message || "Registration failed. Please try again.");
      setLoading(false);
    } else {
      router.push("/login");
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError("");
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex min-h-screen bg-white">

      <div className="hidden lg:block lg:w-1/2 relative bg-blue-50 lg:order-last">
        <img 
          src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=1200" 
          alt="Summer Beach" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
        <div className="absolute bottom-12 left-12 text-white max-w-md animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-black mb-4 leading-tight">Join the SunCart family.</h2>
          <p className="text-lg text-white/80">Create an account to track your orders, save your favorites, and more.</p>
        </div>
      </div>


      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative overflow-y-auto max-h-screen py-16">
        <Link href="/" className="absolute top-8 left-8 btn btn-ghost btn-circle">
          <ArrowLeft />
        </Link>
        
        <div className="w-full max-w-md animate__animated animate__fadeIn">
          <div className="mb-10">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">
              Create Account
            </h1>
            <p className="text-slate-500 text-lg">Sign up to get started.</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm font-medium border border-red-100 flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-slate-800"
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email address</label>
              <input 
                type="email" 
                placeholder="hello@example.com" 
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-slate-800"
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Photo URL <span className="text-slate-400 font-normal">(link)</span></label>
              <input 
                type="url" 
                placeholder="https://example.com/your-photo.jpg" 
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-slate-800"
                value={photoUrl} 
                onChange={(e) => setPhotoUrl(e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-slate-800 pr-12"
                  required 
                  minLength={8}
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 mt-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-slate-900/20 disabled:opacity-70 flex justify-center"
            >
              {loading ? <span className="loading loading-spinner"></span> : "Create Account"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-sm font-bold text-slate-400 uppercase">or</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full py-4 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl font-bold text-lg transition-all border-2 border-slate-200 hover:border-slate-300 flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {googleLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </>
            )}
          </button>

          <p className="text-center mt-8 text-slate-500 font-medium">
            Already have an account? <Link href="/login" className="text-blue-500 font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
