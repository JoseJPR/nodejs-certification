/**
 * Description: NumberFormat for format numbers with differents languaje and formats.
 */

/** Import generics dependences */
import 'pretty-console-colors';

const numberA = 1234567890.99;
const intlAA = new Intl.NumberFormat('en').format(numberA);
const intlAB = new Intl.NumberFormat('es').format(numberA);
console.log(intlAA); // Return 1,234,567,890.99
console.log(intlAB); // Return 1.234.567.890,99

const numberB = 9999.99;
const intlBA = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(numberB);
const intlBB = new Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' }).format(numberB);
console.log(intlBA); // Return $9,999.99
console.log(intlBB); // Return 9999,99 €

const numberC = 99999.99;
const intlCA = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(numberC);
const intlCB = new Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' }).format(numberC);
console.log(intlCA); // Return $99,999.99
console.log(intlCB); // Return 99.999,99 €
