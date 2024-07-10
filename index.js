import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_OuF0BNMBpfk39l6XIVJVpLvdqRtEvQk8Trdnevpf');

// convertCurrency("INR", "USD", 300)

export async function convertCurrency(fromCurrency, toCurrency, units){
const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
});
const multiplier = res.data[toCurrency];
// console.log(multiplier*units);
return multiplier*units;

};