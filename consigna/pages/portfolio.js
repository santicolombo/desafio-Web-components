import { createCard } from "/components/card.js";

async function getPortfolio() {
  try {
    console.log("Iniciando fetch portfolio...");

    const response = await fetch(
      "https://cdn.contentful.com/spaces/n45b54co1v03/environments/master/entries?access_token=J6AVnA7XU5Zzxm9HGILgSDxO4H39CZ0VGKiysuhmkV4&content_type=portfolio"
    );

    const data = await response.json();
    const assets = data.includes?.Asset || [];
    const container = document.querySelector("#portfolio");

    data.items.forEach((item) => {
      const fields = item.fields;
      let imageUrl = "";

      if (fields.image && fields.image.length > 0) {
        const imageId = fields.image[0].sys.id;
        const asset = assets.find((a) => a.sys.id === imageId);
        if (asset) imageUrl = "https:" + asset.fields.file.url;
      }

      const card = createCard({
        title: fields.title,
        description: fields.description,
        imageUrl,
        link: fields.url || "",
      });

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error cargando portfolio:", error);
  }
}

getPortfolio();
