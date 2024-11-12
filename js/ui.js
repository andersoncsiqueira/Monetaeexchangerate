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
        console.log(thead)

    })


coins.forEach( async (coin,index )=> {

       let tr = document.createElement('tr')
       let td0 = document.createElement('td')
       let td1 = document.createElement('td')
       let td2 = document.createElement('td')

       td0.innerText = coin
       td1.innerText = await mathOfSell(getPrice,coin,spreadsSell[`${coin}`])
       console.log(coin, spreadCall[`${coin}`])
       td2.innerText = await mathOfcall(getPrice,coin, spreadCall[`${coin}`])
       

          tr.appendChild(td0)
          tr.appendChild(td1)
          tr.appendChild(td2)
          console.log(tr)
          tbody.appendChild(tr)
          //console.log(tbody)
    })

   // console.log(tbody)
    
    contain.append(table)
    table.append(thead)
    thead.append(tr)
    table.append(tbody)



}


creatTable()
