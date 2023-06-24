import { connectApi } from './connect-api.js'

const list = document.querySelector("[data-list]");

function buildCArd(title, description, url, image) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
      title="${title}" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  <div class="${description}">
      <img src="${image}" alt="logo canal alura">
      <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
      <p>236 mil visualizações</p>
  </div>`;

  return video;
}

async function videoList() {
  const apiList = await connectApi.videosList();
  apiList.forEach(element => list.appendChild(buildCArd(element.title, element.description, element.url, element.image)))
}

videoList();