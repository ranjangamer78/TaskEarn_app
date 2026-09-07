import React from 'react';
import { Download, ShieldCheck, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';

interface InstallGuideProps {
  onDownloadClick: () => void;
}

export const InstallGuide: React.FC<InstallGuideProps> = ({ onDownloadClick }) => {
  return (
    <section id="install-guide" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-4 h-4" />
            <span>Simple Setup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            How to Install TaskEarn APK on Android
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Installing via direct APK takes less than 30 seconds. Follow these 3 easy steps:
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="rounded-3xl bg-[#121427] border border-white/10 p-7 relative flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-2xl bg-amber-400 text-black font-black text-lg flex items-center justify-center shadow-lg shadow-amber-400/20">
                1
              </span>
              <Download className="w-6 h-6 text-amber-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Download APK</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Click the Download button. The official <strong className="text-slate-200">TaskEarn_v2.4.1.apk</strong> file will download directly through Google Drive / our high-speed server.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-slate-400 font-mono">
              File: TaskEarn_v2.4.1.apk (18.4 MB)
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-3xl bg-[#121427] border border-white/10 p-7 relative flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-2xl bg-purple-600 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-purple-600/30">
                2
              </span>
              <ShieldCheck className="w-6 h-6 text-purple-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Allow Installation</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                If your Android browser prompts <span className="text-slate-200">"Install unknown apps"</span>, go to Settings and toggle <span className="text-emerald-400 font-semibold">"Allow from this source"</span>. TaskEarn is 100% clean and scanned by Play Protect.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Verified Play Protect Safe</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-3xl bg-[#121427] border border-white/10 p-7 relative flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-2xl bg-emerald-500 text-black font-black text-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                3
              </span>
              <CheckCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Open & Start Earning</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Launch TaskEarn, sign in with your phone or email, claim your Day 1 streak coin bonus, and enter promo code <span className="text-amber-400 font-bold font-mono">CB8SIF</span> for instant reward coins!
              </p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] text-amber-400 font-semibold">
              Bonus Code: CB8SIF (200 Free Coins)
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Start Step 1: Download APK Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
