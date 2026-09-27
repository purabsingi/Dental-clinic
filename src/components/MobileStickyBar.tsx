import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-black/[0.08] px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+917719994814"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#14505C] bg-white border border-[#14505C]/30 rounded-md active:bg-[#F2EFE8] transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="tabular-nums">Call 7719994814</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#14505C] rounded-md active:bg-[#0F3D46] transition-colors shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </aside>
  );
};
