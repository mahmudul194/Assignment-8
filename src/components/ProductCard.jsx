import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group relative rounded-[2rem] bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-72 w-full bg-slate-50 overflow-hidden p-4 pb-0">
        <div className="absolute top-4 right-4 z-10 backdrop-blur-md bg-white/60 px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-white">
          {product.category}
        </div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full rounded-t-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h2 className="text-xl font-bold text-slate-800 leading-tight">{product.name}</h2>
          <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-lg text-sm font-bold shrink-0">
            <Star size={14} fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
        <p className="text-slate-400 text-sm mb-6">{product.brand}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <p className="text-2xl font-black text-slate-900">${product.price}</p>
          <Link href={`/product/${product.id}`} className="btn bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 rounded-xl px-6 border-none transition-colors">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
