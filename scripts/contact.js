// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// use main tag remove even the h2 tag since its not inside form tag
const mainElement = document.querySelector("main");
//function to get only the main page of contact page
function tyMessage(e){
    e.preventDefault();
    mainElement.innerHTML = "<h2>Thank you for your Message!</h2>";
}
mainElement.onsubmit = tyMessage;
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

