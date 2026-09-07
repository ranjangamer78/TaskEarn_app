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
        <div className="min-h-screen bg-[#0b0c16] text-white flex flex-col items-center justify-center p-6 text-center font-['Plus_Jakarta_Sans',sans-serif]">
          <div className="max-w-md w-full p-8 rounded-3xl bg-[#111326] border border-amber-500/20 shadow-2xl space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h1 className="text-xl font-extrabold text-white">
                TaskEarn APK Download
              </h1>
              <p className="text-sm text-slate-400">
                You can still download the TaskEarn Android APK directly below:
              </p>
            </div>

            <a
              href={directApk}
              target="_blank"
              rel="noopener noreferrer"
              download="TaskEarn_v2.4.1.apk"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-black font-extrabold text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 no-underline transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download TaskEarn APK (Direct)</span>
            </a>

            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
