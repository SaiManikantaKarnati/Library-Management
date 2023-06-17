$(function() {
    $(".container-navbar").load("./index.html .navbar");
});

document.querySelector(".signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var re_password = document.getElementById("reEnterPassword").value;
    var passwordMatchText = document.getElementById("passwordMatchText");

    localStorage.setItem("Full name", name);
    localStorage.setItem("Email id", email);
    localStorage.setItem("Password", password);
    localStorage.setItem("Confirm password", re_password);
    if (password !== re_password) {
        passwordMatchText.classList.add("password-match");
        passwordMatchText.textContent = "Password mismatch";
        return;
    } 
    else {
        passwordMatchText.classList.remove("password-match");
        passwordMatchText.textContent = ""; 
        swal("Good job!", "registration successful!", "success");
    }
    
    document.querySelector('.signup-form').reset(); 
});