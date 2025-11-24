
import React from 'react';
import { Coffee, Heart, Star } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <section className="relative py-32 bg-dark-900 border-t border-dark-800 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-8">
            <Heart size={14} className="fill-orange-400 animate-pulse" />
            <span>Community Supported</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
          100% Free & Open Source.
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
           OpenCount is a passion project built to keep the web fast, private, and accessible. 
           We rely on community support to cover server costs and keep the project moving forward.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Buy Me A Coffee Button */}
            <a 
                href="https://buymeacoffee.com" 
                target="_blank" 
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFDD00] text-black rounded-xl font-bold text-lg hover:transform hover:-translate-y-1 transition-all shadow-xl hover:shadow-[#FFDD00]/20 min-w-[240px]"
            >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <Coffee size={24} className="group-hover:-rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                <span>Buy me a coffee</span>
            </a>

            {/* GitHub Button */}
             <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-dark-800 text-white rounded-xl font-bold text-lg border border-dark-700 hover:bg-dark-700 hover:border-dark-600 transition-all min-w-[240px]"
            >
                <Star size={22} className="text-gray-400 group-hover:text-yellow-400 transition-colors" />
                <span>Star on GitHub</span>
            </a>
        </div>
      </div>
    </section>
  );
};