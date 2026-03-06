import Link from "next/link";
import { Instagram, Twitter, Facebook, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-purple-900/30 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="font-serif text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Shroom Chic Creations
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              Psychedelic festival fashion and boho accessories. Express your
              inner magic with our unique print-on-demand designs.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-stone-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-purple-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-pink-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop"
                  className="text-stone-400 hover:text-white text-sm transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/drops"
                  className="text-stone-400 hover:text-white text-sm transition-colors"
                >
                  Limited Drops
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=Apparel"
                  className="text-stone-400 hover:text-white text-sm transition-colors"
                >
                  Apparel
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=Accessories"
                  className="text-stone-400 hover:text-white text-sm transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-stone-400 hover:text-white text-sm transition-colors"
                >
                  About Kristen
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-400 hover:text-white text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-stone-400 hover:text-white text-sm transition-colors"
                >
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-900/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Shroom Chic Creations. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-stone-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-stone-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
