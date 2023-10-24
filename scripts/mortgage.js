function calculateMortgage() {
  let principal = parseFloat(document.getElementById('principal').value);
  let interestRate =
    parseFloat(document.getElementById('interestRate').value) / 100;
  let loanLength = parseInt(document.getElementById('loanLength').value);

  const monthlyRate = interestRate / 12;
  const numberPayments = loanLength * 12;
  const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberPayments);
  const denominator = Math.pow(1 + monthlyRate, numberPayments) - 1;

  const monthlyPayment = (principal * (numerator / denominator)).toFixed(2);
  const totalInterest = (monthlyPayment * numberPayments - principal).toFixed(
    2
  );

  let expMonthlyPaymentEl = document.getElementById('expMonthlyPayment');
  let totalInterestRateEl = document.getElementById('totalInterestPayment');
  let resultTextEl = document.getElementById('resultText');

  expMonthlyPaymentEl.value = monthlyPayment;
  totalInterestRateEl.value = totalInterest;
  resultTextEl.textContent = `A $${principal} loan at ${interestRate * 100}% 
  interest rate for ${loanLength} would have a
  $${monthlyPayment}/mo payment with a total interest of $${totalInterest}.`;
}
