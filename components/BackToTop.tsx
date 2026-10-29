"use client";

/** "Voltar ao início": rola até o topo com aceleração e desaceleração suaves. */
export function BackToTop({ className = "" }: { className?: string }) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const start = window.scrollY;
    if (start <= 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      return;
    }
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    const duration = Math.min(1600, 600 + start * 0.15);
    const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      window.scrollTo(0, start * (1 - easeInOut(t)));
      if (t < 1) requestAnimationFrame(step);
      else html.style.scrollBehavior = previous;
    };
    requestAnimationFrame(step);
  }

  return (
    <a href="#" onClick={onClick} className={className}>
      Voltar ao início ↑
    </a>
  );
}
