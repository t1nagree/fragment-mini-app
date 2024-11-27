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
    const username = params[1] || "Не указано";
    const price = parseFloat(params[3]) || 0;

    // Вычисляем значения
    const price_comission = (price * 0.05).toFixed(2);
    const price_final = (price + parseFloat(price_comission)).toFixed(2);

    // Вставляем данные в HTML
    document.getElementById("username").textContent = username;
    document.getElementById("price").textContent = price.toFixed(2);
    document.getElementById("price_comission").textContent = price_comission;
    document.getElementById("price_final").textContent = price_final;

    console.log(`Username: ${username}`);
    console.log(`Price: ${price}`);
    console.log(`Comission: ${price_comission}`);
    console.log(`Final Price: ${price_final}`);
} else {
    console.warn("Параметры не переданы. Используются тестовые данные.");
    
    // Тестовые данные
    document.getElementById("username").textContent = "Тестовый пользователь";
    document.getElementById("price").textContent = "100.00";
    document.getElementById("price_comission").textContent = "5.00";
    document.getElementById("price_final").textContent = "105.00";
}
