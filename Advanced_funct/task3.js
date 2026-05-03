function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Denominator cannot be zero');
    };

    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Numerator and denominator should be numbers');
    };

    return numerator / denominator;
}

try {
  console.log(divide(10, 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
};

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
};

try {
  console.log(divide(10, "string"));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
};