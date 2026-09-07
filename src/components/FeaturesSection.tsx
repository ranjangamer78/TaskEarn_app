import React from 'react';
import {
  Flame,
  Sparkles,
  Layers,
  Play,
  Ticket,
  Users,
  Wallet,
  CheckCircle2,
  Gift,
  Coins
} from 'lucide-react';
import { FeatureItem } from '../types';

interface FeaturesSectionProps {
  onDownloadClick: () => void;
}

const features: FeatureItem[] = [
  {
    id: 'streak',
    title: 'Daily Streak & Multipliers',
    description: 'Log in daily to claim escalating coin rewards starting at 100 on Day 1 up to 500+ coins on Day 5 and beyond.',
    icon: '🔥',
    tag: 'Guaranteed Reward',
    stat: 'Up to 500 Coins/Day',
  },
  {
    id: 'spin',
    title: 'Lucky Spin Wheel',
    description: 'Spin the high-win reward wheel every few hours. Hit massive jackpot multipliers and bonus tickets.',
    icon: '🎡',
    tag: 'Instant Win',
    stat: '100% Win Rate',
  },
  {
    id: 'scratch',
    title: 'Scratch Cards',
    description: 'Swipe to scratch digital golden cards and uncover surprise coin bundles and extra ticket rewards.',
    icon: '🎴',
    tag: 'Exciting Mini-Game',
    stat: 'Uncapped Coins',
  },
  {
    id: 'ads',
    title: 'Watch & Earn Videos',
    description: 'Watch short sponsored video clips during your free time and earn passive coins credited directly to your balance.',
    icon: '▶️',
    tag: 'Passive Earning',
    stat: 'Unlimited Daily Ads',
  },
  {
    id: 'coupon',
    title: 'Promo Coupon Codes',
    description: 'Redeem secret promo codes released on community channels for instant lump-sum coin drops.',
    icon: '🎟️',
    tag: 'Community Drops',
    stat: 'Bonus Codes Weekly',
  },
  {
    id: 'withdraw',
    title: 'Instant eSewa & Gift Cards',
    description: 'Transparent 1,000 Coins = ₹10 exchange. Withdraw straight to your eSewa mobile account, Free Fire Diamonds, or Robux.',
    icon: '🇳🇵',
    tag: 'Real Cash Payout',
    stat: 'Fast eSewa Processing',
  },
];

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onDownloadClick }) => {
  return (
    <section id="app-features" className="py-16 md:py-24 relative overflow-hidden bg-[#0c0d1e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Coins className="w-4 h-4" />
            <span>Why Choose TaskEarn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Packed with Multiple Ways to Earn Real Rewards
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            TaskEarn was built from the ground up for transparent payouts, rapid coin accumulation, and frictionless mobile performance.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="rounded-3xl bg-[#121427] border border-white/5 p-6 hover:border-indigo-500/30 hover:bg-[#151830] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 font-mono">
                  {feat.stat}
                </span>
                <span className="text-xs text-indigo-400 flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                  Verified In-App &gt;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA inside features */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-purple-900/60 via-indigo-900/40 to-slate-900/80 border border-purple-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              Ready to claim your ₹100 Welcome Bonus?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Install the lightweight 18.4 MB APK, enter referral code <strong className="text-amber-400 font-mono">CB8SIF</strong>, and start earning today.
            </p>
          </div>
          <button
            onClick={onDownloadClick}
            className="px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-sm rounded-2xl shadow-xl shadow-amber-500/25 shrink-0 transition-transform hover:scale-105 cursor-pointer"
          >
            Download TaskEarn APK Now
          </button>
        </div>
      </div>
    </section>
  );
};
