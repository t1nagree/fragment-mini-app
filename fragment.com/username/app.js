// Проверяем наличие Telegram API
if (typeof Telegram !== "undefined" && Telegram.WebApp) {
    Telegram.WebApp.ready();
    console.log("Telegram WebApp API успешно загружен.");
} else {
    console.error("Telegram WebApp API не доступен. Проверьте подключение 'telegram-web-app.js'.");
}

// Получаем данные из Telegram
const initData = Telegram?.WebApp?.initDataUnsafe || {};
console.log("InitData:", initData);

// Проверяем наличие startParam
if (initData.startParam) {
    console.log("Полученные параметры startParam:", initData.startParam);

    // Разбираем параметры
    const params = initData.startParam.split("_");
    console.log("Разбитый массив params:", params);

    if (params.length >= 4) {
        const username = params[1] || "Не указано"; // Извлекаем имя пользователя
        const price = parseFloat(params[3]) || 0;   // Извлекаем цену

        if (price === 0) {
            console.warn("Цена не передана или равна нулю:", params[3]);
        }

        // Вычисляем значения
        const price_comission = (price * 0.05).toFixed(2); // 5% комиссии
        const price_total = (price + parseFloat(price_comission)).toFixed(2); // Итоговая цена

        // Вставляем данные в HTML
        try {
            document.getElementById("username1").textContent += username || "Unknown";
            document.getElementById("username2").textContent += username || "Unknown";
            document.getElementById("username3").textContent += username || "Unknown";
            document.getElementById("username4").textContent += username || "Unknown";
            document.getElementById("usernametitle").textContent += username || "Unknown";

            document.getElementById("offer").textContent = price.toFixed(2);
            document.getElementById("price").textContent += price.toFixed(2);
            document.getElementById("price1").textContent += price.toFixed(2);
            document.getElementById("price_comission").textContent += price_comission;
            document.getElementById("price_total").textContent += price_total;

            console.log(`Данные успешно вставлены: Username: ${username}, Price: ${price}, Comission: ${price_comission}, Total: ${price_total}`);
        } catch (error) {
            console.error("Ошибка вставки данных в элементы DOM. Проверьте наличие всех элементов в HTML.", error);
        }
    } else {
        console.error("Неверный формат startParam. Ожидается минимум 4 части, получено:", params.length);
    }
} else {
    console.warn("Параметры не переданы. Используются тестовые данные.");
    console.log("Полученные параметры startParam:", initData.startParam);
    // Вставляем тестовые данные
    try {
        document.getElementById("username1").textContent += "Test";
        document.getElementById("username2").textContent += "Test";
        document.getElementById("username3").textContent += "Test";
        document.getElementById("username4").textContent += "Test";
        document.getElementById("usernametitle").textContent += "Test";

        document.getElementById("offer").textContent = "100";
        document.getElementById("price").textContent += "100";
        document.getElementById("price1").textContent += "100";
        document.getElementById("price_comission").textContent += "5";
        document.getElementById("price_total").textContent += "105";

        console.log("Тестовые данные успешно вставлены.");
    } catch (error) {
        console.error("Ошибка вставки тестовых данных в элементы DOM. Проверьте наличие всех элементов в HTML.", error);
    }
}
