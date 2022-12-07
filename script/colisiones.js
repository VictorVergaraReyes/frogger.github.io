export default function checkCollision(element1, element2) {
    console.log("debug")
    // Obtener las posiciones de los elementos
    let $element1 = document.getElementById(`${element1}`);
    let $element2 = document.getElementById(`${element2}`);
    let rect1 = $element1.getBoundingClientRect();
    let rect2 = $element2.getBoundingClientRect();
  
    // Comprobar si los rectángulos de los elementos se están tocando o superponiendo
    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.height + rect1.y > rect2.y) {
      // Si se están tocando o superponiendo, devuelve true
      console.log("colision");
      //return true;
    }else{
      console.log("No colision")
    }
  
    // Si no se están tocando o superponiendo, devuelve false
    //return false;
    //console.log("NO colision");
}


// let element1 = document.getElementById("element1");
// let element2 = document.getElementById("element2");
  
// if (checkCollision(element1, element2)) {
//     console.log("Los elementos se están tocando o superponiendo");
//     }else {
//     console.log("Los elementos no se están tocando o superponiendo");
