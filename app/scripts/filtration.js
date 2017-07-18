/**
 * Created by katemrrr on 18.07.17.
 */
// при загрузке страницы загружается полный список
$(window).load(function(){
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
            date: '18.07.2017'
        },
        {
            name: 'Путешествия',
            way: 'Рокетбанк',
            category: 'Расходы',
            price: -8320,
            date: '18.07.2017'
        },
        {
            name: 'Основная работа',
            way: 'Рокетбанк',
            category: 'Доходы',
            price: +40000,
            date: '16.07.2017'
        },
        {
            name: 'Рокетбанк',
            way: 'Кошелёк',
            category: 'Переводы',
            price: 20230,
            date: '16.07.2017'
        },
        {
            name: 'Жуковец Никита',
            way: 'Сбербанк',
            category: 'Долги',
            price: -800,
            date: '17.07.2017'
        },
        {
            name: 'Покупки',
            way: 'Сбербанк',
            category: 'Расходы',
            price: -2230,
            date: '17.07.2017'
        },
        {
            name: 'Одежда',
            way: 'Рокетбанк',
            category: 'Расходы',
            price: -8320,
            date: '16.07.2017'
        },
        {
            name: 'Подработка',
            way: 'Рокетбанк',
            category: 'Доходы',
            price: +12000,
            date: '16.07.2017'
        },
        {
            name: 'Рокетбанк',
            way: 'Кошелёк',
            category: 'Переводы',
            price: 2000,
            date: '16.07.2017'
        },
        {
            name: 'Пушков Александр',
            way: 'Сбербанк',
            category: 'Долги',
            price: -300,
            date: '15.07.2017'
        },
        {
            name: 'Еда',
            way: 'Кошелёк',
            category: 'Расходы',
            price: 20,
            date: '15.07.2017'
        },
        {
            name: 'Еда',
            way: 'Рокетбанк',
            category: 'Расходы',
            price: 8320,
            date: '15.07.2017'
        },
        {
            name: 'Фриланс',
            way: 'Рокетбанк',
            category: 'Доходы',
            price: 4000,
            date: '15.07.2017'
        },
        {
            name: 'Сбербанк',
            way: 'Рокетбанк',
            category: 'Переводы',
            price: 20230,
            date: '15.07.2017'
        },
        {
            name: 'Никитин Никита',
            way: 'Сбербанк',
            category: 'Долги',
            price: -800,
            date: '14.07.2017'
        }

    ]
};

function fillDataType() {

    $('.history-flex-item').remove();

    var filterData = [];
    var waySel = $('#select_way option:selected').text(); // кошелек/карта
    var typeSel = $('#select_type option:selected').text(); // доход/расход
    var categorySel; // категория расходов

    if(typeSel == "Расходы") {
        $('#select_category').show();
        categorySel = $('#select_category option:selected').text();
    } else {
        $('#select_category').hide();
        categorySel = "Не выбрано";
    }

    var countPoints = 0;
    for(var j = 0; j < data.operations.length; j++) {
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
        if(countPoints == 3){
            filterData.push(data.operations[j]);
        }
    }
    // console.log(filterData);
    showData(filterData);
}
// function fillTable() {
//     for (i = 0; i < data.operations.length; i++) {
//         if (data.operations[i].category == '') {
//             $('.table').append("<tr>" +
//                 "<td><p> Операция:" + data.operations[i].name + "  Сумма:" + data.operations[i].price + "  Кошелек:"
//                 + data.operations[i].way + "</p></td>" +
//                 "</tr>"
//             );
//         } else {
//             $('.table').append("<tr>" +
//                 "<td><p> Операция:" + data.operations[i].name + "  Сумма:" + data.operations[i].price + "  Кошелек:"
//                 + data.operations[i].way + "</p></td>" +
//                 "</tr>"
//             );
//         }
//     }
// }

function showData(arr) {
    for (var  i = 0; i < arr.length; i++){
        // console.log(data.operations[i].category);
        if (arr[i].category == "Расходы") {
            $('.history-flex-container').append("" +
                "<div class='history-flex-item costs' data-toggle='modal' data-target='#history-costs__modal-window'>" +
                "<div>" +
                "<strong>"+ arr[i].name +"</strong><br>" +
                "<small>"+ arr[i].way + "</small> " +
                "</div> " +
                "<div> " +
                "<small>"+ arr[i].category +"</small> " +
                "<br> " +
                "<strong>"+ arr[i].price +" &#8381;</strong>" +
                "</div> " +
                "</div>");
        } else if ((arr[i].category == "Долги") && (arr[i].price < 0)) {
            $('.history-flex-container').append("" +
                "<div class='history-flex-item own-dept' data-toggle='modal' data-target='#history-own-dept__modal-window'>" +
                "<div>" +
                "<strong>"+ arr[i].name +"</strong><br>" +
                "<small>"+ arr[i].way + "</small> " +
                "</div> " +
                "<div> " +
                "<small>"+ arr[i].category +"</small> " +
                "<br> " +
                "<strong>"+ arr[i].price +" &#8381;</strong>" +
                "</div> " +
                "</div>");
        } else if ((arr[i].category == "Долги") && (arr[i].price > 0)) {
            $('.history-flex-container').append("" +
                "<div class='history-flex-item dept' data-toggle='modal' data-target='#history-dept__modal-window'>" +
                "<div>" +
                "<strong>"+ arr[i].name +"</strong><br>" +
                "<small>"+ arr[i].way + "</small> " +
                "</div> " +
                "<div> " +
                "<small>"+ arr[i].category +"</small> " +
                "<br> " +
                "<strong>"+ arr[i].price +" &#8381;</strong>" +
                "</div> " +
                "</div>");
        } else if (arr[i].category == "Доходы"){
            $('.history-flex-container').append("" +
                "<div class='history-flex-item earnings' data-toggle='modal' data-target='#history-earnings__modal-window'>" +
                "<div>" +
                "<strong>"+ arr[i].name +"</strong><br>" +
                "<small>"+ arr[i].way + "</small> " +
                "</div> " +
                "<div> " +
                "<small>"+ arr[i].category +"</small> " +
                "<br> " +
                "<strong>"+ arr[i].price +" &#8381;</strong>" +
                "</div> " +
                "</div>");
        } else {
            $('.history-flex-container').append("" +
                "<div class='history-flex-item transfer' data-toggle='modal' data-target='#history-transfer__modal-window'>" +
                "<div>" +
                "<strong>"+ arr[i].name +"</strong><br>" +
                "<small>"+ arr[i].way + "</small> " +
                "</div> " +
                "<div> " +
                "<small>"+ arr[i].category +"</small> " +
                "<br> " +
                "<strong>"+ arr[i].price +" &#8381;</strong>" +
                "</div> " +
                "</div>");
        }
    }
}