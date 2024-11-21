import { coins, spreadCall, spreadsSell, mathOfSell, mathOfcall} from "./util.js";
import { getPrice, urlLastUp } from "./api.js";


const titleTHead= ['moeda','compra', 'venda']
const container = document.querySelector('.container')


const creatTable = async () => {
const table = document.createElement('table')
const tHead = document.createElement('thead')
const tBody = document.createElement('tbody')
const tr = document.createElement('tr')

titleTHead.forEach(title=>{

    let td = document.createElement('td')
    td.innerText = title
    tHead.appendChild(td)
    console.log(coins)

})

 table.appendChild(tHead)
 container.appendChild(table)


}


export { creatTable }
