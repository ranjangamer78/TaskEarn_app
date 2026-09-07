import React, { useState } from 'react';
import { Download, ShieldCheck, Settings, ExternalLink, Sparkles, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { directUrl } = convertToDirectDriveDownload(driveUrl);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0c16]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative">
            <img
              src={TASKEARN_LOGO}
              alt="TaskEarn Logo"
              className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl shadow-md shadow-amber-500/20 border border-amber-400/40 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#0b0c16] rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-xl text-white tracking-tight font-['Outfit']">
                TaskEarn
              </span>
              <span className="px-1.5 py-0.5 rounded-md bg-amber-400/20 border border-amber-400/30 text-[9px] sm:text-[10px] font-bold text-amber-400">
                v2.4.1
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium hidden xs:block">
              Official Android APK
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
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors flex items-center gap-1.5 min-h-[40px] min-w-[40px] justify-center cursor-pointer"
            title="Configure or Change Google Drive APK Link"
            aria-label="Configure Google Drive Link"
          >
            <Settings className="w-4 h-4 text-indigo-400" />
            <span className="hidden lg:inline">Drive Link</span>
          </button>

          {/* Primary Download Button in Nav */}
          <a
            id="nav-download-btn"
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="TaskEarn_v2.4.1.apk"
            onClick={() => onDownloadClick()}
            className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer no-underline whitespace-nowrap min-h-[40px]"
          >
            <Download className="w-4 h-4 text-black shrink-0" />
            <span className="hidden xs:inline sm:inline">Download</span>
            <span className="xs:hidden">APK</span>
            <span className="hidden sm:inline text-[10px] opacity-80 bg-black/10 px-1 rounded font-mono">
              18.4MB
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center justify-center min-h-[40px] min-w-[40px] cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-amber-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d1d] border-b border-white/10 px-4 py-4 space-y-2 animate-fade-in shadow-2xl">
          <a
            href="#stats-overview"
            onClick={handleNavClick}
            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-amber-400 transition-colors"
          >
            📊 App Stats & Overview
          </a>
          <a
            href="#app-screenshots"
            onClick={handleNavClick}
            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-amber-400 transition-colors"
          >
            📱 Interactive Screenshots
          </a>
          <a
            href="#app-features"
            onClick={handleNavClick}
            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-amber-400 transition-colors"
          >
            🪙 6 Ways to Earn (Features)
          </a>
          <a
            href="#install-guide"
            onClick={handleNavClick}
            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-amber-400 transition-colors"
          >
            🚀 How to Install Guide
          </a>
          <a
            href="#user-reviews"
            onClick={handleNavClick}
            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-amber-400 transition-colors"
          >
            ⭐️ User Reviews (4.5 ★)
          </a>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                handleNavClick();
                onOpenDriveConfig();
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-white/5 text-xs font-semibold text-indigo-300 flex items-center justify-center gap-2 border border-white/5"
            >
              <Settings className="w-4 h-4 text-indigo-400" />
              <span>Configure Google Drive Link</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
