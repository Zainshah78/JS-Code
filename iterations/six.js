const coding = ["js", "ruby", "java", "python", "cpp"]

/* const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values); */


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);


// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// console.log(newNums);



/* const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums); */



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'History', publish: 1981, edition: 2004 },
    { title: 'Book Three', genre: 'Science', publish: 1981, edition: 2004 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Five', genre: 'Fiction', publish: 1981, edition: 2009 },
    { title: 'Book Six', genre: 'History', publish: 1981, edition: 1987 },
    { title: 'Book Seven', genre: 'Science', publish: 1981, edition: 1986 },
    { title: 'Book Eight', genre: 'Non-Fiction', publish: 1981, edition: 2011 },
    { title: 'Book Nine', genre: 'Fiction', publish: 1981, edition: 1081 },
];

// const userBooks = books.filter( (data) => data.genre === 'History')
// console.log(userBooks);

const userBooks = books.filter( (data) => {
    return data.edition >= 2000 && data.genre === "History"
} )
console.log(userBooks);