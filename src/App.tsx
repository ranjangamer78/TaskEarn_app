import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScreenshotSlider } from './components/ScreenshotSlider';
import { FeaturesSection } from './components/FeaturesSection';
import { InstallGuide } from './components/InstallGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { DriveLinkConfigModal } from './components/DriveLinkConfigModal';
import { QrModal } from './components/QrModal';
import { AppInfo } from './types';
import { extractDriveFileId, triggerApkDownload, convertToDirectDriveDownload } from './utils/driveDownloader';
import { Download, HardDrive } from 'lucide-react';
import { APP_CONFIG } from './config';

const DEFAULT_DRIVE_URL = APP_CONFIG.GOOGLE_DRIVE_APK_URL;

export default function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isDriveConfigOpen, setIsDriveConfigOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  // Read saved Google Drive link from localStorage or default to APP_CONFIG
  const [driveUrl, setDriveUrl] = useState<string>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('taskearn_drive_url') : null;
      // If empty or if it contains the old demo dummy id, use the real APP_CONFIG url
      if (!saved || saved.includes('1wXyZaBcDeFgHiJkLmNoPqRsTuVwXyZaB')) {
        return APP_CONFIG.GOOGLE_DRIVE_APK_URL;
      }
      return saved;
    } catch (e) {
      console.warn('Unable to read localStorage:', e);
      return APP_CONFIG.GOOGLE_DRIVE_APK_URL;
    }
  });

  const appInfo: AppInfo = {
    name: 'TaskEarn',
    tagline: 'Complete Tasks, Spin the Wheel & Earn Real Cash Daily',
    version: '2.4.1',
    size: '18.4 MB',
    rating: 4.5,
    totalReviews: '6,420+',
    totalUsers: '11K+',
    activeUsers: '8K+',
    androidVersion: 'Android 6.0+',
    updatedAt: 'September 2026',
    packageName: 'com.taskearn.rewards',
    safetyScore: '100% Clean',
    defaultDriveUrl: driveUrl,
  };

  const handleSaveDriveUrl = (newUrl: string) => {
    const trimmed = newUrl.trim() || DEFAULT_DRIVE_URL;
    setDriveUrl(trimmed);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('taskearn_drive_url', trimmed);
      }
    } catch (e) {
      console.warn('Unable to save to localStorage:', e);
    }
  };

  const driveFileId = extractDriveFileId(driveUrl);
  const { directUrl } = convertToDirectDriveDownload(driveUrl);

  const handleDownloadClick = () => {
    // 1. Instantly trigger the direct APK download without waiting
    triggerApkDownload(driveUrl, `TaskEarn_v${appInfo.version}.apk`);
    // 2. Open download status modal with direct secondary links & tips
    setIsDownloadModalOpen(true);
  };

  // Monitor scroll for mobile floating download button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c16] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-400 selection:text-black">
      {/* Top Navigation */}
      <Navbar
        onDownloadClick={handleDownloadClick}
        onOpenDriveConfig={() => setIsDriveConfigOpen(true)}
        driveUrl={driveUrl}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          appInfo={appInfo}
          driveUrl={driveUrl}
          onDownloadClick={handleDownloadClick}
          onOpenDriveConfig={() => setIsDriveConfigOpen(true)}
          onShowQr={() => setIsQrModalOpen(true)}
          driveFileId={driveFileId}
        />

        {/* Screenshots Slider: app image one by one slide */}
        <ScreenshotSlider
          onDownloadClick={handleDownloadClick}
        />

        {/* Features Showcase */}
        <FeaturesSection
          onDownloadClick={handleDownloadClick}
        />

        {/* 3-Step Install Guide */}
        <InstallGuide
          onDownloadClick={handleDownloadClick}
        />

        {/* Ratings (4.5★) & Community Reviews */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer
        appInfo={appInfo}
        onDownloadClick={handleDownloadClick}
        onOpenDriveConfig={() => setIsDriveConfigOpen(true)}
      />

      {/* Floating Bottom Download Bar (Mobile/Tablet) */}
      {showFloatingCta && (
        <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden animate-fade-in">
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={`TaskEarn_v${appInfo.version}.apk`}
            onClick={handleDownloadClick}
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-black font-black text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/40 flex items-center justify-center gap-2.5 border border-amber-300 cursor-pointer no-underline"
          >
            <Download className="w-4 h-4 text-black" />
            <span>Download TaskEarn APK (18.4MB)</span>
          </a>
        </div>
      )}

      {/* Download Progress & Trigger Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        appInfo={appInfo}
        driveUrl={driveUrl}
      />

      {/* Google Drive Link Configurator Modal */}
      <DriveLinkConfigModal
        isOpen={isDriveConfigOpen}
        onClose={() => setIsDriveConfigOpen(false)}
        currentUrl={driveUrl}
        onSaveUrl={handleSaveDriveUrl}
      />

      {/* QR Code Modal for Desktop to Mobile */}
      <QrModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        downloadUrl={driveUrl}
      />
    </div>
  );
}
