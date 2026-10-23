import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function ReelVideoHero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Video path as specified by user: assets/vid/reel.mp4 → placed in public/assets/vid/
  const videoSrc = '/assets/vid/reel.mp4';

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
    <section
      id="video"
      className="w-full flex items-center justify-center"
      style={{
        minHeight: '100svh',
        background: 'linear-gradient(180deg, #1a1110 0%, #0d0908 100%)',
      }}
    >
      {/* Reel container — 9:16 aspect ratio, max width for readability */}
      <div
        className="relative w-full bg-black overflow-hidden"
        style={{
          maxWidth: '420px',
          aspectRatio: '9 / 16',
          maxHeight: '96svh',
        }}
      >
        {!hasError ? (
          <>
            {/* Actual video */}
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onClick={togglePlay}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Gradient overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

            {/* Bottom label */}
            <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
              <p className="text-white font-semibold text-sm drop-shadow">Anjali Beauty Parlour</p>
              <p className="text-white/70 text-[11px] mt-0.5">Mundgod · 10 AM – 7:30 PM</p>
            </div>

            {/* Controls */}
            <div className="absolute top-5 right-5 flex gap-2 z-10">
              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Paused overlay */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-xl">
                  <Play className="w-7 h-7 fill-stone-900 ml-1" />
                </div>
              </div>
            )}
          </>
        ) : (
          /* Placeholder when video not yet placed */
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 text-white bg-stone-900 relative overflow-hidden">
            <img
              src="/images/bb-glow.jpg"
              alt="Anjali Beauty Parlour preview"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center mx-auto">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <h3 className="font-serif text-2xl font-bold">Anjali Parlour</h3>
              <p className="text-sm text-white/70 max-w-xs leading-relaxed">
                Place your video at{' '}
                <code className="bg-black/50 px-2 py-0.5 rounded text-rose-300 text-xs">
                  public/assets/vid/reel.mp4
                </code>{' '}
                to display it here.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
