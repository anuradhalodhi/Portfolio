document.getElementById("contact-form").addEventListener("submit",function(event){
    event.preventDefault();

    const gmail=document.getElementById("gmail").value;
    const password=document.getElementById("password").value;
    const formMessage=document.getElementById("form-message").value;
    const errorElement=document.querySelector(".error");

    errorElement?.classList.remove("error");

    if(!gmail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        showError("Please enter a valid Gmail address.");
        return;
    }
    if(password.length<6){
        showError("Password must be at least 6 character long.")
        return;
    }
    formMessage.textContent="Your message has been sent successfully!";
    formMessage.style.color="#28a745";
});
function showError(message){
    const errorElement=document.createElement("p");
    errorElement.textContent=message;
    errorElement.classList.add("error");
    document.querySelector(".contact-form").appendChild(errorElement);
}