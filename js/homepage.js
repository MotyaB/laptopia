var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()))
if (mobile) { 
	window.location.href = 'getTheHellOut.html';
} 

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

var d = document,
    itemBox = d.querySelectorAll('.item_box')
    cartCont = d.getElementById('cart_content')

function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}

function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}

function addToCart(e){
  this.disabled = true
  var cartData = getCartData() || {}, 
      parentBox = this.parentNode, 
      itemId = this.getAttribute('data-id'), 
      itemTitle = parentBox.querySelector('.item_title').innerHTML, 
      itemPrice = parentBox.querySelector('.item_price').innerHTML; 
  if(cartData.hasOwnProperty(itemId)){ 
    cartData[itemId][2] += 1;
  } else { 
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if(!setCartData(cartData)){ 
    this.disabled = false; 
  }
 return false;
}

for(var i = 0; i < itemBox.length; i++){
  addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}

function openCart(e){
  var cartData = getCartData(), 
      totalItems = '';

  if(cartData !== null){
    totalItems = '<table class="shopping_list"><tr><th>Product name</th><th>Price</th><th>Quantity</th></tr>';
    for(var items in cartData){
      totalItems += '<tr>';
      for(var i = 0; i < cartData[items].length; i++){
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '<table>';
    cartCont.innerHTML = totalItems;
  } else {

    cartCont.innerHTML = 'The cart is empty!';
  }
  return false;
}

addEvent(d.getElementById('checkout'), 'click', openCart);

addEvent(d.getElementById('clear_cart'), 'click', function(e){
  localStorage.removeItem('cart');
  cartCont.innerHTML = 'The cart is cleared.';
});
