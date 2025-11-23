// CURRENCY CONVERTER
// Converts between EUR, USD, and GBP

// Exchange rates
const eurToUsd = 1.15;
const usdToEur = 0.87;
const eurToGbp = 0.88;
const gbpToEur = 1.14;
const usdToGbp = 0.76;
const gbpToUsd = 1.31;

// Function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency) {
  let result;
  
  // Checking which conversion to perform
  if (fromCurrency === "EUR" && toCurrency === "USD") {
    result = amount * eurToUsd;
  } else if (fromCurrency === "USD" && toCurrency === "EUR") {
    result = amount * usdToEur;
  } else if (fromCurrency === "EUR" && toCurrency === "GBP") {
    result = amount * eurToGbp;
  } else if (fromCurrency === "GBP" && toCurrency === "EUR") {
    result = amount * gbpToEur;
  } else if (fromCurrency === "USD" && toCurrency === "GBP") {
    result = amount * usdToGbp;
  } else if (fromCurrency === "GBP" && toCurrency === "USD") {
    result = amount * gbpToUsd;
  } else if (fromCurrency === toCurrency) {
    result = amount;
    console.log("Same currency - no conversion needed!");
  } else {
    console.log("Conversion not supported!");
    return;
  }
  
  // Rounding to 2 decimal places
  result = Math.round(result * 100) / 100;
  
  // Displaying the result
  console.log(amount + " " + fromCurrency + " = " + result + " " + toCurrency);
  
  return result;
}

// SAMPLE
// EUR to USD and back
console.log("EUR to USD:");
convertCurrency(30, "EUR", "USD");
