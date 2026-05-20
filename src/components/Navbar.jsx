"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { Sun, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm transition-all duration-300">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-8 h-20">
        
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-4 shadow-2xl bg-white border border-slate-100 rounded-3xl w-60 gap-2 text-lg font-medium text-slate-700">
              <li><Link href="/" className="hover:bg-slate-50 py-3 rounded-xl">Home</Link></li>
              <li><Link href="/products" className="hover:bg-slate-50 py-3 rounded-xl">Products</Link></li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-3xl font-black text-slate-900 tracking-tighter hover:bg-transparent flex gap-2 items-center px-0">
            <Sun className="text-orange-500 animate-[spin_10s_linear_infinite]" size={32} />
            SunCart
          </Link>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-slate-600 font-bold text-base">
            <li><Link href="/" className="hover:text-orange-500 transition-colors bg-transparent px-0">Home</Link></li>
            <li><Link href="/products" className="hover:text-orange-500 transition-colors bg-transparent px-0">Products</Link></li>
          </ul>
        </div>
        
        <div className="navbar-end gap-4">
          {isPending ? (
            <span className="loading loading-spinner text-orange-500"></span>
          ) : session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-orange-500 hover:ring-offset-2 transition-all">
                <div className="w-10 md:w-12 rounded-full shadow-sm">
                  <img alt="User avatar" src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}&background=random`} />
                </div>
              </div>
              <ul tabIndex={0} className="mt-4 z-[1] p-4 shadow-2xl menu menu-sm dropdown-content bg-white border border-slate-100 rounded-3xl w-64 gap-2">
                <div className="px-4 py-3 mb-2 border-b border-slate-100 bg-slate-50 rounded-2xl">
                  <p className="font-bold text-slate-800 truncate text-base">{session.user.name}</p>
                  <p className="text-xs text-slate-500 truncate mt-1">{session.user.email}</p>
                </div>
                <li>
                  <Link href="/profile" className="rounded-xl py-3 font-bold text-slate-700 hover:bg-slate-50">My Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-red-500 rounded-xl py-3 font-bold hover:bg-red-50"><LogOut size={18}/> Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href="/login" className="btn btn-ghost rounded-full font-bold px-6 hover:bg-slate-100 text-slate-700">Login</Link>
              <Link href="/register" className="btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full font-bold px-6 shadow-lg shadow-orange-500/30">Register</Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
