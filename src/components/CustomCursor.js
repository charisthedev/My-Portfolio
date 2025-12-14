import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      const isMobileUA =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      return isTouchDevice || isSmallScreen || isMobileUA;
    };

    setIsMobile(checkMobile());

    // Don't initialize cursor on mobile
    if (checkMobile()) return;

    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      if (!cursorRef.current) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      currentX = lerp(currentX, targetX, 0.15);
      currentY = lerp(currentY, targetY, 0.15);

      // Direct DOM manipulation for better performance
      cursorRef.current.style.transform = `translate3d(${currentX - 12}px, ${
        currentY - 12
      }px, 0)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      const hoverableElement = e.target.closest(
        "a, button, [data-cursor-hover], input, textarea, select"
      );
      if (hoverableElement) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        !e.relatedTarget ||
        !e.relatedTarget.closest(
          "a, button, [data-cursor-hover], input, textarea, select"
        )
      ) {
        setIsHovered(false);
      }
    };

    // Use passive listeners for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible]);

  // Don't render on mobile or server-side
  if (typeof window === "undefined" || isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9999] pointer-events-none"
      style={{
        left: 0,
        top: 0,
        opacity: isVisible ? 1 : 0,
        width: isHovered ? "24px" : "12px",
        height: isHovered ? "24px" : "12px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(37,99,235,0.8) 100%)",
        backdropFilter: "blur(2px)",
        willChange: "transform",
        transition:
          "width 0.2s cubic-bezier(0.4, 0, 0.2, 1), height 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s ease-out",
        boxShadow: "0 0 20px rgba(59,130,246,0.3)",
      }}
    />
  );
};

export default CustomCursor;
