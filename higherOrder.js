
const data = [
	{ name: 'orange', price: 10 },
	{ name: 'strawberry', price: 2 },
	{ name: 'melon', price: 13 },
	{ name: 'banana', price: 10 },
	{ name: 'grape', price: 0.5 },
	{ name: 'apple', price: 5 }
]

const dataUpperCase = data.map(fruit => {
	return fruit.name.toUpperCase()
})
// dataUpperCase.forEach(fruitName => {
// 	console.log(`Fruit: ${fruitName}`)
// })
/*
data.filter(fruit => fruit.length > 5)
.forEach(item => console.log(`Fruit: ${item}`))
*/

data.forEach(fruit => console.log(`The ${fruit.name} costs ${fruit.price}.`))

data.filter(fruit => fruit.price < 10)
.forEach(fruit => console.log(`The ${fruit.name} is cheap!`))
