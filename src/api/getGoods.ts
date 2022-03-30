const getGoods = () => (
  fetch('/goods')
    .then((response) => response.json())
);

export default getGoods;
