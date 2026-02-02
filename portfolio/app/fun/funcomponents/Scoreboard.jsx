export default function Scoreboard({ score }) {
  return (
    <div className="absolute top-3 left-4 font-[PressStart] text-cyan-400 text-sm">
      SCORE: {score}
    </div>
  );
}
