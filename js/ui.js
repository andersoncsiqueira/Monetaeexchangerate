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

          tr.append(buttonBlockPrice)
          tbody.appendChild(tr)


    })
    
    contain.append(table)
    table.append(thead)
    //.append(tr)
    table.append(tbody)



}



const blockPrice = () => {
    let allButtons = document.querySelectorAll('button')
    const newPrice = null
    const tdSelect = null
    const popup = document.querySelector('.popup-wrapper')
    const closeButton = document.querySelector('.popup-close')
    const buyer = document.querySelector("#buyer")
    const sell = document.querySelector('#sell')
    const buttonPopup = document.querySelector('.buttonPopup')
    let keyCoin = ""
    //tdSelect.innerText = newPrice
    allButtons.forEach(button => {

        button.addEventListener('click', event => {
            
            popup.style.display = 'block'
            const titleBlock = document.querySelector('#titleBlock')
            keyCoin = event.target.previousElementSibling.previousElementSibling.previousElementSibling
            titleBlock.innerText = keyCoin.innerText 
        })
    })

    closeButton.addEventListener('click', event => {
        event.preventDefault()
        popup.style.display = 'none'})
        
    buttonPopup.addEventListener('click', event => {
       event.preventDefault()
      // 
      //  const inputBuyer = event.target.previousElementSibling
      //  const allTds = document.querySelectorAll('tr')
//
      //  allTds.forEach(row => {
      //    let coinOFToMAth = row.children[0].innerText
        //    console.log( keyCoin.innerText)
        //  coinOFToMAth === keyCoin ? row.children[1].innerText = buyer.innerText : row.children[1].innerText
        //  }
        
        
      //  )
        
      // inputBuyer.innerText = buyer.value
    })
    
}

let change  = 0

setTimeout(blockPrice,2000)


export { creatTable }
