/*
8.- Generar un álbum de fotos, usando bootstrap y cards para que se muestre una card por raza.
Cuando se haga click en el botón del card, se debe cambiar la imagen de ese card.

            <div class="col-2">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Raza</h5>                      
                      <!-- <a href="#" class="btn btn-primary">Cambiar imagen</a> -->
                      <button class="btn btn-primary">Cambiar imagen</button>
                    </div>
                  </div>
            </div>  

*/ 

function cargarCard(textoTitulo, urlFoto){
    //crear elementos
    let contenedor = document.createElement("div");
    let card = document.createElement("div");
    let imagen=document.createElement("img");
    let cardBody = document.createElement("div");
    let titulo=document.createElement("h5");
    let boton=document.createElement("button");
    //crear estructura
    cardBody.appendChild(titulo);
    cardBody.appendChild(boton);
    card.appendChild(imagen);
    card.appendChild(cardBody);
    contenedor.appendChild(card);
    //atributos y clases
    contenedor.className="col-2";
    card.className="card"
    card.style="width: 18rem;";
    imagen.className="card-img-top";
    imagen.setAttribute("src",urlFoto);
    cardBody.className="card-body";
    titulo.className="card-title";
    titulo.innerText=textoTitulo;
    boton.className="btn btn-primary";
    boton.innerText="Cambiar imagen";

    boton.addEventListener("click",async function(){
        let nuevaUrlFoto=await cargarFotoPerro(titulo.innerText);
        imagen.setAttribute("src",nuevaUrlFoto);
    })

    return contenedor;
}

async function cargarFotoPerro(raza){
    let url="https://dog.ceo/api/breed/" + raza + "/images/random";
    let respuesta = await fetch(url);
    let datos= await respuesta.json();
    //la foto viene en el campo message
    return datos.message;
}


async function cargarPerros(){    
      let respuesta = await fetch("https://dog.ceo/api/breeds/list/all");   //obtener respuesta de la API
      let datos =  await  respuesta.json();                                 //filtrar datos para obtener json
      let contenedor=document.querySelector("#contenedor");
      for(r in datos.message){
          //console.log(r);
         let urlFoto = await cargarFotoPerro(r);
          let nuevoCard = cargarCard(r,urlFoto);
          contenedor.appendChild(nuevoCard);
      }
}

//ejecutar código
cargarPerros(); 