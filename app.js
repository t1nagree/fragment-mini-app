// Убедитесь, что библиотека Telegram Web Apps API подключена
Telegram.WebApp.ready(); // Инициализация WebApp

// Используем одну декларацию переменной
let initData = Telegram.WebApp.initDataUnsafe;

if (initData.startParam) {
    const params = initData.startParam.split("_");
    const username = params[1] || "Не указано";
    const price = parseFloat(params[3]) || 0;

    // Логируем для отладки
    console.log(`Username: ${username}`);
    console.log(`Price: ${price}`);

    // Пример: вставляем данные в HTML
    document.getElementById("username").textContent = username;
    document.getElementById("price").textContent = price.toFixed(2);
} else {
    console.error("Параметры не переданы");
}
