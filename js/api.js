 // API AWESOMEAPI 

 const urlLastPrice = "https://economia.awesomeapi.com.br/last/USD-BRL"


 const getPrice = async (urlLastPrice) => {
    const response = await fetch(urlLastPrice)
    const datas = await response.json() 

console.log(datas)}


let consoles = oi => console.log(oi)


export {consoles}