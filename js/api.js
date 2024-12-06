 // API AWESOMEAPI 
 const urlLastUp = "https://economia.awesomeapi.com.br/last/"

 const getPrice = async (urlLastUp,baseCoin,counterCoin) => {
    const response = await fetch(`${urlLastUp}${baseCoin}-${counterCoin}`)
    const datas = await response.json() 
    const sellPrice = datas[`${baseCoin}${counterCoin}`].bid
    const callPrice = datas[`${baseCoin}${counterCoin}`].ask
    const basePrice = ((Number(sellPrice) + Number(callPrice)) / 2).toFixed(2)

return {sellPrice, callPrice, basePrice }

}
export { getPrice, urlLastUp };


