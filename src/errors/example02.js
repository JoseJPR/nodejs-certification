/**
 * Description: With properties of an object in try/catch.
 */

/** Import generics dependences */
import 'pretty-console-colors';

const apples = 1;

const sum = (other) => {
  try {
    const result = apples + other.count;
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

// No launch the error, result is 4.
sum({
  count: 3,
});

// Launch catch with the error.
sum();

// No launch the error, other object exist but property count is undefined, the result is NaN.
sum({});
