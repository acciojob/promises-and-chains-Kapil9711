//your JS code here. If required.
const ageInput = document.querySelector('#age');
const nameInput = document.querySelector('#name');
const submitBtn = document.querySelector('#btn');
const validatorMessage = document.querySelector('#validator');

validatorMessage.style.display = 'none';

const isInputValid = () => nameInput.value && (ageInput.value || ageInput ===0);	

const handleSubmit = ()=>{
     return new Promise((resolve,reject)=>{
		if(Number(ageInput.value) > 18) resolve(`Welcome, ${nameInput.value}. You can vote.`)
		else reject(`Oh sorry ${nameInput.value}. You aren't old enough`);
	})
	
	
}


submitBtn.addEventListener('click',(event)=>{
	event.preventDefault();
     validatorMessage.style.display = 'none';
	const isValid = isInputValid();
	if(!isValid) return validatorMessage.style.display = 'initial';
	handleSubmit().then(msg=> window.alert(msg)).catch(msg=>window.alert(msg));
});








