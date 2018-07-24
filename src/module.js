import { anyPass } from 'ramda';
import { isKey } from './utils';

console.log(isKey); // Mock function
console.log(isKey()); // undefined 

const isValidKey = anyPass([isKey('Enter'), isKey('Backspace')]);

const foo = k => {
  return isValidKey(k);
}

export default foo;