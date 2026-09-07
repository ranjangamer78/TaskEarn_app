export interface AppInfo {
  name: string;
  tagline: string;
  version: string;
  size: string;
  rating: number;
  totalReviews: string;
  totalUsers: string;
  activeUsers: string;
  androidVersion: string;
  updatedAt: string;
  packageName: string;
  safetyScore: string;
  defaultDriveUrl: string;
}

export interface ScreenshotSlide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  screenType: 'home' | 'earn' | 'wallet' | 'refer' | 'banner';
  accentColor: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
  stat: string;
}

export interface UserReview {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  withdrawnAmount?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
