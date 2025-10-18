import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: null, y: null });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
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
      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);

      setPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        !e.relatedTarget ||
        !e.relatedTarget.closest("a, button, [data-cursor-hover]")
      ) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
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
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <div
      className="fixed z-[9999] pointer-events-none transition-all duration-300 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
        width: isHovered ? "24px" : "12px",
        height: isHovered ? "24px" : "12px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(37,99,235,0.8) 100%)",
        backdropFilter: "blur(2px)",
        willChange: "transform, width, height",
        transition: "width 0.3s ease, height 0.3s ease, opacity 0.2s ease",
      }}
    />
  );
};

export default CustomCursor;
