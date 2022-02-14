const Svg = ({ styles, config, className, symbol }) => {
  return (
    <svg
      {...config}
      style={styles}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`/sprite.svg#${symbol}`} />
    </svg>
  );
};

export default Svg;
