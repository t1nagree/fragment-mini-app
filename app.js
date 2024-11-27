// Убедитесь, что Telegram Web Apps API подключен
try {
    Telegram.WebApp.ready(); // Инициализация WebApp
    console.log("Telegram WebApp инициализирован.");
} catch (e) {
    console.error("Telegram WebApp API не загружен. Проверьте 'telegram-web-app.js'.", e);
}

// Получаем данные из Telegram
let initData = Telegram.WebApp?.initDataUnsafe || {};

// Проверяем наличие параметров
if (initData.startParam) {
    console.log("Получены параметры startParam:", initData.startParam);

    try {
        // Разбиваем строку параметров
        const params = initData.startParam.split("_");
        const username = params[1] || "Не указано";
        const price = parseFloat(params[3]) || 0;

        // Логируем значения
        console.log(`Имя пользователя: ${username}`);
        console.log(`Цена: ${price}`);

        // Рассчитываем комиссию и итоговую цену
        const price_comission = (price * 0.05).toFixed(2);
        const price_total = (price + parseFloat(price_comission)).toFixed(2);

        // Вставляем данные в HTML
        document.getElementById("username").textContent = username;
        document.getElementById("price").textContent = price.toFixed(2);
        document.getElementById("price_comission").textContent = price_comission;
        document.getElementById("price_total").textContent = price_total;
    } catch (error) {
        console.error("Ошибка при обработке параметров:", error);
    }
} else {
    console.warn("Параметры не переданы. Используются тестовые значения.");

    // Тестовые значения для локальной проверки
    document.getElementById("username").textContent = "Тестовый пользователь";
    document.getElementById("price").textContent = "100.00";
    document.getElementById("price_comission").textContent = "5.00";
    document.getElementById("price_total").textContent = "105.00";
}
