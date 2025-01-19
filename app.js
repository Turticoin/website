// const select = document.querySelector("select");
// const allLang = ['en', 'ru'];

// select.addEventListener("change", changeURLLanguage);

// function changeURLLanguage() {
//     let lang = select.value;
//     location.href = window.location.pathname + '#' + lang;
//     location.reload();
// }

// function changeLanguage() {
//     let hash = window.location.hash;
//     hash = hash.substring(1);
//     console.log(hash);
//     if (!allLang.includes(hash)) {
//         location.href = window.location.pathname + '#en';
//         location.reload();
//     }
//     select.value = hash;

//     for (let key in langArr) {
//         // Ищем элементы с атрибутом data-lng
//         let elems = document.querySelectorAll(`[data-lng="${key}"]`);
//         elems.forEach(elem => {
//             elem.innerHTML = langArr[key][hash];
//         });
//     }
// }

// changeLanguage();

// // Находим элементы для клика и выпадающее меню
// const dropdownToggle = document.querySelector('.dropdown-toggle');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// // Добавляем обработчик события на клик по кнопке
// dropdownToggle.addEventListener('click', function() {
//     // Переключаем класс "show" для отображения/скрытия меню
//     dropdownMenu.classList.toggle('show');
// });






document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const allLang = ['en', 'ru', 'fr'];

    // Показать/скрыть меню
    dropdownToggle?.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    // Обработка выбора языка
    dropdownItems.forEach((item) => {
        item.addEventListener('click', function () {
            const lang = item.dataset.lang;

            console.log("Selected lang:",lang)
            if (allLang.includes(lang)) {
            // Установить новый URL с языком
            location.href = window.location.pathname + '#' + lang;
            location.reload();
            } else {
                console.log("Invalid language selected:", lang); // Диагностика: если язык некорректный
            }

        });
    });

    // Изменить язык страницы на основе хэша
    function changeLanguage() {
        let hash = window.location.hash; // Убираем #
        hash = hash.substring(1);
        console.log("Current hash:", hash);
        if (!allLang.includes(hash)) {
            location.href = window.location.pathname + '#en'; // По умолчанию English
            location.reload();
        }

        // Обновить текст страницы
        for (let key in langArr) {
            const elems = document.querySelectorAll(`[data-lng="${key}"]`);
            elems.forEach((elem) => {
                elem.innerHTML = langArr[key][hash];
            });
        }

        // Обновить отображение текущего языка в dropdown
        const currentLangIcon = dropdownToggle.querySelector('.flag-icon');
        const currentLangText = dropdownToggle.querySelector('.font');
        const selectedItem = document.querySelector(`[data-lang="${hash}"]`);

        if (selectedItem) {
            const selectedIcon = selectedItem.querySelector('img').src;
            currentLangIcon.src = selectedIcon;
            currentLangText.textContent = hash.toUpperCase();
        }
    }

    // Запускаем изменение языка при загрузке страницы
    changeLanguage();
});


