import { coins, spreadCall, spreadsSell, mathOfSell, mathOfcall} from "./util.js";
import { getPrice, urlLastUp } from "./api.js";


const titleTHead= ['moeda','compra', 'venda']
const container = document.querySelector('.container')
const table = document.createElement('table')
const tHead = document.createElement('thead')
const tBody = document.createElement('tbody')
const wrapper = document.querySelector('.popup-wrapper')


const setTitleTable = ( title ) =>{

    let tdTitle = document.createElement('td')
    tdTitle.innerText = title
    tHead.appendChild(tdTitle)
    console.log(coins)

}

const renderBodyTable = async ( coin ) => {
    const tr = document.createElement('tr')
    let tdCoin = document.createElement('td')
    let tdBodySell = document.createElement('td')
    let tdBodyCall = document.createElement('td')
    let buttonCoins = document.createElement('button')
    tdCoin.innerText = coin
    tdBodySell.innerText = await mathOfSell(getPrice,coin,spreadsSell[`${coin}`])
    tdBodyCall.innerText = await mathOfcall(getPrice,coin,spreadCall[`${coin}`])
    tr.append(tdCoin,tdBodyCall,tdBodySell,buttonCoins)
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

        console.log(event.target)
        wrapper.style.display = 'block'
        
        })
})




},1000)

 table.appendChild(tHead)
 table.appendChild(tBody)
 container.appendChild(table)




}


export { creatTable }
