export const getGoods = () => {
    return fetch('/goods')
      .then(response => response.json());
};