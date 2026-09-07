import React from 'react';
import { X, Smartphone, Download, QrCode, Check } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl: string;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose, downloadUrl }) => {
  if (!isOpen) return null;

  // Use a reliable QR Code generator image API for the download URL or current location
  const targetUrl = window.location.href;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    targetUrl
  )}&bgcolor=111326&color=facc15&margin=10`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-sm max-h-[92vh] overflow-y-auto scrollbar-thin rounded-2xl sm:rounded-3xl bg-[#111326] border border-white/10 p-5 sm:p-6 shadow-2xl space-y-4 sm:space-y-5 text-white text-center">
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="w-10 h-10 mx-auto rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center border border-amber-400/30">
            <QrCode className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-lg text-white font-['Outfit']">
            Scan to Download on Phone
          </h3>
          <p className="text-xs text-slate-400">
            Open your Android phone camera to scan & download APK directly.
          </p>
        </div>

        {/* QR Code Container */}
        <div className="p-3 bg-[#0d0e1d] rounded-2xl border border-white/10 inline-block shadow-inner">
          <img
            src={qrApiUrl}
            alt="Scan to Download TaskEarn APK"
            className="w-48 h-48 mx-auto rounded-xl object-contain"
          />
        </div>

        <div className="space-y-2 text-xs text-slate-400">
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold">
            <Check className="w-4 h-4" />
            <span>Fast Google Drive Direct Download</span>
          </div>
          <p className="text-[11px]">
            Compatibility: Android 6.0, 7, 8, 9, 10, 11, 12, 13, 14 & 15+
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};
