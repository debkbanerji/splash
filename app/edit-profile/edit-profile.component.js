angular.module('editProfile').component('editProfile', {
    templateUrl: 'edit-profile/edit-profile.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function editProfileController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        self.user = firebase.auth().currentUser;
        self.profileRef = firebase.database().ref().child("registered-users").child(self.user.uid);
        self.profileObject = $firebaseObject(self.profileRef);
        self.userTypes = ["Contributor", "Worker", "Manager", "Administrator"];
        self.selectedType = "Contributor";
        self.email = self.user.email;
        self.displayName = self.user.displayName;
        self.homeAddress = "";

        self.submitResultText = document.getElementById("submit-result-text");

        self.profileObject.$loaded(
            function (data) {
                if (data.$value !== null) {
                    self.email = data["email-address"];
                    self.displayName = data["display-name"];
                    self.homeAddress = data["home-address"];
                    // self.selectedType = data["user-type"];
                    // console.log(self.selectedType);
                    // var updateForm = document.getElementById("update-form");
                    var spinner = document.getElementById("select-type");
                    spinner.parentNode.removeChild(spinner);
                    var spinnerText = document.getElementById("select-type-text");
                    spinnerText.parentNode.removeChild(spinnerText);
                }
            },
            function (error) {
                console.error("Error:", error);
            }
        );

        self.updateProfile = function () {
            if (self.email && self.displayName && self.homeAddress) {
                var spinner = document.getElementById("select-type");
                var spinnerText = document.getElementById("select-type-text");
                if (spinner && spinnerText) {
                    spinner.parentNode.removeChild(spinner);
                    spinnerText.parentNode.removeChild(spinnerText);
                }
                var registeredUser = {
                    "email-address": self.email,
                    "display-name": self.displayName,
                    "home-address": self.homeAddress,
                    "user-type": self.selectedType.toUpperCase().replace("-", "_")
                };
                self.profileRef.set(registeredUser);
                self.submitResultText.innerHTML = "Updated Profile";
            } else {
                self.submitResultText.innerHTML = "Please Fill out All Required Fields";
            }
        }
    }]
});