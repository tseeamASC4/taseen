
var search= prompt("What food do you want to check?")
var search=decodeURIComponent(search)
console.log(search)

$.ajax({
    url:'https://api.nutritionix.com/v1_1/search/'+search+'?results=0:5&fields=item_name,nf_calories&appId=cad0435e&appKey=370fd0ef7af399f2c1b11caa8915669f'
}).done(function(data){
        alert("Here are your results!");
       console.log(data);
       var name= data.hits[0].fields.item_name;
       var cals= data.hits[0].fields.nf_calories;
       var ss= data.hits[0].fields.nf_serving_size_qty
       $('body').append(`<h1>${name}</h1>`);
       $('body').append(`<h1>This item is ${cals} Calories</h1>`);
       $('body').append(`<h1>And the serving size is ${ss} servings</h1>`);
       if(cals >= 250){
           $('body').append(`<h1>THIS GONNA MAKE U SWOLLL</h1>`)
        }
        else{
            $('body').append(`<h1>Go EAT SUMN ELSE YU FOO</h1>`)
        }

       }
);

