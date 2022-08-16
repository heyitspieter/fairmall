export const TaxCalCulator = (total, rate) => {
  const ratePercent = rate / 100;
  return total * ratePercent;
};
