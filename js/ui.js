import { coins, spreadCall, spreadsSell, mathOfSell, mathOfcall} from "./util.js";
import { getPrice,} from "./api.js";


const titleTHead= ['Moeda','Venda', 'Compra']
const container = document.querySelector('.container')
const table = document.createElement('table')
const tHead = document.createElement('thead')
const tBody = document.createElement('tbody')
const wrapper = document.querySelector('.popup-wrapper')
const popupClose = document.querySelector('.popup-close')
const titleBlockCoin = document.querySelector('#titleBlock')
const buttonBlock = document.querySelector('.buttonPopup')
const buttonDisblock = document.querySelector('.buttonPopupDisbloc')

const setTitleTable = ( title ) =>{

    let tdTitle = document.createElement('td')
    tdTitle.innerText = title
    tHead.appendChild(tdTitle)
}

const renderBodyTable = async ( coin ) => {
    const tr = document.createElement('tr')
    let tdCoin = document.createElement('td')
    let tdBodySell = document.createElement('td')
    let tdBodyCall = document.createElement('td')
    let buttonCoins = document.createElement('button')    
    let testToPicWritePriceSell = localStorage.getItem(`${coin}`) === 'on' ? Number(localStorage.getItem(`${coin}BlockSell`)).toFixed(2):
     await mathOfSell(getPrice,coin,spreadsSell[`${coin}`])
    let testToPicWritePriceCall = localStorage.getItem(`${coin}`) === 'on' ? Number(localStorage.getItem(`${coin}BlockBuy`)).toFixed(2):
      await mathOfcall(getPrice,coin,spreadCall[`${coin}`])

    tdCoin.innerText = coin
    tdBodySell.innerText = testToPicWritePriceSell
    tdBodyCall.innerText = testToPicWritePriceCall
    tr.append(tdCoin,tdBodySell, tdBodyCall,buttonCoins)
    buttonCoins.classList.add('button-coins')
    tBody.append(tr)
}
  
const creatTable = async () => {

titleTHead.forEach(title => setTitleTable(title))

coins.forEach(async (coin) => renderBodyTable(coin))

setTimeout(()=>{
const allButtons = document.querySelectorAll('.button-coins')

allButtons.forEach(button => {
    button.addEventListener('click', event => {

        titleBlockCoin.innerText =  event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText
        wrapper.style.display = 'block'
        
        })
})

popupClose.addEventListener('click', ()=> wrapper.style.display = 'none')

},1000)

 table.appendChild(tHead)
 table.appendChild(tBody)
 container.appendChild(table)

 buttonBlock.addEventListener('click', event => {

   let buyInput = event.target.previousElementSibling.previousElementSibling.previousElementSibling.value
   let sellInput = event.target.previousElementSibling.value
   let coinToBlocks = document.querySelectorAll('td')
   let coinToChange =  Array.from(coinToBlocks).filter(td => td.innerText === titleBlockCoin.innerText )
   let coinToChangeBuy = coinToChange[0].nextElementSibling
   let coinToChangeSell = coinToChange[0].nextElementSibling.nextElementSibling
   const setTextInBuyerTd = buyInput?  localStorage.setItem(`${coinToChange[0].innerText}BlockBuy`,`${(buyInput).replace(',','.')}`) :
      coinToChangeBuy
   const setTextInSellTd = sellInput? localStorage.setItem(`${coinToChange[0].innerText}BlockSell`,`${sellInput.replace(',','.')}`) : 
      coinToChangeSell

  localStorage.setItem(`${coinToChange[0].innerText}`,'on')
    
     setTextInBuyerTd
     setTextInSellTd

   location.reload()
  
})

  buttonDisblock.addEventListener('click', event => {
    event.preventDefault()
    let coinToBlocks = document.querySelectorAll('td')
    let coinToChange =  Array.from(coinToBlocks).filter(td => td.innerText === titleBlockCoin.innerText )
    localStorage.setItem(`${coinToChange[0].innerText}`,'off')
    location.reload()
  })

}

setInterval(()=> location.reload(),30000)

export { creatTable }
