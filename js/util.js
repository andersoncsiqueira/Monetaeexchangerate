import { getPrice, urlLastUp } from "./api.js";



const coins = [,'BRL','EUR','CAD','GBP','AUD','ARS','CLP']

const spreadsSell = {'USD':1.07, 'Eur': 1.07, 'GBP': 1.08}
const spreadCall =  {'USD':0.8, 'Eur': 0.8, 'GBP': 0.8}



  const mathOfSell =  async (getPrice,counterCoin,spread) => {
    let exchangeRate = null

        exchangeRate = await getPrice(urlLastUp,'USD',counterCoin)
        exchangeRate =(Number(exchangeRate.basePrice)*spread).toFixed(2)
        console.log(exchangeRate)
        return exchangeRate

  }


const mathOfcall =  async (getPrice,counterCoin,spread) => {
    let exchangeRate = null

        exchangeRate = await getPrice(urlLastUp,'USD',counterCoin)
        exchangeRate =(Number(exchangeRate.basePrice)/spread).toFixed(2)
        console.log(exchangeRate)
        return exchangeRate

  }
 




  export { coins, spreadCall, spreadsSell, mathOfSell, mathOfcall }