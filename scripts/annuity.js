function calculatePresValAnnuity() {
  let mPayout = parseFloat(document.getElementById('mPayout').value);
  let interestRate =
    parseFloat(document.getElementById('interestRate').value) / 100;
  let years = parseInt(document.getElementById('years').value);
  let totalPayments = years * 12;
  let interestMonthly = interestRate / 12;

  let presentValue =
    (mPayout * (1 - Math.pow(1 + interestMonthly, -totalPayments))) /
    interestMonthly;

  document.getElementById('presentValue').value = presentValue.toFixed(2);

  document.getElementById(
    'resultText'
  ).textContent = `To fund an annuity that pays $${mPayout.toFixed(
    2
  )} monthly for ${years} years and earns an expected
  ${(interestRate * 100).toFixed(
    2
  )}% interest, you would need to invest $${presentValue.toFixed(2)} today.
`;
}
