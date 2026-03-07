export function setAlert(status, icon, content) {

  let alertWrapper = document.querySelector('.alert-container');

  if (!alertWrapper) {
    alertWrapper = document.createElement('div');
    alertWrapper.classList.add('alert-container');
    document.body.appendChild(alertWrapper);
  }

  const container = document.createElement('div');
  container.classList.add('alert', `alert-${status}`);

  container.innerHTML = `
    <span class="alert-icon">${icon}</span>
    <span class="alert-message">${content}</span>
  `;
  alertWrapper.appendChild(container);

  setTimeout(() => {
    removeAlert(container);
  }, 3000);
}

function removeAlert(element) {
  element.style.opacity = '0';
  element.style.transform = 'translateX(50px)';
  setTimeout(() => element.remove(), 300);
}