import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let intensityInterval: ReturnType<typeof setInterval> | null = null;

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  // Clear previous interval to prevent stacking on resize
  if (intensityInterval) clearInterval(intensityInterval);

  let intensity: number = 0;
  intensityInterval = setInterval(() => {
    intensity = Math.random();
  }, 200);

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".whatIDO",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  let screenLight: any, monitor: any;
  character?.children.forEach((object: any) => {
    if (object.name === "Plane004") {
      object.children.forEach((child: any) => {
        child.material.transparent = true;
        child.material.opacity = 0;
        if (child.material.name === "Material.018") {
          monitor = child;
          child.material.color.set("#FFFFFF");
        }
      });
    }
    if (object.name === "screenlight") {
      object.material.transparent = true;
      object.material.opacity = 0;
      object.material.emissive.set("#B0F5EA");
      gsap.timeline({ repeat: -1, repeatRefresh: true }).to(object.material, {
        emissiveIntensity: () => intensity * 8,
        duration: () => Math.random() * 0.6,
        delay: () => Math.random() * 0.1,
      });
      screenLight = object;
    }
  });
  let neckBone = character?.getObjectByName("spine005");
  if (window.innerWidth > 1024) {
    if (character) {
      tl1
        .fromTo(character.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
        .to(camera.position, { z: 22 }, 0)
        .fromTo(".character-model", { x: 0 }, { x: "-35%", duration: 1 }, 0)
        .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
        .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
        .fromTo(".about-me", { y: "-50%", opacity: 0 }, { y: "0%", opacity: 1 }, 0);

      tl2
        .to(
          camera.position,
          { z: 75, y: 8.4, duration: 6, delay: 2, ease: "power3.inOut" },
          0
        )
        .to(".about-section", { y: "30%", duration: 6 }, 0)
        .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
        .fromTo(
          ".character-model",
          { pointerEvents: "inherit" },
          { pointerEvents: "none", x: "-12%", delay: 2, duration: 5 },
          0
        )
        .to(character.rotation, { y: 0.92, x: 0.12, delay: 3, duration: 3 }, 0)
        .to(neckBone!.rotation, { x: 0.6, delay: 2, duration: 3 }, 0)
        .to(monitor.material, { opacity: 1, duration: 0.8, delay: 3.2 }, 0)
        .to(screenLight.material, { opacity: 1, duration: 0.8, delay: 4.5 }, 0)
        // Use opacity instead of display to avoid GSAP/CSS conflict
        .fromTo(
          ".what-box-in",
          { opacity: 0, pointerEvents: "none" },
          { opacity: 1, pointerEvents: "auto", duration: 0.6, delay: 6 },
          0
        )
        .fromTo(
          monitor.position,
          { y: -10, z: 2 },
          { y: 0, z: 0, delay: 1.5, duration: 3 },
          0
        )
        .fromTo(
          ".character-rim",
          { opacity: 1, scaleX: 1.4 },
          { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
          0.3
        );

      tl3
        .fromTo(
          ".character-model",
          { y: "0%" },
          { y: "-100%", duration: 4, ease: "none", delay: 1 },
          0
        )
        .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0)
        .to(character.rotation, { x: -0.04, duration: 2, delay: 1 }, 0);
    }
  } else {
    if (character) {
      const tM2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".what-box-in",
          start: "top 70%",
          end: "bottom top",
        },
      });
      tM2.fromTo(
        ".what-box-in",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        0
      );
    }
  }
}

export function setAllTimeline() {
  // Career section — stagger cards in as you scroll (fixed: was targeting non-existent classes)
  // once:true prevents re-animation on resize/recreate when already past the section
  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 65%",
      end: "80% center",
      scrub: false,
      once: true,
      invalidateOnRefresh: true,
    },
  });

  careerTimeline
    .fromTo(
      ".career-section h2",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
      0
    )
    .fromTo(
      ".career-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" },
      0.15
    );

  // Work section heading entry animation
  gsap.fromTo(
    ".work-section h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 75%",
        once: true,
      },
    }
  );

  // Contact section entry animation
  gsap.fromTo(
    ".contact-container > *",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        once: true,
      },
    }
  );

  if (window.innerWidth > 1024) {
    gsap.fromTo(
      ".career-section",
      { y: 0 },
      {
        y: "10%",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".career-section",
          start: "80% center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }
}
