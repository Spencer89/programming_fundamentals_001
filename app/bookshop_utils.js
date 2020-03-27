function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getHalfPrice(price) {
    return (price/2);
}

function countBooks(array){
    return (array.length);
}

function isInStock(book) {
    if (book.quantity > 0)
    {return true}
    else {return false};
}

function getTotalOrderPrice(price, quantity){
let orderTotal = price * quantity;
let vatTotal = orderTotal + (0.2 * orderTotal);
return vatTotal

;}


module.exports = {
    addVAT,
    getFullName,
    getHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};