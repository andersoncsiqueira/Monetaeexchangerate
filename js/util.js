import { getPrice, urlLastUp } from "./api.js";

const coins = ['USD','EUR','CAD','GBP','AUD','ARS','CLP','CHF','NZD']
const spreadsSell = {'USD':1.06, 'EUR': 1.06, 'CAD':1.09,'GBP': 1.077,'AUD':1.09,'ARS': 1.75,'CLP': 1.35,'CHF':1.1,'NZD':1.077}
const spreadCall =  {'USD':1.25, 'EUR': 1.25, 'CAD':1.25,'GBP': 1.2,'AUD':1.25,'ARS': 1.75,'CLP': 1.75,'CHF':1.25,'NZD':1.25}
const iof = 1.011



const mathOfSell =  async (getPrice,counterCoin,spread) => {
  
    let exchangeRate = null
        exchangeRate = await getPrice(urlLastUp,counterCoin,'BRL')

        exchangeRate =(((Number(exchangeRate.sellPrice)+Number(exchangeRate.callPrice))/2)*spread * iof)
        exchangeRate = exchangeRate < 1 ? exchangeRate.toFixed(4) : exchangeRate.toFixed(2)
        return exchangeRate

        
  }

const mathOfcall =  async (getPrice,counterCoin,spread) => {
    let exchangeRate = null
        exchangeRate = await getPrice(urlLastUp,counterCoin,'BRL')
        exchangeRate =(Number(exchangeRate.basePrice)/spread)
        exchangeRate = exchangeRate < 1 ? exchangeRate.toFixed(4) : exchangeRate.toFixed(2)
        return exchangeRate
  }


  const showCommercialRate =  async (getPrice,counterCoin) => {
    let exchangeRate = null
        exchangeRate = await getPrice(urlLastUp,counterCoin,'BRL')
        exchangeRate = exchangeRate.basePrice
        return exchangeRate
  }

  

  export { coins, spreadCall, spreadsSell, mathOfSell, mathOfcall, showCommercialRate }