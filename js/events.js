//define functions here
function getIt(){
  $("p").on('click', function(p){
    alert('Hey');
  });
};

function frameIt(){
  $('img').on('load', function(img){
    $("img").addClass("tasty");
  });
};

function pressIt(){
  $('form').on('keydown', function(key){
    if (key.which==71) {
      alert();
    }
  });
}

function submitIt(){
  $('form').on('submit',function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
   $("p");
   $("img");
   $("key");
   $("submit");
// call functions here

});
