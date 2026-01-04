(function () {
  const burger = document.getElementById("nav-burger");
  const backdrop = document.getElementById("nav-backdrop");
  const overlay = document.getElementById("nav-overlay");
  const menu = document.getElementById("nav-menu");
  const closeBtn = document.getElementById("nav-close");

  if (!burger || !backdrop || !overlay || !menu || !closeBtn) return;

  function openMenu() {
    backdrop.classList.add("is-open");
    overlay.classList.add("is-open");
    burger.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    backdrop.classList.remove("is-open");
    overlay.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", () => {
    overlay.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);

  overlay.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) closeMenu();
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 500) closeMenu();
  });
})();
