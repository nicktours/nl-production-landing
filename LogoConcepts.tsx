/*
================================================================================
BRAND BRIEF — NL Productions / Nick Lepoutre
================================================================================

PERSON & ROLE:
Nick Lepoutre — Touring Video Systems Engineer
Owner, NL Productions (with an S)
Disguise media server operation, LED processing, and video systems for
stadium, arena, and theatre touring productions.
Not broadcast. Not corporate AV. Live touring only.

DIRECTION FOR THIS SESSION:
1. Refine the Stage Spotlight logo concept (Concept 02 below) into a final mark
   - Primary: diamond/rotated square frame around NL monogram
   - Remove ALL broadcast elements (no REC, no LIVE, no scan lines, no pulse dots)
   - Clean, stage-inspired, bold
2. Wordmark lockup: icon + "NL Productions" side by side
3. White/light version for email signatures, letterhead, light backgrounds
4. Transparent PNG versions for flexible use
5. Instagram profile header templates (square + highlight covers)
6. LinkedIn banner mockup (1584 × 396px)
   - User can provide photos to incorporate

AESTHETIC:
- Dark, cinematic, high-contrast
- Technical but not cold — craft and artistry in touring production
- Sparse, intentional — black space does the work
- Not broadcast, not TV studio, not gamer/techy
- Reference: world-class concert production, high-end editorial photography

COLORS:
- Primary background: #0a0a0a (near-black)
- Primary text: #f5f4f1 (warm off-white)
- Accent: #f5e642 (yellow)
- White version: #ffffff on transparent or light backgrounds

TYPOGRAPHY IN USE:
- Inter Tight — display/headlines (tight, condensed)
- Instrument Serif italic — accent/contrast
- JetBrains Mono — labels, metadata, technical details

THINGS TO AVOID:
- REC indicators, LIVE badges, scan lines, broadcast UI
- Corporate/clean-room look
- Gamer/neon aesthetics
- Overly complex marks that don't scale down

================================================================================
CONCEPTS BELOW — Focus on Concept 02 (Stage Spotlight) for refinement
================================================================================
*/

export function LogoConcepts() {
  return (
    <div className="space-y-16">
      <div className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#a0a0a0]">
        Logo Concepts — NL Productions
      </div>

      {/* Concept 01 - Stage Waveform */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-['JetBrains_Mono'] text-xs text-[#a0a0a0]">01</span>
          <div>
            <div className="text-lg mb-1">Stage Waveform</div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#a0a0a0]">
              Audio meets visual — concert energy captured in motion
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary version */}
          <div className="relative bg-[#0a0a0a] border border-[rgba(245,244,241,0.1)] p-12 flex items-center justify-center min-h-[320px]">
            <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-[#f5e642]"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-[#f5e642]"></div>

            <div className="text-center">
              {/* Waveform visualization */}
              <div className="flex items-end justify-center gap-1 mb-6 h-16">
                {[2, 8, 4, 12, 3, 14, 6, 16, 5, 13, 7, 15, 4, 10, 3].map((height, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-[#f5e642] transition-all duration-300"
                    style={{
                      height: `${height * 4}px`,
                      opacity: i === 7 ? 1 : 0.4 + (Math.abs(7 - i) * 0.08)
                    }}
                  ></div>
                ))}
              </div>
              <div className="font-['Inter_Tight'] text-3xl tracking-tight mb-2">
                NL
              </div>
              <div className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.3em] text-[#a0a0a0]">
                Productions
              </div>
            </div>
          </div>

          {/* Horizontal lockup */}
          <div className="relative bg-[#0a0a0a] border border-[rgba(245,244,241,0.1)] p-12 flex items-center justify-center min-h-[320px]">
            <div className="flex items-center gap-6">
              <div className="flex items-end gap-1 h-12">
                {[2, 8, 4, 10, 3, 12, 5].map((height, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-[#f5e642]"
                    style={{
                      height: `${height * 4}px`,
                      opacity: 0.5 + (i * 0.1)
                    }}
                  ></div>
                ))}
              </div>
              <div className="h-10 w-px bg-[rgba(245,244,241,0.2)]"></div>
              <div className="font-['Inter_Tight'] text-2xl tracking-tight">
                NL Productions
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concept 02 - Stage Spotlight */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-['JetBrains_Mono'] text-xs text-[#a0a0a0]">02</span>
          <div>
            <div className="text-lg mb-1">Stage Spotlight</div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#a0a0a0]">
              Dramatic lighting meets broadcast graphics
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary version */}
          <div className="relative bg-[#0a0a0a] border border-[rgba(245,244,241,0.1)] p-12 flex items-center justify-center min-h-[320px] overflow-hidden">
            {/* Spotlight gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-[#f5e642]/10 via-transparent to-transparent"
                 style={{ background: 'radial-gradient(circle at center, rgba(245,230,66,0.08) 0%, transparent 60%)' }}>
            </div>

            <div className="relative z-10 text-center">
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-8 border border-[#f5e642]/20 rounded-full"></div>
                <div className="absolute -inset-4 border border-[#f5e642]/40"></div>
                <div className="font-['Inter_Tight'] text-5xl tracking-tighter">
                  NL
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#f5e642] to-transparent w-32 mx-auto mb-3"></div>
              <div className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.3em] text-[#a0a0a0]">
                Productions
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-1 h-1 bg-[#f5e642] rounded-full animate-pulse"></div>
                <div className="font-['JetBrains_Mono'] text-[8px] uppercase tracking-wider text-[#f5e642]">
                  Live
                </div>
              </div>
            </div>
          </div>

          {/* Compact version */}
          <div className="relative bg-[#0a0a0a] border border-[rgba(245,244,241,0.1)] p-12 flex items-center justify-center min-h-[320px]">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-6 border border-[#f5e642]/30 rotate-45"></div>
                <div className="absolute -inset-3 border-2 border-[#f5e642]"></div>
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="font-['Inter_Tight'] text-3xl tracking-tighter">NL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concept 03 - Live Broadcast Frame */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-['JetBrains_Mono'] text-xs text-[#a0a0a0]">03</span>
          <div>
            <div className="text-lg mb-1">Live Broadcast Frame</div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#a0a0a0]">
              Concert monitor aesthetic — technical and raw
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Primary version */}
          <div className="relative bg-[#0a0a0a] border border-[rgba(245,244,241,0.1)] p-12 flex items-center justify-center min-h-[320px]">
            <div className="relative">
              {/* Frame corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-[#f5e642]"></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-[#f5e642]"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-[#f5e642]"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-[#f5e642]"></div>

              <div className="border border-[rgba(245,244,241,0.2)] p-8 text-center">
                <div className="font-['Inter_Tight'] text-4xl tracking-tight mb-3">
                  NL
                </div>
                <div className="flex items-center gap-2 justify-center mb-2">
                  <div className="w-12 h-px bg-[#f5e642]"></div>
                </div>
                <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.3em] text-[#a0a0a0]">
                  Productions
                </div>

                {/* Live indicator */}
                <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-[rgba(245,244,241,0.1)]">
                  <div className="w-2 h-2 bg-[#f5e642] rounded-full animate-pulse"></div>
                  <span className="font-['JetBrains_Mono'] text-[8px] uppercase tracking-wider text-[#f5e642]">
                    Live Production
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal version */}
          <div className="relative bg-[#0a0a0a] border border-[rgba(245,244,241,0.1)] p-12 flex items-center justify-center min-h-[320px]">
            <div className="relative">
              {/* Scan lines effect */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #f5f4f1 0px, transparent 1px, transparent 2px, #f5f4f1 3px)',
                backgroundSize: '100% 4px'
              }}></div>

              <div className="relative border-2 border-[#f5e642] px-8 py-6">
                <div className="font-['Inter_Tight'] text-3xl tracking-tight mb-1">
                  NL
                </div>
                <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.3em]">
                  Productions
                </div>

                {/* Top-right REC indicator */}
                <div className="absolute -top-2 -right-2 bg-[#0a0a0a] px-2 py-1 border border-[#f5e642] flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-[#f5e642] rounded-full animate-pulse"></div>
                  <span className="font-['JetBrains_Mono'] text-[8px] text-[#f5e642]">REC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selection prompt */}
      <div className="pt-8 border-t border-[rgba(245,244,241,0.1)]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-['Instrument_Serif'] italic text-xl text-[#a0a0a0] mb-4">
            Which direction resonates with your vision?
          </div>
          <div className="font-['JetBrains_Mono'] text-xs text-[#a0a0a0]">
            We can refine your choice and build out the full identity system
          </div>
        </div>
      </div>
    </div>
  );
}
