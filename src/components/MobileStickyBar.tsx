import React from 'react';
import { Phone, Calendar, MessageCircle, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../assets/clinicAssets';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-black/[0.08] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phoneDial}`}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-2.5 py-2 text-[11px] font-extrabold uppercase tracking-wider text-[#0D6E7E] bg-teal-50/70 border border-[#0D6E7E]/30 rounded-xl active:bg-teal-100 transition-colors shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#0D6E7E]" />
          <span className="tabular-nums">Call</span>
        </a>

        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-2.5 py-2 text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5C] rounded-xl active:scale-[0.98] transition-all shadow-[0_2px_10px_rgba(37,211,102,0.3)]"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-2.5 py-2 text-[11px] font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#0D6E7E] to-[#0891B2] rounded-xl active:scale-[0.98] transition-all shadow-[0_2px_10px_rgba(13,110,126,0.3)]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>

        <a
          href={CLINIC_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 min-h-[44px] flex items-center justify-center rounded-xl bg-pink-50 border border-pink-200/80 text-[#FF2A85] active:bg-pink-100 transition-colors shadow-xs"
          title="Directions to Clinic"
          aria-label="Open clinic location on Google Maps"
        >
          <Navigation className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};

