document.addEventListener("DOMContentLoaded", function () {
  // Menambahkan event listener ke gambar panah
  const arrow = document.querySelector(".arrow");
  if (arrow) {
    arrow.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah tindakan default tautan

      // Scroll ke elemen dengan ID "options"
      const optionsSection = document.querySelector("#options");
      if (optionsSection) {
        optionsSection.scrollIntoView({
          behavior: "smooth", // Efek smooth scroll
        });
      }
    });
  }
});
