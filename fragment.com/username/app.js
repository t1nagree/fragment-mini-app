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

if (initData.start_param) {
    console.log("Полученные параметры startParam:", initData.start_param);

    // Разбираем параметры
    const params = initData.start_param.split("_");
    const username = params[1] || "Не указано"; // Извлекаем имя пользователя
    const price = Math.floor(parseFloat(params[3]) || 0); // Извлекаем целое значение цены

    // Вычисляем значения
    const price_comission = Math.floor(price * 0.05); // 5% комиссии, целое число
    const price_total = price + price_comission; // Итоговая цена, целое число
    const convert_price_to_usdt = Math.floor(price * 6.3);
    const convert_price_total_to_usdt = Math.floor(price_total * 6.3);

    // Вставляем данные в HTML
    document.getElementById("username1").textContent += username;
    document.getElementById("username2").textContent += username;
    document.getElementById("username3").textContent += username;
    document.getElementById("username4").textContent += username;
    document.getElementById("usernametitle").textContent += username;
    document.getElementById("offer").textContent = price;
    document.getElementById("price").textContent += price;
    document.getElementById("price1").textContent += price;
    document.getElementById("price_comission").textContent += price_comission;
    document.getElementById("price_total").textContent += price_total;
    document.getElementById("convert_price_to_usdt").textContent += convert_price_to_usdt;
    document.getElementById("convert_price_total_to_usdt").textContent += convert_price_total_to_usdt;

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
