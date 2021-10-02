let carta1 = {
  nome: "Jason Vorhees",
  imagem:
    "https://upload.wikimedia.org/wikipedia/pt/thumb/0/05/Jasonf.jpg/240px-Jasonf.jpg",
  atributos: {
    Força: 1000,
    Resistência: 500,
    Defesa: 600
  }
};

let carta2 = {
  nome: "Freddy Krueger",
  imagem:
    "https://i.pinimg.com/originals/b0/cf/1f/b0cf1f5b593fa6bf2b5b61f60ea2ec36.jpg",
  atributos: {
    Força: 1200,
    Resistência: 100,
    Defesa: 400
  }
};

let carta3 = {
  nome: "Michael Myers",
  imagem:
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/10/halloween-michael-myers.jpg",
  atributos: {
    Força: 500,
    Resistência: 1000,
    Defesa: 500
  }
};

let carta4 = {
  nome: "Ghost Face",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/a/ac/Ghostface.jpg",
  atributos: {
    Força: 300,
    Resistência: 300,
    Defesa: 100
  }
};

let carta5 = {
  nome: "PinHead",
  imagem:
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/05/Hellraiser.jpg",
  atributos: {
    Força: 1500,
    Resistência: 1000,
    Defesa: 1000
  }
};

let carta6 = {
  nome: "Predador",
  imagem:
    "https://3.bp.blogspot.com/-QLJGnmxG7zs/UeB1q-HkD7I/AAAAAAAAMhg/O-yhDS_jqWE/s1600/The+Predator.jpg",
  atributos: {
    Força: 1500,
    Resistência: 700,
    Defesa: 1500
  }
};

let carta7 = {
  nome: "Alien",
  imagem:
    "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/07/alien-serie-ripley-desigualdade.jpg",
  atributos: {
    Força: 1300,
    Resistência: 1000,
    Defesa: 700
  }
};

let carta8 = {
  nome: "Pennywise",
  imagem:
    "https://i.pinimg.com/564x/0c/7e/66/0c7e664fa9083062009ed8edf29cc1a6.jpg",
  atributos: {
    Força: 700,
    Resistência: 400,
    Defesa: 600
  }
};

let carta9 = {
  nome: "Jigsaw",
  imagem:
    "https://img.elo7.com.br/product/100x80/31BCFBF/placa-decorativa-mdf-jogos-mortais-billy-jigsaw-748-insidious.jpg",
  atributos: {
    Força: 500,
    Resistência: 1000,
    Defesa: 800
  }
};

let carta10 = {
  nome: "Leather Face",
  imagem:
    "https://upload.wikimedia.org/wikipedia/pt/thumb/8/84/Leatherface.jpg/200px-Leatherface.jpg",
  atributos: {
    Força: 1000,
    Resistência: 1000,
    Defesa: 0
  }
};

let cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];

var cartaMaquina;

var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);

  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }

  cartaJogador = cartas[numeroCartaJogador];

  var escolherAtributo = document.querySelector(".page-subtitle");
  escolherAtributo.style.display = "block";

  escolherAtributo.innerHTML = "Escolha o seu atributo";

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();

  console.log(atributoSelecionado);

  var elementoResultado = document.getElementById("resultado");

  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];

  console.log(valorCartaJogador);

  if (valorCartaJogador == undefined) {
    document.querySelector("#opcao-invalida").innerHTML =
      "<br><p class='resultado-invalido'>Opção inválida</p>";
    jogar();
  }

  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  console.log(valorCartaMaquina);

  if (valorCartaMaquina < valorCartaJogador) {
    document.querySelector("#opcao-invalida").innerHTML = "";
    htmlResultado = "<br><p class='resultado-vencedor'>Você venceu!</p>";
    document.querySelector("#carta-maquina").style.filter = "grayscale(1)";
  } else if (valorCartaMaquina > valorCartaJogador) {
    document.querySelector("#opcao-invalida").innerHTML = "";
    htmlResultado = "<br><p class='resultado-perdedor'>Você perdeu...</p>";
    document.querySelector("#carta-jogador").style.filter = "grayscale(1)";
  } else if (valorCartaJogador == valorCartaMaquina) {
    document.querySelector("#opcao-invalida").innerHTML = "";
    htmlResultado = "<br><p class='resultado-empate'>Foi um empate!</p>";
  }

  elementoResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
  document.getElementById("área").disabled = true;
  document.getElementById("população").disabled = true;
  document.getElementById("densidade").disabled = true;
  document.getElementById("IDH").disabled = true;
  document.getElementById("renda").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.display = "block";

  var bandeira = "<img class='img' src='" + cartaJogador.imagem + "'></div>";

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<ul class='atributoCarta'>" +
      "<li><input required type='radio' name='atributo' value='" +
      atributo +
      "' id='" +
      atributo +
      "'>" +
      "<label for='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "</label>" +
      "</li>" +
      "</ul>";
  }
  var nome = `
  <div class="carta-container"><p class='carta-subtitle'>${cartaJogador.nome}</p>
  `;

  divCartaJogador.innerHTML =
    nome + bandeira + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.display = "block";

  var bandeira = "<img class='img' src='" + cartaMaquina.imagem + "'></div>";

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<ul class='atributoCarta'>" +
      "<li><input type='radio' name='atributo' value='" +
      atributo +
      "'> " +
      "<label for='atributo'" +
      ">" +
      atributo +
      "</label> " +
      cartaMaquina.atributos[atributo] +
      "</li>" +
      "</ul>";
  }
  var nome = `
  <div class="carta-container"><p class='carta-subtitle'>${cartaMaquina.nome}</p>
  `;

  divCartaMaquina.innerHTML =
    nome + bandeira + tagHTML + opcoesTexto + "</div>";
}

function reiniciar() {
  var numeroCartaMaquina = "";
  var numeroCartaJogador = "";
  var reiniciarAtributo = document.querySelector(".page-subtitle");
  reiniciarAtributo.innerHTML = "";
  if (reiniciarAtributo.style.display !== "none") {
    reiniciarAtributo.style.display = "none";
  } else {
    reiniciarAtributo.style.display = "block";
  }
  var reiniciarCartaJogador = document.getElementById("carta-jogador");
  reiniciarCartaJogador.innerHTML = "";
  if (reiniciarCartaJogador.style.display !== "none") {
    reiniciarCartaJogador.style.display = "none";
  } else {
    reiniciarCartaJogador.style.display = "block";
  }
  var reiniciarCartaMaquina = document.getElementById("carta-maquina");
  reiniciarCartaMaquina.innerHTML = "";
  if (reiniciarCartaMaquina.style.display !== "none") {
    reiniciarCartaMaquina.style.display = "none";
  } else {
    reiniciarCartaMaquina.style.display = "block";
  }
  document.querySelector("#opcao-invalida").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;

  document.querySelector("#carta-jogador").style.filter = "none";
  document.querySelector("#carta-maquina").style.filter = "none";
}