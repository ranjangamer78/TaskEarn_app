import React, { useState } from 'react';
import {
  Coins,
  Wallet,
  Gift,
  Play,
  Share2,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
  Flame,
  ArrowLeft,
  Bell,
  Layers,
  History,
  Clock,
  Ticket,
  Users,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

interface PhoneFrameProps {
  activeScreen: 'home' | 'earn' | 'wallet' | 'refer' | 'banner';
  className?: string;
  onScreenChange?: (screen: 'home' | 'earn' | 'wallet' | 'refer') => void;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  activeScreen,
  className = '',
  onScreenChange,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'earn' | 'wallet' | 'refer'>(
    activeScreen === 'banner' ? 'home' : activeScreen
  );

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('CB8SIF');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentView = activeScreen === 'banner' ? activeTab : activeScreen;

  return (
    <div
      id="phone-mockup-frame"
      className={`relative mx-auto w-full max-w-[305px] sm:max-w-[340px] h-[590px] sm:h-[660px] max-h-[85vh] bg-[#0c0d1b] rounded-[38px] sm:rounded-[44px] p-2.5 sm:p-3 shadow-2xl shadow-indigo-950/60 border-[4px] sm:border-[5px] border-[#20223d] ring-1 ring-white/10 flex flex-col justify-between overflow-hidden select-none ${className}`}
    >
      {/* Phone Ear speaker & camera punch hole */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-[#121327] rounded-b-xl flex items-center justify-center z-30">
        <div className="w-10 h-1 bg-[#2b2d52] rounded-full mr-2" />
        <div className="w-2.5 h-2.5 bg-black rounded-full border border-slate-700" />
      </div>

      {/* Screen Inner Container */}
      <div className="w-full h-full bg-[#0d0e1e] rounded-[34px] flex flex-col overflow-hidden relative text-white text-xs">
        {/* Android Status Bar */}
        <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] text-slate-400 z-20">
          <span className="font-semibold text-white tracking-wide">8:18</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400">5G</span>
            <div className="w-3 h-2 border border-slate-400 rounded-xs relative flex items-center p-0.5">
              <div className="h-full w-4/5 bg-emerald-400 rounded-xs" />
            </div>
            <span className="text-[10px]">86%</span>
          </div>
        </div>

        {/* Screen Content Body */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3.5 scrollbar-thin scrollbar-thumb-indigo-900">
          {/* ================= SCREEN: HOME ================= */}
          {currentView === 'home' && (
            <div className="space-y-3 animate-fade-in">
              {/* Header */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center font-bold text-base text-black shadow-md shadow-amber-500/20">
                    A
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-bold text-sm text-white">
                      <span>Hello, Admin</span>
                      <span className="text-amber-400">👋</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Welcome Back!</div>
                  </div>
                </div>
                <div className="relative p-1.5 rounded-full bg-slate-800/80 text-slate-300">
                  <Bell className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-[9px] font-bold text-white rounded-full flex items-center justify-center">
                    3
                  </span>
                </div>
              </div>

              {/* Balance Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1b1740] via-[#1a1c3f] to-[#12132a] p-3.5 border border-indigo-500/30 shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Your Balance</div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="w-6 h-6 rounded-full bg-amber-400 text-black flex items-center justify-center font-black text-xs shadow-md">
                        ★
                      </div>
                      <span className="text-2xl font-black tracking-tight text-white">
                        90165
                      </span>
                    </div>
                    <div className="text-[10px] text-indigo-300 font-medium mt-1">
                      ≈ ₹901.65 (1,000 Coins = ₹10)
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <button
                      onClick={() => {
                        setActiveTab('wallet');
                        onScreenChange?.('wallet');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-white text-black text-[10px] font-bold hover:bg-amber-400 transition-colors"
                    >
                      Wallet &gt;
                    </button>
                  </div>
                </div>
              </div>

              {/* Complete Tasks Card */}
              <div className="rounded-2xl bg-[#14162e] border border-white/5 p-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-indigo-300 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-white">Complete Tasks</div>
                    <div className="text-[10px] text-amber-400 font-medium">Earn Coins</div>
                    <div className="text-[9px] text-slate-400">Finish tasks and earn rewards</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('earn');
                    onScreenChange?.('earn');
                  }}
                  className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-[10px] font-bold text-white shadow-md shadow-indigo-600/30 hover:opacity-90 transition-opacity"
                >
                  Start Now &gt;
                </button>
              </div>

              {/* Daily Streak */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-xs">
                    <span>Daily Streak</span>
                    <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-amber-400 font-bold">
                    <span>★</span> 1
                  </div>
                </div>
                <div className="text-[10px] text-slate-400">Claim daily & earn more</div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[
                    { day: 'Day 1', coins: 100, active: false },
                    { day: 'Day 2', coins: 200, active: true },
                    { day: 'Day 3', coins: 300, active: false },
                    { day: 'Day 4', coins: 400, active: false },
                    { day: 'Day 5', coins: 500, active: false },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-1.5 rounded-xl border text-center transition-all ${
                        item.active
                          ? 'bg-purple-900/60 border-purple-500 text-purple-200 ring-1 ring-purple-400'
                          : 'bg-[#15172d] border-white/5 text-slate-400'
                      }`}
                    >
                      <div className="text-[9px] font-medium">{item.day}</div>
                      <div className="flex items-center justify-center gap-0.5 mt-1 font-bold text-[10px] text-amber-400">
                        <span>★</span> {item.coins}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Access */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-white">Quick Access</span>
                  <span className="text-[10px] text-indigo-400 hover:underline cursor-pointer">
                    View All &gt;
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square rounded-2xl bg-purple-700/80 flex items-center justify-center shadow-md">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-rose-600 flex items-center justify-center shadow-md">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-amber-600 flex items-center justify-center shadow-md">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= SCREEN: EARN ================= */}
          {currentView === 'earn' && (
            <div className="space-y-3.5 animate-fade-in">
              <div className="font-bold text-base text-white pt-1">Earn Coins</div>

              {/* Promo Coupon Card */}
              <div className="rounded-2xl bg-[#191a33] border border-amber-500/20 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-xs text-white">
                      <span>Coupon Code</span>
                      <span className="bg-rose-500 text-[8px] font-black px-1 py-0.5 rounded text-white">
                        NEW
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-400 mt-0.5">
                      Have a promo code? Redeem for coins!
                    </div>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-amber-400 text-black font-bold text-[10px] rounded-lg shadow-sm">
                  Redeem
                </button>
              </div>

              {/* 6 Earning Cards Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  {
                    title: 'Redeem Code',
                    desc: 'Promo coupon codes',
                    icon: <Ticket className="w-5 h-5 text-amber-400" />,
                    bg: 'bg-amber-950/40 border-amber-800/30',
                  },
                  {
                    title: 'Daily Bonus',
                    desc: 'Claim daily rewards',
                    icon: <Gift className="w-5 h-5 text-amber-500" />,
                    bg: 'bg-amber-900/30 border-amber-700/30',
                  },
                  {
                    title: 'Spin Wheel',
                    desc: 'Spin to win',
                    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
                    bg: 'bg-purple-950/50 border-purple-800/30',
                  },
                  {
                    title: 'Watch & Earn',
                    desc: 'Watch video ads',
                    icon: <Play className="w-5 h-5 text-emerald-400 fill-emerald-400" />,
                    bg: 'bg-emerald-950/50 border-emerald-800/30',
                  },
                  {
                    title: 'Scratch Card',
                    desc: 'Scratch to win',
                    icon: <Layers className="w-5 h-5 text-rose-400" />,
                    bg: 'bg-rose-950/50 border-rose-800/30',
                  },
                  {
                    title: 'Refer & Earn',
                    desc: 'Invite friends',
                    icon: <Users className="w-5 h-5 text-cyan-400" />,
                    bg: 'bg-cyan-950/50 border-cyan-800/30',
                    onClick: () => {
                      setActiveTab('refer');
                      onScreenChange?.('refer');
                    },
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={item.onClick}
                    className={`rounded-2xl p-3 border ${item.bg} flex flex-col items-center text-center cursor-pointer hover:scale-[1.02] transition-transform`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center mb-2">
                      {item.icon}
                    </div>
                    <div className="font-bold text-xs text-white">{item.title}</div>
                    <div className="text-[9px] text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= SCREEN: WALLET ================= */}
          {currentView === 'wallet' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <ArrowLeft
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => setActiveTab('home')}
                  />
                  <span className="font-bold text-sm text-white">Wallet & Withdraw</span>
                </div>
                <History className="w-4 h-4 text-slate-400" />
              </div>

              {/* Total Balance Gradient Card */}
              <div className="rounded-2xl bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-500 p-3.5 shadow-lg text-white">
                <div className="text-[10px] font-bold tracking-wider text-purple-100">
                  TOTAL BALANCE
                </div>
                <div className="flex items-center gap-1.5 my-1">
                  <span className="text-xl">⭐</span>
                  <span className="text-2xl font-black tracking-tight">90165</span>
                </div>
                <div className="text-xs font-semibold opacity-95">≈ ₹901.65</div>
                <div className="mt-2 text-[9px] bg-black/25 rounded-md px-2 py-1 font-medium text-purple-100">
                  ⚡ Conversion Rate: 1,000 Coins = ₹10 (100 Coins = ₹1)
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="py-2 px-2.5 rounded-xl bg-amber-400 text-black font-bold text-[10px] flex items-center justify-center gap-1.5 shadow-sm">
                  <Gift className="w-3.5 h-3.5" />
                  <span>Redeem Gift Cards</span>
                </button>
                <button className="py-2 px-2.5 rounded-xl bg-[#1c1e36] text-white font-bold text-[10px] flex items-center justify-center gap-1.5 border border-white/10">
                  <History className="w-3.5 h-3.5" />
                  <span>History</span>
                </button>
              </div>

              {/* Category Pills */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold text-slate-300">
                  Select Withdrawal Category
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  <div className="px-3 py-1 rounded-lg bg-emerald-500 text-black font-bold text-[10px] flex items-center gap-1 shrink-0">
                    <span>🇳🇵</span> eSewa (3)
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-[#181a33] text-slate-300 font-semibold text-[10px] flex items-center gap-1 shrink-0 border border-white/5">
                    <span>💎</span> FF Diamond (3)
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-[#181a33] text-slate-400 font-semibold text-[10px] flex items-center gap-1 shrink-0 border border-white/5">
                    <span>🪙</span> Robux (0)
                  </div>
                </div>
              </div>

              {/* Withdrawal Options */}
              <div className="space-y-2">
                <div className="rounded-2xl bg-[#14162e] border border-white/5 p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-sm">
                      🇳🇵
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">200 rupess</div>
                      <div className="flex items-center gap-1 text-[9px] text-slate-400 mt-0.5">
                        <span className="text-purple-400">eSewa</span>
                        <span className="bg-emerald-500/20 text-emerald-400 px-1 rounded text-[8px]">
                          FIXED
                        </span>
                        <span>Number withdraw</span>
                      </div>
                      <div className="text-[10px] font-bold text-amber-400 mt-0.5">
                        Fixed: 20000 Coins
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </div>

                <div className="rounded-2xl bg-[#14162e] border border-white/5 p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-sm">
                      🇳🇵
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">300 rupess</div>
                      <div className="flex items-center gap-1 text-[9px] text-slate-400 mt-0.5">
                        <span className="text-purple-400">eSewa</span>
                        <span className="bg-emerald-500/20 text-emerald-400 px-1 rounded text-[8px]">
                          FIXED
                        </span>
                        <span>Number withdraw</span>
                      </div>
                      <div className="text-[10px] font-bold text-amber-400 mt-0.5">
                        Fixed: 1000 Coins
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>
          )}

          {/* ================= SCREEN: REFER ================= */}
          {currentView === 'refer' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center gap-2 pt-1">
                <ArrowLeft
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => setActiveTab('home')}
                />
                <span className="font-bold text-sm text-white">Refer & Earn</span>
              </div>

              <div className="text-center px-2 py-1">
                <div className="font-bold text-xs text-white">
                  Invite your friends and earn unlimited coins
                </div>
              </div>

              {/* Graphic Icon */}
              <div className="flex justify-center my-1">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
              </div>

              {/* Referral Code Box */}
              <div className="rounded-2xl bg-[#161830] border border-white/10 p-3 text-center space-y-1.5">
                <div className="text-[10px] text-slate-400">Your Referral Code</div>
                <div className="flex items-center justify-center gap-2.5">
                  <span className="text-xl font-black tracking-widest text-white">CB8SIF</span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <div className="text-[9px] text-emerald-400 font-semibold">
                    Copied to clipboard!
                  </div>
                )}
              </div>

              {/* Have a Referral Code */}
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-slate-300">Have a Referral Code?</div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code here"
                    className="flex-1 bg-[#14162e] border border-white/10 rounded-xl px-3 py-2 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-amber-400"
                  />
                  <button className="px-4 py-2 bg-amber-400 text-black font-bold rounded-xl text-xs">
                    Apply
                  </button>
                </div>
              </div>

              {/* How it Works */}
              <div className="rounded-xl bg-[#121426] p-2.5 space-y-1.5 text-[10px] text-slate-300">
                <div className="font-bold text-white text-[11px]">How it Works</div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-400">1.</span>
                  <span>Share your referral code</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-400">2.</span>
                  <span>Your friend joins and completes tasks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-400">3.</span>
                  <span className="text-emerald-300">
                    You earn 500 coins, and they earn 200 coins
                  </span>
                </div>
              </div>

              {/* Floating CTA */}
              <button className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 text-xs">
                <Share2 className="w-3.5 h-3.5" />
                <span>Invite Now</span>
              </button>
            </div>
          )}
        </div>

        {/* Bottom App Navigation Bar */}
        <div className="h-12 bg-[#0a0a16] border-t border-white/5 px-3 flex items-center justify-around z-20">
          <button
            onClick={() => {
              setActiveTab('home');
              onScreenChange?.('home');
            }}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              currentView === 'home' ? 'text-purple-400 font-bold' : 'text-slate-500'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="text-[9px]">Home</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('earn');
              onScreenChange?.('earn');
            }}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              currentView === 'earn' ? 'text-purple-400 font-bold' : 'text-slate-500'
            }`}
          >
            <Coins className="w-3.5 h-3.5" />
            <span className="text-[9px]">Earn</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('wallet');
              onScreenChange?.('wallet');
            }}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              currentView === 'wallet' ? 'text-purple-400 font-bold' : 'text-slate-500'
            }`}
          >
            <Wallet className="w-3.5 h-3.5" />
            <span className="text-[9px]">Wallet</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('refer');
              onScreenChange?.('refer');
            }}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              currentView === 'refer' ? 'text-purple-400 font-bold' : 'text-slate-500'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span className="text-[9px]">Refer</span>
          </button>
        </div>

        {/* Android Home Pill Indicator */}
        <div className="py-1 flex justify-center bg-[#0a0a16]">
          <div className="w-24 h-1 bg-slate-700 rounded-full" />
        </div>
      </div>
    </div>
  );
};
