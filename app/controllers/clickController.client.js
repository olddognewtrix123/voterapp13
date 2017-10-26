'use strict';

//const appUser = require("/models.appUser");

(function () {


   var newOptButton = document.querySelector('.btn-addOpt');
   var deleteOptButton = document.querySelector('.btn-deleteOpt');
   var createPoll = document.querySelector('.btn-createPoll');
   var addButton = document.querySelector('.btn-add');
   var deleteButton = document.querySelector('.btn-delete');
   var clickNbr = document.querySelector('#click-nbr');
   var apiUrl = appUrl + '/api/:id/clicks';
   
   //https://stackoverflow.com/questions/14853779/adding-input-elements-dynamically-to-form
   
// adds a new option on the newPoll page (Add Option button)
  newOptButton.addEventListener('click', function addFields(){
console.log('hello');
      //counts the number of child nodes that exist
      var x = document.getElementById("container").childElementCount;
      // Container <div> where dynamic content will be placed
      var container = document.getElementById("container");

       if(x===0){
               var y = x+3
       }
       else{var z= x/2; var y = z+3;}
            
                // Create an <input> element, set its type and name attributes
                var input = document.createElement("input");
                input.type = "text";
                input.value = "Option " + y;
               //input.value = x;
                input.id = "Option" + y;
                container.appendChild(input);
                // Append a line break 
                container.appendChild(document.createElement("br"));

        });
 
 // deletes the last option on the newPolls page  (Delete Last Option button)     
   deleteOptButton.addEventListener('click', function(){
       console.log('Well there you have it!');
      var x = document.getElementById("container").childElementCount;
            // Container <div> where dynamic content will be placed
            var container = document.getElementById("container");
            // Clears the last option that was entered 
              container.removeChild(container.lastChild);
              container.removeChild(container.lastChild);
            //}
        });
        
// saves new poll to the database (Finish and Create button)
//createPoll.addEventListener('click', function(){ 
    
 //  const appUser = require("./models.appUser");
 //  console.log('so far so good!');
//            var newpoll = new appUser({
//               userName: 'frank',
//               password: '1234'
//            });
//            // Mongoose method to save to the db using the appUser schema
 //           newpoll.save(function (err) {
 // if (err) console.log("Got error saving to db");
  // saved!
//});
        });


   function updateClickCount (data) {
      var clicksObject = JSON.parse(data);
      clickNbr.innerHTML = clicksObject.clicks;
   }



// this is code leftover from the original Clementine template. I am not really using it for the voter app.
   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));

   addButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
      });

   }, false);

   deleteButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
      });

   }, false);

})();
