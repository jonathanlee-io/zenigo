import html from "./message.html";
import "./message.css";

const elements = [];
let body;

export function show(params) {
  localStorage.setItem("nest-subdomain", params.project.subdomain);

  // convert plain HTML string into DOM elements
  const temporary = document.createElement("div");
  temporary.innerHTML = html;

  // append elements to body
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }
}
