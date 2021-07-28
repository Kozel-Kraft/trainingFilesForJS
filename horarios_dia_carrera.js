// Carrera Anual.

/* 
Kozel-kraft:
	-> Este código se encarga de asignarle un número aleatorio a un corredor y asignarle
	un horario de carrera.

	a) si es mayor de 18 años y tuvo pre-registro:
		-> Numero aleatorio+1000
		-> Horario de carrera para las 9:30 a.m

	b) si es mayor de 18 años pero no tuvo pre-registro:
		-> Numero aleatorio
		-> Horario de carrera: 11:00 a.m

	c) si es menor de 18 años (independientemente de su registro)
		-> Numero aleatorio
		-> Horario de carrera: 12:30 p.m

	d) Si tiene exactamente 18 años:
		-> Que pase al escritorio de registro para evaluar su situación.
*/

//assignes race number
let numeroCorredor = Math.floor(Math.random() * 1000);

//var that indicates whether a runner registered early or not:
const registeredEarly=true; 

const age=18; //var for runners age

//control flow checks whether the runner is adult AND registered earyl
if(age>18&& registeredEarly){
  //responsabilidad limitada
  numeroCorredor+=1000;
}

//Control flow checks age and registration time to determine race
if(age>18&& registeredEarly){
  console.log(`Your race is at 9:30 a.m, This is your race number: ${numeroCorredor}`);
}else if(age>18&&! registeredEarly){
  console.log(`Your race is at 11:00 a.m, This is your race number: ${numeroCorredor}`);
}

if(age< 18){
  console.log(`Your race is at 12:30 a.m, This is your race number: ${numeroCorredor}`);
}else{
  console.log("Go to registration desk, please.")
}

