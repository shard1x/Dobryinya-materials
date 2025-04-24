function addToCart(productId) {
  fetch(`/add_to_cart/${productId}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
      if (data.error) {
          alert(data.error); // Показываем ошибку пользователю
      } else {
          alert('Товар добавлен в корзину!');
      }
  })
  .catch(error => console.error('Ошибка:', error));
}