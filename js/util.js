import { getPrice, urlLastUp } from "./api.js";



const coins = [,'USD','EUR','CAD','GBP','AUD','ARS','CLP']

const spreadsSell = {'USD':1.07, 'EUR': 1.07, 'CAD':1.08,'GBP': 1.08,'AUD':1.08,'ARS': 1.08,'CLP': 1.07}
const spreadCall =  {'USD':0.8, 'EUR': 0.8, 'CAD':0.08,'GBP': 0.8,'AUD':0.8,'ARS': 0.08,'CLP': 0.07}



  const mathOfSell =  async (getPrice,counterCoin,spread) => {
    let exchangeRate = null

        exchangeRate = await getPrice(urlLastUp,counterCoin,'BRL')
        exchangeRate =(Number(exchangeRate.basePrice)*spread).toFixed(2)
       
        return exchangeRate

  }


const mathOfcall =  async (getPrice,counterCoin,spread) => {
    let exchangeRate = null

        exchangeRate = await getPrice(urlLastUp,counterCoin,'BRL')
        exchangeRate =(Number(exchangeRate.basePrice)*spread).toFixed(2)
        
        return exchangeRate

  }
 




  export { coins, spreadCall, spreadsSell, mathOfSell, mathOfcall }