/**
 * Created by katemrrr on 12.07.17.
 */

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Март', 'Доход', 'Расход'],
        ['Апрель', 20000, 18000],
        ['Май', 25000, 23000],
        ['Июнь', 20000, 22000],
        ['Июль', 23000, 23000]
    ]);

    var options = {
        // chart: {
        //     title: 'Анализ доходов/расходов'
        // },
        bars: 'vertical',
        vAxis: {format: 'decimal'},
        colors: ['#ee364f', '#919191', '#7570b3']
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

