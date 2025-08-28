import menuImage from "./assets/images/menuImage.jpg"
function menu(){
    const content = document.querySelector("#content");
    const image = document.createElement("img");
    image.src = menuImage;
    image.classList.add("image");
    content.appendChild(image);
    
}
export {menu};