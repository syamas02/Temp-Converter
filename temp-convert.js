const convertToCfromF = fahrenheit => {
  return (fahrenheit - 32) * (5 / 9);
};

const convertToFfromC = celsius => {
  return celsius * (9 / 5) + 32;
};

module.export = { convertToCfromF, convertToFfromC };
