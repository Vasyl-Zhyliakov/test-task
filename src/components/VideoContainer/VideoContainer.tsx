import { useRef, useState } from 'react';
import './videoContainer.scss';

export default function VideoContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleMute = () => {
    const video = videoRef.current;
    console.log('videoRef.current', videoRef.current);
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    console.log(video.muted);
  };

  return (
    <video
      ref={videoRef}
      autoPlay
      muted={isMuted}
      loop
      playsInline
      className="video-bg"
      onClick={handleMute}
    >
      <source src="./Wakanda_Forever_Official_Teaser.mp4" type="video/mp4" />
    </video>
  );
}
