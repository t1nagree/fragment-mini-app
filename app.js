// Убедитесь, что Telegram WebApp API загружен
try {
    Telegram.WebApp.ready(); // Инициализация WebApp
    console.log("Telegram WebApp инициализирован.");
} catch (e) {
    console.error("Telegram WebApp API недоступен. Проверьте подключение telegram-web-app.js.", e);
}

// Получаем данные из Telegram
let initData = Telegram.WebApp?.initDataUnsafe || {}; // Если Telegram недоступен, используем пустой объект для теста

// Проверяем, переданы ли параметры
if (initData.startParam) {
    console.log("Параметры startParam получены:", initData.startParam);

    try {
        // Разбиваем строку параметров
        const params = initData.startParam.split("_");
        const username = params[1] || "Не указано";
        const price = parseFloat(params[3]) || 0;

        // Логируем параметры
        console.log(`Имя пользователя: ${username}`);
        console.log(`Цена: ${price}`);

        // Вставляем данные в HTML
        document.getElementById("username").textContent = username;
        document.getElementById("price").textContent = price.toFixed(2);
    } catch (error) {
        console.error("Ошибка при обработке параметров:", error);
    }
} else {
    console.warn("Параметры не переданы через startParam. Переход в тестовый режим.");

    // Тестовый режим: используем заглушки для локальной проверки
    document.getElementById("username").textContent = "Тестовый пользователь";
    document.getElementById("price").textContent = "100.00";
}

// Для отладки Telegram WebApp данных
console.log("Telegram WebApp данные:", initData);
