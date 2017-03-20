angular.module('editProfile').component('editProfile', {
    templateUrl: 'edit-profile/edit-profile.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function editProfileController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.editProfileRef = firebase.database().ref().child("users").child(user.uid).child("edit-profile");
    }]
});