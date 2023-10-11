// Reduce

const myNums = [1, 2, 3]

/* const myTotle = myNums.reduce( function(acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotle); */


// const myTotle = myNums.reduce( (acc, currval) => (acc + currval), 0 )
// console.log(myTotle);


const shopingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const myTotle = shopingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(myTotle);