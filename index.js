// mensaje por consola

/*var numero =1;
var texto = 1;
//funcion guardada en una variable
var test = function(){
    console.log('estoy dentro de la funcion');
};
 test();


var arreglo = [100, 80,'prueba', true, false, 123];
console.log(arreglo);
//arreglo.push(100); agregar una celda mas a final del arreglo
arreglo[0] = 200;
console.log(arreglo);
console.log('test fail.'); */

var objetoPersona = {
    name : 'Juanito Perez',
    lastname : 'Cotaco Perez',
    birthdate :'1980-01-01',
    cute : false,
    children :2,
    printRut: function(){
        console.log('17.796.270-8');
    }
};

var objetoPersona2 = {
    name : 'Juanito leonel',
    lastname : 'Cotaco morales',
    birthdate :'1980-02-01',
    cute : false,
    children :2,
    printRut: function(){
        console.log('17.270.270-8');
    }
};

var people = [objetoPersona, objetoPersona2];
console.log(people);
//console.log(objetoPersona);
// console.log(`${persona.lastname} ${persona.name}`);

// for (let i = 0; i < people.length; i++) {
//     const persona = people[i];
//     console.log(persona.lastname);  
// }

people.forEach(persona =>{
 console.log(persona.lastname);
});
