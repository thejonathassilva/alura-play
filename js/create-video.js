import { connectApi } from "./connect-api.js";

const form = document.querySelector("[data-form]");

async function createVideo(event) {
  event.preventDefault();

  console.log('teste')
  
  const image = document.querySelector("[data-image]").value;
  const url = document.querySelector("[data-url]").value;
  const title = document.querySelector("[data-title]").value;
  const description = Math.floor(Math.random() *10).toString();

  console.log('teste')

  await connectApi.createVideo(title, description, url, image);

  window.location.href = "../pages/envio-concluido.html"
}

form.addEventListener('submit', event => createVideo(event))