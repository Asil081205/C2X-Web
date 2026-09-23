import { useState, useRef, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, Bot, Users } from "lucide-react";
import styles from "./Screenshots.module.scss";
import { fadeUp, staggerContainer } from "@/animations/motion";

const slides = [
  {
    id: "editor",
    icon: Code2,
    title: "A familiar, fast editor",
    description:
      "Full IntelliSense, multi-cursor editing, and instant file search built on Monaco.",
    tag: "EDITOR",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI that knows your codebase",
    description:
      "Context-aware chat and inline completions trained on your project structure.",
    tag: "AI ASSISTANT",
  },
  {
    id: "collab",
    icon: Users,
    title: "Real-time pair programming",
    description: "Live cursors, shared terminals, and instant collaboration.",
    tag: "COLLABORATION",
  },
];

const Screenshots = memo((): React.ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalSlides = slides.length;

  const goToSlide = useCallback(
    (index: number) => {
      const newIndex = ((index % totalSlides) + totalSlides) % totalSlides;
      setCurrentIndex(newIndex);
    },
    [totalSlides],
  );

  const goToNext = useCallback(
    () => goToSlide(currentIndex + 1),
    [currentIndex, goToSlide],
  );
  const goToPrev = useCallback(
    () => goToSlide(currentIndex - 1),
    [currentIndex, goToSlide],
  );

  // Only auto-play when not dragging
  useEffect(() => {
    if (isDragging) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(goToNext, 6000);
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [currentIndex, goToNext, isDragging]);

  const getCardPosition = (index: number) => {
    let diff = index - currentIndex;
    if (diff > totalSlides / 2) diff -= totalSlides;
    if (diff < -totalSlides / 2) diff += totalSlides;
    return diff;
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setOffsetX(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setOffsetX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(offsetX) > 50) {
      if (offsetX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
    setOffsetX(0);
  };

  return (
    <section className={styles.screenshots}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className={styles.header}
        >
          <motion.h2 variants={fadeUp} className={styles.title}>
            See C2X in action
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.description}>
            Explore the features that make C2X the most advanced
            collaborative IDE.
          </motion.p>
        </motion.div>

        <div className={styles.carouselWrapper}>
          <div
            ref={containerRef}
            className={styles.carouselContainer}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div className={styles.cardsContainer}>
              {slides.map((slide, index) => {
                const position = getCardPosition(index);
                const isCenter = position === 0;
                const isVisible = Math.abs(position) <= 1;

                if (!isVisible) return null;

                let translateX = 0;
                let scale = 1;
                let opacity = 1;
                let zIndex = 1;

                if (position === -1) {
                  translateX = -350;
                  scale = 0.85;
                  opacity = 0.4;
                  zIndex = 2;
                } else if (position === 0) {
                  translateX = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 3;
                } else if (position === 1) {
                  translateX = 350;
                  scale = 0.85;
                  opacity = 0.4;
                  zIndex = 2;
                }

                return (
                  <motion.div
                    key={slide.id}
                    className={`${styles.card} ${isCenter ? styles.centerCard : ""}`}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: zIndex,
                      pointerEvents: isCenter ? "auto" : "none",
                    }}
                    animate={{
                      x: translateX,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 1,
                    }}
                  >
                    <div className={styles.cardContent}>
                      <div className={styles.cardHeader}>
                        <div className={styles.iconWrapper}>
                          <slide.icon size={28} strokeWidth={1.5} />
                        </div>
                        <span className={styles.tag}>{slide.tag}</span>
                      </div>
                      <h3 className={styles.cardTitle}>{slide.title}</h3>
                      <p className={styles.cardDescription}>
                        {slide.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className={styles.navigation}>
            <button
              className={styles.arrowBtn}
              onClick={goToPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            <div className={styles.dots}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className={styles.arrowBtn}
              onClick={goToNext}
              aria-label="Next slide"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Screenshots.displayName = "Screenshots";

export default Screenshots;
