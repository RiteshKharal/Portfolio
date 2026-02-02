export default function PacMan({ pos }) {
  return (
    <div
      className="absolute w-8 h-8 bg-yellow-400 rounded-full transition-transform"
      style={{
        transform: `translate(${pos.x * 32}px, ${pos.y * 32}px)`,
      }}
    />
  );
}
