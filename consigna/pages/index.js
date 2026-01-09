async function getWelcomeContent() {
  const response = await fetch(
    "https://cdn.contentful.com/spaces/n45b54co1v03/environments/master/entries?access_token=J6AVnA7XU5Zzxm9HGILgSDxO4H39CZ0VGKiysuhmkV4&content_type=welcome"
  );

  const data = await response.json();

  const welcomeSection = document.querySelector("#welcome");

  const item = data.items[0].fields;

  welcomeSection.innerHTML = `
    <h1>${item.title}</h1>
    <p>${item.description}</p>
  `;
}

getWelcomeContent();

async function getPresentation() {
  const response = await fetch(
    "https://cdn.contentful.com/spaces/n45b54co1v03/environments/master/entries?access_token=J6AVnA7XU5Zzxm9HGILgSDxO4H39CZ0VGKiysuhmkV4&content_type=presentation"
  );

  const data = await response.json();

  const item = data.items[0].fields;
  const assets = data.includes?.Asset || [];

  let imageUrl = "";

  if (item.image) {
    const imageId = item.image.sys.id;
    const imageAsset = assets.find((asset) => asset.sys.id === imageId);

    if (imageAsset) {
      imageUrl = "https:" + imageAsset.fields.file.url;
    }
  }

  const section = document.querySelector("#presentation");

  section.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    ${imageUrl ? `<img src="${imageUrl}" />` : ""}
  `;
}

getPresentation();

