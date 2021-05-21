
// write a function that:

// Returns a list of everyone older than 18, which is
// sorted alphabetically by last name, and where
// each name and age is embedded in a string that looks like an HTML <li> element.

// .filter

// .sort

// .map




var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function sortedOfAge(peopleArray){
    peopleArray.sort()
    const result = peopleArray.filter(function(person){
        if(person.age >= 18){
            return person
        }
        //console.log(person)
        
    })

   const result2 = result.sort(function(nameA, nameB){
        if(nameA.lastName < nameB.lastName){ return -1;}
        if(nameA.lastName > nameB.lastName){ return 1;}
        return 0;
    })

    
    const result3 = result2.map(function(name){
        return "<li>" + name.firstName + " " + name.lastName + " is " + name.age + "</li>"
    })
    //console.log(result3)
    return result3

 }
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output: 
 [ 
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>" 
 ]
 */