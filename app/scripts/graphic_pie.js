/**
 * Created by katemrrr on 12.07.17.
 */

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Транспорт', 120],
        ['Еда', 300],
        ['Лекартсва',  150],
        ['Развлечения', 200],
        ['Услуги', 250]
    ]);

    var options = {
        title: 'My Daily Activities'
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));

    chart.draw(data, options);
}