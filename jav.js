document
  .getElementById("alarmForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var alarmTime = document.getElementById("alarmTime").value;
    var now = new Date();
    var alarm = new Date(now.toDateString() + " " + alarmTime);

    if (alarm < now) {
      alarm.setDate(alarm.getDate() + 1);
    }

    var timeUntilAlarm = alarm - now;

    setTimeout(function () {
      playAlarm();
      document.body.classList.add("alarm-active");
    }, timeUntilAlarm);
  });

function playAlarm() {
  var alarmAudio = document.getElementById("alarmAudio");
  alarmAudio.play();
}
