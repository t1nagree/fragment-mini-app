// Функция для открытия модального окна
function openWalletModal() {
  const walletModal = document.getElementById("wallet-modal");
  if (walletModal) {
      walletModal.style.display = "block";
  }
}

// Функция для закрытия модального окна
function closeWalletModal() {
  const walletModal = document.getElementById("wallet-modal");
  if (walletModal) {
      walletModal.style.display = "none";
  }
}

// Обработчик события для кнопки
document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".js-place-bid-btn"); // Найти кнопку "Accept the offer"
  if (openButton) {
      openButton.addEventListener("click", () => {
          openWalletModal();
      });
  }
});
