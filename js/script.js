const modal = document.querySelector('.modal');
const buttonCart = document.querySelector('.button__cart');
const buttonClosed = document.querySelector('.button--closed')
const cancelButton = document.getElementById('cancelButton')
const carts = modal.querySelectorAll('.cart-string');
const total = modal.querySelector('.modal-sum');

const toggleModal=() => {
    modal.classList.toggle('open');
}

const getFuiiPrice = () => {
    let fuiiPrice = 0;
    carts.forEach(cart => {
        let newPrice = 0;
        let priceBlock = cart.querySelector('.price')
        let price = +priceBlock.textContent
        fuiiPrice += price;
    })   
    total.textContent = fuiiPrice;
}

getFuiiPrice()


buttonCart.addEventListener('click', toggleModal)
buttonClosed.addEventListener('click', toggleModal)
cancelButton.addEventListener('click', toggleModal)


modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        toggleModal()
    } 
})

carts.forEach(cart => {
    let newPrice = 0;
    let priceBlock = cart.querySelector('.price')
    let price = +priceBlock.textContent
    let countBlock = cart.querySelector('.count')
    let count = countBlock.textContent
    const btnMinus = cart.querySelector('.minus')
    const btnPlus = cart.querySelector('.plus')

    const getNewPrice = (count, price) => {
        newPrice = count * price
        priceBlock.textContent = newPrice
        getFuiiPrice()
    }

    btnMinus.addEventListener('click', () => {
        if (count > 0) {
            count--
            countBlock.textContent = count
            getNewPrice(count, price)
            
        }
    })
    btnPlus.addEventListener('click', () => {
        count++
        countBlock.textContent = count
        getNewPrice(count, price)
    })
})