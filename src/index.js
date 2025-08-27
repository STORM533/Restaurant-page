import "./styles.css";
console.log("hello");
import cafeImage from "./assets/images/cafeImage.jpg"
const image  = document.createElement("img");
image.src = cafeImage;
document.body.appendChild(image);
image.style.width = "200px";
image.style.height = "200px";