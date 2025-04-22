 // API AWESOMEAPI 
 const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Proxy público (use apenas para testes)
 const urlLastUp = "https://economia.awesomeapi.com.br/last/"

 const soma = (proxyUrl+urlLastUp)
 const getPrice = async (soma,baseCoin,counterCoin) => {
    const response = await fetch(`${soma}${baseCoin}-${counterCoin}`)
   
    const datas = await response.json() 
    const sellPrice = datas[`${baseCoin}${counterCoin}`].bid
    const callPrice = datas[`${baseCoin}${counterCoin}`].ask
    const basePrice = ((Number(sellPrice) + Number(callPrice)) / 2).toFixed(2)

return {sellPrice, callPrice, basePrice }

}
export { getPrice, urlLastUp };


