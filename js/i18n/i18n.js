let langData = {};

document.addEventListener("DOMContentLoaded", () => {
  console.log("перевод загрузка");
  fetch("../json/localization.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ой, ошибка в fetch: " + response.statusText);
      }
      return response.json();
    })
    .then((jsonData) => {
      langData = jsonData;
      console.log(langData);

      // После загрузки данных из JSON вызываем translatePage
      const lang = localStorage.getItem("language") || "en";
      translatePage(lang);
    })
    .catch((error) => console.error("Ошибка при исполнении запроса: ", error));

  document
    .querySelector('[data-header-translate="language"]')
    .addEventListener("click", toggleLanguage);
  document
    .querySelector(".lng-line.in-burger")
    .addEventListener("click", toggleLanguage);
});

function translatePage(lang) {
  console.log("перевод страницы");
  translateHeader(lang);
  translateFooter(lang);
  translateMain(lang);
}

function toggleLanguage() {
  console.log("смена языка");
  const currentLang = localStorage.getItem("language") || "en";
  const newLang = currentLang === "en" ? "ru" : "en";
  localStorage.setItem("language", newLang);
  translatePage(newLang);
}

function translateMain(lang) {
  console.log("перевод main");
  const elements = document.querySelectorAll("[data-translate]");
  console.log(elements);
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    console.log(element);
    console.log(langData);

    if (langData[key] && langData[key][lang]) {
      element.textContent = langData[key][lang];
    } else {
      console.warn(`Перевод для ключа "${key}" на языке "${lang}" не найден.`);
    }
  });
}
