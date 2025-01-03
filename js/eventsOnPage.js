import { showCommercialRate } from "./util.js"



const usdRocket = document.querySelector("#usdRocket")
const wraperRocket  = document.querySelector('.popup-rocket-Wrapper')
const closeRocketPopu = document.querySelector('.close-rocket')
let MaxUSD = document.querySelector('[data-js="MaxUsd"]')
let MinUSD = document.querySelector('[data-js="MinUsd"]')
let MaxEur = document.querySelector('[data-js="MaxEur"]')
let MinEur = document.querySelector('[data-js="MinEur"]')

if (!localStorage.getItem("contentForHighUsd")) {
  localStorage.setItem("contentForHighUsd", 0);
}
if (!localStorage.getItem("contentForLownUsd")) {
  localStorage.setItem("contentForLownUsd", 7);
}
if (!localStorage.getItem("contentForHighEur")) {
  localStorage.setItem("contentForHighEur", 0);
}
if (!localStorage.getItem("contentForLownEur")) {
  localStorage.setItem("contentForLownEur", 7);
}

const eventMouseCommercialOver = async (tdCoin,getPrice,coin)=> {
    tdCoin.innerText = await showCommercialRate(getPrice,coin)
   tdCoin.classList.add('commercial')
   
   }

   const eventMouseCommercialOut = (tdCoin,coin) => {
    tdCoin.innerText = coin 
    tdCoin.classList.remove('commercial')
  }

usdRocket.addEventListener('click', ()=> {
  
wraperRocket.style.display = 'block'
  
  //const usdSell = document.querySelector('[data-js="USD"]').nextElementSibling.innerText

})

closeRocketPopu.addEventListener("click", () => wraperRocket.style.display = 'none')

const scoreHighPrices = () => {

  const eurSell = Number(document.querySelector('[data-js="EUR"]').nextElementSibling.innerText)
  const usdSell = Number(document.querySelector('[data-js="USD"]').nextElementSibling.innerText)

  

 
  if(usdSell > Number(JSON.parse(localStorage.getItem("contentForHighUsd")))) {
    
    localStorage.setItem("contentForHighUsd",usdSell)
    
  }
  
  //console.log(Number(localStorage.getItem("contentForLownUsd")))
  if(usdSell < Number(JSON.parse(localStorage.getItem("contentForLownUsd")))) {
    console.log(Number(localStorage.getItem("contentForLownUsd")))
    localStorage.setItem("contentForLownUsd",usdSell)
    
  }

  if(eurSell > Number(JSON.parse(localStorage.getItem("contentForHighEur")))) {
    localStorage.setItem("contentForHighEur",eurSell)
    
  }
  
  if(eurSell < Number(JSON.parse(localStorage.getItem("contentForLownEur")))) {
    localStorage.setItem("contentForLownEur",eurSell)
  
  }

  MaxUSD.innerText = localStorage.getItem("contentForHighUsd")
  MinUSD.innerText = localStorage.getItem("contentForLownUsd")
  MaxEur.innerText = localStorage.getItem("contentForHighEur")
  MinEur.innerText = localStorage.getItem("contentForLownEur")

}

setInterval(scoreHighPrices,2000)


const printButton = document.querySelector('#print-button')
const tablePrint = document.querySelector('.table-rocket')


const captureElement = (selector) => {
  const element = selector;
  html2canvas(element).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png'); // Cria o arquivo em formato PNG
      link.download = 'captura.png'; // Nome do arquivo para download
      link.click(); // Baixa a imagem automaticamente
  });
};


printButton.addEventListener('click', () => {
  captureElement(tablePrint);
});





function scheduleClearAt(key, hour) {
  const now = new Date();

  // Define o próximo horário alvo
  const nextTargetTime = new Date();
  nextTargetTime.setHours(hour, 0, 0, 0);

  // Se já passou o horário alvo de hoje, ajusta para o próximo dia
  if (now > nextTargetTime) {
    nextTargetTime.setDate(nextTargetTime.getDate() + 1);
  }

  // Calcula o tempo restante até o horário alvo
  const timeToTarget = nextTargetTime - now;

  // Agenda a execução única
  setTimeout(() => {
    // Executa a ação desejada
    localStorage.setItem(`${key}`, 0);
    console.log(`A variável '${key}' foi resetada no localStorage.`);
  }, timeToTarget);
}

function scheduleClearAt2(key, hour) {
  const now = new Date();

  // Define o próximo horário alvo
  const nextTargetTime = new Date();
  nextTargetTime.setHours(hour, 0, 0, 0);

  // Se já passou o horário alvo de hoje, ajusta para o próximo dia
  if (now > nextTargetTime) {
    nextTargetTime.setDate(nextTargetTime.getDate() + 1);
  }

  // Calcula o tempo restante até o horário alvo
  const timeToTarget = nextTargetTime - now;

  // Agenda a execução única
  setTimeout(() => {
    // Executa a ação desejada
    localStorage.setItem(`${key}`, 10);
    console.log(`A variável '${key}' foi resetada no localStorage.`);
  }, timeToTarget);
}


  
  // Exemplo de uso:
  // Substitua 'minhaVariavel' pelo nome da chave que deseja limpar
  scheduleClearAt('contentForHighUsd',11)
  scheduleClearAt('contentForHighEur',11)
  scheduleClearAt2('contentForLownUsd',11)
  scheduleClearAt2('contentForLownEur',11); 

  

  export { eventMouseCommercialOver, eventMouseCommercialOut}

  