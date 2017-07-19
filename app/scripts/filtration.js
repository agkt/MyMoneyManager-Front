/**
 * Created by katemrrr on 18.07.17.
 */

// при загрузке страницы загружается полный список
$(window).load(function () {
    $('#select_category').hide();
    showData(data.operations);
});

// массив данных
var data = {
    operations: [
        {
            name: 'Покупки',
            way: 'Кошелёк',
            category: 'Расходы',
            price: -2230,
            date: new Date(2017, 6, 18)
        },
        {
            name: 'Путешествия',
            way: 'Рокетбанк',
            category: 'Расходы',
            price: -8320,
            date: new Date(2017, 6, 18)
        },
        {
            name: 'Основная работа',
            way: 'Рокетбанк',
            category: 'Доходы',
            price: +40000,
            date: new Date(2017, 6, 16)
        },
        {
            name: 'Рокетбанк',
            way: 'Кошелёк',
            category: 'Переводы',
            price: 20230,
            date: new Date(2017, 6, 16)
        },
        {
            name: 'Жуковец Никита',
            way: 'Сбербанк',
            category: 'Долги',
            price: -800,
            date: new Date(2017, 6, 17)
        },
        {
            name: 'Покупки',
            way: 'Сбербанк',
            category: 'Расходы',
            price: -2230,
            date: new Date(2017, 6, 17)
        },
        {
            name: 'Одежда',
            way: 'Рокетбанк',
            category: 'Расходы',
            price: -8320,
            date: new Date(2017, 6, 16)
        },
        {
            name: 'Подработка',
            way: 'Рокетбанк',
            category: 'Доходы',
            price: +12000,
            date: new Date(2017, 6, 16)
        },
        {
            name: 'Рокетбанк',
            way: 'Кошелёк',
            category: 'Переводы',
            price: 2000,
            date: new Date(2017, 6, 16)
        },
        {
            name: 'Пушков Александр',
            way: 'Сбербанк',
            category: 'Долги',
            price: -300,
            date: new Date(2017, 6, 15)
        },
        {
            name: 'Еда',
            way: 'Кошелёк',
            category: 'Расходы',
            price: 20,
            date: new Date(2017, 6, 15)
        },
        {
            name: 'Еда',
            way: 'Рокетбанк',
            category: 'Расходы',
            price: 8320,
            date: new Date(2017, 6, 15)
        },
        {
            name: 'Фриланс',
            way: 'Рокетбанк',
            category: 'Доходы',
            price: 4000,
            date: new Date(2017, 6, 15)
        },
        {
            name: 'Сбербанк',
            way: 'Рокетбанк',
            category: 'Переводы',
            price: 20230,
            date: new Date(2017, 6, 15)
        },
        {
            name: 'Никитин Никита',
            way: 'Сбербанк',
            category: 'Долги',
            price: -800,
            date: new Date(2017, 6, 19)
        },
        {
            name: 'Кошелёк',
            way: 'Рокетбанк',
            category: 'Переводы',
            price: 1000,
            date: new Date(2017, 6, 19)
        },
        {
            name: 'Никитин Боря',
            way: 'Сбербанк',
            category: 'Долги',
            price: 1200,
            date: new Date(2017, 6, 19)
        },
        {
            name: 'Автомобиль',
            way: 'Кошелёк',
            category: 'Расходы',
            price: -1000,
            date: new Date(2017, 6, 19)
        },
        {
            name: 'Никитин Никита',
            way: 'Сбербанк',
            category: 'Долги',
            price: -800,
            date: new Date(2017, 6, 19)
        },
        {
            name: 'Подработка',
            way: 'Сбербанк',
            category: 'Доходы',
            price: 5000,
            date: new Date(2017, 6, 19)
        },
        {
            name: 'Стипендия',
            way: 'Сбербанк',
            category: 'Доходы',
            price: 1500,
            date: new Date(2017, 6, 19)
        }
    ]
};

function fillDataType() {

    $('.history-flex-item').remove();
    $('.history-page h4').remove();
    $('.history-flex-container').remove();

    var filterData = [];
    var waySel = $('#select_way option:selected').text(); // кошелек/карта
    var typeSel = $('#select_type option:selected').text(); // доход/расход
    var categorySel; // категория расходов

    if (typeSel == "Расходы") {
        $('#select_category').show();
        categorySel = $('#select_category option:selected').text();
    } else {
        $('#select_category').hide();
        categorySel = "Не выбрано";
    }

    var countPoints = 0;
    for (var j = 0; j < data.operations.length; j++) {
        countPoints = 0;
        if (typeSel == "Не выбрано" || typeSel == data.operations[j].category) {
            countPoints++;
        }
        if (waySel == "Не выбрано" || waySel == data.operations[j].way) {
            countPoints++;
        }
        if (categorySel == "Не выбрано" || categorySel == data.operations[j].name) {
            countPoints++;
        }
        if (countPoints == 3) {
            filterData.push(data.operations[j]);
        }
    }

    showData(filterData);
}

function showData(arr) {
    sortDate(arr);
    if (arr.length == 0) {
        $('.history-page').append("<h4>Ничего не найдено</h4>");
        return;
    }

    printDate(arr[0].date);
    printElement(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1].date - arr[i].date != 0) {
            printDate(arr[i].date);
        }
        printElement(arr[i]);
    }
}

function printElement(element) {
    switch (element.category) {
        case "Расходы":
            $('.history-flex-container:last-child').append("" +
                "<div class='history-flex-item costs' data-toggle='modal' data-target='#history-costs__modal-window'>" +
                printContentElement(element) +
                "</div>");
            break;
        case "Долги":
            if (element.price < 0) {
                $('.history-flex-container:last-child').append("" +
                    "<div class='history-flex-item own-dept' data-toggle='modal' data-target='#history-own-dept__modal-window'>" +
                    printContentElement(element) +
                    "</div>");
            } else {
                $('.history-flex-container:last-child').append("" +
                    "<div class='history-flex-item dept' data-toggle='modal' data-target='#history-dept__modal-window'>" +
                    printContentElement(element) +
                    "</div>");
            }
            break;
        case "Доходы":
            $('.history-flex-container:last-child').append("" +
                "<div class='history-flex-item earnings' data-toggle='modal' data-target='#history-earnings__modal-window'>" +
                printContentElement(element) +
                "</div>");
            break;
        default:
            $('.history-flex-container:last-child').append("" +
                "<div class='history-flex-item transfer' data-toggle='modal' data-target='#history-transfer__modal-window'>" +
                printContentElement(element) +
                "</div>");
            break;
    }
}

function printContentElement(content) {
    return "<div>" +
        "<strong>" + content.name + "</strong><br>" +
        "<small>" + content.way + "</small> " +
        "</div> " +
        "<div> " +
        "<small>" + content.category + "</small> " +
        "<br> " +
        "<strong>" + content.price + " &#8381;</strong>" +
        "</div> "
}

function printDate(date) {
    if ((new Date().getDate() == date.getDate()) &&
        (new Date().getMonth() == date.getMonth()) &&
        (new Date().getFullYear() == date.getFullYear())) {
        $('.history-page').append("<h4>Сегодня</h4>");
    } else {
        if (new Date().getDate() - date.getDate() == 1) {
            $('.history-page').append("<h4>Вчера</h4>");
        } else {
            $('.history-page').append("<h4>" + date.getDate() + "." + 0 +(date.getMonth()+1) + "." + date.getFullYear() + "</h4>");
        }
    }
    $('.history-page').append("<div class='history-flex-container'></div>");
}

function sortDate(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j + 1].date > arr[j].date) {
                var t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}

