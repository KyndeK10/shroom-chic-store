"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCart } from "../../../context/CartContext";
import { Loader2, CheckCircle2 } from "lucide-react";
import AnimatedBackground from "../../../components/AnimatedBackground";
import SocialEmbed from "../../../components/SocialEmbed";

export default function Product() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const { addItem } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        if (res.ok) {
          const data = await res.json();
          const found = data.find((p: any) => p.id === id);
          if (found) {
            setProduct(found);
            setSelectedVariant(found.variants[0]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    addItem({
      id: `${product.id}-${selectedVariant.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      variant: {
        size: selectedVariant.size,
        color: selectedVariant.color,
      },
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-12 w-12 text-purple-500 animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-32">
        <h2 className="text-3xl font-serif text-stone-300">Product not found.</h2>
      </div>
    );
  }

  const uniqueSizes = Array.from(new Set(product.variants.map((v: any) => v.size)));
  const uniqueColors = Array.from(new Set(product.variants.map((v: any) => v.color)));

  return (
    <div className="relative">
      {/* Animated background: color-shift fungi */}
      {isMounted && <AnimatedBackground variant="fungi" />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-purple-900/30 bg-stone-900/50 flex items-center justify-center p-8 shadow-[0_0_50px_rgba(168,85,247,0.1)]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-2xl transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-stone-300 font-medium mb-6">${product.price.toFixed(2)}</p>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-6 mb-10">
              {/* Size Selector */}
              <div>
                <h3 className="text-sm font-semibold text-stone-200 uppercase tracking-wider mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {uniqueSizes.map((size: any) => (
                    <button
                      key={size}
                      onClick={() => {
                        const newVar = product.variants.find((v: any) => v.size === size && v.color === selectedVariant.color) || product.variants.find((v: any) => v.size === size);
                        setSelectedVariant(newVar);
                      }}
                      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${selectedVariant?.size === size
                          ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border-transparent"
                          : "bg-stone-900/50 text-stone-400 hover:text-white border border-purple-900/30"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div>
                <h3 className="text-sm font-semibold text-stone-200 uppercase tracking-wider mb-3">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {uniqueColors.map((color: any) => (
                    <button
                      key={color}
                      onClick={() => {
                        const newVar = product.variants.find((v: any) => v.color === color && v.size === selectedVariant.size) || product.variants.find((v: any) => v.color === color);
                        setSelectedVariant(newVar);
                      }}
                      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${selectedVariant?.color === color
                          ? "bg-pink-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)] border-transparent"
                          : "bg-stone-900/50 text-stone-400 hover:text-white border border-purple-900/30"
                        }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-semibold text-stone-200 uppercase tracking-wider mb-3">Quantity</h3>
                <div className="flex items-center gap-4 bg-stone-900/50 w-fit rounded-xl border border-purple-900/30 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium text-stone-200">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`flex-1 py-4 rounded-xl font-medium text-lg transition-all duration-300 flex items-center justify-center gap-2 ${addedToCart
                    ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.5)]"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:scale-[1.02]"
                  }`}
              >
                {addedToCart ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Added to Cart
                  </>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Product Demo Videos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-12 border-t border-purple-900/30"
        >
          <SocialEmbed type="tiktok-carousel" title="See It In Action" />
        </motion.div>
      </div>
    </div>
  );
}
