/* 
Data Types:

1. Strings
2. Numbers
3. Booleans
4. null
5. undefined
6. Arrays
7. Objects
*/


// Declaring a new object
const myStudent = {
    name: 'Nawaf',
    phoneNumber: 55505950,
    city: 'Manama',
    languages: ['English', 'Arabic']
}

const shahad = {
    name: 'Shahad',
    phoneNumber: 55555559,
    city: 'Manama'
}


console.log(myStudent)

// accessing a value from the key
console.log(myStudent.city)


const allStudents = [myStudent, shahad]



// Updating value in object
myStudent.city = 'Riffa'
console.log(myStudent)


// Adding key value pair

myStudent.email = 'Nawaf@gmail.com'
console.log(myStudent)


// Deleting key value pair
delete myStudent.city
console.log(myStudent)



console.log(allStudents)


for(let oneStudent of allStudents){
    console.log(oneStudent.name)
}
