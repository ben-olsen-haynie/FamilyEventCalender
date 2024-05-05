let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];


function updateMonthHeader() {
    document.getElementById("current-month-year").textContent = `${monthNames[currentMonth]} ${currentYear}`;
}



function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    showMonth();
    updateMonthHeader();

}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    showMonth();
    updateMonthHeader();
}
updateMonthHeader();

window.onload = () => {
    showMonth();
}

function showMonth() {
    const removeMonths = document.getElementsByClassName('month');
    while (removeMonths.length > 0) {
        removeMonths[0].remove();
    }

    let calender = document.getElementById("calender");

    function getDaysInMonth(month,year) {
        const date = new Date(year, month, 0);
        return date.getDate();
    }



    function newMonth() {
        let newMonthDiv = document.createElement("div");
        newMonthDiv.id=`${monthNames[currentMonth]}`;
        newMonthDiv.classList.add("month");
        newMonthDiv.classList.add("grid-container");
        calender.appendChild(newMonthDiv);

        

        function addDays() {
            for (i = 1; i <= getDaysInMonth(currentMonth + 1, currentYear); i++) {
                let newDay = document.createElement("div");
                newDay.classList.add('day');

                newMonthDiv.appendChild(newDay);

                newDay.innerHTML = i + '<br><br>';

                // making each day a clickable button with a popup div
                newDay.setAttribute("role", "button")
                newDay.addEventListener("click", function() {
                    let newPopupDiv = document.createElement("div");
                    newPopupDiv.classList.add("popup");
                    calender.appendChild(newPopupDiv);
                    let popup = document.getElementsByClassName("popup")[0];
                    popup.innerHTML = 
                    `<center><h1>Survey!</h1></center>
                    <br /><br />What is your favorite color?<br />
                    <select id="selectColor">
                        <option>Select a Color</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Black">Black</option>
                        <option value="Pink">Pink</option>
                        <option value="Orange">Orange</option>
                    </select>`;

                    let newDiv = document.createElement("div");
                    // newDiv.innerHTML = " hello";
                    popup.appendChild(newDiv);
                    console.log(popup.innerHTML);
                    
                    
                    // to get prompt to edit innerHTML in calender.
                    // let answer = window.prompt("What is your name?");
                    // newDay.innerHTML += answer + '<br>';
                })
            }
        }
        addDays();
    }
    newMonth();
}

//eventlistener for documentLoaded.