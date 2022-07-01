export const TaxCalCulator = (total, rate) => {
  const ratePercent = rate / 100;
  const tax = total * ratePercent;
  return tax;
};
