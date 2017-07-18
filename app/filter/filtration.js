/**
 * Created by katemrrr on 18.07.17.
 */

$(window).load(function(){
    $('#select_category').hide();
    for (var  j = 0; j < data.operations.length; j++){
        $('.table').append("<tr>" +
            "<td><p> Операция: " + data.operations[j].name + " |||| Сумма: " + data.operations[j].price + " ||||  Кошелек: "
            + data.operations[j].way + " ||||  Категория: " + data.operations[j].category + "</p></td>" +
            "</tr>"
        );
    }
});

var data = {
    operations: [
        {
            name: 'Перевод',
            way: 'Наличные',
            category: '',
            price: 2230
        },
        {
            name: 'Доход',
            way: 'РокетБанк',
            category: '',
            price: 8320
        },
        {
            name: 'Расход',
            way: 'Сбербанк',
            category: 'Спорт',
            price: 402
        },
        {
            name: 'Расход',
            way: 'Наличные',
            category: 'Техника',
            price: 10200
        },
        {
            name: 'Перевод',
            way: 'Наличные',
            category: '',
            price: 20230
        },
        {
            name: 'Перевод',
            way: 'Сбербанк',
            category: '',
            price: 800
        },
        {
            name: 'Расход',
            way: 'Сбербанк',
            category: 'Одежда',
            price: 4322
        },
        {
            name: 'Расход',
            way: 'РокетБанк',
            category: 'Еда',
            price: 1203
        }
    ]
};

function fillDataType() {

    $(".table tr").remove();

    var filterData = [];
    var waySel = $("#select_way option:selected").text(); // кошелек/карта
    var typeSel = $("#select_type option:selected").text(); // доход/расход
    var categorySel; // категория расходов

    if(typeSel == "Расход") {
        $('#select_category').show();
        categorySel = $("#select_category option:selected").text();
    } else {
        $('#select_category').hide();
        categorySel = "Не выбрано";
    }

    var countPoints = 0;
    for(var j = 0; j < data.operations.length; j++) {
        countPoints = 0;
        if (typeSel == "Не выбрано" || typeSel == data.operations[j].name) {
            countPoints++;
        }
        if (waySel == "Не выбрано" || waySel == data.operations[j].way) {
            countPoints++;
        }
        if (categorySel == "Не выбрано" || categorySel == data.operations[j].category) {
            countPoints++;
        }
        if(countPoints == 3){
            filterData.push(data.operations[j]);
        }
    }
    for(var j = 0; j < filterData.length; j++) {
        $('.table').append("<tr>" +
            "<td><p> Операция: " + filterData[j].name + " |||| Сумма: " + filterData[j].price + " ||||  Кошелек: "
            + filterData[j].way + " ||||  Категория: " + filterData[j].category + "</p></td>" +
            "</tr>"
        );
    }
}
function fillTable() {
    for (i = 0; i < data.operations.length; i++) {
        if (data.operations[i].category == '') {
            $('.table').append("<tr>" +
                "<td><p> Операция:" + data.operations[i].name + "  Сумма:" + data.operations[i].price + "  Кошелек:"
                + data.operations[i].way + "</p></td>" +
                "</tr>"
            );
        } else {
            $('.table').append("<tr>" +
                "<td><p> Операция:" + data.operations[i].name + "  Сумма:" + data.operations[i].price + "  Кошелек:"
                + data.operations[i].way + "</p></td>" +
                "</tr>"
            );
        }
    }
}