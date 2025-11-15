const { getNumber } = require('./index');

const testNumbers = [
  '+14155552671', // US
  '+918123456789', // India
  '+447911123456', // UK
  '+8613712345678', // China
  '922501234567' // pakistan
];

testNumbers.forEach(number => {
  try {
    const result = getNumber(number);
    console.log(number, '=>', result);
  } catch(err) {
    console.error(number, '=>', err.message);
  }
});
