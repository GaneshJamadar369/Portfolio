import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Krishi-Agent",
    category: "🏆 VSM Hackathon Winner 2026 — Agentic AI, Full Stack",
    tools: "LangGraph, LangChain, LLMs, Voice Interface, React, Node.js",
    image: "/images/agent.png",
  },
  {
    title: "Multimodal Emotion Recognition",
    category: "Multimodal Deep Learning — IIT Roorkee Research",
    tools: "PyTorch, BERT, MFCC, Cross-Modal Attention",
    image: "/images/emotion.png",
  },
  {
    title: "AI-Enabled GNSS Satellite Clock Error Analysis",
    category: "AI for Space Research (ISRO)",
    tools: "Python, ML, Statistical Analysis",
    image: "/images/isro.png",
  },
  {
    title: "Video Anomaly Detection",
    category: "Deep Learning, Computer Vision",
    tools: "PyTorch, OpenCV, Real-time Surveillance Analysis",
    image: "/images/anomaly.png",
  },
  {
    title: "Autonomous Hostel Allocation System",
    category: "Government Project — Full Stack, Algorithms",
    tools: "React, Node.js, Caste-based Reservation Algorithms",
    image: "/images/agent.png",
  },
  {
    title: "Mendelevium — Alumni Data Platform",
    category: "Full Stack, Algorithmic Recommendations",
    tools: "React, Node.js, SQL, Secure Auth, REST APIs",
    image: "/images/isro.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    };
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      animTimeoutRef.current = setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Things I've <span>Shipped</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
