angular.module('generateGraph').component('generateGraph', {
    templateUrl: 'generate-graph/generate-graph.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function generateGraphController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        //var plotly = require('plotly')("AliceCZheng", "J9RukuNPkTxVefx0poBs");
        self.reportsRef = firebase.database().ref().child("water-quality-reports");
        self.reports = $firebaseArray(self.reportsRef);

        google.charts.load('current', {packages: ['corechart', 'line']});
        // google.charts.setOnLoadCallback(drawBasic);

        // self.yearList = ["2015", "2016", "2017"];
        self.virusOrContaminantList = ["Virus", "Contaminant"];

        self.selectedParameter = "Virus";
        self.startDate = (new Date);
        self.endDate = (new Date);
        // self.locationList = ["Atlanta", "Decatur"];

        function drawVirus() {

            var data = new google.visualization.DataTable();
            data.addColumn('number', 'X');
            data.addColumn('number', 'PPM');


            var fixedParameter = self.selectedParameter.toLocaleLowerCase() + "-ppm";
            var rows = [];

            for (var i = 0; i < self.reports.length; i++) {
                report = self.reports[i];
                if (report["date-time"] >= self.startDate.getTime() && report["date-time"] <= self.endDate.getTime()) {
                    rows.push([(report["date-time"] - self.startDate.getTime()) / (6.048e+8), report[fixedParameter]]);
                }
            }
            // console.log(rows);
            data.addRows(rows);

            var options = {
                hAxis: {
                    title: 'Week'
                },
                vAxis: {
                    title: self.selectedParameter + ' PPM'
                }
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

            chart.draw(data, options);
            chart.draw(data, options);
        }

        self.generate = function () {
            // console.log("SUBMIIIT");
            google.charts.setOnLoadCallback(drawVirus());
        }
    }]

});