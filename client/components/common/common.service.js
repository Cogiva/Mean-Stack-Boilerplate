'use strict';

angular.module('hapnoteApp')
  .service('common', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var pageTitle = "Hapnote.";
    var loading = false;
    var alerting = true;
    var alertTitle = "Alert.";
    var alertMessage = "Some message goes here...";
    var alertButton = true;
    var alertClass = "info";
    var alertTO = null;

    return {

    	setPageTitle: function(title){
    		pageTitle = title;
    	},

    	getPageTitle: function() {
    		return pageTitle;
    	},

        getLoading: function() {
            return loading;
        },

        setLoading: function(isLoading) {
            loading = isLoading;
        },

        toggleMenu: function(openIt) {
            if (typeof openIt === 'undefined') {
                $('#nav-trigger').prop("checked", !$('#nav-trigger').prop("checked"));    
            } else {
                $('#nav-trigger').prop("checked", openIt);                    
            }
        },

        dismissAlert: function() {
            alerting = false;
            alertTitle = "Alert.";
            alertMessage = "Nothing to see here...";
            alertClass = "info";
            alertButton = true;
            clearTimeout(alertTO);
        },

        setAlert: function(title, aClass, message, useTO, showButton) {
            alerting = true;
            alertTitle = title;
            alertMessage = message;
            alertClass = aClass;
            alertButton = showButton;
            if (useTO) {
                alertTO = setTimeout(function(){ dismissAlert(); }, 5000);
            }
        },

        getAlerting: function() {
            return alerting;            
        },

        getAlertTitle: function() {
            return alertTitle;            
        },
        
        getAlertMessage: function() {
            return alertMessage;            
        },
        
        getAlertClass: function() {
            return alertClass;            
        },
        
        getAlertButton: function() {
            return alertButton;            
        }
    }
});
