import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import { Droplet, SunMedium, Umbrella } from "lucide-react";

export default function Home() {
  const popularProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <HeroSection />


      <section id="popular" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate__animated animate__fadeIn">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Trending Now</h2>
            <p className="text-xl text-slate-500 max-w-lg">Hand-picked summer favorites our community loves right now.</p>
          </div>
          <a href="/products" className="hidden md:inline-flex font-bold text-orange-500 hover:text-orange-600 transition-colors mt-4 md:mt-0">
            View all products →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>


      <section className="py-24 px-4 bg-slate-900 text-white mt-12 rounded-[3rem] max-w-7xl mx-auto mx-4 mb-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Summer Care Guide</h2>
          <p className="text-lg text-slate-300">Essential tips to stay fresh, glowing, and protected throughout the hottest days of the year.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-4 md:px-12">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mb-8">
              <SunMedium size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Sun Protection</h3>
            <p className="text-slate-400 leading-relaxed">Always apply SPF 30+ before going out. Reapply every 2 hours, especially after swimming.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
              <Droplet size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Stay Hydrated</h3>
            <p className="text-slate-400 leading-relaxed">Drink at least 8 glasses of water a day. Keep a reusable water bottle with you at all times.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8">
              <Umbrella size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Seek Shade</h3>
            <p className="text-slate-400 leading-relaxed">Avoid direct sunlight between 10 AM and 4 PM when UV rays are at their absolute strongest.</p>
          </div>
        </div>
      </section>


      <section className="py-12 px-4 max-w-7xl mx-auto border-t border-slate-200">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by Premium Brands</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <h2 className="text-2xl font-black tracking-widest text-slate-800">SUNSHADE</h2>
          <h2 className="text-2xl font-black tracking-widest text-slate-800">GLOWSKIN</h2>
          <h2 className="text-2xl font-black tracking-widest text-slate-800">ISLANDER</h2>
          <h2 className="text-2xl font-black tracking-widest text-slate-800">OCEANVIBES</h2>
        </div>
      </section>
    </div>
  );
}
