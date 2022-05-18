function clase(nombre, numero){
    this.nombre=nombre;
    this.numero=numero;
    this.fun=function(palabra){
        console.log("funcion");
    }
}

let a= new clase("denis",1);
let b= new clase("Leo",2);

function hijo(nombre, numero, edad){
    this.padre=clase;
    this.padre(nombre,numero);
    this.edad=edad;
    this.fun=function(palabra){
        console.log("dos");
    }
}

hijo.prototype=new clase();
hijo.prototype.constructor=hijo;
hijo.prototype.fun2=function(){
    console.log("fun2");
}

let c= new hijo("yo",1,2);
let d= new hijo("tu",3,4);
console.log(b);
console.log(c);
console.log(d);
c.fun("fgddf");
console.log(c.__proto__);