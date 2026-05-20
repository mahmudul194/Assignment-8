import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center px-4 mt-12 mb-24 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 animate__animated animate__fadeInLeft">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            Summer Collection 2026
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
            Chase the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Endless Sun.
            </span>
          </h1>
          <p className="text-xl text-slate-500 mb-8 max-w-lg leading-relaxed">
            Curated essentials for your perfect summer days. Discover our exclusive collection of outfits, skincare, and beach accessories.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-14 text-lg border-none shadow-xl shadow-slate-900/20 group">
              Explore Collection 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/#popular" className="btn btn-ghost rounded-full px-8 h-14 text-lg border-2 border-slate-200 hover:border-slate-300">
              View Trending
            </Link>
          </div>
        </div>
        
        <div className="relative animate__animated animate__fadeInRight lg:h-[600px] hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200 to-amber-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200" 
              alt="Summer Beach" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/30 border border-white/50 p-6 rounded-3xl text-white">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Sun className="text-yellow-300" size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-xl drop-shadow-md">Premium Quality</h3>
                  <p className="text-white/80 drop-shadow-sm">Crafted for the sun.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
