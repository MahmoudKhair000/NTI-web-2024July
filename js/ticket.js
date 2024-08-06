let priceDataJs = {
    "servicesPrices": { "kite": 1200, "dive": 600, "safari": 800, "cruise": 2000 },
    "boatPrices": { "plat": 1000, "gold": 600, "silv": 300 },
    "roomPrices": { "suite": 2200, "family": 800, "double": 500, "single": 300 }
}

let priceDataJsn = JSON.stringify(priceDataJs);

console.log(priceDataJs);
console.log(priceDataJsn);

