const nav = document.querySelector(".site-nav");
const mobileMenu = document.getElementById("mobile-menu");
const bookingOverlay = document.getElementById("booking-overlay");
const bookingPanel = document.getElementById("booking-panel");
let menuOpen = false;
let lastScroll = 0;

function toggleMenu() {
  if (!mobileMenu) return;
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("open", menuOpen);
  document.body.style.overflow = menuOpen ? "hidden" : "";
}

function openBooking() {
  if (!bookingOverlay || !bookingPanel) return;
  if (menuOpen) toggleMenu();
  bookingOverlay.classList.add("open");
  bookingPanel.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeBooking() {
  if (!bookingOverlay || !bookingPanel) return;
  bookingOverlay.classList.remove("open");
  bookingPanel.classList.remove("open");
  document.body.style.overflow = menuOpen ? "hidden" : "";
}

function selectLocation(button) {
  const bookingUrl = button.getAttribute("data-url");
  if (!bookingUrl) return;
  window.open(bookingUrl, "_blank", "noopener,noreferrer");
  closeBooking();
}

window.addEventListener("scroll", () => {
  if (!nav) return;
  const current = window.scrollY;
  nav.classList.toggle("scrolled", current > 24);

  if (window.innerWidth > 760) {
    nav.classList.toggle("hidden", current > 240 && current > lastScroll);
  } else {
    nav.classList.remove("hidden");
  }

  lastScroll = current;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (menuOpen) toggleMenu();
    closeBooking();
  }
});
