// Iteraciones pair programming
// variables
let variableSinValor;
let booleano1=true;
let booleano2=false;
const PI=3.14;
const TAU= PI*2;

// booleanos
let booleanoAnd = booleano1 && booleano2;
let booleanoNot = !booleano1;
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

//operadores
let incrementarDesp=2;
let resultadoDesp = incrementarDesp++;
let incrementarAntes=2;
let resultadoAntes= ++incrementarAntes;

//bucles
let contarHasta10_2=0;
for (let i = 0; i < 10; i++) {
    contarHasta10_2++;
}

let postI = 0;
let postJ = 0;
for (let i = 0; i <= 10; i++) {
    postI += postJ++;    
}

let sumaPares=0;
for (let i = 0; i < 10; i++){
    if (i % 2 === 0) {
         sumaPares = sumaPares + i;
     }
}


// Iteraciones proyecto individual
// variables
let variableValorNumerico=21;
const MiNombre=('laura');
const MiNumeroFav=25;

// booleanos
let booleanoOr= booleano1 || booleano2;
let booleanoMix1 = (booleano1 == (TAU/2 == PI)) || (variableValorNumerico>= MiNumeroFav);
let seisNoEsNueve = booleano1= 6!==9
let booleanoMix2 = ( variableValorNumerico > 0 ) || variableValorNumerico < (MiNumeroFav * TAU);

// operadores
let valorSuma =  MiNumeroFav + variableValorNumerico;
let valorResta=  MiNumeroFav - variableValorNumerico;
let valorMultiplicacion= MiNumeroFav * variableValorNumerico;
let valorDivision = MiNumeroFav / 3;

// bucles
let contarHasta10 = 0;
while( contarHasta10 < 10){
    contarHasta10 ++;
} 

let preI=0;
let preJ=0;
for(let i = 0; i <= 10; i++){
    preI += ++preJ;
}

let sumaImpares=0;
for (let i = 0; i < 10; i++){
    if ( i % 2 !== 0){
        sumaImpares = sumaImpares + i;
    }
}





