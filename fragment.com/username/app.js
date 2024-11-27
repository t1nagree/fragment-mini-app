if (typeof Telegram !== "undefined" && Telegram.WebApp) {
    Telegram.WebApp.ready();
} else {
    console.error("Telegram.WebApp не определён. Проверьте подключение telegram-web-app.js.");

// Получаем параметры из Telegram
const initData = Telegram.WebApp.initDataUnsafe;

if (initData.startParam) {
    const params = initData.startParam.split("_"); // Разбиваем строку по символу "_"
    const username = params[1] || "Не указано";
    const price = parseFloat(params[3]) || 0;

    // Вычисление комиссии (5%)
    const price_comission = (price * 0.05).toFixed(2);

    // Итоговая сумма
    const price_final = (price + parseFloat(price_comission)).toFixed(2);

    // Вставка данных в HTML
    document.getElementById("username").textContent = username;
    document.getElementById("price").textContent = price.toFixed(2);
    document.getElementById("price_comission").textContent = price_comission;
    document.getElementById("price_final").textContent = price_final;

    console.log(`Username: ${username}`);
    console.log(`Price: ${price}`);
    console.log(`Commission: ${price_comission}`);
    console.log(`Final Price: ${price_final}`);
} else {
    console.error("Параметры не переданы");
}
