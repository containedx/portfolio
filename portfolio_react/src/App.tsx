import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 182;
const START_FRAME = 86400;
const END_FRAME = 86581;

const App: React.FC = () => {
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
          canvas.width / scale,
          canvas.height / scale
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
    <div style={{ position: "relative" }}>
      {/* Fixed Canvas in Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />

      {/* Scrollable Content Area */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ height: "6000px", width: "100vw" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                padding: "20vh 2rem",
              }}
            >
              <p>
              </p>
            </div>
          ))}
        </div>

        <div style={{ height: "5000px", width: "100vw" }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                padding: "20vh 2rem",
              }}
            >
              <p
                style={{
                  background: "rgba(0, 0, 0, 0.85)",
                  color: "#fff",
                  padding: "2rem",
                  maxWidth: "40%",
                  fontSize: "1.25rem",
                  lineHeight: "2rem",
                  borderRadius: "8px",
                }}
              >
                Paragraph {i + 1}: some cool stuff about mee
                bragging about ME 
                etc etc etc
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default App;
