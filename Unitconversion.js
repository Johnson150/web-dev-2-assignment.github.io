const kmtomi = (kilometers) => kilometers * 0.621371;
const mitokm = (miles) => miles / 0.621371;

const lbstokg = (pounds) => pounds * 0.453592;
const kgtolbs = (kilograms) => kilograms / 0.453592;

const celsiustofahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const fahrenheittocelsius = (fahrenheit) => (fahrenheit * 5 / 9) - 32;


const unitconverter = (startingUnit, endingUnit, value)
switch ('${startingUnit}-${endingUnit}') {
    case 'lb-kg':
        return lbstokg(value);
    case 'kg-lb':
        return kgtolbs(value);
    case 'celsius-fahrenheit':
        return celsiustofahrenheit(value);
    case 'fahrenheit-celsius':
        return fahrenheittocelsius(value);
    case 'km-mi':
        return kmtomi(value);
    case 'mi-km':
        return mitokm(value);
    default:
        return null;


}
