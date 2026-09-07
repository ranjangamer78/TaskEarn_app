import React from 'react';
import {
  Download,
  Star,
  Users,
  Activity,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Sparkles,
  ArrowDownToLine,
  Flame,
  QrCode,
  Smartphone
} from 'lucide-react';
import { AppInfo } from '../types';
import { convertToDirectDriveDownload } from '../utils/driveDownloader';
import { TASKEARN_LOGO, TASKEARN_BANNER } from '../utils/assets';

interface HeroSectionProps {
  appInfo: AppInfo;
  driveUrl: string;
  onDownloadClick: () => void;
  onOpenDriveConfig: () => void;
  onShowQr: () => void;
  driveFileId: string | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  appInfo,
  driveUrl,
  onDownloadClick,
  onOpenDriveConfig,
  onShowQr,
  driveFileId,
}) => {
  const { directUrl } = convertToDirectDriveDownload(driveUrl);
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-24 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Verified Safety Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Release v{appInfo.version} • Google Play Protect Verified</span>
            </div>

            {/* App Logo + Title Header Group */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-1">
              {/* Normal App Logo */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-purple-600 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                <img
                  src={TASKEARN_LOGO}
                  alt="TaskEarn App Logo"
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-amber-400/50 object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-amber-400 text-black font-extrabold text-[10px] px-2 py-0.5 rounded-full shadow-md">
                  PRO
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
                    TaskEarn
                  </h1>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-300 text-xs font-bold">
                    Official APK
                  </span>
                </div>
                <p className="text-base sm:text-lg text-amber-300/90 font-medium">
                  Complete Tasks • Spin Wheel • Scratch Cards • Earn Real Cash
                </p>
                <p className="text-xs text-slate-400">
                  Withdraw real rupees directly to <strong className="text-white">eSewa</strong>, Free Fire Diamonds, & Robux with instant processing.
                </p>
              </div>
            </div>

            {/* Basic Information Bar (strictly required: Rate 4.5, User 11k, Active User 8k) */}
            <div
              id="stats-overview"
              className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 p-3.5 sm:p-4 rounded-2xl bg-[#121427]/90 border border-white/10 backdrop-blur-md shadow-xl"
            >
              {/* Rate 4.5 */}
              <div className="text-center p-2 rounded-xl bg-white/5">
                <div className="flex items-center justify-center gap-1 text-amber-400 font-extrabold text-base sm:text-lg">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.5</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5">
                  App Rating
                </div>
              </div>

              {/* Total User 11k */}
              <div className="text-center p-2 rounded-xl bg-white/5">
                <div className="flex items-center justify-center gap-1 text-cyan-400 font-extrabold text-base sm:text-lg">
                  <Users className="w-4 h-4" />
                  <span>11K+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5">
                  Total Users
                </div>
              </div>

              {/* Active User 8k */}
              <div className="text-center p-2 rounded-xl bg-white/5">
                <div className="flex items-center justify-center gap-1 text-emerald-400 font-extrabold text-base sm:text-lg">
                  <Activity className="w-4 h-4" />
                  <span>8K+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5">
                  Active Users
                </div>
              </div>

              {/* File Size */}
              <div className="text-center p-2 rounded-xl bg-white/5 hidden sm:block">
                <div className="text-white font-extrabold text-base sm:text-lg">
                  18.4 MB
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5">
                  APK Size
                </div>
              </div>

              {/* OS Version */}
              <div className="text-center p-2 rounded-xl bg-white/5 hidden sm:block">
                <div className="text-purple-400 font-extrabold text-base sm:text-lg">
                  Android 6.0+
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5">
                  Compatibility
                </div>
              </div>
            </div>

            {/* Download CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Primary Direct Download Button */}
              <a
                id="hero-download-apk-btn"
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                download={`TaskEarn_v${appInfo.version}.apk`}
                onClick={() => onDownloadClick()}
                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer group no-underline"
              >
                <div className="p-2 bg-black text-amber-400 rounded-xl group-hover:rotate-6 transition-transform">
                  <ArrowDownToLine className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase font-bold tracking-wider opacity-80 leading-none">
                    Fast Direct Download
                  </div>
                  <div className="text-lg font-black tracking-tight leading-tight">
                    Download TaskEarn APK
                  </div>
                </div>
                <span className="ml-auto text-xs bg-black/15 px-2 py-1 rounded-md font-mono font-bold">
                  v2.4.1
                </span>
              </a>

              {/* Google Drive Direct Download Button */}
              <a
                id="hero-drive-download-btn"
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                download={`TaskEarn_v${appInfo.version}.apk`}
                onClick={() => onDownloadClick()}
                className="py-4 px-5 rounded-2xl bg-[#171a36] hover:bg-[#1f2347] text-white border border-indigo-500/30 hover:border-indigo-500/60 font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer no-underline"
                title="Direct Download using Google Drive"
              >
                <HardDrive className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">
                    Google Drive
                  </div>
                  <div className="text-xs font-bold text-slate-100">
                    Direct Download
                  </div>
                </div>
              </a>

              {/* QR Code trigger for Mobile users */}
              <button
                id="hero-qr-code-btn"
                onClick={onShowQr}
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center justify-center"
                title="Scan QR Code to download on Mobile"
              >
                <QrCode className="w-5 h-5" />
              </button>
            </div>

            {/* Google Drive Status Bar & Config Trigger */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-[#0f1122] border border-white/5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  Google Drive Direct Download Engine: <strong className="text-emerald-400">Active</strong>
                </span>
                {driveFileId && (
                  <span className="font-mono text-[10px] text-slate-500 bg-black/40 px-1.5 py-0.5 rounded">
                    ID: {driveFileId.slice(0, 8)}...
                  </span>
                )}
              </div>
              <button
                onClick={onOpenDriveConfig}
                className="text-indigo-400 hover:text-indigo-300 font-semibold underline decoration-dotted text-xs cursor-pointer"
              >
                Change Drive Link
              </button>
            </div>

            {/* Guarantee Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Virus & Malware Free</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Root Required</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Fast eSewa Withdrawals</span>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase: App Banner & Floating Highlights */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/40 via-amber-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-70" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#111326] border border-white/10 p-4 shadow-2xl overflow-hidden space-y-4">
                {/* Visual Banner */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-purple-950/40">
                  <img
                    src={TASKEARN_BANNER}
                    alt="TaskEarn Gameplay & Rewards"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>Daily Hot Tasks</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/80 backdrop-blur-sm px-2 py-0.5 rounded-full font-bold">
                      Instant Payout
                    </span>
                  </div>
                </div>

                {/* Balance Snippet matching the screenshot */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1b1740] to-[#12132a] border border-indigo-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400">Total User Balance</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-amber-400 text-sm">★</span>
                      <span className="text-xl font-black text-white">90,165</span>
                      <span className="text-xs text-indigo-300 font-semibold">Coins</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-bold mt-0.5">
                      ≈ ₹901.65 (1,000 Coins = ₹10)
                    </div>
                  </div>
                  <button
                    onClick={onDownloadClick}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs shadow-md transition-colors"
                  >
                    Get App &gt;
                  </button>
                </div>

                {/* Quick 3 Feature Pills */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-2 rounded-xl bg-purple-950/40 border border-purple-800/30 text-slate-300">
                    <div className="text-sm mb-0.5">🎡</div>
                    <div className="font-bold text-white">Spin Wheel</div>
                  </div>
                  <div className="p-2 rounded-xl bg-rose-950/40 border border-rose-800/30 text-slate-300">
                    <div className="text-sm mb-0.5">🎴</div>
                    <div className="font-bold text-white">Scratch Card</div>
                  </div>
                  <div className="p-2 rounded-xl bg-cyan-950/40 border border-cyan-800/30 text-slate-300">
                    <div className="text-sm mb-0.5">👥</div>
                    <div className="font-bold text-white">Refer & Earn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
