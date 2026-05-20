import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import products from "@/data/products.json";
import { Star, ShoppingCart, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-slate-800">Product Not Found</h1>
        <Link href="/" className="btn bg-slate-900 text-white rounded-full">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] py-12 px-4 max-w-6xl mx-auto">
      <Link href="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold mb-8 transition-colors">
        <ArrowLeft size={20} /> Back to Shop
      </Link>

      <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden animate__animated animate__fadeIn flex flex-col lg:flex-row">
        
        <figure className="lg:w-1/2 relative bg-slate-50 p-6 lg:p-12">
          <div className="absolute top-10 left-10 z-10 backdrop-blur-md bg-white/60 px-4 py-2 rounded-full text-sm font-bold text-slate-800 shadow-sm border border-white">
            {product.category}
          </div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover rounded-3xl shadow-lg" 
          />
        </figure>
        
        <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">{product.brand}</span>
            <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-lg text-sm font-bold ml-auto">
              <Star fill="currentColor" size={14} />
              <span>{product.rating}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">{product.name}</h1>
          
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-100">
            <p className="text-5xl font-black text-orange-500">${product.price}</p>
          </div>

          <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
            {product.description}
          </p>

          <div className="flex items-center gap-3 text-emerald-600 font-bold mb-10 bg-emerald-50 w-fit px-4 py-2 rounded-xl">
            <ShieldCheck size={20} /> In Stock ({product.stock} available)
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button className="btn bg-slate-900 hover:bg-slate-800 text-white rounded-2xl h-14 px-8 text-lg font-bold shadow-xl shadow-slate-900/20 border-none flex-1">
              <ShoppingCart size={20} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
