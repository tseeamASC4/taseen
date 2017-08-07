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
var nationality = data.results[0].nat;
$(".info").append('<h1> YOUR NAME: '+ name  + '</h1>')
$(".info").append('<h1> YOUR GENDER: '+ gender  + '</h1>')
$(".info").append('<img src='+image+'>')
$(".info").append('<h1> YOUR ADRESS: '+ address  + '</h1>')


$.ajax({
url: 'https://restcountries.eu/rest/v2/alpha?codes=' + nationality,
dataType: 'json',
success: function(data){
    $('body').append('<img src=' + data[0].flag + '>')
}


}
)}});