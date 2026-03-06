"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SketchPicker } from "react-color";
import { Settings, Save, RefreshCw } from "lucide-react";

export default function Admin() {
  const { theme, updateTheme } = useTheme();
  const [localTheme, setLocalTheme] = useState(theme);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    updateTheme(localTheme);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const handleReset = () => {
    const defaultTheme = {
      primaryColor: "#a855f7",
      secondaryColor: "#ec4899",
      fontFamily: "Inter, sans-serif",
      particleDensity: 50,
    };
    setLocalTheme(defaultTheme);
    updateTheme(defaultTheme);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 flex items-center gap-4"
      >
        <div className="p-3 bg-purple-900/30 rounded-2xl border border-purple-500/50">
          <Settings className="w-8 h-8 text-purple-400" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
            Site Customizer
          </h1>
          <p className="text-stone-400">
            Adjust the vibe of your storefront. Changes apply globally.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-stone-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(168,85,247,0.1)]"
        >
          <h2 className="text-xl font-semibold text-stone-200 mb-6 border-b border-purple-900/30 pb-4">
            Theme Colors
          </h2>
          
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-4">Primary Accent (Neon Glow)</label>
              <SketchPicker
                color={localTheme.primaryColor}
                onChangeComplete={(color) => setLocalTheme({ ...localTheme, primaryColor: color.hex })}
                className="!bg-stone-950 !border-purple-900/50 !shadow-none"
                styles={{
                  default: {
                    picker: { background: '#1c1917', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '1rem' },
                  }
                }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-4">Secondary Accent (Gradients)</label>
              <SketchPicker
                color={localTheme.secondaryColor}
                onChangeComplete={(color) => setLocalTheme({ ...localTheme, secondaryColor: color.hex })}
                className="!bg-stone-950 !border-purple-900/50 !shadow-none"
                styles={{
                  default: {
                    picker: { background: '#1c1917', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '1rem' },
                  }
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-stone-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
            <h2 className="text-xl font-semibold text-stone-200 mb-6 border-b border-purple-900/30 pb-4">
              Typography & Effects
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Body Font Family</label>
                <select
                  value={localTheme.fontFamily}
                  onChange={(e) => setLocalTheme({ ...localTheme, fontFamily: e.target.value })}
                  className="w-full bg-stone-950/50 border border-purple-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                >
                  <option value="Inter, sans-serif">Inter (Modern)</option>
                  <option value="'Playfair Display', serif">Playfair Display (Editorial)</option>
                  <option value="'Space Grotesk', sans-serif">Space Grotesk (Tech)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Particle Density (Background Effects)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={localTheme.particleDensity}
                  onChange={(e) => setLocalTheme({ ...localTheme, particleDensity: parseInt(e.target.value) })}
                  className="w-full accent-purple-500"
                />
                <div className="flex justify-between text-xs text-stone-500 mt-2">
                  <span>Minimal</span>
                  <span>Heavy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
            <h2 className="text-xl font-semibold text-stone-200 mb-6 border-b border-purple-900/30 pb-4">
              CMS Integrations
            </h2>
            <p className="text-stone-400 text-sm mb-4">
              Connect your headless CMS to manage products, drops, and the About page without code.
            </p>
            <div className="space-y-4">
              <button className="w-full py-3 bg-stone-950 border border-purple-500/30 rounded-xl text-stone-300 hover:text-white hover:border-purple-500 transition-all flex items-center justify-center gap-2">
                Connect Sanity.io
              </button>
              <button className="w-full py-3 bg-stone-950 border border-purple-500/30 rounded-xl text-stone-300 hover:text-white hover:border-purple-500 transition-all flex items-center justify-center gap-2">
                Connect Netlify CMS
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium text-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSaving ? "Saving..." : <><Save className="w-5 h-5" /> Save Changes</>}
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-4 bg-stone-800 border border-purple-500/30 text-stone-300 rounded-xl font-medium hover:bg-stone-700 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              title="Reset to default"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
