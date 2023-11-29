// Calcular o IMC e exibir o resultado
function calcularIMC() {
  // Obter valores de peso e altura dos campos de entrada
  var nome = document.getElementById("name").value;
  var peso = parseFloat(document.getElementById("weight").value);
  var altura = parseFloat(document.getElementById("height").value);

  // Verificar se todos os campos foram preenchidos
  if (nome === "" || peso === "" || altura === "") {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  // Calcular o IMC
  var imc = peso / (altura * altura);

  // Exibir o resultado
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = nome + ", seu IMC é: " + imc.toFixed(2);

  // Lógica para classificação do IMC
  if (imc < 18.5) {
      resultado.innerHTML += "<br>Abaixo do peso. Alimente-se melhor.";
  } else if (imc < 24.9) {
      resultado.innerHTML += "<br>Peso normal. Parabéns, continue assim!";
  } else if (imc < 29.9) {
      resultado.innerHTML += "<br>Sobrepeso. Reveja sua alementeção.";
  } else {
      resultado.innerHTML += "<br>Obesidade. Sua saúde está em risco.";
  }
}