function calculateFutureValue() {
  let deposit = parseFloat(document.getElementById('deposit').value);
  let interestRate =
    parseFloat(document.getElementById('interestRate').value) / 100;
  let years = parseInt(document.getElementById('years').value);

  const nCompounds = 365;
  let futureValue =
    deposit * Math.pow(1 + interestRate / nCompounds, nCompounds * years);
  let totalInterest = futureValue - deposit;

  document.getElementById('futureValue').value = futureValue.toFixed(2);
  document.getElementById('totalInterest').value = totalInterest.toFixed(2);

  document.getElementById('resultText').textContent =
  `If you deposit $${deposit} in a CD that earns 
  ${(interestRate * 100).toFixed(2)}% interest and matures in ${years} years,
  your CD's ending balance will be $${futureValue.toFixed(2)} and you would
  have earned $${totalInterest.toFixed(2)} in interest`;
}
