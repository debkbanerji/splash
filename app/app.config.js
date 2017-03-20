angular.module('splashApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/about', {
            template: '<about></about>'
        }).when('/edit-profile', {
            template: '<edit-profile></edit-profile>'
        }).when('/submit-water-source-report', {
            template: '<submit-water-source-report></submit-water-source-report>'
        }).when('/view-water-source-reports', {
            template: '<view-water-source-reports></view-water-source-reports>'
        }).when('/submit-water-quality-report', {
            template: '<submit-water-quality-report></submit-water-quality-report>'
        }).when('/view-water-quality-reports', {
            template: '<view-water-quality-reports></view-water-quality-reports>'
        }).when('/view-map', {
            template: '<view-map></view-map>'
        }).when('/generate-graph', {
            template: '<generate-graph></generate-graph>'
        }).when('/view-graph', {
            template: '<view-graph></view-graph>'
        }).when('/view-log', {
            template: '<view-log></view-log>'
        }).when('/login', {
            template: '<login></login>'
        }).otherwise('/login');


        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

]);