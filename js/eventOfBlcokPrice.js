import { getPrice, apiBaseUrl } from "./api.js"
import {  coins, spreadsSell, mathOfSell, spreadCall,mathOfcall, showCommercialRate } from "./util.js"

const checkSinalForAnimationBuy = () => {

  let coinsToAnimateBuy = coins.map(coin0 => {

    let coin = "" 
    let item = ""

   if((localStorage.getItem(`${coin0}Buy`) === "on")) {

     item =  `${coin0}Buy`
     coin = coin0

    }

return {item, coin}

  }) 


    coinsToAnimateBuy =  coinsToAnimateBuy.filter(item => item.coin !== "")
   
  return coinsToAnimateBuy


}




const checkSinalForAnimationSell = () => {


  let coinsToAnimateSell = coins.map(coin0 => {

    let coin = "" 
    let item = ""

   if((localStorage.getItem(`${coin0}Sell`) === "on")) {

     item =  `${coin0}Sell`
     coin = coin0
    }

    
return {item, coin}

  })
  
  coinsToAnimateSell =  coinsToAnimateSell.filter(item => item.coin !== "")
  

return coinsToAnimateSell


}


const setImgBuy= (c) => {


  
    let tdsBuy = checkSinalForAnimationBuy().filter(item => item.item !== "") 

 
   // console.log(tdsBuy)

    tdsBuy.forEach(td => {

      const lock = document.createElement('img')
      lock.src = "bloqueado.svg"
      lock.classList.add("lockicon")
      lock.alt = "cadeado"

      
         document.querySelector(`[data-js="${td.coin}"]`).nextElementSibling.nextElementSibling.append(lock)
        
    })




}

const setImgSell= () => {
  
  let tdsSell = checkSinalForAnimationSell()

  tdsSell.forEach(td => {

    const lock = document.createElement('img')
    lock.src = "bloqueado.svg"
    lock.classList.add("lockicon")
    lock.alt = "cadeado"

    
       document.querySelector(`[data-js="${td.coin}"]`).nextElementSibling.append(lock)
      
  })


  tdsSell.forEach( td => {

     document.querySelector(`[data-js="${td.coin}"]`).nextElementSibling.addEventListener("mouseover", async()=> {
     document.querySelector(`[data-js="${td.coin}"]`).nextElementSibling.innerText = await mathOfSell((getPrice,td.coin,spreadsSell[`${td.coin}`]))
    console.log(td.coin,getPrice,mathOfSell) 
    
    })

  })

}

setTimeout(setImgSell,1000)
setTimeout(setImgBuy,2000)
