var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var number = document.getElementById("number");
var Email = document.getElementById("Email");
var age = document.getElementById("age");
var dis = document.getElementById("dis");
var trip = document.getElementById("trip");
var date = document.getElementById("date");
var boat = document.getElementById("boat");
var room = document.getElementById("room");

function Submit() {
  if (firstName.value != "" && lastName.value != "" && Email.value != "" && number.value != "" && Number(age.value) >= 18) {
    document.getElementById('register').classList.add('hide');
    document.getElementById('payment').classList.remove('hide');

    document.getElementById('ticketFirstName').innerHTML = firstName.value;
    document.getElementById('ticketLastName').innerHTML = lastName.value;
    document.getElementById('ticketMail').innerHTML = Email.value;
    document.getElementById('ticketPhone').innerHTML = number.value;
    document.getElementById('ticketAge').innerHTML = age.value;
    document.getElementById('ticketDis').innerHTML = dis.value;
    document.getElementById('ticketTrip').innerHTML = trip.value;
    document.getElementById('ticketDate').innerHTML = date.value;
    document.getElementById('ticketBoat').innerHTML = boat.value;
    document.getElementById('ticketRoom').innerHTML = room.value;

  }
}

function Confirm() {
  document.getElementById('payment').classList.add('hide');
  document.getElementById('printOut').classList.remove('hide');
}

function Change() {
  document.getElementById('register').classList.remove('hide');
  document.getElementById('payment').classList.add('hide');
  document.getElementById('printOut').classList.add('hide');
}

function Confirm() {
  document.getElementById('payment').classList.add('hide');
  document.getElementById('printOut').classList.remove('hide');
  document.getElementById('footer').classList.add('hide')
}