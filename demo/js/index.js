let bouton = document.getElementById("bouton");
let menu = document.getElementById("menu");
let isTrue = false;

let moveMenu = () => {
    isTrue = !isTrue;
   if(isTrue){
       menu.style.left = "0";
   }else{
    menu.style.left = "-215px";
   }
}
bouton.addEventListener("click", moveMenu);