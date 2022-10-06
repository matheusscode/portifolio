const myName = document.querySelector(".my-name");
const fName = myName.innerHTML;
const buttonToSeeMore = document.querySelector("button");
const skills = document.querySelectorAll(".hidden");
myName.innerHTML = "";

function clickToShow(e) {
  skills.forEach((elemento) => {
    if (elemento.classList.contains("hidden")) {
      elemento.classList.remove("hidden");
      elemento.classList.add("visible");
      buttonToSeeMore.innerHTML = "Ver Menos";
    } else {
      elemento.classList.add("hidden");
      elemento.classList.remove("visible");
      buttonToSeeMore.innerHTML = "Ver Mais";
    }
  });
}

function moreSkills(elemento) {
  elemento.addEventListener("click", clickToShow);
}

function typeWriter(name) {
  setTimeout(() => {
    const myNameF = name.split("");
    myName.innerHTML = "";
    myNameF.forEach((letra, index) => {
      setTimeout(function () {
        myName.innerHTML += letra;
      }, 150 * index);
    }),
      1500;
  });
}

/* typeWriter(fName); */

moreSkills(buttonToSeeMore);
