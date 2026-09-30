document.documentElement.classList.add("js");

// Menu (telas pequenas)
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

if (toggle && links) {
  const setOpen = (open) => {
    links.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav__pill")) setOpen(false);
  });
}

// Título: cada palavra entra separadamente
document.querySelectorAll("[data-split]").forEach((title) => {
  const words = title.textContent.trim().split(/\s+/);
  title.setAttribute("aria-label", words.join(" "));
  title.innerHTML = words
    .map((word, i) => `<span class="word" aria-hidden="true" style="--i:${i}">${word}</span>`)
    .join(" ");
});

// Entrada dos blocos ao rolar a página
let pending = [...document.querySelectorAll(".reveal")];

const revealVisible = () => {
  const limit = window.innerHeight - 40;
  pending = pending.filter((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top > limit || rect.bottom < 0) return true;
    item.classList.add("is-in");
    return false;
  });
  if (!pending.length) {
    window.removeEventListener("scroll", revealVisible);
    window.removeEventListener("resize", revealVisible);
  }
};

window.addEventListener("scroll", revealVisible, { passive: true });
window.addEventListener("resize", revealVisible);
window.addEventListener("load", revealVisible);
revealVisible();

// Leve paralaxe das formas decorativas
const decos = document.querySelectorAll("[data-parallax]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (decos.length && !reduceMotion) {
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        decos.forEach((deco) => {
          deco.style.translate = `0 ${window.scrollY * Number(deco.dataset.parallax)}px`;
        });
        ticking = false;
      });
    },
    { passive: true }
  );
}
