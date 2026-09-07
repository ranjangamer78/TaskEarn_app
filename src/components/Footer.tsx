import React from 'react';
import { Download, ShieldCheck, HardDrive, Heart } from 'lucide-react';
import { AppInfo } from '../types';
import { TASKEARN_LOGO } from '../utils/assets';

interface FooterProps {
  appInfo: AppInfo;
  onDownloadClick: () => void;
  onOpenDriveConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  appInfo,
  onDownloadClick,
  onOpenDriveConfig,
}) => {
  return (
    <footer className="bg-[#070810] border-t border-white/10 pt-14 pb-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={TASKEARN_LOGO}
                alt="TaskEarn Logo"
                className="w-10 h-10 rounded-2xl border border-amber-400/40 object-cover"
              />
              <span className="font-extrabold text-xl text-white font-['Outfit']">
                TaskEarn
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-xs leading-relaxed">
              TaskEarn is a premier mobile reward application. Complete micro-tasks, scratch cards, spin wheel, and cash out coins directly to eSewa, Free Fire Diamonds, and gift vouchers.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Google Play Protect Safe • Virus Free Certified</span>
            </div>
          </div>

          {/* Download & Links Col */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3.5">
            <button
              onClick={onOpenDriveConfig}
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <HardDrive className="w-4 h-4 text-emerald-400" />
              <span>Google Drive Link Config</span>
            </button>

            <button
              onClick={onDownloadClick}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-black" />
              <span>Download APK (18.4MB)</span>
            </button>
          </div>
        </div>

        {/* Legal Disclaimer & App Specs */}
        <div className="p-4 rounded-2xl bg-[#0e1022] border border-white/5 space-y-2 text-[11px] text-slate-500 leading-relaxed">
          <div className="font-bold text-slate-400 text-xs">Application Specifications:</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-400">
            <div>Package: <span className="text-white font-mono">com.taskearn.rewards</span></div>
            <div>Version: <span className="text-white font-mono">2.4.1 (Stable)</span></div>
            <div>Architecture: <span className="text-white font-mono">arm64-v8a / universal</span></div>
            <div>Minimum OS: <span className="text-white font-mono">Android 6.0+</span></div>
          </div>
          <p className="pt-1">
            Disclaimer: TaskEarn is a free-to-play rewards platform. All trademarks, service marks, trade names, and logos referenced are the property of their respective owners (eSewa, Garena Free Fire, Roblox).
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} TaskEarn Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Official APK Distribution Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
