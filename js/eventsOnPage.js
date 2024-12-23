import { showCommercialRate } from "./util.js"


const usdRocket = document.querySelector("#usdRocket")
const wraperRocket  = document.querySelector('.popup-rocket-Wrapper')
const closeRocketPopu = document.querySelector('.close-rocket')
let MaxUSD = document.querySelector('[data-js="MaxUsd"]')
let MinUSD = document.querySelector('[data-js="MinUsd"]')
let MaxEur = document.querySelector('[data-js="MaxEur"]')
let MinEur = document.querySelector('[data-js="MinEur"]')
localStorage.setItem("contentForHighUsd",  0)
localStorage.setItem("contentForLownUsd",  7)
localStorage.setItem("contentForHighEur",  0)
localStorage.setItem("contentForLownEur",  8)


const eventMouseCommercialOver = async (tdCoin,getPrice,coin)=> {
    tdCoin.innerText = await showCommercialRate(getPrice,coin)
   tdCoin.classList.add('commercial')
   console.log('estou sendo invocada')
   }

   const eventMouseCommercialOut = (tdCoin,coin) => {
    tdCoin.innerText = coin 
    tdCoin.classList.remove('commercial')
  }

usdRocket.addEventListener('click', ()=> {
  
wraperRocket.style.display = 'block'
  
  const usdSell = document.querySelector('[data-js="USD"]').nextElementSibling.innerText

  console.log(usdSell)

})




closeRocketPopu.addEventListener("click", () => wraperRocket.style.display = 'none')

const scoreHighPrices = () => {

  const eurSell = Number(document.querySelector('[data-js="EUR"]').nextElementSibling.innerText)
  const usdSell = Number(document.querySelector('[data-js="USD"]').nextElementSibling.innerText)


  usdSell > Number(localStorage.getItem("contentForHighUsd")) ? localStorage.setItem("contentForHighUsd",usdSell) : ""
  usdSell < Number(localStorage.getItem("contentForLownUsd")) ? localStorage.setItem("contentForLownUsd",usdSell) : ""



  eurSell > Number(localStorage.getItem("contentForHighEur")) ? localStorage.setItem("contentForHighEur",eurSell) : ""
  eurSell < Number(localStorage.getItem("contentForLownEur")) ? localStorage.setItem("contentForLownEur",eurSell) : ""



}


const placeRateHistoric =  () => {


  MaxUSD.innerText = localStorage.getItem("contentForHighUsd")
  MinUSD.innerText = localStorage.getItem("contentForLownUsd")
  MaxEur.innerText = localStorage.getItem("contentForHighEur")
  MinEur.innerText = localStorage.getItem("contentForLownEur")



}

setInterval(placeRateHistoric,1000)



setInterval(scoreHighPrices,1000)

console.log(Number(localStorage.getItem("contentForHighUsd")))

  function scheduleMidnightClear(key) {
    
    const now = new Date();
    

    const nextMidnight = new Date();
    nextMidnight.setHours(9, 0, 0, 0); 
    const timeToMidnight = nextMidnight - now;
  

    setTimeout(() => {
    
      localStorage.setItem(`${key}`,0);
      console.log(`A variável '${key}' foi resetada no localStorage.`);
  
      // Reagenda para o próximo dia
      scheduleMidnightClear(key);
    }, timeToMidnight);
  }
  
  // Exemplo de uso:
  // Substitua 'minhaVariavel' pelo nome da chave que deseja limpar
  scheduleMidnightClear('contentForHighUsd')
  scheduleMidnightClear('contentForHighEur')
  scheduleMidnightClear('contentForLownUsd')
  scheduleMidnightClear('contentForLownEur');

  export { eventMouseCommercialOver, eventMouseCommercialOut}