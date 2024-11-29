// Example function to evaluate checklist based on user data
function evaluateChecklist(data) {
  const results = [];

  if (data.isValuationFeePaid) {
    results.push("Valuation fee is paid.");
  } else {
    results.push("Valuation fee is not paid.");
  }

  if (data.isUkResident) {
    results.push("User  is a UK resident.");
  } else {
    results.push("User  is not a UK resident.");
  }

  results.push(`Risk Rating: ${data.riskRating}`);
  results.push(`Loan Required: £${data.loanRequired}`);
  results.push(`Purchase Price: £${data.purchasePrice}`);

  return results;
}

module.exports = { evaluateChecklist };
