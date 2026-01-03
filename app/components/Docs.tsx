"use client";

import { useState, useEffect } from 'react';
import { ArrowLeft, Book, Code, Shield, Zap, Globe, Layout, Terminal, Server, HelpCircle, Heart, Cookie, Activity } from 'lucide-react';

export default function Docs() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'features', label: 'Features & Privacy' },
    { id: 'how-it-works', label: 'How it Works' },
    { id: 'install', label: 'Installation' },
    { id: 'configuration', label: 'Configuration' },
    { id: 'advanced', label: 'Advanced / React' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-gray-300 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <button 
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-orange-500 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="grid lg:grid-cols-[240px_1fr] gap-12">
          
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block sticky top-32 h-fit">
            <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <Book size={18} className="text-orange-500" />
              Contents
            </h3>
            <ul className="space-y-1 border-l border-dark-800 ml-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`block text-left w-full pl-4 py-1.5 border-l -ml-px transition-colors ${
                      activeSection === item.id 
                        ? 'border-orange-500 text-orange-500 font-medium bg-orange-500/5 rounded-r' 
                        : 'border-transparent text-gray-400 hover:border-orange-500 hover:text-orange-500'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="space-y-20">
            
            {/* 1. Introduction */}
            <section id="intro" className="scroll-mt-32">
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
                Introduction
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                OpenCount is a simple, lightweight, privacy-friendly visitor counter widget that anyone can embed on their website. 
                It helps you display total visits publicly to boost credibility and social proof, without collecting personal data.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {['Free forever', 'No registration', 'Open-source', 'No cookies*'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-dark-900 border border-dark-800 text-sm text-gray-400">
                    ✔ {tag}
                  </span>
                ))}
              </div>

              <div className="bg-dark-900/50 border border-dark-800 rounded-xl p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Activity size={20} className="text-orange-500" />
                    What OpenCount Does
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Shows your site visit count publicly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Tracks new visitors with a 10-minute cooldown.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Easy to embed (just one script tag).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Edge-deployed & ultra-fast.</span>
                    </li>
                </ul>
              </div>
            </section>

            {/* 2. Features & Privacy */}
            <section id="features" className="scroll-mt-32">
              <h2 className="text-3xl font-display font-bold text-white mb-8">Features & Privacy</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-dark-900 border border-dark-800 rounded-xl">
                  <Shield className="text-orange-500 mb-4" size={28} />
                  <h3 className="text-white font-bold text-lg mb-3">Privacy-First & GDPR Friendly</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• No personal data collected</li>
                    <li>• No IP storage or profiling</li>
                    <li>• No persistent cross-site tracking</li>
                    <li>• Users remain completely anonymous</li>
                  </ul>
                </div>

                <div className="p-6 bg-dark-900 border border-dark-800 rounded-xl">
                  <Zap className="text-orange-500 mb-4" size={28} />
                  <h3 className="text-white font-bold text-lg mb-3">Ultra Lightweight</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Less than 2 KB gzipped</li>
                    <li>• Loads instantly via CDN</li>
                    <li>• Works on slow connections</li>
                    <li>• Zero impact on Core Web Vitals</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-dark-900 border border-dark-800 rounded-xl">
                 <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <Globe size={20} className="text-orange-500" />
                    Works Everywhere
                 </h3>
                 <p className="text-sm text-gray-400 mb-4">
                     Compatible with HTML, WordPress, Shopify, Webflow, Wix, React, Next.js, and more. 
                     <br/><span className="italic opacity-60">Note: Does not work on platforms that block JavaScript (e.g., eBay, Facebook posts).</span>
                 </p>
              </div>
            </section>

            {/* 3. How it Works */}
            <section id="how-it-works" className="scroll-mt-32">
               <h2 className="text-3xl font-display font-bold text-white mb-6">How OpenCount Works</h2>
               <div className="space-y-4">
                   <div className="flex gap-4">
                       <div className="flex-none w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center text-orange-500 font-bold border border-dark-700">1</div>
                       <div>
                           <h4 className="text-white font-medium mb-1">Load & Check</h4>
                           <p className="text-sm text-gray-400">When a visitor loads a page, we check for a temporary 10-minute cookie (<code>oc-session</code>).</p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="flex-none w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center text-orange-500 font-bold border border-dark-700">2</div>
                       <div>
                           <h4 className="text-white font-medium mb-1">Count Increment</h4>
                           <p className="text-sm text-gray-400">If the visitor is new or returning after 10 minutes, the global counter for your domain increases by 1.</p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="flex-none w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center text-orange-500 font-bold border border-dark-700">3</div>
                       <div>
                           <h4 className="text-white font-medium mb-1">Display</h4>
                           <p className="text-sm text-gray-400">The widget displays the total visit count. The key for your website is automatically generated from your domain.</p>
                       </div>
                   </div>
               </div>
               
               <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg text-sm text-orange-200">
                   <strong>⚠️ Important:</strong> OpenCount only counts visitors on pages where the widget is embedded. To track your entire site, place the widget on every page (e.g., in a common header/footer).
               </div>
            </section>

            {/* 4. Installation */}
            <section id="install" className="scroll-mt-32">
              <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Code className="text-orange-500" />
                How to Embed
              </h2>
              <p className="text-gray-400 mb-6">
                Add this snippet anywhere inside your HTML <code className="text-orange-400 bg-dark-800 px-1 py-0.5 rounded text-xs">&lt;body&gt;</code> or <code className="text-orange-400 bg-dark-800 px-1 py-0.5 rounded text-xs">&lt;head&gt;</code>.
              </p>

              <div className="bg-dark-900 rounded-xl border border-dark-800 overflow-hidden mb-8">
                <div className="px-6 py-4 border-b border-dark-800 bg-dark-950/50 flex items-center justify-between">
                  <span className="font-bold text-white">Standard Embed</span>
                  <span className="text-xs text-gray-500 font-mono">HTML</span>
                </div>
                <div className="p-6 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
{`<script 
  src="https://cdn.opencount.com/widget.js"
  data-domain="yourwebsite.com"
  data-style="bubble-1"
  defer>
</script>`}
                    </pre>
                </div>
              </div>
            </section>

            {/* 5. Configuration */}
            <section id="configuration" className="scroll-mt-32">
              <h2 className="text-3xl font-display font-bold text-white mb-6">Configuration Options</h2>
              
              <div className="overflow-x-auto mb-10">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-dark-900 text-gray-400 font-medium">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg border-b border-dark-800">Attribute</th>
                      <th className="px-4 py-3 border-b border-dark-800">Type</th>
                      <th className="px-4 py-3 border-b border-dark-800">Required</th>
                      <th className="px-4 py-3 rounded-tr-lg border-b border-dark-800">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-800">
                    <tr>
                      <td className="px-4 py-3 font-mono text-orange-400">src</td>
                      <td className="px-4 py-3 text-gray-500">string</td>
                      <td className="px-4 py-3 text-white">Yes</td>
                      <td className="px-4 py-3 text-gray-400">CDN URL for the widget.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-orange-400">data-domain</td>
                      <td className="px-4 py-3 text-gray-500">string</td>
                      <td className="px-4 py-3 text-white">Yes</td>
                      <td className="px-4 py-3 text-gray-400">Your domain name (generates unique key).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-orange-400">data-style</td>
                      <td className="px-4 py-3 text-gray-500">string</td>
                      <td className="px-4 py-3 text-gray-500">No</td>
                      <td className="px-4 py-3 text-gray-400">Visual style ID.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-orange-400">data-position</td>
                      <td className="px-4 py-3 text-gray-500">string</td>
                      <td className="px-4 py-3 text-gray-500">No</td>
                      <td className="px-4 py-3 text-gray-400">(Coming soon) Fixed positioning.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Widget Styles</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                 {[
                     {name: 'Bubble 1', val: 'bubble-1'},
                     {name: 'Bubble 2', val: 'bubble-2'},
                     {name: 'Retro Pixel', val: 'retro'},
                     {name: 'Cyber Neon', val: 'cyber'},
                     {name: 'Minimal Dot', val: 'minimal'},
                     {name: 'Invisible', val: 'invisible (soon)'},
                 ].map(s => (
                     <div key={s.val} className="p-3 bg-dark-900 border border-dark-800 rounded text-center">
                         <div className="text-white font-medium">{s.name}</div>
                         <code className="text-xs text-orange-400">{s.val}</code>
                     </div>
                 ))}
              </div>
            </section>

            {/* 6. Advanced / React */}
            <section id="advanced" className="scroll-mt-32">
                <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                    <Terminal className="text-orange-500" />
                    Advanced Usage
                </h2>
                
                <h3 className="text-lg font-bold text-white mb-4">React / Next.js Implementation</h3>
                <p className="text-gray-400 text-sm mb-4">Since OpenCount is a standard script, you can load it in a `useEffect` hook or using the Next.js Script component.</p>
                
                <div className="bg-dark-900 rounded-xl border border-dark-800 overflow-hidden mb-8">
                    <div className="p-6 overflow-x-auto">
                        <pre className="text-sm font-mono text-gray-300">
{`useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://cdn.opencount.com/widget.js";
  script.setAttribute("data-domain", "mysite.com");
  script.setAttribute("data-style", "bubble-2");
  script.defer = true;
  document.body.appendChild(script);

  // Cleanup to prevent duplicates
  return () => {
    document.body.removeChild(script);
  }
}, []);`}
                        </pre>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 bg-dark-900 border border-dark-800 rounded-xl">
                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                            <Cookie size={16} className="text-orange-500" />
                            About the Cookie
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            OpenCount uses one temporary cookie: <strong>oc-session</strong>. <br/>
                            It expires in <strong>10 minutes</strong> and contains only a random timestamp. 
                            Its sole purpose is to prevent spam refreshes from inflating the count.
                        </p>
                    </div>
                    
                    <div className="p-5 bg-dark-900 border border-dark-800 rounded-xl">
                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                            <Server size={16} className="text-orange-500" />
                            API (Developers)
                        </h4>
                        <div className="space-y-2 text-sm text-gray-400 font-mono">
                            <div className="p-2 bg-dark-950 rounded border border-dark-800">
                                <span className="text-green-400">GET</span> /api/increment?domain=site.com
                            </div>
                            <div className="p-2 bg-dark-950 rounded border border-dark-800">
                                <span className="text-blue-400">GET</span> /api/count?domain=site.com
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section id="faq" className="scroll-mt-32">
                <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                    <HelpCircle className="text-orange-500" />
                    FAQ
                </h2>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                        <h4 className="text-white font-bold mb-2">Is OpenCount really free?</h4>
                        <p className="text-gray-400 text-sm">Yes, 100% free. No hidden costs. Open-source and community supported.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-2">Do I need to register?</h4>
                        <p className="text-gray-400 text-sm">No signup, no email, nothing. Just generate your key or use your domain.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-2">Does it collect personal data?</h4>
                        <p className="text-gray-400 text-sm">No. We do not store IPs or persistent identifiers.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-2">Can I hide the counter?</h4>
                        <p className="text-gray-400 text-sm">Invisible mode is coming soon. For now, use the minimal style.</p>
                    </div>
                </div>

                <div className="mt-16 border-t border-dark-800 pt-10">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">Why I Built OpenCount</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Because not every website needs heavy analytics tools like Google Analytics or Plausible. 
                        Sometimes you just want a simple, honest way to show your visitors count — nothing more.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-dark-900 hover:bg-dark-800 text-white rounded-lg transition-colors border border-dark-700">
                            <Heart size={16} className="text-red-500" />
                            Support on GitHub
                        </a>
                    </div>
                </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};