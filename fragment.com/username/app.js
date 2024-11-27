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

if (initData.startParam) {
    console.log("Полученные параметры startParam:", initData.startParam);

    // Разбираем параметры
    const params = initData.startParam.split("_");
    const username = params[1] || "Не указано"; // Извлекаем имя пользователя
    const price = parseFloat(params[3]) || 0; // Извлекаем цену

    // Вычисляем значения
    const price_comission = (price * 0.05).toFixed(2); // 5% комиссии
    const price_total = (price + parseFloat(price_comission)).toFixed(2); // Итоговая цена

    // Вставляем данные в HTML
    document.getElementById("username1").textContent += username;
    document.getElementById("username2").textContent += username;
    document.getElementById("username3").textContent += username;
    document.getElementById("username4").textContent += username;
    document.getElementById("usernametitle").textContent += username;
    document.getElementById("offer").textContent = price.toFixed(2);
    document.getElementById("price").textContent += price.toFixed(2);
    document.getElementById("price1").textContent += price.toFixed(2);
    document.getElementById("price_comission").textContent += price_comission;
    document.getElementById("price_total").textContent += price_total;

} else {
    console.warn("Параметры не переданы. Проверьте правильность ссылки.");

    // Тестовые данные
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
}