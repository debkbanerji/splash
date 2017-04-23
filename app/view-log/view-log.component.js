angular.module('viewLog').component('viewLog', {
    templateUrl: 'view-log/view-log.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewLogController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.viewLogRef = firebase.database().ref().child("security-log");
        self.databaseLogs = $firebaseArray(self.viewLogRef);

        self.logs = [];

        self.databaseLogs.$loaded(
            function(x) {
                // console.log(self.databaseLogs);
                for (var i = 0; i < self.databaseLogs.length; i++) {
                    item = self.databaseLogs[i];
                    // console.log(item);
                    date = new Date(item["time"]);
                    // console.log(date.toUTCString());
                    self.logs.push({
                        "time" : date.toUTCString(),
                        "type" : item["type"],
                        "details" : item["details"],
                        "uid" : item["user-uid"]
                        }
                    )
                }
                // console.log(self.logs);
            }, function(error) {
                console.error("Error:", error);
            });
    }]
});