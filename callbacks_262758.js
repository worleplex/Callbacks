/* Ejercicio 1: Temporizador con Callback
1. Crea una función principal que reciba un callback como parámetro.
2. Utiliza la función setTimeout para programar una espera de exactamente 3
segundos (3000 milisegundos).
3. Una vez transcurrido ese tiempo, ejecuta el callback para imprimir un mensaje de
éxito en la consola. */
// Julián Gerado Izaguirre Menchaca 262758
// bueno como pide, recibe un callback como parametro y se ejecuta hasta que pasen los 3 segundos
function mensajeExito(callback) {
    setTimeout(()=>{ // el settimeout solo programa algo para despues y se pone en ms entonces 3s = 3000ms
        // cuando pasan los 3 segundos se imprime el mensaje
        console.log(`todo ha salido bien`);
        // y justo despues se ejecuta el callback del param
        callback();
    }, 3000)
}

// prueba
mensajeExito(()=>{console.log("callback ejecutado")});

/* Ejercicio 2: Operaciones Matemáticas
4. Crea una función principal que reciba tres parámetros: dos valores numéricos y un
callback.
5. Diseña la lógica para que el callback se encargue de realizar una operación
matemática con esos dos números.
6. Asegúrate de que tu función principal sea capaz de manejar sumas, restas,
multiplicaciones y divisiones dependiendo del callback que se le pase al invocar.
7. Muestra el resultado final en la consola */

// la funcion no sabe que operacion hacer, eso lo decide el callback
// solo recibe los 2 numeros se los da al callback y muestra lo que regrese
function operacionMatematica(valor1, valor2, callback) {
    // aqui se ejecuta el callback con los 2 numeros y se guarda su resultado
    const resultado = callback(valor1,valor2);
    console.log(`Resultado: ${resultado}`) // muestro el resultado
}

// callbacks cada uno hace las operaciones que dice el ejercicio 2
// cada uno recibe 2 numeros (a y b) y regresa el resultado de su operacion
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    // no se puede dividir entee 0 asi que pongo la condicion
    if (b === 0) {
        return "no se puede dividir entre cero";
    }
    return a / b;
};

// pruebas de que tdbn
// solo cambia el callback que se pasa y cambia la operacion que se hace
operacionMatematica(10, 5, sumar);
operacionMatematica(10, 5, restar);
operacionMatematica(10, 5, multiplicar);
operacionMatematica(10, 5, dividir);

/*
    el ejercicio 3 lo hicimos en clase
*/
function cortarIngredientes(ingredientes, callback) {
    setTimeout(()=>{
        console.log(`Cortando: ${ingredientes}`);
        callback();
    }, 2500)
}

function cocinar(accion, callback) {
    setTimeout(()=>{
        console.log(`Cocinando: ${accion}`);
        callback();
    }, 3500)
}

function servirPlato(plato, callback) {
    console.log(`Listo puedes disfrutar de ${plato}`);
    callback();
}

function prepararReceta(plato, callback) {
    console.log(`Iniciamos la preparacion de ${plato}`);

    cortarIngredientes("vegetales", ()=>{
        cocinar("saltear", ()=>{
            cortarIngredientes("Pollo", ()=>{
                cocinar("freir", ()=> {
                    cocinar("mezclar todo", ()=> {
                        servirPlato(plato, callback);
                    })
                })
            })
        })
    })
}

prepararReceta("Pollo al wok", ()=>{console.log("Receta completa")})