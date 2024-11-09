 // API AWESOMEAPI 

 const urlLastPrice = "https://economia.awesomeapi.com.br/last/USD-BRL"


 const getPrice = async (urlLastPrice) => {
    const response = await fetch(urlLastPrice)
    return await response.json() 

}


let bid = async () => {
    let price = await getPrice(urlLastPrice) 
    console.log(price)
}

console.log((bid()))


export { getPrice, urlLastPrice };


