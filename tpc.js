const datePicker = document.getElementById("appdate");

if (datePicker){
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const year = tomorrow.getFullYear();
const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
const day = String(tomorrow.getDate()).padStart(2, "0");

datePicker.min = `${year}-${month}-${day}`;
}

function disp_confirm() {
	var r = confirm("Are you confirm your submission?");
	if (r == true) {
		alert("Thank you! Your booking request has been submitted.")
		return true;
	}
	else 
      return false;
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

function showGreeting() {
  var a = document.getElementById("b");
  if (a) {
    var hour = new Date().getHours();
    var b;
    if (hour < 12) {
      b = "Good morning! Ready to pamper your pet?";
    } else if (hour < 18) {
      b = "Good afternoon! Let's make tails wag.";
    } else {
      b = "Good evening! Your furry friend deserves the best.";
    }
    a.innerHTML = b;
  }
}
showGreeting();