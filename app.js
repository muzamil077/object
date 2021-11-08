alert("muzamil")


let myArry = []

console.log(myArry)

let newData = {
    firstName:"muzamil",
    lastName:"hussain",
    from:"hopper nagar",
    donIcsFrom:"degree colleg danyore muhammad abad",
    studiedAt:"karakoram international university gilgit",
    age:20,
}

let mobileData = {
    mobilename:"opp",
    color:"red",
    ram:4,
    storage:64,
}
 myArry.unshift(newData)
console.log(myArry)

myArry.push(mobileData)
console.log(myArry)

let myBio = `my name is ${myArry[0].firstName+" "+myArry[0].lastName}.I am from ${myArry[0].from
}.i have don ics from ${myArry[0].donIcsFrom}.Now i studied at ${myArry[0].studiedAt}`
console.log(myBio)

myArry.pop(newData)
console.log(myArry)

myArry.pop(mobileData)
console.log(myArry)






  