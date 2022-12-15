/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const mondayButn = document.getElementById("monday");
const tuesdayButn = document.getElementById("tuesday");
const wednesdayButn = document.getElementById("wednesday");
const thursdayButn = document.getElementById("thursday");
const fridayButn = document.getElementById("friday");

const fullButn = document.getElementById("full");
const halfButn = document.getElementById("half");
const clearButn = document.getElementById("clear-button");

let costPerDay=0;
let numOfDays=0;

var calculatedCost = document.getElementById("calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

//create function that remove all clicked and make function to apply click 
function resetDayButns(){
    mondayButn.classList.remove("clicked");
    tuesdayButn.classList.remove("clicked");
    wednesdayButn.classList.remove("clicked");
    thursdayButn.classList.remove("clicked");
    fridayButn.classList.remove("clicked");
}
function applyClicked(butn){
    butn.classList.add("clicked");
}

function resetAndApplyClicked(butn){
    resetDayButns();
    applyClicked(butn);
}

//make function that uses the two functions for ANY day button
function clickThisDay(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    //make a local var for any day button
    //const dayButn = event.target;
    resetAndApplyClicked(event.target);
}
//use the two functions to each button:
/*function onMondayButn(e){
    e.preventDefault();
    resetAndApplyClicked(wednesdayButn);
    //console.log("mon clicked")
}
function onTuesdayButn(e){
    e.preventDefault();
    resetAndApplyClicked(tuesdayButn);
}
function onWednesdayButn(e){
    e.preventDefault();
    resetAndApplyClicked(wednesdayButn);
}
function onThursdayButn(e){
    e.preventDefault();

    resetAndApplyClicked(thursdayButn);
}
function onFridayButn(e){
    e.preventDefault();
    resetAndApplyClicked(fridayButn);
}
*/
// apply the functions on each button when user clicks it
mondayButn.onclick = clickThisDay;
tuesdayButn.onclick = clickThisDay;
wednesdayButn.onclick = clickThisDay;
thursdayButn.onclick = clickThisDay;
fridayButn.onclick = clickThisDay;

//mondayButn.onclick = onMondayButn;
//tuesdayButn.onclick = onTuesdayButn;
//wednesdayButn.onclick = onWednesdayButn;
//thursdayButn.onclick = onThursdayButn;
//fridayButn.onclick = onFridayButn;


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function onClearDays(){
    resetDayButns();
    calculatedCost.innerHTML = 0;
    halfButn.classList.remove("clicked");
    applyClicked(fullButn);
    //fullButn.classList.add("clicked");
}
clearButn.onclick = onClearDays;


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function onHalfDay(){
    costPerDay = 20;
    fullButn.classList.remove("clicked");
    applyClicked(halfButn);
    calculate(costPerDay);
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function onFullDay(){
    costPerDay = 35;
    halfButn.classList.remove("clicked");
    applyClicked(fullButn);
    calculate(costPerDay);
}


halfButn.onclick = onHalfDay;
fullButn.onclick = onFullDay;





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(costPerDay){
    calculatedCost.innerHTML = costPerDay;
}

