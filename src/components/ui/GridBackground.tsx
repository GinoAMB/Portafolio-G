interface GridBackgroundProps {
  variant?: "light" | "dark";
}

function GridBackground({ variant = "light" }: GridBackgroundProps) {
  const gridColor =
    variant === "dark"
      ? "hsla(0, 0%, 100%, 0.15)"
      : "hsla(220, 13%, 91%, 0.80)";

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(${gridColor} 1px, transparent 1px),
          linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
        `,
        backgroundSize: "clamp(35px, 4vw, 60px) clamp(35px, 4vw, 60px)",
      }}
    />
  );
}

export default GridBackground;