export default function Ghosts({ pacPos, paused }) {
  const ghosts = [
    { color: "bg-pink-400", x: 13, y: 14 },
    { color: "bg-cyan-400", x: 14, y: 14 },
  ];

  return (
    <>
      {ghosts.map((g, i) => (
        <div
          key={i}
          className={`absolute w-8 h-8 rounded-t-full rounded-b-lg ${g.color} transition-transform`}
          style={{
            transform: `translate(${g.x * 32}px, ${g.y * 32}px)`,
            opacity: paused ? 0.6 : 1,
          }}
        />
      ))}
    </>
  );
}
