"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { Trash2, ArrowRight, ShoppingBag, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 bg-stone-900/50 rounded-full flex items-center justify-center mb-6 border border-purple-900/30">
            <ShoppingBag className="w-10 h-10 text-purple-500" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-200 mb-4">Your cart is empty</h2>
          <p className="text-stone-400 mb-8 max-w-md mx-auto">
            Looks like you haven't added any magical items to your cart yet.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-10">
        Your Magical Haul
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-6 bg-stone-900/40 p-6 rounded-3xl border border-purple-900/30 relative group"
            >
              <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-stone-950 rounded-2xl overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {item.customDesign && (
                  <div className="absolute top-2 left-2 bg-pink-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                    Custom
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-serif font-semibold text-stone-200 group-hover:text-purple-400 transition-colors">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-stone-500 hover:text-red-400 transition-colors p-2 -mr-2 -mt-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-stone-400 text-sm mt-1">
                    {item.variant.size} | {item.variant.color}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3 bg-stone-950 rounded-xl border border-purple-900/30 p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-medium text-stone-200 text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-medium text-pink-400">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-stone-900/60 p-8 rounded-3xl border border-purple-900/50 sticky top-24 shadow-[0_0_40px_rgba(168,85,247,0.1)]"
          >
            <h3 className="text-2xl font-serif font-bold text-stone-200 mb-6 border-b border-purple-900/30 pb-4">
              Order Summary
            </h3>
            
            <div className="space-y-4 mb-6 text-stone-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-stone-500 text-sm">Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-purple-900/30 pt-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-stone-200">Total</span>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-4 rounded-xl font-medium text-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  Checkout <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-stone-500 text-xs flex items-center justify-center gap-1">
                Secure checkout powered by Stripe
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
