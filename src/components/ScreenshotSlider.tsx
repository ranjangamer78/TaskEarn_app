import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  Smartphone,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';
import { ScreenshotSlide } from '../types';

interface ScreenshotSliderProps {
  onDownloadClick: () => void;
}

const slides: ScreenshotSlide[] = [
  {
    id: 'home',
    title: 'Dashboard & Daily Streak',
    subtitle: 'Track your real balance (90,165 coins ≈ ₹901.65), complete daily tasks, and maintain streaks for increasing coin rewards.',
    category: 'Home Screen',
    screenType: 'home',
    accentColor: 'from-purple-500/20 to-indigo-500/10',
  },
  {
    id: 'earn',
    title: '6 Ways to Earn Every Day',
    subtitle: 'Promo coupon codes, daily bonus rewards, lucky spin wheel, video ads, scratch cards, and referral bonuses.',
    category: 'Earn Coins',
    screenType: 'earn',
    accentColor: 'from-amber-500/20 to-rose-500/10',
  },
  {
    id: 'wallet',
    title: 'Instant Cash Withdrawal',
    subtitle: 'Transparent conversion: 1,000 Coins = ₹10. Direct payouts via eSewa (Fixed 200 & 300 rupees), Free Fire Diamonds, & Robux.',
    category: 'Wallet & Payouts',
    screenType: 'wallet',
    accentColor: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 'refer',
    title: 'Unlimited Refer & Earn',
    subtitle: 'Share your personal invite code (CB8SIF). Earn 500 bonus coins for every friend who joins and completes tasks.',
    category: 'Invite Friends',
    screenType: 'refer',
    accentColor: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    id: 'banner',
    title: 'High-Reward Gaming Experience',
    subtitle: 'Clean visual gaming layout with authentic 3D graphics, secure rewards ledger, and Google Play Protect verification.',
    category: 'Official Artwork',
    screenType: 'banner',
    accentColor: 'from-blue-500/20 to-purple-500/10',
  },
];

export const ScreenshotSlider: React.FC<ScreenshotSliderProps> = ({ onDownloadClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = slides[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 4500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, currentIndex]);

  return (
    <section id="app-screenshots" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-4 h-4 text-purple-400" />
            <span>App Preview & Interactive Slides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif]">
            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">TaskEarn</span> Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Slide through real in-app screenshots. From the daily coin streak to instant eSewa cash withdrawals, see how easy it is to earn rewards.
          </p>
        </div>

        {/* Slider Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#111322]/80 backdrop-blur-md p-3 rounded-2xl border border-white/5 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full scrollbar-none">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                id={`slide-tab-${s.id}`}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  currentIndex === idx
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {s.category}
              </button>
            ))}
          </div>

          {/* Autoplay & Arrows */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              id="slider-autoplay-toggle"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs flex items-center gap-1.5 border border-white/5 transition-colors"
              title={isAutoPlay ? 'Pause auto slide' : 'Start auto slide'}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Auto</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>

            <button
              id="slider-prev-btn"
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white/5 hover:bg-purple-600 hover:text-white text-slate-300 border border-white/5 transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="slider-next-btn"
              onClick={handleNext}
              className="p-2 rounded-xl bg-white/5 hover:bg-purple-600 hover:text-white text-slate-300 border border-white/5 transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Stage: Phone Mockup + Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Phone Showcase */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Glow ring under phone */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-amber-500/20 rounded-[50px] blur-xl opacity-60 -z-10" />

            {/* If slide is Banner, show banner visual mockup or phone frame */}
            {currentSlide.screenType === 'banner' ? (
              <div className="w-[310px] sm:w-[340px] h-[640px] sm:h-[680px] bg-[#0d0e1e] rounded-[44px] p-3 border-[5px] border-[#20223d] shadow-2xl flex flex-col justify-between overflow-hidden relative">
                <div className="w-full h-full rounded-[34px] overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#161233] to-[#0a0a14] p-4 text-center">
                  <div className="pt-6">
                    <img
                      src="/images/taskearn_logo.jpg"
                      alt="TaskEarn Logo"
                      className="w-24 h-24 mx-auto rounded-3xl shadow-xl shadow-amber-500/20 border-2 border-amber-400/40 object-cover"
                    />
                    <div className="mt-4 font-extrabold text-2xl text-white font-['Outfit']">
                      TaskEarn 3D Edition
                    </div>
                    <div className="text-xs text-amber-400 font-semibold mt-1">
                      Play • Complete • Earn Real Cash
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg my-2">
                    <img
                      src="/images/taskearn_banner.jpg"
                      alt="TaskEarn Banner Promo"
                      className="w-full h-44 object-cover"
                    />
                  </div>

                  <div className="space-y-2 pb-4">
                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/30 text-[11px]">
                        <div className="text-slate-400">Total Balance</div>
                        <div className="font-bold text-amber-400 text-sm">90,165 Coins</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/30 text-[11px]">
                        <div className="text-slate-400">Cash Value</div>
                        <div className="font-bold text-emerald-400 text-sm">≈ ₹901.65</div>
                      </div>
                    </div>
                    <button
                      onClick={onDownloadClick}
                      className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 hover:opacity-95 transition-opacity"
                    >
                      Download App Now
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <PhoneFrame
                activeScreen={currentSlide.screenType}
                onScreenChange={(screen) => {
                  const targetIdx = slides.findIndex((s) => s.screenType === screen);
                  if (targetIdx !== -1) setCurrentIndex(targetIdx);
                }}
              />
            )}
          </div>

          {/* Right Column: Information & Feature Breakdown for Current Slide */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Slide {currentIndex + 1} of {slides.length}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              {currentSlide.title}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              {currentSlide.subtitle}
            </p>

            {/* Detailed Feature Points based on slide */}
            <div className="space-y-3 pt-2">
              {currentSlide.screenType === 'home' && (
                <>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141629] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                      ★
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Live Coin Ledger</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Track every earned coin with instant rupee conversion (1,000 Coins = ₹10).
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141629] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm shrink-0">
                      🔥
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">5-Day Multiplier Streak</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Claim daily bonuses that grow from 100 to 500 coins every single day.
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentSlide.screenType === 'earn' && (
                <>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141629] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm shrink-0">
                      🎡
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Spin Wheel & Scratch Cards</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Daily free chances to win lucky jackpots, bonus tickets, and multiplier rewards.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141629] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                      🎟️
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Promo Coupon Redemption</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Enter secret promotional codes distributed on official Telegram and social channels.
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentSlide.screenType === 'wallet' && (
                <>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141629] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                      🇳🇵
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Direct eSewa Withdrawals</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Fixed 200 & 300 Rupees options with direct eSewa mobile number transfer.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141629] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0">
                      💎
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Gaming Credits & Gift Cards</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Redeem Free Fire Diamonds, Robux, and digital gift vouchers instantly.
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentSlide.screenType === 'refer' && (
                <>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141629] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm shrink-0">
                      👥
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Dual Referral Bonus</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        You receive 500 coins and your invited friend receives 200 coins immediately.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141629] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm shrink-0">
                      ⚡
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Unlimited Earnings</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        No cap on how many friends you can invite. Share easily on WhatsApp, Telegram, and SMS.
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentSlide.screenType === 'banner' && (
                <>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141629] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">100% Virus & Malware Free</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Clean APK package, independently verified and scanned for zero malicious code.
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Slide Navigation Indicator Dots */}
            <div className="flex items-center gap-2 pt-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx
                      ? 'w-8 bg-amber-400'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* CTA in panel */}
            <div className="pt-2">
              <button
                id="slide-download-action-btn"
                onClick={onDownloadClick}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold rounded-xl text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Download TaskEarn APK (v2.4.1)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
