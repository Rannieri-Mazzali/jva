

/* math --> MATEMATICA  
pow (2,2) / potencia (2,2);  // 4 / 4
sqrt (16) / raizCuadrada (16);  // 4 / 4
abs (-5) / valorAbsoluto (-5);  // 5 / 5    
PI / PI;  // 3.141592653589793 / 3.141592653589793  
ceil (4.3) / techo (4.3);  // 5 / 5
floor (4.7) / piso (4.7);  // 4 / 4
round (4.5) / redondear (4.5);  // 5 / 5
max (1, 5, 3) / maximo (1, 5, 3);  // 5 / 5
min (1, 5, 3) / minimo (1, 5, 3);  // 1 / 1 
random () / aleatorio ();  // e.g., 0.123456789 / e.g., 0.987654321

// string --> CADENA    */

function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

const result = Math.floor(Math.random() * (max - min + 1)) + min;

const resultDiv = document.getElementById("result");

resultDiv.textContent = result;
resultDiv.classList.remove("hidden");


resultDiv.classList.remove("animate");
void resultDiv.offsetWidth;
resultDiv.classList.add("animate");


}