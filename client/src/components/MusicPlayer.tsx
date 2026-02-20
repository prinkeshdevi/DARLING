import { useEffect, useRef } from "react";

export function MusicPlayer({ startMusic }: { startMusic: boolean }) {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (startMusic && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  }, [startMusic]);

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}