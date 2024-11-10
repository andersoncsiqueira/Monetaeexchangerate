import { getPrice, urlLastPrice } from "./api.js";



const coins = [,'BRL','EUR','CAD','GBP','AUD','ARS','CLP']


async function makeCoins() {

    let coinsCall = coins.map(async coin => ({

        coin: coin,
        price: (await getPrice(urlLastPrice,'USD',coin)).basePrice
    }))
    
    console.log(coinsCall,'oi')
}




makeCoins()