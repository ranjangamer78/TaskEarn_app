import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  CheckCircle2,
  AlertTriangle,
  HardDrive,
  ShieldCheck,
  Smartphone,
  ExternalLink,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { AppInfo } from '../types';
import { triggerApkDownload, convertToDirectDriveDownload } from '../utils/driveDownloader';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  appInfo: AppInfo;
  driveUrl: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  appInfo,
  driveUrl,
}) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const { directUrl, altDirectUrl, viewUrl, isDrive } = convertToDirectDriveDownload(driveUrl);

  useEffect(() => {
    if (isOpen) {
      setDownloadStarted(true);
      // Immediately fire direct download on modal open
      triggerApkDownload(driveUrl, `TaskEarn_v${appInfo.version}.apk`);
    }
  }, [isOpen, driveUrl, appInfo.version]);

  const handleManualDownload = () => {
    setIsRetrying(true);
    triggerApkDownload(driveUrl, `TaskEarn_v${appInfo.version}.apk`);
    setTimeout(() => setIsRetrying(false), 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#111326] border border-white/10 p-6 sm:p-7 shadow-2xl space-y-5 text-white overflow-hidden">
        {/* Glowing aura */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-1 shadow-lg shadow-amber-500/20">
              <img
                src="/images/taskearn_logo.jpg"
                alt="TaskEarn Icon"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-lg text-white font-['Outfit']">
                  TaskEarn APK Download
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                v{appInfo.version} • {appInfo.size} • Verified Clean
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Box - Direct Download Dispatched */}
        <div className="p-4 rounded-2xl bg-[#0d0f20] border border-white/5 text-center space-y-3 relative z-10">
          <div className="space-y-1.5">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="font-extrabold text-base text-white">
              Direct Download Started!
            </div>
            <p className="text-xs text-slate-300">
              Your browser is downloading <span className="text-amber-400 font-bold font-mono">TaskEarn_v{appInfo.version}.apk</span> from Google Drive.
            </p>
            <p className="text-[11px] text-slate-400">
              Please check your browser notification bar or Downloads folder.
            </p>
          </div>

          {/* Source node badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[11px] text-slate-300 border border-white/5">
            <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
            <span>Google Drive Direct High-Speed Download</span>
          </div>
        </div>

        {/* Action Buttons for 100% Reliable Direct Access */}
        <div className="space-y-2.5 relative z-10">
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={`TaskEarn_v${appInfo.version}.apk`}
            onClick={handleManualDownload}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-black" />
            <span>Click Here to Direct Download APK</span>
          </a>

          {/* Alternate Google Drive Direct options if browser blocks popups */}
          <div className="flex gap-2">
            <a
              href={altDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Link Server 2</span>
            </a>

            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              <span>Open in Google Drive</span>
            </a>
          </div>
        </div>

        {/* APK Safety & Verification Box */}
        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 relative z-10">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Play Protect</div>
              <div className="text-[10px] text-slate-400">100% Virus Scanned</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-purple-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Android 6.0+</div>
              <div className="text-[10px] text-slate-400">All Devices Supported</div>
            </div>
          </div>
        </div>

        {/* Fast 3-Step Install Tip */}
        <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 space-y-1 relative z-10">
          <div className="font-bold text-white text-[11px]">How to install on Android:</div>
          <ol className="list-decimal list-inside space-y-0.5 text-[11px] text-slate-400">
            <li>Open the downloaded <strong className="text-slate-200">TaskEarn_v{appInfo.version}.apk</strong></li>
            <li>If prompted, tap <strong className="text-slate-200">"Allow from this source"</strong></li>
            <li>Tap <strong className="text-slate-200">"Install"</strong>, launch app & enter code <strong className="text-amber-400 font-mono">CB8SIF</strong>!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
