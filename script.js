const portfolioConfig = { email: "miguel.blanco1011@gmail.com", phone: "" };
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const navigationLinks = [...document.querySelectorAll("[data-nav] a")];

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("open");
  document.body.classList.remove("menu-open");
}
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation?.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
});
navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => event.key === "Escape" && closeMenu());
const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 30);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll(".email-link").forEach((link) => link.href = `mailto:${portfolioConfig.email}`);
document.querySelectorAll("[data-email-display]").forEach((node) => node.textContent = portfolioConfig.email);
document.querySelectorAll("[data-year]").forEach((node) => node.textContent = new Date().getFullYear());
const phoneLink = document.querySelector("[data-phone-link]");
if (portfolioConfig.phone && phoneLink) {
  phoneLink.href = `tel:${portfolioConfig.phone.replace(/[^+\d]/g, "")}`;
  phoneLink.hidden = false;
  phoneLink.querySelector("[data-phone-display]").textContent = portfolioConfig.phone;
}

const dialog = document.querySelector("[data-contact-dialog]");
document.querySelector("[data-contact-open]")?.addEventListener("click", () => dialog?.showModal());
document.querySelector("[data-contact-close]")?.addEventListener("click", () => dialog?.close());
dialog?.addEventListener("click", (event) => event.target === dialog && dialog.close());

const revealItems = document.querySelectorAll(".reveal");
if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.08, rootMargin: "0px 0px -40px" });
  revealItems.forEach((item) => revealObserver.observe(item));
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) navigationLinks.forEach((link) => link.classList.toggle("active", link.hash === `#${visible.target.id}`));
  }, { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.6] });
  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
}
