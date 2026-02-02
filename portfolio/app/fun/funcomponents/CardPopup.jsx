export default function CardPopup({ data, onClose }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-[#0b0f1a] border-2 border-cyan-400 rounded-2xl p-6 w-80
        animate-[bounce_0.4s_ease-out_forwards] opacity-0">
        <h2 className="font-[PressStart] text-cyan-300 mb-2">{data.title}</h2>
        <p className="text-sm text-gray-300 mb-4">{data.text}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm"
        >
          Press Space to Continue
        </button>
      </div>
    </div>
  );
}
