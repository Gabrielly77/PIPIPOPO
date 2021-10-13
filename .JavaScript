//Passos para abrir a telinha (tambem conhecida como modal) do desafio.
const btnAbreModal = document.querySelector(".btn-desafios"); //Seleciona o botão que abre o modal.

btnAbreModal.addEventListener("click", () => abreModal("modal")); //Descobre se o botão foi clicado.

function abreModal(idModal) {
  // Função que abre o modal.
  const modal = document.getElementById(idModal);
  if (modal) {
    modal.classList.add("modal-ativo");
    modal.addEventListener("click", (event) => {
      if (
        event.target.id == idModal ||
        event.target.className == "modal--fechar"
      ) {
        modal.classList.remove("modal-ativo");
      }
    });
  }
}

let numeroAleatorio = parseInt(Math.random() * 11);
const desafios = document.querySelector(".desafios");
const golpes = document.querySelector(".golpes");
const ultimoResultado = document.querySelector(".ultimoResultado");
const baixoOuAlto = document.querySelector(".baixoOuAlto");
const envioGolpe = document.querySelector(".envioGolpe");
const campoGolpe = document.querySelector(".campoGolpe");
let contagemGolpes = 1;
let botaoReinicio;

campoGolpe.focus();

function conferirGolpe() {
  const golpeUsuario = Number(campoGolpe.value);
  if (contagemGolpes === 1) {
    golpes.textContent = "Golpes anteriores: ";
  }
  golpes.textContent += golpeUsuario + " ";
  if (golpeUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Uau, FATALITY!!!";
    ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else if (contagemGolpes === 3) {
    ultimoResultado.textContent = "Game Over";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else {
    ultimoResultado.textContent = "Errrrrrrrrrrrrou feio, bixo!";
    ultimoResultado.style.backgroundColor = "black";
    if (golpeUsuario < numeroAleatorio) {
      baixoOuAlto.textContent =
        "Hahaha, teu golpe foi muito fraco!! Mais sorte na próxima vez! Aumente teu golpe, vai que consiga me derrotar...";
    } else if (golpeUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = "Hmm, teu golpe foi além do combinado...";
    }
  }
  contagemGolpes++;
  campoGolpe.value = "";
  campoGolpe.focus();
}

envioGolpe.addEventListener("click", conferirGolpe);

function configFimDeJogo() {
  campoGolpe.disabled = true;
  envioGolpe.disabled = true;
  botaoReinicio = document.createElement("button");
  botaoReinicio.textContent = "Iniciar novo jogo";
  desafios.appendChild(botaoReinicio);
  botaoReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {
  contagemGolpes = 1;
  var reiniciarParas = document.querySelectorAll(".resultadoParas p");
  for (var i = 0; i < reiniciarParas.length; i++) {
    reiniciarParas[i].textContent = "";
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);
  campoGolpe.disabled = false;
  envioGolpe.disabled = false;
  campoGolpe.value = "";

  campoGolpe.focus();

  ultimoResultado.style.backgroundColor = "rgba(25, 17, 66, 0.5);";
  numeroAleatorio = parseInt(Math.random() * 11);
}
