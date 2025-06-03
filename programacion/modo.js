document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  const button = document.getElementById("toggleTheme");
  const icon = document.getElementById("themeIcon");

  button.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);

    // Cambiar ícono según el tema
    if (newTheme === "dark") {
      icon.classList.replace("bi-brightness-high-fill", "bi-moon-stars-fill");
    } else {
      icon.classList.replace("bi-moon-stars-fill", "bi-brightness-high-fill");
    }
  });
});
