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





console.log(allStudents[0].name + ' ' + allStudents[1].name)





// second way of accessing key value pairs

console.log(myStudent['phoneNumber'])


/* 
Exercise 1:

Loop through this array of objects
console.log the following string:
"I am [teacherName] and I am from [country]"

*/

const allTeachers = 
[
    {teacherName: "Omar", country: 'Saudi Arabia', languages: ['English','Arabic']},
     {teacherName: "Salman", country: 'Bahrain', languages: ['English','Arabic']},
     {teacherName: "Hafsa", country: 'Bahrain', languages: ['English','Arabic']}
]



const newStudent = {
    name: 'Ali',
    course:'Software Engineer',
    isHandRaised: false,
    sayHello: function (otherStudent){console.log('Hello good morning ' + otherStudent)},
    raiseHand(){newStudent.isHandRaised = true}
}



console.log(newStudent.name)
newStudent.sayHello()


const newArr = []

newArr.pop()
console.log('spmetjing'.length)

console.log(typeof newArr)





















const companyData = {
  name: "TechNova Corp",
  founded: 2012,
  departments: [
    {
      name: "Engineering",
      manager: {
        name: "Alice Johnson",
        age: 38,
        contact: {
          email: "alice.j@technova.com",
          phone: "555-0123",
          address: {
            city: "San Francisco",
            zip: 94107,
            coordinates: { lat: 37.7749, lng: -122.4194 }
          }
        }
      },
      employees: [
        {
          id: 101,
          name: "Bob Lee",
          role: "Full Stack Developer",
          skills: ["JavaScript", "React", "Node.js"],
          projects: [
            {
              name: "Project Atlas",
              budget: 120000,
              completed: false,
              tasks: [
                { title: "Build API", done: true },
                { title: "Create UI", done: false }
              ]
            },
            {
              name: "Project Pulse",
              budget: 80000,
              completed: true,
              performance: { bugsFixed: 32, commits: 200, hoursWorked: 450 }
            }
          ]
        },
        {
          id: 102,
          name: "Sara Kim",
          role: "DevOps Engineer",
          skills: ["AWS", "Docker", "Kubernetes"],
          certifications: [
            { name: "AWS Solutions Architect", year: 2020 },
            { name: "CKA", year: 2021 }
          ],
          projects: [
            {
              name: "Project Atlas",
              completed: false,
              environments: ["staging", "production"],
              servers: [
                { name: "staging-server-1", status: "active" },
                { name: "prod-server-2", status: "maintenance" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Marketing",
      manager: {
        name: "David Stone",
        age: 45,
        contact: {
          email: "david.s@technova.com",
          phone: "555-0456",
          address: {
            city: "New York",
            zip: 10001,
            coordinates: { lat: 40.7128, lng: -74.006 }
          }
        }
      },
      employees: [
        {
          id: 201,
          name: "Emily Chen",
          role: "SEO Specialist",
          campaigns: [
            {
              name: "AdBoost Q3",
              performance: { impressions: 120000, clicks: 8000, conversions: 1200 }
            },
            {
              name: "Brand Awareness 2025",
              performance: { impressions: 500000, clicks: 22000, conversions: 4500 }
            }
          ]
        }
      ]
    }
  ]
}

/* 
const companyStructure = [
  {
    department: "Engineering",
    employees: [
      {
        id: "E001",
        name: "Alice",
        role: "Software Engineer",
        projects: [
          {
            name: "Project X",
            status: "In Progress",
            tasks: [
              { description: "Develop API", assignedTo: "Alice" },
              { description: "Write tests", assignedTo: "Bob" },
            ],
          },
          {
            name: "Project Y",
            status: "Completed",
          },
        ],
      },
      {
        id: "E002",
        name: "Bob",
        role: "QA Engineer",
      },
    ],
  },
  {
    department: "Marketing",
    employees: [
      {
        id: "M001",
        name: "Charlie",
        role: "Marketing Manager",
        campaigns: [
          {
            name: "Holiday Campaign",
            budget: 50000,
            channels: ["Social Media", "Email"],
          },
        ],
      },
    ],
  },
];


*/