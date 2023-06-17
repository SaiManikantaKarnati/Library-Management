$(function() {
    $(".container-navbar").load("./index.html .navbar ");
    $(".container-logo").load("./index.html #logo");
});

const login = document.getElementById("login");
login.onclick = (event) => {
    event.preventDefault();
    const emailId = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const uname = localStorage.getItem("Email id");
    const pwd = localStorage.getItem("Password");
    const name = localStorage.getItem("Full name");

    if(emailId == "" && password == "") {
        swal("Oops...!", "Password not matching!", "error");
    }
    else {
        if(emailId == uname && password == pwd) {
            localStorage.setItem("username", name);
            swal("Good job!", "Login successful!", "success").then(() => {
            setTimeout(() => {
                window.location.href = "./bookslist.html";
            }, 1000);
  });
        }
        else {
            swal("Oops...!", "Input field has no value!", "error");
        }
    }

}

