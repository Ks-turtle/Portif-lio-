const projectsListElement = document.querySelector("#projects-list");

const projects = [
  {
    name: "correção de códigos",
    description: "corrijo códigos em html, entrar em contato caso interessado",
  },
];

projects.forEach((project) => {
  projectsListElement.innerHTML += `
    <div>
        <div>
        <h3>${project.name}</h3>
        ${
          project.href
            ? `<a href="${project.href}" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a>`
            : ""
        }
        </div>

        <p>
        ${project.description}
        </p>
  </div>`;
});
