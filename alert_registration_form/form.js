function validateForm(event){
    event.preventDefault();
    let name = document.getElementById("studentName").value;
    let email = document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
        if (password === confirmPassword){
            alert("Registration successfully!");
        } else {
            alert("Registration not done.");
        }

}
document.getElementById("registerForm").addEventListener("submit", validateForm);
