var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elText = document.querySelector(".js-text");


var a = "sarimsoqpiyoz";

elForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  var elInputVal = elInput.value.trim();

  if (elInputVal == a) {
    elText.textContent = "Assalom alaykum sizning parolingiz tug'ri "
  } else {
    elText.textContent = "Xato paroni kiritingiz boshqatdan urinib kuring"
  }
  
})