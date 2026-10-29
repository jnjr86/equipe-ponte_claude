import { Flower, type FlowerKind } from "./Flower";

const flowers: { kind: FlowerKind; petal: string; center: string; h: number; leaf: "left" | "right" }[] = [
  { kind: "daisy", petal: "#6ec597", center: "#ffffff", h: 150, leaf: "right" },
  { kind: "round", petal: "#2c5d78", center: "#6ec597", h: 210, leaf: "right" },
  { kind: "tulip", petal: "#a7b7c7", center: "#081e29", h: 120, leaf: "left" },
  { kind: "round", petal: "#ffffff", center: "#6ec597", h: 250, leaf: "right" },
  { kind: "star", petal: "#3f9a6c", center: "#ffffff", h: 170, leaf: "left" },
  { kind: "tulip", petal: "#6ec597", center: "#1d5c3d", h: 190, leaf: "right" },
  { kind: "daisy", petal: "#a7b7c7", center: "#2c5d78", h: 135, leaf: "left" },
];

/** Canteiro do topo (estático). */
export function HeroGarden() {
  return (
    <div className="relative mt-10 h-[300px] sm:h-[340px]">
      <div className="absolute inset-x-0 bottom-[14px] flex items-end justify-between px-[2%] sm:px-[6%]">
        {flowers.map((f, i) => (
          <div key={i} className={`origin-bottom scale-[0.72] sm:scale-100 ${i === 2 || i === 4 ? "hidden sm:block" : ""}`}>
            <Flower kind={f.kind} petal={f.petal} center={f.center} height={f.h} leaf={f.leaf} />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[16px] bg-stem" />
    </div>
  );
}

/** Sol do canto do topo (estático). */
export function Sun({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {Array.from({ length: 10 }, (_, i) => (
        <path key={i} d="M60 4 L66 20 L54 20 Z" fill="#a8dcbf" transform={`rotate(${i * 36} 60 60)`} />
      ))}
      <circle cx="60" cy="60" r="27" fill="#6ec597" />
    </svg>
  );
}
