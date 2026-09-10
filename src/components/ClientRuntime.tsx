"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export function ClientRuntime() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-header]");
    const menuButton = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
    const navigation = document.querySelector<HTMLElement>("[data-nav]");
    const navigationLinks = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav] a")];
    const dialog = document.querySelector<HTMLDialogElement>("[data-contact-dialog]");
    const openButton = document.querySelector<HTMLButtonElement>("[data-contact-open]");
    const closeButton = document.querySelector<HTMLButtonElement>("[data-contact-close]");

    const closeMenu = () => {
      menuButton?.setAttribute("aria-expanded", "false");
      navigation?.classList.remove("open");
      document.body.classList.remove("menu-open");
    };

    const toggleMenu = () => {
      const isOpen = menuButton?.getAttribute("aria-expanded") === "true";
      menuButton?.setAttribute("aria-expanded", String(!isOpen));
      navigation?.classList.toggle("open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 30);
    const openDialog = () => dialog?.showModal();
    const closeDialog = () => dialog?.close();
    const closeDialogFromBackdrop = (event: MouseEvent) => {
      if (dialog && event.target === dialog) dialog.close();
    };

    menuButton?.addEventListener("click", toggleMenu);
    navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("scroll", updateHeader, { passive: true });
    openButton?.addEventListener("click", openDialog);
    closeButton?.addEventListener("click", closeDialog);
    dialog?.addEventListener("click", closeDialogFromBackdrop);
    updateHeader();

    document.querySelectorAll<HTMLAnchorElement>(".email-link").forEach((link) => {
      link.href = `mailto:${siteConfig.email}`;
    });
    document.querySelectorAll<HTMLElement>("[data-email-display]").forEach((element) => {
      element.textContent = siteConfig.email;
    });
    document.querySelectorAll<HTMLElement>("[data-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });

    const phoneLink = document.querySelector<HTMLAnchorElement>("[data-phone-link]");
    if (siteConfig.phone && phoneLink) {
      phoneLink.href = `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`;
      phoneLink.hidden = false;
      const phoneDisplay = phoneLink.querySelector<HTMLElement>("[data-phone-display]");
      if (phoneDisplay) phoneDisplay.textContent = siteConfig.phone;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    let revealObserver: IntersectionObserver | undefined;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px" },
      );
      revealItems.forEach((item) => revealObserver?.observe(item));
    }

    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navigationLinks.forEach((link) => {
          link.classList.toggle("active", link.hash === `#${visible.target.id}`);
        });
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      menuButton?.removeEventListener("click", toggleMenu);
      navigationLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("scroll", updateHeader);
      openButton?.removeEventListener("click", openDialog);
      closeButton?.removeEventListener("click", closeDialog);
      dialog?.removeEventListener("click", closeDialogFromBackdrop);
      revealObserver?.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return null;
}
