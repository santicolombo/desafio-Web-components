function renderHeader() {
  const header = document.querySelector("#header");

  header.innerHTML = `
    <div class="header-container">
      <span class="logo">MiLogo</span>
      <button class="menu-button">☰</button>
    </div>

    <nav class="menu hidden">
      <a href="./index.html">Home</a>
      <a href="./portfolio.html">Portfolio</a>
      <a href="./servicios.html">Servicios</a>
      <a href="./contacto.html">Contacto</a>
    </nav>
  `;
  const button = header.querySelector(".menu-button");
  const menu = header.querySelector(".menu");

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

renderHeader();
