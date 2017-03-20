angular.module('viewWaterSourceReports').component('viewWaterSourceReports', {
    templateUrl: 'view-water-source-reports/view-water-source-reports.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewWaterSourceReportsController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.viewWaterSourceReportsRef = firebase.database().ref().child("water-source-reports");
        // self.sourceReports = $firebaseArray(self.viewWaterSourceReportsRef);
        self.sourceReportsArray = $firebaseArray(self.viewWaterSourceReportsRef);

        self.sourceReports = [];
        
        self.sourceReportsArray.$loaded(
            // function (data) {
            //     console.log(data)
            // },
            // function (error) {
            //     console.error("Error:", error);
            // }
        ).then(function(){
            angular.forEach(self.sourceReportsArray, function(report) {
                console.log(report);
                self.sourceReports.push(report)
            })
        });
    }]
});