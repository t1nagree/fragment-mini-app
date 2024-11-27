// 1. Инициализация Telegram Web Apps
Telegram.WebApp.ready();

// 2. Получение параметров из Telegram
const initData = Telegram.WebApp.initDataUnsafe;

// Проверка параметров
if (initData.startParam) {
  // Разбиваем строку startParam, переданную через ссылку
  const params = initData.startParam.split("_");

  // Извлекаем значения параметров
  const username = params[1] || "Не указано";
  const price = params[3] || "Не указано";

  // 3. Вставка значений в HTML
  document.getElementById("username").querySelector("span").textContent = username;
  document.getElementById("price").querySelector("span").textContent = price;
} else {
  console.log("Параметры не переданы");
}
