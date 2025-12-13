// Lightbox handling + dynamic gallery loading.
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeButton = document.querySelector(".lightbox__close");
  const prevButton = document.querySelector(".lightbox__nav--prev");
  const nextButton = document.querySelector(".lightbox__nav--next");
  const gallery = document.getElementById("gallery");

  const canRenderGallery =
    gallery && lightbox && lightboxImage && lightboxCaption && closeButton;

  if (canRenderGallery) {
    let galleryImages = [];
    let currentIndex = 0;

    const setActiveImage = (index) => {
      const img = galleryImages[index];
      if (!img) return;
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt || "";
      lightboxCaption.textContent = "";
    };

    const openLightbox = (index) => {
      currentIndex = index;
      setActiveImage(currentIndex);
      lightbox.setAttribute("data-active", "true");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      document.body.classList.add("lightbox-open");
    };

    const closeLightbox = () => {
      lightbox.removeAttribute("data-active");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
      lightboxCaption.textContent = "";
      document.body.style.overflow = "";
      document.body.classList.remove("lightbox-open");
    };

    const showNextImage = () => {
      if (!galleryImages.length) return;
      currentIndex = (currentIndex + 1) % galleryImages.length;
      setActiveImage(currentIndex);
    };

    const showPrevImage = () => {
      if (!galleryImages.length) return;
      currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setActiveImage(currentIndex);
    };

    const bindImageEvents = () => {
      galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
        img.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(index);
          }
        });
        img.setAttribute("tabindex", "0");
      });
    };

    closeButton.addEventListener("click", closeLightbox);
    prevButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      showPrevImage();
    });
    nextButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      showNextImage();
    });

    lightbox.addEventListener("click", (event) => {
      if (!event.target.closest(".lightbox__content")) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (lightbox.dataset.active !== "true") return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevImage();
      }
    });

    const fetchImageList = async () => {
      const response = await fetch("images.json", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Unable to read images.json manifest.");
      }

      const payload = await response.json();
      const maybeList = Array.isArray(payload)
        ? payload
        : Array.isArray(payload?.images)
        ? payload.images
        : [];

      const sanitizePath = (path) => {
        if (typeof path !== "string") return null;
        const cleanPath = path.trim().replace(/^\.\//, "");
        if (!cleanPath) return null;
        const normalized = cleanPath.startsWith("images/")
          ? cleanPath
          : `images/${cleanPath}`;
        const base = normalized.split("?")[0] || "";
        if (!/\.(jpe?g|png|gif|webp|avif)$/i.test(base)) return null;
        return normalized;
      };

      return [...new Set(maybeList.map(sanitizePath).filter(Boolean))];
    };

    const renderGallery = (sources) => {
      gallery.innerHTML = "";
      const fragment = document.createDocumentFragment();
      sources.forEach((src) => {
        const figure = document.createElement("figure");
        figure.className = "gallery-item";

        const img = document.createElement("img");
        img.src = src;
        img.alt = "";
        img.loading = "lazy";

        figure.appendChild(img);
        fragment.appendChild(figure);
      });

      gallery.appendChild(fragment);
      galleryImages = Array.from(gallery.querySelectorAll("img"));
      bindImageEvents();
    };

    const initGallery = async () => {
      try {
        const sources = await fetchImageList();
        if (!sources.length) {
          galleryImages = [];
          gallery.innerHTML = "";
          console.warn(
            "No images found inside /images. Drop files there to populate the gallery."
          );
          return;
        }
        renderGallery(sources);
      } catch (error) {
        console.error("Failed to load images from /images", error);
      }
    };

    initGallery();
  }

  // Simple year stamp
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Dark mode toggle
  const initDarkMode = () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    if (!toggleButton) return;

    // Get current theme (already applied by IIFE above)
    const currentTheme = document.documentElement.getAttribute("data-theme");
    updateToggleIcon(currentTheme);

    toggleButton.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateToggleIcon(newTheme);
    });
  };

  const updateToggleIcon = (theme) => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    if (!toggleButton) return;
    toggleButton.textContent = theme === "dark" ? "☼" : "☽";
    toggleButton.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  };

  initDarkMode();
});
