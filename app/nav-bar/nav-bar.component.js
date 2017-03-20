angular.module('navBar').component('navBar', {
    templateUrl: 'nav-bar/nav-bar.template.html',

    controller: ['$window', '$scope', '$location', function navBarController($window, $scope, $location) {
        var self = this;
        updateNavBar($location, self);

        $scope.$on('$routeChangeSuccess', function () {
            updateNavBar($location, self);
        });

        this.signOut = function () {
            console.log("BEFORE SIGNOUT:" + firebase.auth().currentUser.displayName);
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                console.log("SIGNED OUT");
                $window.location.href = '/login';
                $location.path('/login');
            }, function(error) {
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