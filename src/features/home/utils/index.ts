export const randomNumber = () => {
  const rawNumber = Math.random() * (1000 - 0.01) + 0.01;
  const formattedNumber = rawNumber.toFixed(2);
  const finalNumber = Number.parseFloat(formattedNumber);

  return finalNumber;
};
