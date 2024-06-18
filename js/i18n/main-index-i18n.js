let translations =[];
var jsoni18n;
// Получение данных  из JSON
fetch('Json/localization.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ой, ошибка в fetch: ' + response.statusText);
        }
        return response.json();
    })
    .then(jsonData => {
        jsoni18n = jsonData;
        // Объединение  из JSON и localStorage
        translations = jsoni18n.concat(jsoni18n);
    });
