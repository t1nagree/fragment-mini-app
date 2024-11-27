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

    // Проверяем существование элементов перед изменением
    if (document.getElementById("username1")) document.getElementById("username1").textContent += username;
    if (document.getElementById("username2")) document.getElementById("username2").textContent += username;
    if (document.getElementById("username3")) document.getElementById("username3").textContent += username;
    if (document.getElementById("username4")) document.getElementById("username4").textContent += username;
    if (document.getElementById("usernametitle")) document.getElementById("usernametitle").textContent += username;
    if (document.getElementById("offer")) document.getElementById("offer").textContent = price.toFixed(2);
    if (document.getElementById("price")) document.getElementById("price").textContent += price.toFixed(2);
    if (document.getElementById("price1")) document.getElementById("price1").textContent += price.toFixed(2);
    if (document.getElementById("price_comission")) document.getElementById("price_comission").textContent += price_comission;
    if (document.getElementById("price_total")) document.getElementById("price_total").textContent += price_total;

    // Логируем значения для отладки
    console.log(`Username: ${username}`);
    console.log(`Price: ${price}`);
    console.log(`Comission: ${price_comission}`);
    console.log(`Total Price: ${price_total}`);
} else {
    console.warn("Параметры не переданы. Проверьте правильность ссылки.");

    // Тестовые данные
    const testUsername = "Test";
    const testPrice = "100";
    const testComission = "5";
    const testTotal = "105";

    // Установка тестовых данных
    if (document.getElementById("username1")) document.getElementById("username1").textContent += testUsername;
    if (document.getElementById("username2")) document.getElementById("username2").textContent += testUsername;
    if (document.getElementById("username3")) document.getElementById("username3").textContent += testUsername;
    if (document.getElementById("username4")) document.getElementById("username4").textContent += testUsername;
    if (document.getElementById("usernametitle")) document.getElementById("usernametitle").textContent += testUsername;
    if (document.getElementById("offer")) document.getElementById("offer").textContent = testPrice;
    if (document.getElementById("price")) document.getElementById("price").textContent += testPrice;
    if (document.getElementById("price1")) document.getElementById("price1").textContent += testPrice;
    if (document.getElementById("price_comission")) document.getElementById("price_comission").textContent += testComission;
    if (document.getElementById("price_total")) document.getElementById("price_total").textContent += testTotal;
}
