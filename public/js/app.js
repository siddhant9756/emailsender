const form = document.querySelector('#contactform');
let name = document.getElementById('name');
let phone = document.getElementById('Phone');
let from = document.getElementById('From');
let to = document.getElementById('To');
let subject = document.getElementById('subject');
let query = document.getElementById('Query');
let button = document.getElementById('button');
var text = button.textContent;
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	button.disabled = true;
	button.textContent = "Sending";
	let formData = {
		name: name.value,
		phone: phone.value,
		from: from.value,
		to: to.value,
		subject: subject.value,
		query: query.value
	}

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/');
	xhr.setRequestHeader('content-type','application/json');
	xhr.onload = function(){
		console.log(xhr.responseText);
		if(xhr.responseText == 'success'){
			alert('email-sent');
			name.value = '';
			phone.value = '';
			from.value = '';
			to.value = '';
			subject.value = '';
			query.value = '';
		}
		else{
			alert('something went wrong');
		}
	}

	xhr.send(JSON.stringify(formData));
	button.textContent = text;
	button.disabled = false;
});