const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
    const {
        elements: { email, password }
        } = event.currentTarget;

     if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
     }  else {
        const formData = {
            email: email.value,
            password: password.value,
        }
          console.log(formData)
          event.currentTarget.reset();
        }
     }
