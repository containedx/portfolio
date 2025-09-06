import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 192;
const START_FRAME = 86400;
const END_FRAME = START_FRAME + TOTAL_FRAMES;

const IntroCanvasSequence : React.FC = () =>
{
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const frameImages: HTMLImageElement[] = [];
    for (let i = START_FRAME; i <= END_FRAME; i++) {
      const img = new Image();
      img.src = `/background_intro/background000${i}.jpg`;
      frameImages.push(img);
    }
    setImages(frameImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const scale = window.devicePixelRatio || 1;
    canvas.width = 1920 * scale;
    canvas.height = 1080 * scale;
    context.scale(scale, scale);

    const frameState = { frame: 0 };

    const render = () => {
      const img = images[frameState.frame];
      if (img?.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          //canvas.width / scale, - this makes image stretch to page !!
          //canvas.height / scale
        );
      }
    };

    gsap.to(frameState, {
      frame: TOTAL_FRAMES - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "5000px",
        scrub: true,
      },
      onUpdate: render,
    });

    // Draw first frame immediately
    images[0].onload = render;
    if (images[0].complete) render();
  }, [images]);

  return (
    <>
      {/* Fixed Canvas in Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover", // cover == crop image to page
          zIndex: 1,
        }}
      />
    </>
  );
}

export default IntroCanvasSequence;