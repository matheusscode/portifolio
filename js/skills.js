const skillBox = document.querySelectorAll(".skill-box");
const description = document.querySelector(".text-description");

const aboutSkill = [
  "<p>HTML</p> <br /> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>",
  "<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>",
  "<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>",
  "<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>",
];

const startDate = [
  new Date(2021, 10, 1).getTime(), // 0
  new Date(2021, 10, 1).getTime(), // 1
  new Date(2022, 0, 1).getTime(), // 2
  new Date(2022, 3, 1).getTime(), // 3
  new Date(2022, 3, 1).getTime(), // 4
  new Date(2022, 1, 1).getTime(), // 5
  new Date(2021, 11, 1).getTime(), // 6
  new Date(2021, 11, 1).getTime(), // 7
];

const currentData = new Date().getTime();

skillBox.forEach((element, index) => {
  let index1 = index;
  let element1 = element;
  element.addEventListener("mouseover", (event) => {
    let time = "mês";
    let timeExperience = Math.round(
      (currentData - startDate[index1]) / (1000 * 60 * 60 * 24 * 30)
    );
    if (timeExperience > 1) time = "meses";
    description.innerHTML = `<p>${aboutSkill[index1]}</p>`;
  });
  element1.addEventListener("mouseout", (event, element) => {
    description.innerHTML =
      "/* Passe o mouse por cima de alguma habilidade para ler a descrição */";
  });
});
