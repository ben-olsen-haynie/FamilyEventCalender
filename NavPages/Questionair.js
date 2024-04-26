const form = document.getElementById('participation');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    submitSurvey();
    document.getElementById('participationFormReset').reset();
})

function submitSurvey() {
    let activityRadios = document.getElementsByName('activity');
    let selectedActivity = ' ';
    let name = document.getElementById("name").value;
    let nameMessage = document.getElementById("participationSurveySub1").innerHTML += '<br><br><strong>' + name + '</strong><br><br>';
    let nameMessage2 = document.getElementById("attending").innerHTML += name + '<br>';
    
    
    let yesNoRadios = document.getElementsByName('yesNo');
    let selectedYesNo = ' ';
    for (let i=0; i < yesNoRadios.length; i++) {
        if (yesNoRadios[i].checked) {
            selectedYesNo = yesNoRadios[i].value;
            message = document.getElementById("participationSurveySub1").innerHTML += selectedYesNo +'<br>';
        }
    }

    let otherSituation = document.getElementById("otherSituation");
    if (otherSituation.value != "") {
        message = document.getElementById("participationSurveySub1").innerHTML += '-' + otherSituation.value + '<br><br>';
    }

    participationMessage = document.getElementById("participationSurveySub1").innerHTML += 'Would like to participate in:<br><br>';
    for (let i=0; i < activityRadios.length; i++) {
        if(activityRadios[i].checked) {
            selectedActivity = activityRadios[i].value;
            message = document.getElementById("participationSurveySub1").innerHTML += selectedActivity + '<br>';
            if (selectedActivity === "Stockings") {
                stockingsMessage = document.getElementById("Stockings").innerHTML += name + '<br>';
            }
            if (selectedActivity === "Buddy Gifts") {
                buddyGiftsMessage = document.getElementById("Buddy Gifts").innerHTML += name + '<br>';
            }
            if (selectedActivity === "Minute to Win It Games") {
                MinuteMessage = document.getElementById("Minute to Win It Games").innerHTML += name + '<br>';
            }
            if (selectedActivity === "Ultimate Seran Wrap Balls") {
                UltimateMessage = document.getElementById("Ultimate Seran Wrap Balls").innerHTML += name + '<br>';
            }
            if (selectedActivity === "Carson Chats") {
                carsonChatsMessage = document.getElementById("Carson Chats").innerHTML += name + '<br>';
            }
            if (selectedActivity === "Nerf Wars") {
                nerfWarsMessage = document.getElementById("Nerf Wars").innerHTML += name + '<br>';
            }
            if (selectedActivity === "Jackbox Games") {
                jackboxGamesMessage = document.getElementById("Jackbox Games").innerHTML += name + '<br>';
            }
            if (selectedActivity === "Singing Fun-ness") {
                singingMessage = document.getElementById("Singing Fun-ness").innerHTML += name + '<br>';
            }
        }

    }

    let addOther = document.getElementById("addOther");
    if (addOther.value != "") {
        message = document.getElementById("participationSurveySub1").innerHTML += 'Would like to add: ' + addOther.value + '<br><br>';
        addOtherMessage = document.getElementById("toAdd").innerHTML += name + ': ' + addOther.value + '<br><br>';
    }

    let donationAmount = document.getElementById("donationAmount");
    if (donationAmount.value != "") {
        message = document.getElementById("participationSurveySub1").innerHTML += 'Would like to donate $' + donationAmount.value + '<br>';
    }
}