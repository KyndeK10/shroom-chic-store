"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, Loader2 } from "lucide-react";
import AnimatedBackground from "../../components/AnimatedBackground";
import SocialEmbed from "../../components/SocialEmbed";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  return (
    <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Animated background: wave pulses */}
      {isMounted && <AnimatedBackground variant="waves" />}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
          The Collection
        </h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Explore our trippy, boho-inspired print-on-demand creations.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Search the magic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-stone-900/50 border border-purple-900/50 rounded-full pl-12 pr-4 py-3 text-stone-200 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Filter className="text-stone-500 h-5 w-5 hidden md:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${categoryFilter === cat
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  : "bg-stone-900/50 text-stone-400 hover:text-white hover:bg-purple-900/30 border border-purple-900/30"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-12 w-12 text-purple-500 animate-spin" />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-stone-900/40 rounded-3xl overflow-hidden border border-purple-900/30 transition-all duration-500 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              <Link href={`/product/${product.id}`} className="block aspect-square overflow-hidden relative z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="p-6 relative z-20 bg-stone-900/80 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold text-stone-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {product.name}
                  </h3>
                  <span className="text-lg font-medium text-purple-400">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-stone-500 text-sm mb-4">{product.category}</p>
                <Link
                  href={`/product/${product.id}`}
                  className="w-full block text-center py-3 rounded-xl bg-stone-800 text-white font-medium group-hover:bg-gradient-to-r from-purple-600 to-pink-600 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300"
                >
                  Customize & Buy
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-stone-400 text-lg">No magical items found matching your search.</p>
        </div>
      )}

      {/* TikTok Shorts Feed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 pt-12 border-t border-purple-900/30"
      >
        <SocialEmbed type="tiktok-shorts" title="See It In Action" />
      </motion.div>
    </div>
  );
}
