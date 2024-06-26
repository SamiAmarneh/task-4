
const form = document.forms[0];
const amountInput = form.elements["amount"];
const exchangeSelect = form.elements["exchange"];
const resultParagraph = document.querySelector('.result');


form.onsubmit = function() {
 
  const amount = parseFloat(amountInput.value);
  const exchangeType = exchangeSelect.value;

  let convertedAmount;
  if (exchangeType === 'dollar') {
    convertedAmount = amount * 3.5;
  } else if (exchangeType === 'dinar') {
    convertedAmount = amount * 5;
  } else {
    convertedAmount = amount; 
  }

  
  resultParagraph.innerText = 'The converted amount is ' + convertedAmount + ' ' + 'nis';


  return false;
}