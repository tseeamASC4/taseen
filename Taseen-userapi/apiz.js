

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data)
  
  {
  // reference
var name= data.results[0].name.title+" " + data.results[0].name.first + " " +data.results[0].name.last;
var gender= data.results[0].gender;
var image= data.results[0].picture.large;
var address = data.results[0].location.street +" "+ data.results[0].location.city+","+data.results[0].location.state;
console.log(image);
console.log(data.results[0].name.title)
$("body").append('<h1> YOUR NAME: '+ name  + '</h1>')
$("body").append('<h1> YOUR GENDER: '+ gender  + '</h1>')
$("body").append('<img src='+image+'>')
$("body").append('<h1> YOUR ADRESS: '+ address  + '</h1>')
} 

});