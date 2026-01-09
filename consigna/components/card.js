export function createCard({ title, description, imageUrl }) {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <img src="${imageUrl}" alt="${title}" />
    <h3>${title}</h3>
    <p>${description}</p>
  `;

  return div;
}
