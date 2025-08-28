import {view} from "./home.js"
import {about} from "./about.js"
import {menu} from "./menu.js"
import "./styles.css";
function tabbing (){
    view();
    const btn1 = document.querySelector("#about");
    const btn2 = document.querySelector("#home");
    const btn3 = document.querySelector("#menu");
    btn1.addEventListener("click" , () =>{
        const content = document.querySelector("#content");
        content.innerHTML = "";
        about();
    });
    btn2.addEventListener("click" , () =>{
        const content = document.querySelector("#content");
        content.innerHTML = "";
        view();
    });
    btn3.addEventListener("click" , () =>{
        const content = document.querySelector("#content");
        content.innerHTML = "";
        menu();
    });
    
}
tabbing();




