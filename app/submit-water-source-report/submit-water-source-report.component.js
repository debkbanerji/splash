angular.module('submitWaterSourceReport').component('submitWaterSourceReport', {
    templateUrl: 'submit-water-source-report/submit-water-source-report.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function submitWaterSourceReportController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.waterSourceReportsRef = firebase.database().ref().child("water-source-reports");
        self.totalSourceReportsRef = firebase.database().ref().child("total-source-reports");
        self.waterTypes = ["Bottled", "Well", "Stream", "Lake", "Other"];
        self.waterConditions = ["Waste", "Treatable-Clear", "Treatable-Muddy", "Potable"];
        self.selectedType = "Bottled";
        self.selectedCondition = "Waste";
        self.reportNumber = Date.now();

        self.waterSourceReportsObject = $firebaseArray(self.waterSourceReportsRef);
        self.totalSourceReportsObject = $firebaseObject(self.totalSourceReportsRef);
        self.latitude = 33.7773767;
        self.longitude = -84.3973503;

        self.submitReport = function () {
            totalReports = self.totalSourceReportsObject.$value;
            self.totalSourceReportsRef.set(totalReports);
            console.log(totalReports);
            var report = {
                "date-time": Date.now(),
                "latitude": self.latitude,
                "longitude": self.longitude,
                "report-id": totalReports + 1,
                "reporter-name": user.displayName,
                "reporter-uid": user.uid,
                "water-condition": self.selectedCondition.toUpperCase().replace("-","_"),
                "water-type": self.selectedType.toUpperCase().replace("-","_")
            };
            self.waterSourceReportsObject.$add(report);
            self.totalSourceReportsRef.set(totalReports + 1)
        }
    }]
});