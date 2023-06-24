import { connectApi } from "./connect-api.js";
import buildCArd from "./show-videos.js";

async function searchVideo(event) {
  event.preventDefault();

  const searchData = document.querySelector("[data-search]").value;
  const search = await connectApi.searchVideo(searchData);

  const list = document.querySelector("[data-list]");

  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }

  search.forEach(element => list.appendChild(buildCArd(element.title, element.description, element.url, element.image)))
}

const searchButton = document.querySelector("[data-search-button]");

searchButton.addEventListener('click', event => searchVideo(event));