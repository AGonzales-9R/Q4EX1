// FUNCTION FOR POWER
function power(){
	var vari1 = document.getElementById('input1').value;

	window.alert(vari1 + ' raised to the power of ' + vari1 + ' is ' + Math.pow(vari1,vari1) + '.');
}

// FUNCTION FOR ROUND
function round(){
	var vari1 = document.getElementById('input1').value;

	window.alert(vari1 + ' rounded off to the nearest integer is ' + Math.round(vari1) + '.');
}

// FUNCTION FOR SQUARE
function square(){
	var vari1 = document.getElementById('input1').value

	window.alert('The square root of ' + vari1 + ' is ' + Math.sqrt(vari1) + '.');
}

// FUNCTION FOR RANDOM
function random(){
	var vari1 = document.getElementById('input1').value

	window.alert('Here is a random number that I chose for you: ' + Math.random(vari1) + '.');

}	

window.alert("🤖 LOADING 🤖");