/**
 * Created by katemrrr on 12.07.17.
 */

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Месяц', 'Доход', 'Расход'],
        ['Январь', 20000, 18000],
        ['Февраль', 25000, 23000],
        ['Март', 20000, 22000],
        ['Апрель', 23000, 23000]
    ]);

    var options = {
        chart: {
            title: 'Анализ доходов/расходов'
        },
        bars: 'vertical',
        vAxis: {format: 'decimal'},
        colors: ['#1b9e77', '#d95f02', '#7570b3']
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

