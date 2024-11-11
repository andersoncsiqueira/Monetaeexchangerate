




const creatTable = async () => {


    const headers = ['Moedas','Venda','Compra']
    const contain = document.querySelector('.container')
    
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')
    

    headers.forEach((header, index)=> {
        let th = document.createElement('th')
        thead.appendChild(th)
        th.innerText = header
        console.log(thead)

    })


    
    contain.append(table)
    table.append(thead)
    thead.append(tr)
    



}


creatTable()
