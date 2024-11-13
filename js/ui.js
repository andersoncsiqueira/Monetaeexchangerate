import { coins, spreadCall, spreadsSell, mathOfSell, mathOfcall} from "./util.js";
import { getPrice, urlLastUp } from "./api.js";




const creatTable = async () => {

    const headers = ['Moedas','Venda','Compra']
    const contain = document.querySelector('.container')
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')
    const tbody = document.createElement('tbody')
    
    
    headers.forEach((header, index)=> {
        let th = document.createElement('th')
        thead.appendChild(th)
        th.innerText = header

    })

coins.forEach( async (coin)=> {

       let tr = document.createElement('tr')
       let td0 = document.createElement('td')
       let td1 = document.createElement('td')
       let td2 = document.createElement('td')
       let td3 = document.createElement('td')
       let buttonBlockPrice = document.createElement('button')


       td0.innerText = coin
       td1.innerText = await mathOfSell(getPrice,coin,spreadsSell[`${coin}`])
       td2.innerText = await mathOfcall(getPrice,coin, spreadCall[`${coin}`])
       
          tr.appendChild(td0)
          tr.appendChild(td1)
          tr.appendChild(td2)
       //   tr.appendChild(td3)
          tr.append(buttonBlockPrice)
          tbody.appendChild(tr)


    })
    
    contain.append(table)
    table.append(thead)
    thead.append(tr)
    table.append(tbody)



}



const blockPrice = () => {
    let allButtons = document.querySelectorAll('button')
    const newPrice = null
    const tdSelect = null
    const popup = document.querySelector('.popup-wrapper')
    const closeButton = document.querySelector('.popup-close')
    //tdSelect.innerText = newPrice
    allButtons.forEach(button => {

        button.addEventListener('click', ()=> popup.style.display = 'block' )
    })

    closeButton.addEventListener('click', () => popup.style.display = 'none')
    
}


setTimeout(blockPrice,2000)


export { creatTable }
