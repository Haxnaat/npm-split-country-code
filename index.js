
const countryCodes = require('./countryCodes'); 

countryCodes.sort((a, b) => b.code.length - a.code.length);
function getNumber(value) {
  if (!value) throw new Error('Number is required');
  value = value.trim().replace(/\s|-/g, ''); 
  if (!value.startsWith('+')) value = '+' + value;
  for (let item of countryCodes) {
    if (value.startsWith(item.code)) {
      return {
        code: item.code,
        number: value.substring(item.code.length),
        country: item.iso
      };
    }
  }
  throw new Error('Country code not found');
}
module.exports = { getNumber };
