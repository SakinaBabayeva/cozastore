const production = document.getElementById("production");

function getCart () {
    production.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    cart.map((item, index) => {
        let card = document.createElement("div");
        card.className = "cardBox";
        card.innerHTML = `
                  <img src="${item.image}" alt="">
                  <div class="cardTextBox">
                      <h2>${item.title}</h2>
                      <p>${item.price} $</p>
                  </div>
                  <button onclick="removeItem(${index})">DELETE</button>
              `;
        production.appendChild(card);
      });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
}

window.onload = () => {
    getCart()
}
