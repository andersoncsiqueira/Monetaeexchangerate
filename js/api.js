 // API AWESOMEAPI 

 const urlLastPrice = "https://economia.awesomeapi.com.br/last/"


 const getPrice = async (urlLastPrice,baseCoin,counterCoin) => {
    const response = await fetch(`${urlLastPrice}${baseCoin}-${counterCoin}`)
    const datas = await response.json() 

    const sellPrice = datas[`${baseCoin}${counterCoin}`].bid
    const callPrice = datas[`${baseCoin}${counterCoin}`].ask
    const basePrice = ((Number(sellPrice) + Number(callPrice)) / 2).toFixed(2)



return {sellPrice, callPrice, basePrice }

}





export { getPrice, urlLastPrice };


