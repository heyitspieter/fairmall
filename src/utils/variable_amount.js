export const MinAmount = (array) => {
  const res = Math.min.apply(
    Math,
    array.map(function (o) {
      return o.price;
    })
  );
  return res;
};

export const MaxAmount = (array) => {
  const res = Math.max.apply(
    Math,
    array.map(function (o) {
      return o.price;
    })
  );
  return res;
};
