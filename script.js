// Lightbox + caption handling
// To change captions: update the data-caption attribute on each <img>.
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeButton = document.querySelector(".lightbox__close");
  const prevButton = document.querySelector(".lightbox__nav--prev");
  const nextButton = document.querySelector(".lightbox__nav--next");

  const galleryImages = Array.from(
    document.querySelectorAll(".gallery-item img")
  );
  let currentIndex = 0;

  const setActiveImage = (index) => {
    const img = galleryImages[index];
    if (!img) return;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || "";
    lightboxCaption.textContent = img.dataset.caption || "";
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

  // Simple year stamp
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
