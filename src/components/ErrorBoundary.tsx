import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Download } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('TaskEarn App Runtime Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      const directApk = `https://drive.google.com/uc?export=download&id=13tb91ZrJ8WYcOzvoxFmOZ14GtFRpKr9r&confirm=t`;

      return (
        <div className="min-h-screen bg-[#0b0c16] text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
          {/* Top Notice Banner */}
          <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-3">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2 text-amber-400">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>TaskEarn v2.4.1 Official Release • Direct Download Active</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={directApk}
                  className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 no-underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK (18.4MB)</span>
                </a>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reload</span>
                </button>
              </div>
            </div>
          </div>

          {/* Full Landing Page Content Fallback */}
          <header className="border-b border-white/10 py-4 px-6 bg-[#0b0c16]/90 backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="./images/taskearn_logo.jpg" alt="TaskEarn" className="w-10 h-10 rounded-xl object-cover border border-amber-400/40" onError={(e) => (e.currentTarget.style.display = 'none')} />
                <span className="text-xl font-black text-white">Task<span className="text-amber-400">Earn</span></span>
              </div>
              <a
                href={directApk}
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-xs px-4 py-2 rounded-xl no-underline shadow-lg shadow-amber-500/20"
              >
                Download APK
              </a>
            </div>
          </header>

          <main className="flex-1 max-w-5xl mx-auto px-4 py-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold mb-6">
              Official Android APK • 100% Clean & Verified
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
              Complete Tasks & Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Real Cash Daily</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Download the official TaskEarn Android APK. Spin the lucky wheel, scratch bonus cards, and withdraw direct cash to eSewa.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href={directApk}
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-black font-black text-base px-8 py-4 rounded-2xl no-underline shadow-xl shadow-amber-500/30 flex items-center gap-2.5"
              >
                <Download className="w-5 h-5" />
                <span>Download TaskEarn APK (18.4 MB)</span>
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12">
              <img src="./images/taskearn_banner.jpg" alt="TaskEarn" className="w-full h-auto" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
          </main>
        </div>
      );
    }

    return this.props.children;
  }
}
