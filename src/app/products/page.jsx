import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">All Summer Essentials</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">Find everything you need for the perfect summer, from skincare to stylish outfits.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
