 // API AWESOMEAPI 
 /* const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Proxy público (use apenas para testes)
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

*/ 


const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Proxy público (apenas para desenvolvimento)
const apiBaseUrl = "https://economia.awesomeapi.com.br/last/";

const getPrice = async (baseCoin, counterCoin) => {
  try {
    console.log(`${proxyUrl}${apiBaseUrl}${baseCoin}-${counterCoin}`)
    const response = await fetch(`${proxyUrl}${apiBaseUrl}${baseCoin}-${counterCoin}`);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    const pairKey = `${baseCoin}${counterCoin}`;
    
    if (!data[pairKey]) {
      throw new Error('Par de moedas não encontrado na resposta');
    }
    
    const sellPrice = data[pairKey].bid;
    const callPrice = data[pairKey].ask;
    const basePrice = ((Number(sellPrice) + Number(callPrice))) / 2;
    
    return {
      sellPrice: Number(sellPrice).toFixed(2),
      callPrice: Number(callPrice).toFixed(2),
      basePrice: basePrice.toFixed(2)
    };
  } catch (error) {
    console.error('Erro ao obter preços:', error);
    throw error; // Rejeita a promise para que o chamador possa lidar com o erro
  }
};

export { getPrice, apiBaseUrl };