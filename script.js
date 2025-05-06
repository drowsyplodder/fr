function checkEmail() {
    let email = document.querySelector("#emailField").value; 
    let isValid = /\S+@\S+\.\S+/.test(email);
    
    if (isValid) {
        alert("Ура! Email введен правильно.");
    } else {
        alert("Вы неправильно ввели email.");
    }
}
