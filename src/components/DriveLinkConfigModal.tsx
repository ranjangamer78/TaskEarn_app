import React, { useState } from 'react';
import {
  X,
  HardDrive,
  Check,
  AlertCircle,
  Link as LinkIcon,
  ExternalLink,
  Download,
  Copy,
  Sparkles
} from 'lucide-react';
import {
  extractDriveFileId,
  convertToDirectDriveDownload,
  triggerApkDownload,
} from '../utils/driveDownloader';

interface DriveLinkConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUrl: string;
  onSaveUrl: (newUrl: string) => void;
}

export const DriveLinkConfigModal: React.FC<DriveLinkConfigModalProps> = ({
  isOpen,
  onClose,
  currentUrl,
  onSaveUrl,
}) => {
  const [inputUrl, setInputUrl] = useState(currentUrl);
  const [testSuccess, setTestSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fileId = extractDriveFileId(inputUrl);
  const { directUrl, isDrive } = convertToDirectDriveDownload(inputUrl);

  const handleSave = () => {
    onSaveUrl(inputUrl);
    onClose();
  };

  const handleTestDownload = async () => {
    setTestSuccess(true);
    await triggerApkDownload(inputUrl);
    setTimeout(() => setTestSuccess(false), 3000);
  };

  const handleCopyDirect = () => {
    navigator.clipboard?.writeText(directUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#111326] border border-white/10 p-6 shadow-2xl space-y-5 text-white">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white font-['Outfit']">
                Google Drive Direct Download Engine
              </h3>
              <p className="text-xs text-slate-400">
                Configure your custom APK Google Drive link
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions */}
        <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200 space-y-1.5">
          <div className="font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>How Google Drive Direct Download Works:</span>
          </div>
          <p className="text-slate-300">
            Paste any Google Drive sharing link (e.g., <code>https://drive.google.com/file/d/1A2B3C.../view?usp=sharing</code>).
            Our engine automatically extracts the <strong>File ID</strong> and generates a direct 1-click download link that bypasses preview screens!
          </p>
        </div>

        {/* Input Form */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-300">
            Google Drive APK Link or Direct URL:
          </label>
          <div className="relative">
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
              className="w-full bg-[#0a0c1a] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400 font-mono"
            />
          </div>
        </div>

        {/* Parsed ID & Direct URL Preview */}
        {fileId ? (
          <div className="p-3.5 rounded-2xl bg-[#0a0c1a] border border-emerald-500/30 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Google Drive File ID Detected:
              </span>
              <span className="font-mono text-white bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 text-[11px]">
                {fileId}
              </span>
            </div>

            <div className="text-[11px] text-slate-400 break-all font-mono bg-black/40 p-2 rounded-lg border border-white/5 flex items-center justify-between gap-2">
              <span className="truncate">{directUrl}</span>
              <button
                onClick={handleCopyDirect}
                className="p-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 shrink-0"
                title="Copy direct download link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        ) : inputUrl ? (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Using direct link mode (not recognized as Google Drive sharing ID).</span>
          </div>
        ) : null}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={handleTestDownload}
            className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>{testSuccess ? 'Testing Download...' : 'Test Download Now'}</span>
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all"
          >
            Save & Update Site
          </button>
        </div>
      </div>
    </div>
  );
};
