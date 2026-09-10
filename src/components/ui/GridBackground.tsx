function GridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-50"
      style={{
        backgroundImage: `
          linear-gradient(#e5e7eb 1px, transparent 1px),
          linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "clamp(35px, 4vw, 60px) clamp(35px, 4vw, 60px)",
      }}
    />
  );
}

export default GridBackground;