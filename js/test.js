$(document).ready(function(){
        console.log("ok");
})

 $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
                function(data) {
                console.log(data)
                });
 $.getJSON("https://pokeapi.co/api/v2/pokemon/ditto",function(data){
                console.log(data);
                console.log(data.name);
                });
$.getJSON("https://api.chucknorris.io/jokes/random",function(data){        
        console.log(data);
        });

        $.getJSON("https://api.thecatapi.com/v1/images/search",function(data){
        console.log(data);
        });

        $.getJSON("https://restcountries.com/v3.1/name/peru",function(data){
                console.log(data);
                });




class gato{
        constructor(nombre,raza,come){
                this.nombre=nombre;
                this.raza=raza;
                this.come=come;
        }
 }

 let gato1= new gato("neko","angora",["pan","pescado","carne"]);
 let gato2= new gato("nek1","pelo corto",["pan","pescado","carne"]);
 let arreglo=[gato1,gato2];
 let jsonStr= JSON.stringify(arreglo);

 console.log(typeof(jsonStr));
 console.log(jsonStr);

 let JsonObj=JSON.parse(jsonStr);
 
 console.log(typeof(JsonObj));
 console.log((JsonObj));

 



