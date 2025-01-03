import { coins, spreadCall, spreadsSell, mathOfSell, mathOfcall, showCommercialRate} from "./util.js";
import { getPrice,} from "./api.js";


const titleTHead= ['Moeda','Venda', 'Compra']
const container = document.querySelector('.container')
const table = document.createElement('table')
const tHead = document.createElement('table')
const tBody = document.createElement('tbody')
const wrapper = document.querySelector('.popup-wrapper')
const popupClose = document.querySelector('.popup-close')
const titleBlockCoin = document.querySelector('#titleBlock')
const buttonBlock = document.querySelector('.buttonPopup')
const buttonDisblock = document.querySelector('.buttonPopupDisbloc')
const containTable = document.querySelector('.container-table')
const containButtons = document.querySelector('.cointainbuttons')

const setTitleTable = ( title ) =>{

    let tdTitle = document.createElement('td')
    tdTitle.innerText = title
    tHead.appendChild(tdTitle)
}

console.log()

const coinsCollum = document.querySelectorAll('[data-js="coinCol"]')

const renderBodyTable = async ( tdCoin ) => {

  const coin = tdCoin.innerText
  
  const tr = document.querySelector(`[data-js="ROW-${coin}"]`)
    //const tr = document.createElement('tr')
    //let tdCoin = coin
    let tdBodySell = document.createElement('td')
    let tdBodyCall = document.createElement('td')
    let buttonCoins = document.createElement('button')    
    let testToPicWritePriceSell = localStorage.getItem(`${coin}Sell`) === 'on' ? Number(localStorage.getItem(`${coin}BlockSell`)).toFixed(2):
     await mathOfSell(getPrice,coin,spreadsSell[`${coin}`])
    let testToPicWritePriceCall = localStorage.getItem(`${coin}Buy`) === 'on' ? Number(localStorage.getItem(`${coin}BlockBuy`)).toFixed(2):
      await mathOfcall(getPrice,coin,spreadCall[`${coin}`])

const commerciallOver = async ()=> {
        tdCoin.innerText = await showCommercialRate(getPrice,coin)
        tdCoin.classList.add('commercial')       
       }
const commercialOut = () => {
        tdCoin.innerText = coin 
        tdCoin.classList.remove('commercial')
       }

    //tdCoin.innerText = coin
    tdCoin.setAttribute(`data-js`,`${coin}`)
    tdBodySell.innerText = testToPicWritePriceSell
    tdBodyCall.innerText = testToPicWritePriceCall
    tr.append(tdBodySell, tdBodyCall)
  
    //tBody.append(tr)
  
    tdCoin.addEventListener('mouseover', commerciallOver)
    tdCoin.addEventListener('mouseout', commercialOut)
    
    containButtons.append(buttonCoins)
    buttonCoins.setAttribute('id',`${coin}`)
    buttonCoins.classList.add('button-coins')

}
  
const creatTable = async () => {

//titleTHead.forEach(title => setTitleTable(title))

//coins.forEach(async (coin) => renderBodyTable(coin))

coinsCollum.forEach(async (coin) => renderBodyTable(coin))

setTimeout(()=>{
  //location.reload
const allButtons = document.querySelectorAll('.button-coins')

allButtons.forEach(button => {
    button.addEventListener('click', event => {

       titleBlockCoin.innerText =  event.target.id
        wrapper.style.display = 'block'
        
        })
})

popupClose.addEventListener('click', ()=> wrapper.style.display = 'none')

},1000)

 containTable.appendChild(tHead)
 tHead.classList.add('titleTb')
 table.appendChild(tBody)
 //containTable.appendChild(table)
 

 buttonBlock.addEventListener('click', () => {

   let buyInput = document.querySelector('[data-js="input-buyer"]').value
   
   let sellInput = document.querySelector('[data-js="input-sell"]').value
   let coinToBlocks = document.querySelectorAll('td')
   let coinToChange =  Array.from(coinToBlocks).filter(td => td.dataset.js === titleBlockCoin.innerText )
   let coinToChangeBuy = coinToChange[0].nextElementSibling
   let coinToChangeSell = coinToChange[0].nextElementSibling.nextElementSibling
   const setTextInBuyerInLocalStorage = buyInput?  localStorage.setItem(`${coinToChange[0].innerText}BlockBuy`,`${(buyInput).replace(',','.')}`) :
      coinToChangeBuy
   const setTextInSellInLocalStorage = sellInput? localStorage.setItem(`${coinToChange[0].innerText}BlockSell`,`${sellInput.replace(',','.')}`) : 
      coinToChangeSell

      buyInput? localStorage.setItem(`${coinToChange[0].innerText}Buy`,'on'):""
      sellInput?localStorage.setItem(`${coinToChange[0].innerText}Sell`,'on'):""
    
     setTextInBuyerInLocalStorage
     setTextInSellInLocalStorage

   //location.reload()
   
  
})

  buttonDisblock.addEventListener('click', event => {
    event.preventDefault()
    let coinToBlocks = document.querySelectorAll('td')
    let coinToChange =  Array.from(coinToBlocks).filter(td => td.dataset.js === titleBlockCoin.innerText )

     localStorage.setItem(`${coinToChange[0].innerText}Buy`,'off')
     localStorage.setItem(`${coinToChange[0].innerText}Sell`,'off')

    location.reload()
  })

}

setInterval(() => {
  location.reload();
}, 60000)

export { creatTable }
