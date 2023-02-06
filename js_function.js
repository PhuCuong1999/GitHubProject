let arr = [{
    "id": 1,
    "first_name": "Halsey",
    "last_name": "Maydwell",
    "email": "hmaydwell0@ebay.com",
    "gender": "Male",
    "ip_address": "24.226.116.182"
  }, {
    "id": 2,
    "first_name": "Orbadiah",
    "last_name": "Ferenczy",
    "email": "oferenczy1@seesaa.net",
    "gender": "Male",
    "ip_address": "138.234.61.41"
  }, {
    "id": 3,
    "first_name": "Maria",
    "last_name": "Beuscher",
    "email": "mbeuscher2@last.fm",
    "gender": "Female",
    "ip_address": "253.212.58.187"
  }, {
    "id": 4,
    "first_name": "Darrin",
    "last_name": "Toderbrugge",
    "email": "dtoderbrugge3@go.com",
    "gender": "Male",
    "ip_address": "224.0.118.102"
  }, {
    "id": 5,
    "first_name": "Willie",
    "last_name": "Woolfenden",
    "email": "wwoolfenden4@live.com",
    "gender": "Bigender",
    "ip_address": "115.135.222.174"
  }, {
    "id": 6,
    "first_name": "Waldo",
    "last_name": "Flewett",
    "email": "wflewett5@hugedomains.com",
    "gender": "Male",
    "ip_address": "133.8.51.201"
  }, {
    "id": 7,
    "first_name": "Natty",
    "last_name": "Antonescu",
    "email": "nantonescu6@cnbc.com",
    "gender": "Female",
    "ip_address": "184.97.86.69"
  }, {
    "id": 8,
    "first_name": "Sergent",
    "last_name": "Attridge",
    "email": "sattridge7@go.com",
    "gender": "Male",
    "ip_address": "145.57.62.191"
  }, {
    "id": 9,
    "first_name": "Evita",
    "last_name": "Fanti",
    "email": "efanti8@histats.com",
    "gender": "Female",
    "ip_address": "224.0.91.247"
  }, {
    "id": 10,
    "first_name": "Lee",
    "last_name": "Jerrand",
    "email": "ljerrand9@cafepress.com",
    "gender": "Male",
    "ip_address": "89.26.39.122"
  }, {
    "id": 11,
    "first_name": "Marcos",
    "last_name": "Dodswell",
    "email": "mdodswella@state.tx.us",
    "gender": "Male",
    "ip_address": "100.224.86.177"
  }, {
    "id": 12,
    "first_name": "Nelson",
    "last_name": "Cancott",
    "email": "ncancottb@soup.io",
    "gender": "Male",
    "ip_address": "183.162.108.84"
  }, {
    "id": 13,
    "first_name": "Heidi",
    "last_name": "Penhalewick",
    "email": "hpenhalewickc@irs.gov",
    "gender": "Polygender",
    "ip_address": "153.24.240.25"
  }, {
    "id": 14,
    "first_name": "Paulie",
    "last_name": "Filochov",
    "email": "pfilochovd@theguardian.com",
    "gender": "Male",
    "ip_address": "136.11.63.168"
  }, {
    "id": 15,
    "first_name": "Nolana",
    "last_name": "Baise",
    "email": "nbaisee@dyndns.org",
    "gender": "Genderqueer",
    "ip_address": "89.116.243.142"
  }, {
    "id": 16,
    "first_name": "Muffin",
    "last_name": "Aysh",
    "email": "mayshf@mtv.com",
    "gender": "Female",
    "ip_address": "252.159.51.51"
  }, {
    "id": 17,
    "first_name": "Stefano",
    "last_name": "Gullick",
    "email": "sgullickg@spiegel.de",
    "gender": "Genderqueer",
    "ip_address": "142.186.37.131"
  }, {
    "id": 18,
    "first_name": "Lorena",
    "last_name": "Muslim",
    "email": "lmuslimh@ucoz.ru",
    "gender": "Female",
    "ip_address": "211.187.67.237"
  }, {
    "id": 19,
    "first_name": "Tye",
    "last_name": "Eccleston",
    "email": "tecclestoni@myspace.com",
    "gender": "Male",
    "ip_address": "166.59.247.154"
  }, {
    "id": 20,
    "first_name": "Pablo",
    "last_name": "Labbett",
    "email": "plabbettj@samsung.com",
    "gender": "Male",
    "ip_address": "145.26.232.104"
  }]


let users = arr.filter((user, index)=>{
    //console.log(user, index)
    return user.id % 2 == 0
})

//console.log(users)

let mapUsers = arr.map((user)=>{
    return {
        ...user,
        last_name: `${user.last_name} Edited`
    }
})

// console.log(mapUsers)

let checkID = arr.some(user=>{
  return user.id > 20
})

//console.log(checkID)


let CheckAllID = arr.every(user=>{
  return user.id > 1
})

//console.log(CheckAllID)


const sumReduce = (arr)=>{
  return arr.reduce((sum, value)=>{
    //const newSum = sum + value
    return sum + value
  }, 0)
}

//console.log(sumReduce([1, 2, 3, 4, 5]))


let arrWords = ['I', 'love', 'you']
const maxLength = (arr) => {
  return arr.reduce((max, value)=>{
    return value.length > max.length ? value : max
  }, arrWords[0])
}

console.log(maxLength(arrWords))



