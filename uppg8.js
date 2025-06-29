

// skapa en array med fem person obkjet 
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument

// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

function uppg8() {
  
  const listOfNames = [
    { name: "Alma", age: 21 },
    { name: "Sigrid", age: 23 },
    { name: "Paulina", age: 25 },
    { name: "Olivia", age: 31 },
    { name: "Johanna", age: 32 }
  ]


  listOfNames.forEach(person => {
    if (person.age > 30) {
      console.log(person.name)
    }
  })
}


module.exports = {uppg8}