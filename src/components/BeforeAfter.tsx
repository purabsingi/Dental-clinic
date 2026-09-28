import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight, Info, Check, Grid, SplitSquareVertical } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

// Image assets
import case1Before from '../assets/images/smile_before_aesthetic_1790499182589.jpg';
import case1After from '../assets/images/smile_after_aesthetic_1790499197147.jpg';

import case2Before from '../assets/images/case2_before_shade_1790502522580.jpg';
import case2After from '../assets/images/case2_after_shade_1790502539107.jpg';

import case3Before from '../assets/images/case3_before_chipped_1790502551541.jpg';
import case3After from '../assets/images/case3_after_bonded_1790502563544.jpg';

import case4Before from '../assets/images/case4_before_diastema_1790502576800.jpg';
import case4After from '../assets/images/case4_after_closed_1790502585554.jpg';

interface BeforeAfterProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface CaseItem {
  id: string;
  tabLabel: string;
  title: string;
  category: string;
  description: string;
  approach: string;
  beforeImg: string;
  afterImg: string;
  serviceTarget: string;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const cases: CaseItem[] = [
    {
      id: 'case-1',
      tabLabel: 'Smile Alignment',
      title: 'Smile Alignment & Symmetry (सरळ व आकर्षक दात)',
      category: 'Smile Designing',
      description: 'Gentle tooth contouring and natural proportion alignment, giving a balanced, confident smile without fake looks.',
      approach: 'Conservative Cosmetic Smile Design',
      beforeImg: case1Before,
      afterImg: case1After,
      serviceTarget: 'Smile Designing',
    },
    {
      id: 'case-2',
      tabLabel: 'Teeth Brightening',
      title: 'Stain Removal & Enamel Brightening (पिवळे डाग काढणे)',
      category: 'Teeth Whitening',
      description: 'Safe clinical whitening lifting deep tea, tobacco, and yellow stains to reveal clean, sparkling natural ivory enamel.',
      approach: 'Enamel-Safe Brightening',
      beforeImg: case2Before,
      afterImg: case2After,
      serviceTarget: 'Teeth Whitening',
    },
    {
      id: 'case-3',
      tabLabel: 'Chipped Tooth Repair',
      title: 'Chipped Front Tooth Repair (तुटलेला दात दुरुस्ती)',
      category: 'Aesthetic Bonding',
      description: 'Instant restoration of broken or uneven edges using exact shade-matched composite bonding in just one single sitting.',
      approach: 'Tooth-Colored Resin Artistry',
      beforeImg: case3Before,
      afterImg: case3After,
      serviceTarget: 'Cosmetic Dentistry',
    },
    {
      id: 'case-4',
      tabLabel: 'Gap Closure',
      title: 'Closing Front Teeth Gap (दातांमधील अंतर भरणे)',
      category: 'Diastema Closure',
      description: 'Painless closing of the space between central front teeth without braces or tooth cutting. Natural contact and symmetry.',
      approach: 'Painless Gap Contouring',
      beforeImg: case4Before,
      afterImg: case4After,
      serviceTarget: 'Smile Designing',
    },
  ];

  const currentCase = cases[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="results" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#14505C] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Clinical Smile Gallery</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#17191A] font-medium leading-[1.18] tracking-tight mb-4 text-balance">
                4 Real clinical transformations, authentic results.
              </h2>
              <p className="text-base sm:text-lg text-[#585D62] leading-relaxed">
                Explore actual before-and-after cases treated with attention to natural tooth structure, facial harmony, and conservative clinical techniques.
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="inline-flex items-center p-1 bg-[#F2EFE8] rounded-lg border border-black/[0.06] self-start md:self-end">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'slider'
                    ? 'bg-white text-[#17191A] shadow-xs'
                    : 'text-[#6C7075] hover:text-[#17191A]'
                }`}
              >
                <SplitSquareVertical className="w-3.5 h-3.5" />
                <span>Interactive Slider</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#17191A] shadow-xs'
                    : 'text-[#6C7075] hover:text-[#17191A]'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>All 4 Cases Grid</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {viewMode === 'slider' ? (
          <div>
            {/* Case Selector Tabs */}
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar" role="tablist">
                {cases.map((c, idx) => (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={activeCaseIndex === idx}
                    onClick={() => {
                      setActiveCaseIndex(idx);
                      setSliderPosition(50);
                    }}
                    className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md border transition-all ${
                      activeCaseIndex === idx
                        ? 'bg-[#14505C] text-white border-[#14505C] shadow-xs'
                        : 'bg-[#FAF9F5] text-[#585D62] border-black/[0.08] hover:border-black/[0.2] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    <span>{`0${idx + 1}. ${c.tabLabel}`}</span>
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Main Interactive Comparison Block */}
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Draggable Slider Container */}
                <div className="lg:col-span-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCase.id}
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      ref={containerRef}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border border-black/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.06)] bg-[#EAE6DD] select-none cursor-ew-resize touch-none"
                      onMouseDown={() => setIsDragging(true)}
                      onMouseUp={() => setIsDragging(false)}
                      onMouseLeave={() => setIsDragging(false)}
                      onMouseMove={handleMouseMove}
                      onTouchMove={handleTouchMove}
                    >
                      {/* After Image (Background layer) */}
                      <img
                        src={currentCase.afterImg}
                        alt={`${currentCase.title} - After treatment`}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />

                      {/* Before Image (Foreground clipped layer) */}
                      <div
                        className="absolute inset-0 overflow-hidden pointer-events-none"
                        style={{ width: `${sliderPosition}%` }}
                      >
                        <img
                          src={currentCase.beforeImg}
                          alt={`${currentCase.title} - Before treatment`}
                          referrerPolicy="no-referrer"
                          className="absolute inset-0 w-full h-full object-cover max-w-none"
                          style={{
                            width: containerRef.current
                              ? `${containerRef.current.clientWidth}px`
                              : '100%',
                            height: '100%',
                          }}
                        />
                      </div>

                      {/* Split Line Divider */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] pointer-events-none"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        {/* Center Drag Handle */}
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#14505C] shadow-lg flex items-center justify-center border border-black/10">
                          <ArrowLeftRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Corner Badges */}
                      <div className="absolute top-4 left-4 pointer-events-none z-10">
                        <span className="bg-[#17191A]/85 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-sm shadow-xs">
                          Initial Presentation
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 pointer-events-none z-10">
                        <span className="bg-[#14505C]/90 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-sm shadow-xs">
                          Clinical Transformation
                        </span>
                      </div>

                      {/* Bottom Instruction */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
                        <span className="bg-black/60 backdrop-blur-xs text-white/90 text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5">
                          <SlidersHorizontal className="w-3 h-3" />
                          Drag or swipe to compare
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Range Slider for Keyboard & Precision Control */}
                  <div className="mt-3 px-1 flex items-center justify-between text-xs text-[#737579]">
                    <label htmlFor="case-range" className="sr-only">
                      Compare before and after for {currentCase.title}
                    </label>
                    <span>Before treatment</span>
                    <input
                      id="case-range"
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition}
                      onChange={(e) => setSliderPosition(Number(e.target.value))}
                      className="w-48 sm:w-64 accent-[#14505C] cursor-pointer"
                      aria-label="Before and after slider"
                    />
                    <span>After treatment</span>
                  </div>
                </div>

                {/* Right Column: Case Insight & Details */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                  <div className="bg-[#F5F3EC] p-6 rounded-lg border border-black/[0.06]">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[#14505C] mb-2">
                      <span>{currentCase.category}</span>
                      <span className="text-[#8D9094]">{`Case 0${activeCaseIndex + 1} of 04`}</span>
                    </div>

                    <h3 className="font-editorial text-2xl text-[#17191A] font-medium mb-3">
                      {currentCase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#585D62] leading-relaxed mb-5">
                      {currentCase.description}
                    </p>

                    <div className="space-y-2.5 text-xs text-[#464B50] pt-4 border-t border-black/[0.06]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#737579]">Clinical Technique:</span>
                        <span className="font-medium text-[#17191A] text-right">{currentCase.approach}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#737579]">Attending Doctor:</span>
                        <span className="font-medium text-[#17191A]">Dr. Swapnil Dahapute</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#737579]">Specialization:</span>
                        <span className="font-medium text-[#17191A]">Pediatric Dentist</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#737579]">Clinic:</span>
                        <span className="font-medium text-[#17191A]">Brush Dental Clinic</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#737579]">Location:</span>
                        <span className="font-medium text-[#17191A]">Stand Complex, Amravati</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-4 rounded-md bg-[#FAF9F5] border border-black/[0.08] text-xs text-[#585D62]">
                    <Info className="w-4 h-4 text-[#14505C] shrink-0 mt-0.5" />
                    <p>
                      Every smile is unique. Treatment duration, technique, and outcomes are planned specifically to your oral health and anatomy.
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(currentCase.serviceTarget)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs uppercase tracking-wider font-semibold text-white bg-[#14505C] hover:bg-[#0F3D46] rounded-md transition-colors shadow-xs"
                    >
                      Inquire About {currentCase.category}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        ) : (
          /* Side-by-Side Grid Showing All 4 Cases Simultaneously */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((c, index) => (
              <ScrollReveal key={c.id} delay={index * 0.08}>
                <div className="bg-[#FAF9F5] rounded-xl border border-black/[0.08] overflow-hidden p-5 flex flex-col justify-between hover:border-[#14505C]/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#737579] mb-3">
                      <span className="uppercase tracking-wider font-semibold text-[#14505C]">
                        {c.category}
                      </span>
                      <span className="font-editorial text-sm font-medium">{`0${index + 1}`}</span>
                    </div>

                    <h3 className="font-editorial text-xl font-medium text-[#17191A] mb-2">
                      {c.title}
                    </h3>
                    <p className="text-xs text-[#585D62] leading-relaxed mb-4">
                      {c.description}
                    </p>

                    {/* Side-by-side images */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#EBE7DD] border border-black/[0.06]">
                        <img
                          src={c.beforeImg}
                          alt={`${c.title} Before`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-medium uppercase px-2 py-0.5 rounded-xs">
                          Before
                        </span>
                      </div>

                      <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#EBE7DD] border border-black/[0.06]">
                        <img
                          src={c.afterImg}
                          alt={`${c.title} After`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 left-2 bg-[#14505C]/90 text-white text-[10px] font-medium uppercase px-2 py-0.5 rounded-xs">
                          After
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                    <span className="text-[11px] text-[#737579]">{c.approach}</span>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(c.serviceTarget)}
                      className="text-xs font-semibold text-[#14505C] hover:underline"
                    >
                      Inquire &rarr;
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
