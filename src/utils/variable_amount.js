export const MinAmount = (array) => {
  return Math.min.apply(
    Math,
    array?.map(function (o) {
      return o.price;
    })
  );
};

export const MaxAmount = (array) => {
  return Math.max.apply(
    Math,
    array?.map(function (o) {
      return o.price;
    })
  );
};
