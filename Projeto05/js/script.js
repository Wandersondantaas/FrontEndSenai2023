async function convertmoeda() {
  const valor = document.getElementById('valor').value;
  const moeda = document.getElementById('moeda').value;

  const apiUrl = 'https://api.exchangerate-api.com/v4/latest/BRL';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const rate = data.rates[moeda]; // Taxa de câmbio para a moeda escolhida
    const convertedvalor = (valor * rate).toFixed(2);



    var mensagem = ""
    if(convertedvalor == "NaN" || convertedvalor == 0){
      mensagem = "Insira valores válidos ou selecione a moeda"
    }
    else{
      mensagem = `
      <p>${valor} BRL em ${moeda}: ${convertedvalor} ${moeda}</p>
      `;
    }
    document.getElementById('result').innerHTML = mensagem

    /*document.getElementById('result').innerHTML = `
    <p>${valor} BRL em ${moeda}: ${convertedvalor} ${moeda}</p>
    `;*/


  } catch (error) {
    console.error('Erro ao converter moeda:', error);
    document.getElementById('result').innerHTML = '<p>Erro ao converter moeda.</p>';
  }
}

/* Incluí função limpar*/
function Clear() {
  document.getElementById("valor").value = "";
  document.getElementById("moeda").value = "";
  document.getElementById("result").innerHTML = "";
}


document.getElementById('convertButton').addEventListener('click', convertmoeda);

