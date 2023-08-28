// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const h2 = document.querySelector('h2');

setInterval(valorBitcoin, 30000);

function valorBitcoin () {
    fetch('https://blockchain.info/ticker')
    .then((resposta) => {
        return resposta.json();
    }).then((body) => {
        const compraBit = body.BRL.buy;
        h2.innerText = `R$ ${compraBit}`;
    })

    /* alert('30 segundos'); */
}

valorBitcoin();
