(function () {
  "use strict";

  const config = window.SITE_CONFIG || {};

  function getWhatsAppUrl(message) {
    const phone = (config.phone || "").replace(/\D/g, "");
    const text = encodeURIComponent(message || config.whatsappMessage || "");
    return `https://wa.me/${phone}?text=${text}`;
  }

  function initHeader() {
    const header = document.querySelector(".header");
    const toggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    if (header) {
      window.addEventListener("scroll", () => {
        header.classList.toggle("header--scrolled", window.scrollY > 20);
      }, { passive: true });
    }

    if (toggle && mobileNav) {
      toggle.addEventListener("click", () => {
        const isOpen = toggle.classList.toggle("menu-toggle--open");
        mobileNav.classList.toggle("mobile-nav--open", isOpen);
        toggle.setAttribute("aria-expanded", isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "";
      });

      mobileNav.querySelectorAll(".mobile-nav__link").forEach((link) => {
        link.addEventListener("click", () => {
          toggle.classList.remove("menu-toggle--open");
          mobileNav.classList.remove("mobile-nav--open");
          toggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }
  }

  function initWhatsApp() {
    document.querySelectorAll("[data-whatsapp]").forEach((el) => {
      const message = el.dataset.whatsapp || config.whatsappMessage;
      el.href = getWhatsAppUrl(message);
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
  }

  function initFAQ() {
    document.querySelectorAll(".faq-item__question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isOpen = item.classList.contains("faq-item--open");

        document.querySelectorAll(".faq-item--open").forEach((open) => {
          open.classList.remove("faq-item--open");
          open.querySelector(".faq-item__question").setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          item.classList.add("faq-item--open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function initQuoteForm() {
    const form = document.getElementById("quote-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll("[required]").forEach((field) => {
        const group = field.closest(".form-group");
        if (!field.value.trim()) {
          group.classList.add("form-group--error");
          valid = false;
        } else {
          group.classList.remove("form-group--error");
        }
      });

      const emailField = form.querySelector('[name="email"]');
      if (emailField && emailField.value) {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value);
        const group = emailField.closest(".form-group");
        if (!emailValid) {
          group.classList.add("form-group--error");
          valid = false;
        }
      }

      if (!valid) return;

      const data = new FormData(form);
      const name = data.get("name");
      const phone = data.get("phone");
      const email = data.get("email");
      const service = data.get("service");
      const message = data.get("message");

      const whatsappText = [
        `*Quote Request — ${config.name}*`,
        "",
        `*Name:* ${name}`,
        `*Phone:* ${phone}`,
        `*Email:* ${email}`,
        `*Service:* ${service}`,
        `*Message:* ${message || "N/A"}`
      ].join("\n");

      const successEl = form.parentElement.querySelector(".form-success");
      if (successEl) {
        form.style.display = "none";
        successEl.classList.add("form-success--visible");
      }

      setTimeout(() => {
        window.open(getWhatsAppUrl(whatsappText), "_blank");
      }, 500);
    });

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("input", () => {
        field.closest(".form-group")?.classList.remove("form-group--error");
      });
    });
  }

  function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".portfolio-page-grid .portfolio-item");

    if (!filterBtns.length || !items.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        filterBtns.forEach((b) => b.classList.remove("filter-btn--active"));
        btn.classList.add("filter-btn--active");

        items.forEach((item) => {
          const category = item.dataset.category;
          const show = filter === "all" || category === filter;
          item.classList.toggle("portfolio-item--hidden", !show);
        });
      });
    });
  }

  function populateServiceSelects() {
    document.querySelectorAll('select[name="service"]').forEach((select) => {
      if (select.options.length > 1) return;
      config.services.forEach((service) => {
        const opt = document.createElement("option");
        opt.value = service;
        opt.textContent = service;
        select.appendChild(opt);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initWhatsApp();
    initFAQ();
    initQuoteForm();
    initPortfolioFilter();
    populateServiceSelects();
  });
})();