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

var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()))
if (mobile) { 
	alert("Мобильное устройство!!")
	$('.navWrap').hide()
} 

else 
{ 
	alert("НЕ мобильное устройство!")
}
