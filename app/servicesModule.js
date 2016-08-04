define(['angular'],
    function(angular){
    'use strict';

var app = angular.module("servicesModule",[]);


app.factory('registerDetails', function () {
var regDetails ={'Email':'','Name':''};
return {
    setEmailData: function (data) {
        regDetails.Email = data;
    },
    getEmailData: function () {
        return regDetails.Email;
    },
    setNameData: function (data) {
        regDetails.Name = data;
    },
    getNameData: function () {
        return regDetails.Name;
    }
}
});

});