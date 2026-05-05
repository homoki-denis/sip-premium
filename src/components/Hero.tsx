import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const splitTitle = SplitText.create(".title", { type: "chars" });
    const splitSubtitle = SplitText.create(".subtitle", { type: "lines" });

    gsap.from(splitTitle.chars, {
      y: 100,
      duration: 1,
      stagger: 0.06,
      ease: "expo.out",
    });

    gsap.from(splitSubtitle.lines, {
      y: 100,
      delay: 1,
      duration: 1.2,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: `+=100%`,
          scrub: true,
        },
      })
      .to(".left-leaf", { y: 200 }, 0)
      .to(".right-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "250% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (!videoRef.current) return;
    const video = videoRef.current;

    video.onloadedmetadata = () => {
      tl.to(video, {
        currentTime: video.duration,
      });
    };
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">WINE</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crips. Classic.</p>
              <p className="subtitle">Sip the Spirit of Summer</p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </>
  );
}

export default Hero;
