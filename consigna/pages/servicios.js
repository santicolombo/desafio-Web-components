import { createCard } from "/components/card.js";

const URL = `https://cdn.contentful.com/spaces/n45b54co1v03/environments/master/entries?access_token=J6AVnA7XU5Zzxm9HGILgSDxO4H39CZ0VGKiysuhmkV4&content_type=service&include=2`;

async function getServices() {
  try {
    console.log("Iniciando fetch servicios...");

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Error HTTP: " + response.status);
    }

    const data = await response.json();
    console.log("DATA:", data);

    const items = data.items || [];
    const assets = data.includes?.Asset || [];

    const container = document.querySelector("#service");

    if (!container) {
      console.error("No existe el contenedor #service");
      return;
    }

    if (items.length === 0) {
      container.innerHTML = "<p>No hay servicios cargados.</p>";
      return;
    }

    items.forEach((item) => {
      const fields = item.fields;

      let imageUrl = "";

      if (fields.image && fields.image.length > 0) {
        const imageId = fields.image[0].sys.id;
        const asset = assets.find((a) => a.sys.id === imageId);

        if (asset) {
          imageUrl = "https:" + asset.fields.file.url;
        }
      }

      const card = createCard({
        title: fields.title,
        description: fields.description,
        imageUrl,
      });

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error cargando servicios:", error);
  }
}

getServices();


