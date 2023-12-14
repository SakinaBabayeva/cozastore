const products=document.getElementById("products");
const pages=document.getElementById("pages");

let page=1;
let limit=3;




async function getProducts(){
    let skip=(page-1)*limit;
    const response=await axios.get(`https://65680f8f9927836bd97407de.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
    const data = response.data;

    db=data;
    db.map(item=>{
        const box =document.createElement(`div`);
        box.className = `boxDiv col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12`;
        box.innerHTML = `
        <p>${item.title}</p>
        <img src= '${item.image}' alt=''>
        <button onclick='addToBasket(${item.id})'>Add to card </button>
        `;
    products.appendChild(box);
    });
    page++;
    console.log('basildi');
   
}
pages.addEventListener('click', getProducts)

function addToBasket (id){
    let cart=JSON.parse(localStorage .getItem(`cart`)) || []
    cart.push(db.find(item=>item.id==id))
    localStorage.setItem('cart',JSON .stringify(cart))
}
getProducts();