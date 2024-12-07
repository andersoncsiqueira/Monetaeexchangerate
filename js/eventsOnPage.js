import { showCommercialRate } from "./util.js"


const eventMouseCommercialOver = async (tdCoin,getPrice,coin)=> {
    tdCoin.innerText = await showCommercialRate(getPrice,coin)
   tdCoin.classList.add('commercial')
   console.log('estou sendo invocada')
   }

   const eventMouseCommercialOut = (tdCoin,coin) => {
    tdCoin.innerText = coin 
    tdCoin.classList.remove('commercial')
  }



  export { eventMouseCommercialOver, eventMouseCommercialOut}