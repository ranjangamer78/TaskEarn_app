import React from 'react';
import { Download, ShieldCheck, Settings, ExternalLink, Sparkles } from 'lucide-react';
import { convertToDirectDriveDownload } from '../utils/driveDownloader';
import { TASKEARN_LOGO } from '../utils/assets';

interface NavbarProps {
  onDownloadClick: () => void;
  onOpenDriveConfig: () => void;
  driveUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onDownloadClick,
  onOpenDriveConfig,
  driveUrl,
}) => {
  const { directUrl } = convertToDirectDriveDownload(driveUrl);
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0c16]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={TASKEARN_LOGO}
              alt="TaskEarn Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl shadow-md shadow-amber-500/20 border border-amber-400/40 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0b0c16] rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight font-['Outfit']">
                TaskEarn
              </span>
              <span className="px-1.5 py-0.5 rounded-md bg-amber-400/20 border border-amber-400/30 text-[10px] font-bold text-amber-400">
                APK
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Official Android Download
            </div>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <a href="#stats-overview" className="hover:text-amber-400 transition-colors">
            App Stats
          </a>
          <a href="#app-screenshots" className="hover:text-amber-400 transition-colors">
            Screenshots
          </a>
          <a href="#app-features" className="hover:text-amber-400 transition-colors">
            Features
          </a>
          <a href="#install-guide" className="hover:text-amber-400 transition-colors">
            How to Install
          </a>
          <a href="#user-reviews" className="hover:text-amber-400 transition-colors">
            Reviews (4.5★)
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Drive Link Config Button */}
          <button
            id="nav-drive-config-btn"
            onClick={onOpenDriveConfig}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors flex items-center gap-1.5"
            title="Configure or Change Google Drive APK Link"
          >
            <Settings className="w-4 h-4 text-indigo-400" />
            <span className="hidden lg:inline">Google Drive Link</span>
          </button>

          {/* Primary Download Button in Nav */}
          <a
            id="nav-download-btn"
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="TaskEarn_v2.4.1.apk"
            onClick={() => onDownloadClick()}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center gap-2 cursor-pointer no-underline"
          >
            <Download className="w-4 h-4 text-black" />
            <span>Download APK</span>
            <span className="hidden sm:inline text-[10px] opacity-80 bg-black/10 px-1 rounded font-mono">
              18.4MB
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
