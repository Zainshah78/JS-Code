// singleton Objects

//const tinderUser = new Object()  // singleton object
const tinderUser = {}  // non-singleton object

tinderUser.id = "123MS"
tinderUser.name = "jarry"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "zain",
            lastname: "naqvi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b",}
const obj2 = {3: "c", 4: "d"}

//const obj3 = { obj1, obj2 }  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign( {}, obj1, obj2)
// console.log(obj3); //  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1, ...obj2}
//console.log(obj3);  //  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {name: "zain",
    email: "Z@gmail.com"
    }
]

// console.log(users[0].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    courseName: "JS-basics",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);