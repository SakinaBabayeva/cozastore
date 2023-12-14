function getbyname () {
    customer.innerHTML = ``
    customers.style.display='none'
    customer.style.display='block'

    axios.get('https://65680f8f9927836bd97407de.mockapi.io/products')
    .then(res => {
        db = res.data
        let sortedData = db.sort((a, b) => a.price - b.price)      
        sortedData.map(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${item.title}</p>`
            abcd.append(div)
        })

    })
}
btn.addEventListener('click', getbyname);
