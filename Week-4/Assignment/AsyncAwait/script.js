async function getExchangeRate(currencyCode) {
	try {
		const response = await fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=${currencyCode}`);
		const jsonResponse = await response.json();

		if (jsonResponse.rates && jsonResponse.rates[currencyCode]) {
			const exchangeRate = jsonResponse.rates[currencyCode];
			return parseFloat(exchangeRate.toFixed(4));
		} else {
			return null;
		}
	} catch (error) {
		throw new Error('An error occurred while fetching the exchange rate.');
	}
}

getExchangeRate('USD')
	.then((rate) => {
		console.log(rate);
	})
	.catch((error) => {
		console.error(error);
	});

getExchangeRate('XYZ')
	.then((rate) => {
		console.log(rate);
	})
	.catch((error) => {
		console.error(error);
	});
