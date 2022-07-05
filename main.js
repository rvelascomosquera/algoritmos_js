/* Verificar en la base de datos de usuarios si el nombre del usuario se encuentra registrado,
 si no se encuentra registrado permitir realizar el registro del nombre usuario,
 teniendo encuenta el siguiente protocolo 
 1. Nombre de usuario debe ser superior a 8 caracteres
 2. La primera letra del nombre del usuario debe ser en mayuscula
 3. El primer caracter no puede ser numerico
 4. El ultimo caracter del nombre de usuario no puede ser numerico*/

let dbUsers = [
  'EduardoVelasco',
  'Pepitoperez',
  'JuanSanchez',
  'Carlosmario98z',
]

function registro() {
  let userName = document.getElementById('userName').value;

  let lastLetter = userName.charAt(userName.length-1);

  if (dbUsers.includes(userName)){
    alert('El nombre de usuario ya existe');
  }else {
    if(userName.length>=8){
      if(userName.charCodeAt(0)>=65 && userName.charCodeAt(0)<=90) {
        if(isNaN(lastLetter)) {
          dbUsers.push(userName);
          alert('El usuario se ha registrado correctamente');  
        } else {
          alert('Recuerde que el nombre de usuario no puede empezar ni terminar con numeros');
        }
      } else {
        alert('Recuerde que el nombre de usuario no puede iniciar con números ni letra en minúsculas');
      }
    } else {
      alert('El nombre de usuario debe tener como minimo 8 caracteres');
    }
  }  
}

