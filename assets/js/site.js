// Light up the status-bar "workspace" for the section currently on screen.
const links = new Map(
  [...document.querySelectorAll('.workspaces a')].map((a) => [a.dataset.ws, a]),
);

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const [id, a] of links) a.classList.toggle('active', id === entry.target.id);
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);

for (const id of links.keys()) {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
}
