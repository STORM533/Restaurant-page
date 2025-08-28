import "./styles.css";
import cafeImage from "./assets/images/cafeImage.jpg"
function view(){
    
    const content = document.querySelector("#content");
    const texts = document.createElement("div");
    texts.classList.add("texts");
    const intro1 = document.createElement("p");
    const intro2 = document.createElement("p");
    const intro3 = document.createElement("p");
    const btn = document.createElement("button");
    btn.classList.add("order");
    btn.textContent = "ORDER";
    intro1.classList.add("intro1");
    intro2.classList.add("intro2");
    intro3.classList.add("intro3"); 
    texts.appendChild(intro1);
    texts.appendChild(intro2);
    texts.appendChild(intro3);
    texts.appendChild(btn);
    intro1.textContent = "Welcome onboard";
    intro2.textContent = "STORM KITCHEN";
    intro3.textContent = "Enjoy exquisite delicacies and drinks!!!";
    const image  = document.createElement("img");
    image.src = cafeImage;
    content.appendChild(image);
    content.appendChild(texts);
    image.style.width = "800px";
    image.style.height = "500px";
    image.style.borderRadius = "20px";
    image.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.5)";
}
export {view};