const form = document.getElementById('participation');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    submitSurvey();
    document.getElementById('formReset').reset();
})

function submitSurvey() {
    let activityRadios = document.getElementsByName('activity');
    let name = document.getElementById("name").value;
    let selectedActivity = ' ';
    let nameMessage = document.getElementById("participationSurveySub").innerHTML += '<br><br><strong>' + name + '</strong> would like to participate in:<br><br>';

    for (let i=0; i < activityRadios.length; i++) {
        if(activityRadios[i].checked) {
            selectedActivity = activityRadios[i].value;
            message = document.getElementById("participationSurveySub").innerHTML += selectedActivity + '<br>';
        }
    }
    message;
}