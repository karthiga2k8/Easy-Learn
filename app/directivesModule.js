define(['angular'],
    function(angular){
    'use strict';


var app = angular.module("directivesModule",[]);


//Format Credit card number
app.
  directive('formatCodeNo', function () {

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
          var selectionStart = '';
          element.bind('blur keyup change', function(e) {
            console.log('formatCodeNo');  
            var target = e.srcElement;
             var next = target;

             console.log
            var currentLen = element.val().length;
            if (currentLen > parseInt(5)-1 && (!(e.keyCode == 8 || e.keyCode == 46))) {
                 document.getElementById(attrs.id).nextElementSibling.nextElementSibling.focus();
                 
    
            }
          });


          element.bind('keydown',function(event){
          getCursor(this,event)
          if((event.keyCode == 8 || event.keyCode == 46) && selectionStart === 1){
            console.log('deletion');
             event.preventDefault();
             scope.$apply(read);
            document.getElementById(attrs.id).previousElementSibling.previousElementSibling.focus();
          }
      });

           read(); 

      // Write data to the model
      function read() {
        var currentValue = element.val()
        var newValue = currentValue.substr(selectionStart,currentValue.length-1);
        console.log('newValue '+newValue);
             ctrl.$setViewValue(newValue);
             ctrl.$render();
      }
      // Specify how UI should be updated
      ctrl.$render = function() {
        element.val(ctrl.$viewValue);
        
      };
      function getCursor(currentElement,e){

        var selection = getCaretPosition(currentElement); /*console.log('selection.start-1 - '+selection.start);*/
        selectionStart = selection.start;
        console.log('cursor--'+selectionStart);
      }
      function getCaretPosition(control){
         var position = {};
         if (control.selectionStart && control.selectionEnd){
                position.start = control.selectionStart;
               position.end = control.selectionEnd;
         } else {
             var docObject = document.selection;
            if(docObject) 
            {
              var range = docObject.createRange();
            position.start = (range.offsetLeft - 1) / 7;
             position.end = position.start + (range.text.length);
           }
          }
    
        position.length = position.end - position.start;
          return position;
           }

     }
   }
  });


//Format to UPPERCASE 
app.
  directive('formatName', function () {

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
             ctrl.$parsers.push(function(viewValue) {
                return viewValue.toUpperCase();
            });

              // Listen for change events to enable binding
      element.bind('blur keyup change', function() {
        
            scope.$apply(read);
            
    
          });
      read(); 

      // Write data to the model
      function read() {
        var newValue = element.val().toUpperCase();
             ctrl.$setViewValue(newValue);
             ctrl.$render();
      }
      // Specify how UI should be updated
      ctrl.$render = function() {
        element.val(ctrl.$viewValue);
        
      };
             
        }
    };
});
//Directive to allow only number keys 
app.
  directive('formatNumber', function () {

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
              element.bind('keypress',function(event){
                console.log('keypress '+ event.charCode);
                //Allows Backspace ,DEL,LEFT,RIGHT arrows
          if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
            console.log('delete keys');
              return true;
          }
          else if ( event.charCode < 48 || event.charCode > 57 ) {
             console.log('event.charCode < 48');
              event.preventDefault();
              return false;
          }
          else {
            console.log('else case');
            return true;
          }
             });
        }
    };
});
//Directive to format phone number,currency
app.directive('format', function() {
  return {
    restrict : 'A', // only activate on element attribute
    require : '?ngModel', // get a hold of NgModelController
    link : function(scope, element, attrs, ngModel) {

        var selectionStart = '';

      if (!ngModel)
        return; // do nothing if no ng-model
      element.bind('keypress', function(event) {
          function validateNumber(){
          //Allows Backspace ,DEL,LEFT,RIGHT arrows
          if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39) {
              return true;
          }
          else if ( event.charCode < 48 || event.charCode > 57 ) {
              return false;
          }
          else {
            return true;
          }
        }
          if(attrs.format === 'currency' && !validateNumber()){
            scope.isNumeric = false;
            event.preventDefault();
          }

          else if(attrs.format === 'phone' && (!validateNumber()  || (element.val().length >13  && (!(event.keyCode == 8 || event.keyCode == 46 ||  event.keyCode == 37 || event.keyCode == 39))))){
            scope.isNumeric = false;
            event.preventDefault();
           }else{
            scope.isNumeric = true;

           }
          });
      
      // Listen for change events to enable binding
      element.bind('blur keyup change', function() {
        if( scope.isNumeric === true){
            scope.$apply(read);
            
        }
          });
      read(); // initialize

      // Write data to the model
      function read() {
        if(attrs.format === 'phone'){
          var newValue = phoneFormat(element.val());console.log(' phoneFormat oldvalue :'+element.val()+"--new value :"+newValue);
        }
        else if(attrs.format === 'currency'){
            var newValue = currencyFormat(element.val());console.log('currencyFormat oldvalue :'+element.val()+"--new value :"+newValue);
        }
        
        ngModel.$setViewValue(newValue);
        ngModel.$render();
      }
      function phoneFormat(number){
          number = number.replace(/[^0-9]/g, '');
        
         if(number.length > 6){
          //return number+'-';
          number = number.substr(0, 0) + '(' + number.substr(0); 
          number = number.substr(0, 4) + ') ' + number.substr(4); 
          return number.substr(0, 9) + '-' + number.substr(9); 
        }
        else if(number.length > 3){
          //return number+') ';
            number = number.substr(0, 0) + '(' + number.substr(0); 
          return number.substr(0, 4) + ') ' + number.substr(4);  
        }
        else if(selectionStart === 1 || (number.length <=3 && number.length >0)){
          return '('+number;
        }
        else
          return number;

        
      }
      function currencyFormat(number){
          number = number.replace(/[^0-9]/g, '');
         if(selectionStart === 1 || (number.length <=3 && number.length >0)){
          console.log('$format');
          return '$'+number;
        }
        else if(number.length >3){
          var seperatorCount = Math.round((number.length - 3)/2);
          var currentPos = '';
          for (var i=0;i<seperatorCount;i++){
            var numLen = number.length;
            if(i === 0){
                number = number.substr(0, numLen-3) + ',' + number.substr(numLen-3);
                currentPos = 4;
            }
            else{
              number = number.substr(0, numLen-(currentPos+2)) + ',' + number.substr(numLen-(currentPos+2));
              currentPos = currentPos + 3;
            }

          }
          return '$'+number;

        }
      }
      
      // Specify how UI should be updated
      ngModel.$render = function() {
        element.val(ngModel.$viewValue);
        
      };
      element.bind('keydown',function(e){
          getCursor(this,e)
      });
      //Get the cursor position
      function getCursor(currentElement,e){

        var selection = getCaretPosition(currentElement); /*console.log('selection.start-1 - '+selection.start);*/
        selectionStart = selection.start;
      }
      function getCaretPosition(control){
         var position = {};
         if (control.selectionStart && control.selectionEnd){
                position.start = control.selectionStart;
               position.end = control.selectionEnd;
         } else {
          var docObject = document.selection;
           if(docObject) 
            {
              var range = docObject.createRange();
            position.start = (range.offsetLeft - 1) / 7;
             position.end = position.start + (range.text.length);
           }
          }
    
        position.length = position.end - position.start;
          return position;
           }

    }
  };
});


});