const createCountryArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}
const createBluegrassArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}
const createPopArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}
const createFunkArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}
const createRapArtist = (name, age) => {
    return {
        name: name,
        age: age
    }
}




const jumpstopRecords = []
const chattenRecords = []
const polarRecords = []

jumpstopRecords.push(createFunkArtist("Dre Funkz", "25"), createRapArtist("mike", "22"))
jumpstopRecords.push(createRapArtist("Dusta Grimes", "21"))
jumpstopRecords.push(createRapArtist("Loyonce Branis", "27"))

chattenRecords.push(createCountryArtist("bruce Aitkins", "23"))
chattenRecords.push(createCountryArtist("Avilee Dallas","19"))
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson", "23"))

polarRecords.push(createPopArtist("Jensen Brown", "20"))
polarRecords.push(createPopArtist("Austin Kinkaid", "22"))

console.log(jumpstopRecords)