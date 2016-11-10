   angular.module('rc', [])
       .controller('DataController', ['$scope', function($scope) {
           $scope.message = "Hello World";
           // Initialize Firebase
           var config = {
               apiKey: "AIzaSyD2bDGddfvtBx1IPC2HGmQttksiBzoM1-o",
               authDomain: "rclogdata.firebaseapp.com",
               databaseURL: "https://rclogdata.firebaseio.com",
               storageBucket: "rclogdata.appspot.com",
               messagingSenderId: "411289675891"
           };
           firebase.initializeApp(config);
           var ref = firebase.database().ref();
           ref.child("booger").set({
           	size: "big",
           	texture: "crusty"
           })
           
       }]);