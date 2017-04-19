angular.module('navBar').component('navBar', {
    templateUrl: 'nav-bar/nav-bar.template.html',

    controller: ['$window', '$scope', '$location', '$firebaseObject', '$firebaseArray', function navBarController($window, $scope, $location, $firebaseObject, $firebaseArray) {
        var self = this;
        updateNavBar($location, self);
        var user = firebase.auth().currentUser;
        if (user) {
            self.userRef = firebase.database().ref().child("registered-users").child(user.uid);
            self.userObject = $firebaseObject(self.userRef);

            self.userObject.$loaded(
                function (x) {
                    var userType = self.userObject["user-type"];
                    hideElements(userType);
                }, function (error) {
                    console.error("Error:", error);
                });
        }

        $scope.$on('$routeChangeSuccess', function () {
            updateNavBar($location, self);
        });

        this.signOut = function () {
            console.log("BEFORE SIGNOUT:" + firebase.auth().currentUser.displayName);
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                console.log("SIGNED OUT");
                $window.location.href = '/login';
                $location.path('/login');
            }, function (error) {
                // An error happened.
            });
        }
    }

    ]
});

function updateNavBar(location, self) {
    self.path = location.path();
    self.url = location.url();
    self.editProfile = /edit-profile$/.test(self.path);
    self.submitWaterSourceReport = /submit-water-source-report$/.test(self.path);
    self.viewWaterSourceReports = /view-water-source-reports$/.test(self.path);
    self.submitWaterQualityReport = /submit-water-quality-report$/.test(self.path);
    self.viewWaterQualityReports = /view-water-quality-reports$/.test(self.path);
    self.viewMap = /view-map$/.test(self.path);
    self.generateGraph = /generate-graph$/.test(self.path);
    self.viewGraph = /view-graph$/.test(self.path);
    self.viewLog = /view-log$/.test(self.path);
    self.about = /about$/.test(self.path);
}

function hideElements(type) {
    console.log(type);
    if (type !== "ADMINISTRATOR") {
        var viewLogButton = document.getElementById("viewLogButton");
        viewLogButton.style.display = 'none';
    }
}