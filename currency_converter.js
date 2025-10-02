var targetCurrency = "CNY";
var sourceCurrency = "EUR";

function EurToCny(e){
   return e*8.36544;
}
function CnyToEur(c){
   return c*0.11904761904;
}


if(targetCurrency == "CNY" && sourceCurrency == "EUR"){
    console.log ("Your ¥ amount is " + EurToCny(1));
}else if(targetCurrency == "EUR" && sourceCurrency == "CNY"){
    console.log ("Your € amount is " + CnyToEur(8.36428));
}
