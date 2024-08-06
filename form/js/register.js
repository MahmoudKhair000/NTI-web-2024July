var Name = document.getElementById("Name");
var number = document.getElementById("number");
var Email = document.getElementById("Email");
var age = document.getElementById("age");

var arrPerson = [];
function Submit() {
  var person = {
    Name: Name.value,
    Number: number.value,
    Email: Email.value,
    Age: age.value,
  };
  arrPerson.push(person);
  console.log(arrPerson);
}
