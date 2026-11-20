const button = document.querySelector('#greet-button');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
  message.textContent = 'Hello! Git helps track your code changes.';
});
