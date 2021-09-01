let selectedMonth = document.querySelector("select");
let month = document.querySelector(".month-name");
let numberOfDays = document.querySelector("p");

month.textContent = "Selected Month";

selectedMonth.addEventListener("change", createCalender)

function createCalender(){
    let optedMonth= selectedMonth.value;
    let days = 31;
    numberOfDays.textContent = days;
    if(optedMonth === "February"){
        days = 28;
        month.textContent=optedMonth;
        numberOfDays.textContent = days;
    }
    else if (optedMonth === "April" || optedMonth ==="June" || optedMonth === "September" || optedMonth ==="November"){
        month.textContent = optedMonth;
        days = 30;
        numberOfDays.textContent=days;
    }else{
        month.textContent = optedMonth;
        
    }
}