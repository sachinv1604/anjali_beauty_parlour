import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Share2, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstaReelVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Supported video candidates in /assets/vid/
  const videoSrc = "/assets/vid/reel.mp4";

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="video" className="py-16 sm:py-20 bg-surface-card border-y border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="subtle-badge mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Scenes</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Watch Our Artistry In Action
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-2">
            Real client treatments, precision micro-pigmentation, and parlour vibes in Mundgod.
          </p>
        </div>

        {/* 9:16 Instagram Reel Mockup Container */}
        <div className="max-w-[340px] sm:max-w-[360px] mx-auto">
          <div className="relative rounded-[32px] overflow-hidden bg-stone-900 border-[6px] border-stone-800 shadow-reel aspect-[9/16] group cursor-pointer select-none">
            
            {/* The Video Element */}
            {!hasError ? (
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onClick={togglePlay}
                onError={() => setHasError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              /* Fallback view when video file is awaiting placement */
              <div
                onClick={togglePlay}
                className="w-full h-full relative flex flex-col items-center justify-between p-6 text-center text-white overflow-hidden"
              >
                <img
                  src="/images/bb-glow.jpg"
                  alt="Anjali Beauty Parlour Client Reel"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-transparent to-stone-950/80" />

                <div className="relative z-10 pt-10">
                  <span className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center mx-auto mb-3 shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white ml-0.5" />
                  </span>
                  <h3 className="font-serif text-xl font-bold">Treatment In Action</h3>
                  <p className="text-[11px] text-stone-200 mt-1.5 max-w-[240px] mx-auto leading-relaxed">
                    Watch our aesthetic transformations in high-definition.
                  </p>
                </div>

                <div className="relative z-10 pb-6 space-y-1.5">
                  <p className="text-xs font-semibold text-roseAccent-300">@anjali_beauty_parlour_mundgod</p>
                  <p className="text-[10px] text-stone-300 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                    Add video to <span className="text-white font-mono">public/assets/vid/reel.mp4</span>
                  </p>
                </div>
              </div>
            )}

            {/* Reel Top Bar: Instagram Header */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs z-10 pointer-events-none drop-shadow-md">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-roseAccent-600 text-white flex items-center justify-center text-[10px] font-bold">
                  A
                </span>
                <span className="font-semibold text-xs text-white">anjali_beauty_parlour</span>
              </div>
              <span className="text-[10px] bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                Reel
              </span>
            </div>

            {/* Reel Center Play/Pause Overlay indicator */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-10"
              >
                <div className="w-14 h-14 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                  <Play className="w-7 h-7 fill-stone-900 ml-1" />
                </div>
              </div>
            )}

            {/* Sound Mute/Unmute Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Bottom Reel Caption & Instagram Link */}
            <div className="absolute bottom-4 left-4 right-4 text-left text-white z-10 drop-shadow-md pointer-events-none">
              <p className="text-xs font-semibold">Anjali Beauty Parlour Mundgod</p>
              <p className="text-[11px] text-stone-200 mt-0.5">
                Brow & Eye Tattoo • Painless Mole Removal • Lip Blush • BB Glow
              </p>
              <div className="mt-2 flex items-center gap-3 text-stone-300 text-[11px]">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-roseAccent-500 fill-roseAccent-500" />
                  <span>Mundgod</span>
                </span>
                <span>•</span>
                <span>Tap to {isPlaying ? 'pause' : 'play'}</span>
              </div>
            </div>

          </div>

          {/* Reel Caption underneath */}
          <div className="mt-4 text-center">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-roseAccent-600 hover:underline"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Watch more reels on {BRAND_INFO.instagram}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
