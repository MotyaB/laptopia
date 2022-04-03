let timer

function addZero(number) {
	if (number < 10) {
		return "0" + number
	}
	else {
		return "" + number
	}
}

let currentDate = new Date()
let finalDate = new Date(2022,4,1,1) //год, месяц, день, время(ч,м,с)
let diff = finalDate-currentDate

timer = setInterval(function() {
	currentDate = new Date()
	diff = finalDate-currentDate
	let days = Math.floor(diff/1000/60/60/24)
	let hours = Math.floor(diff/1000/60/60%24)
	let minutes = Math.floor(diff/1000/60%60)
	let seconds = Math.floor(diff/1000%60)

	document.querySelector("#days").innerHTML = days
	document.querySelector("#hours").innerHTML = hours
	document.querySelector("#minutes").innerHTML = addZero(minutes)
	document.querySelector("#seconds").innerHTML = addZero(seconds)

	if (diff<=0) {
		clearInterval(timer)
		document.querySelector("#days").innerHTML = 0
		document.querySelector("#hours").innerHTML = 0
		document.querySelector("#minutes").innerHTML = 0
		document.querySelector("#seconds").innerHTML = 0

		alert("Sale is over!")
	}
},0)

let elements = document.querySelectorAll('.element')

// for (element of elements) {
// 	element.addEventListener('focus', function(){
// 		this.style = "background-color: lightblue; border-color: red; border-width: 3px;"
// 	})

// 	element.addEventListener('blur', function(){
// 		this.style = "background-color: white; border-color: white; border-width: 1px;"
// 	})
// }

function validate() {
	let elements = document.querySelectorAll('.element')

	for (element of elements) {
		if (element.value == '') {
			alert(`Поле ${element.name} должно быть заполнено!`)
			return false
		}
	}
	return true
}

// // // // хранится на пк человека

// // // localStorage.setItem("user", "admin")
// // // localStorage.setItem("role", "administrator")
// // // // alert("Hi, "+localStorage.getItem("user"))
// // // localStorage.removeItem("user")
// // // console.log(localStorage.getItem("role"))

// // // // хранится во время сессии

// // sessionStorage.setItem("user", "admin")
// // sessionStorage.setItem("role", "administrator")
// // alert("Hi, "+sessionStorage.getItem("user"))
// // // sessionStorage.removeItem("user")
// // sessionStorage.setItem("user", "name")
// // console.log(sessionStorage.getItem("role"))


// // setTimeout(function(){
// // 	let a = document.querySelector("#func").value
// // 	let func = Function(a)
// // func()
// // }, 6000)

// // alert("Hi"); a=1; b=2; alert(a+b)

// // let cart = {
// // 	"name": "adm",
// // 	"role": "admin",
// // 	"mail": "text@gmail.com",

// // 	toString() {
// // 		return `name: ${this.name}\nrole: ${this.role}\nmail: ${this.mail}`
// // 	}
// // }

// // let b = `"name": "adm", "role": "admin", "mail:" "text@gmail.com"`

// // cart2 = JSON.parse(b)
// // alert(cart2.name)

// // let f = JSON.stringify(cart)
// // localStorage.setItem("cart", f)

// // let cart1 = JSON.parse(localStorage.getItem("cart"))
// // alert(cart1.name)
// // alert(cart1)
// // alert(cart)

// // alert(f)

// // alert(cart)
// // console.log(cart["name"])
// // console.log(cart.name)

// localStorage.removeItem('cart')

// document.querySelector('#cart').addEventListener('click', function(){
// 	alert(localStorage.getItem('cart'))
// })

// let items = document.querySelectorAll('.items')

// for (let item of items) {
// 	item.addEventListener('click', addToCart)
// }

// function getFromCart() {
// 	return JSON.parse(localStorage.getItem('cart'))
// }

// function addToCart() {
// 	let itemID = this.dataset.id
// 	let itemName = this.dataset.name
// 	let itemPrice = this.dataset.price

// 	let cart = getFromCart() || {}

// 	if (cart.hasOwnProperty(itemID)) {
// 		cart[itemID]['cnt'] ++
// 	}
// 	else {

// 		let item = {'name': itemName, 'price': itemPrice, 'cnt': 1}
// 		cart[itemID] = item

// 	}


// 	localStorage.setItem('cart', JSON.stringify(cart))
// }


