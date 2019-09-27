class Login{
	constructor(){
		this.success;
		this.message='Enter Your Password';
		this.secrets=[];
		this.setUp=this.setUp.bind(this);
		this.showAlert=this.showAlert.bind(this);
		this.getSecrets=this.getSecrets.bind(this);
		this.displaySecrets=this.displaySecrets.bind(this);
	}

	setUp(){
		this.alertDisplay=document.querySelector('#alert');
		this.passwordInput=document.querySelector('#inputPassword');
		this.secretDisplay=document.querySelector('#secretDisplay');
		this.secretButton=document.querySelector('#secretButton');
		this.secretButton.addEventListener('click',this.getSecrets)
	}

	showAlert(success){
		this.alertDisplay.innerHTML=this.message
		if(this.success===true){
			this.alertDisplay.className='alert alert-success'
		} else {
			this.alertDisplay.className='alert alert-danger'
		} 
	}

	getSecrets(){
		if(this.passwordInput.value==="superSecret"){
			this.secrets=['I love pie','I ate the last piece of pie...','I hope nobody finds out!']
			this.success=true;
			this.message="ID Correct! Here are your secrets!"
		} else {
			this.secrets=[];
			this.success=false;
			this.message="Access Denied!"
		}
		this.displaySecrets()
		this.showAlert()
		this.passwordInput.value='';
	}

	displaySecrets(){
		this.secretDisplay.innerHTML='';
		this.secrets.forEach(secret=>{
			const listItem=document.createElement('li');
			listItem.className='list-group-item'
			const secretText=document.createTextNode(secret)
			listItem.appendChild(secretText);
			this.secretDisplay.appendChild(listItem)
		})
	}

}