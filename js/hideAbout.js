$(document).ready(function(){

$("#aboutMe").hide();

$("#showAbout").click(function(){
$("#aboutMe").show();
});

$("#hideAbout").click(function(){
$("#aboutMe").hide();
});


$("#contactForm").submit(function(event){
  event.preventDefault();

var name =  $("input[name='personName']").val();
  var email =  $("input[name='personEmail']").val();
  var subject =  $("input[name='personSubject']").val();
  var message =  $("textarea").val();


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.msg91.com/api/sendhttp.php?sender=MSGIND&route=4&mobiles=919536336639&authkey=195354ADqhVeq5rCfn5a6c587b&encrypt=&country=91&message=" +name+" having mail id "+email+"has message for u  "+message +"",
  "method": "GET",
  "headers": {}
};
 
 alert("Thanku " +name+ " for contacting . i will get back to u soon...have a great Day");

$.ajax('http://api.msg91.com/api/sendhttp.php?sender=MSGIND&route=4&mobiles=919536336639&authkey=195354ADqhVeq5rCfn5a6c587b&encrypt=&country=91&message=' + name+" from "+email+" saying :    "+message ,{

success:function(response){

console.log(name+email+message+subject);
console.log(response);
alert("Thanku " +name+ " for contacting . i will get back to u soon...have a great Day");
},

error : function(request,errorType,errorMessage){
console.log(request);
 } 

   
 }); // end of AJAX
$('#contactForm input[type="text"]').val('');
$('#contactForm input[type="email"]').val('');
$('#contactForm textarea').val('');
 }); // end of submit click



  

}); // end of document









