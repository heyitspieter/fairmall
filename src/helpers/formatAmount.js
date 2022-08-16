/* eslint-disable radix */
export default function formatToCurrency(amount) {
    return (
      '₦' +
      parseInt(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    );
  }
  