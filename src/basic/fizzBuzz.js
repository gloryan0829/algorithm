/*
  Write a program that prints the numbers from 1 to 100.
  But for multiples of three print “Fizz” instead of the number
  and for the multiples of five print “Buzz”.
  For numbers which are multiples of both three and five print “FizzBuzz”.
 */
const fizzBuzz = () => {
  const result = [];
  for (let i = 1; i <= 100; i++) {
      result.push(((i % 3 === 0 ? 'Fizz':'') + (i % 5 === 0 ? 'Buzz':'')) || i)
  }
  return result;
};

export default fizzBuzz;
