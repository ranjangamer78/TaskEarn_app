import React from 'react';
import { Star, CheckCircle, ThumbsUp, HelpCircle, ChevronDown } from 'lucide-react';
import { UserReview, FAQItem } from '../types';

const reviews: UserReview[] = [
  {
    id: '1',
    name: 'Aayush Shrestha',
    avatar: 'A',
    rating: 5,
    date: '2 days ago',
    comment: 'Withdrew ₹300 directly to my eSewa number yesterday! Took about 15 minutes to receive the payment notification. The daily spin and streak bonuses add up really fast.',
    verified: true,
    withdrawnAmount: '₹300 via eSewa',
  },
  {
    id: '2',
    name: 'Rohan Sharma',
    avatar: 'R',
    rating: 4.5,
    date: '3 days ago',
    comment: 'TaskEarn is genuine. Completed the Day 5 streak and got 500 bonus coins. The app is lightweight (18MB) and doesn’t lag at all on my Redmi phone.',
    verified: true,
    withdrawnAmount: '₹200 via eSewa',
  },
  {
    id: '3',
    name: 'Pooja Thapa',
    avatar: 'P',
    rating: 5,
    date: '1 week ago',
    comment: 'I shared my referral code with my college friends and earned over 2,500 coins just from referrals. Redeemed Free Fire diamonds instantly.',
    verified: true,
    withdrawnAmount: '100 FF Diamonds',
  },
  {
    id: '4',
    name: 'Bikash Karki',
    avatar: 'B',
    rating: 4.5,
    date: '1 week ago',
    comment: 'Direct Google Drive download link worked with 1 click without any ads or popups. Easy installation and scratch cards give good rewards daily.',
    verified: true,
    withdrawnAmount: '₹200 via eSewa',
  },
];

const faqs: FAQItem[] = [
  {
    question: 'How do I withdraw my earnings to eSewa?',
    answer: 'Open TaskEarn, navigate to the "Wallet & Withdraw" tab, select eSewa, choose your withdrawal package (Fixed 200 or 300 Rupees), enter your registered eSewa mobile number, and submit! Transfers are typically processed rapidly.',
  },
  {
    question: 'What is the conversion rate of coins to cash?',
    answer: 'The rate is straightforward and completely transparent: 1,000 Coins = ₹10 (which equals 100 Coins = ₹1). For example, 20,000 Coins = ₹200 rupees.',
  },
  {
    question: 'Why download via Google Drive APK?',
    answer: 'Google Drive provides ultra-high-speed servers, guaranteed virus-free scanning, and direct one-click downloading for Android users without throttling or slow speeds.',
  },
  {
    question: 'Is TaskEarn APK safe for my smartphone?',
    answer: 'Yes! TaskEarn is thoroughly scanned by Google Play Protect, contains zero malware or intrusive adware, and requires zero root privileges.',
  },
];

export const ReviewsSection: React.FC = () => {
  return (
    <section id="user-reviews" className="py-16 md:py-24 relative bg-[#0b0c19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Trusted by Over 11,000+ Users
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Real reviews and payment proofs from our 8,000+ active daily earners.
          </p>
        </div>

        {/* Rating Breakdown Card */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-[#121427] border border-white/10 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Big Rating */}
          <div className="md:col-span-5 text-center md:border-r md:border-white/10 md:pr-6 space-y-2">
            <div className="text-5xl sm:text-6xl font-black text-white font-['Outfit']">
              4.5
            </div>
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400" />
              ))}
              <Star className="w-6 h-6 fill-amber-400/50" />
            </div>
            <div className="text-xs text-slate-400">
              Based on <strong>6,420+</strong> verified reviews
            </div>
            <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>11,000+ Total Downloads</span>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="md:col-span-7 space-y-2 text-xs">
            {[
              { stars: '5 Stars', pct: '78%' },
              { stars: '4 Stars', pct: '15%' },
              { stars: '3 Stars', pct: '5%' },
              { stars: '2 Stars', pct: '1%' },
              { stars: '1 Star', pct: '1%' },
            ].map((bar, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-14 text-slate-400 text-right shrink-0">{bar.stars}</span>
                <div className="flex-1 h-2.5 bg-black/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                    style={{ width: bar.pct }}
                  />
                </div>
                <span className="w-10 text-slate-300 font-mono text-right">{bar.pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-[#121427] border border-white/5 space-y-3 flex flex-col justify-between hover:border-amber-400/20 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600/30 border border-purple-500/40 flex items-center justify-center font-bold text-white text-sm">
                      {rev.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        {rev.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400">{rev.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(Math.floor(rev.rating))].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                    {rev.rating % 1 !== 0 && (
                      <Star className="w-3.5 h-3.5 fill-amber-400/50" />
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {rev.withdrawnAmount && (
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Proof of Payout:</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    ✓ {rev.withdrawnAmount}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white font-['Outfit'] flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-400" />
              <span>Frequently Asked Questions</span>
            </h3>
          </div>

          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-2xl bg-[#121427] border border-white/5 p-4 sm:p-5 text-sm transition-colors open:border-indigo-500/40"
            >
              <summary className="font-bold text-white cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
              </summary>
              <div className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
