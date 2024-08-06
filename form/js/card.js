var numberCard = document.getElementById("numberCard");
var date = document.getElementById("date");
var nameCard = document.getElementById("nameCard");
var cvv = document.getElementById("cvv");

var arrCard = [];
function Confirm() {
  var card = {
    numberCard: numberCard.value,
    date: date.value,
    nameCard: nameCard.value,
    cvv: cvv.value,
  };
  arrCard.push(card);
  console.log(arrCard);
  alert("Payment Successful")
}
