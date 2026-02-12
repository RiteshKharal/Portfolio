import Game from "./Game";

export default function Page() {
  return (
    <main className=" flex items-center justify-center mt-0">
      <Game />
      <a className="mt-10 mb-10 bg-foreground/6 p-4 rounded-md text-[14px] w-max transition hover:bg-foreground/10 absolute top-2 z-999 backdrop-blur-2xl font-medium font-mono text-foreground " href="./" >
    🏠 Enter the simplistic zone
</a>
    </main>
  );
}
