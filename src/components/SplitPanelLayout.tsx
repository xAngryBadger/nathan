import type { ReactNode } from "react";

export default function SplitPanelLayout({ nav, children }: { nav: ReactNode; children: ReactNode }) {
  return (
    <div className="split-grid min-h-screen">
      <div className="split-left">
        {nav}
      </div>
      <div className="split-right">
        {children}
      </div>
    </div>
  );
}
