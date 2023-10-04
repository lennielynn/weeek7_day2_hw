console.log('JavaScript Homework day 2')



/* QUESTION

Use the array of shop items provided and present the the information in the following format

Name: 	 Air Max 97
Price: 	 130
About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
Category: shoes

*/
console.log('QUESTION 1')

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]


function formatInfo(shopItems) {
    for(let i=0; i < shopItems.length; i++){
    console.log(`
    Name: ${shopItems[i].name}
    Price: ${shopItems[i].price}
    Description: ${shopItems[i].desc}
    Category: ${shopItems[i].category}
    `)
  }}
  formatInfo(shopItems)







/* QUESTION 2
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:

pizza contains:
Deep Dish
South Side Thin Crust

tacos contains:
Anything not from Taco bell

burgers contains:
Portillos Burgers

ice_cream contains:
Chocolate
Vanilla
Oreo

shakes contains:
oberwise contains:
Chocolate

dunkin contains:
Vanilla

culvers contains:
All of them

mcDonalds contains:
Sham-rock-shake

cupids_candies contains:
Chocolate Malt
```
Note:  The solution should work on any object with values of strings, numbers, objects, 
and arrays not just this specific object
*/console.log('QUESTION 2')


const foodPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



function displayFavoriteFoods(foodPerson) {
    for (const k in foodPerson) {
        const v = foodPerson[k];
        console.log(`${k} contains:`);
        if (Array.isArray(v)) {
            v.forEach((item) => console.log(item));
        } else {
        console.log(v);
        }
    }
  }
  displayFavoriteFoods(foodPerson)

//   for (const [k, v] of Object.entries(foodPerson)) {
//     console.log(`${k} containes: ${v}`)
//   }




//CODEWARS

https://www.codewars.com/kata/56dec885c54a926dcd001095/solutions/javascript
//OPPOSITE NUMBER 
function opposite(number) {
    return number * -1}


https://www.codewars.com/kata/56747fd5cb988479af000028/solutions/javascript
//GET THE MIDDLE NUMBER
// const s = 'set'
function getMiddle(s){
        if (s.length % 2 == 0){
            return s.substring(Math.floor(s.length-1)/2, Math.floor(s.length-1)/2+2)
        } else if (s.length % 2 == 1) {
          return s.substring(Math.floor(s.length-1)/2, Math.floor(s.length-1)/2+1)
        }
      }

https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
//FUNCTION 1 - HELLO WORLD (mostly did this to see what other soloutions there would be. I was not dissapointed.)
      function greet() {
        const word = 'world'
        return `hello ${word}!`
        }

