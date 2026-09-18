import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setIsMoving(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none fixed z-[9999]
        hidden -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-white
        mix-blend-difference
        md:block
        ${isMoving ? "h-7 w-7" : "h-3.5 w-3.5"}
      `}
      style={{
        left: position.x,
        top: position.y,
        transition: "width 180ms ease, height 180ms ease",
      }}
    />
  );
}

export default CustomCursor;