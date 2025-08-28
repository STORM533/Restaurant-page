function about(){
    const content = document.querySelector("#content");
    const para = document.createElement("p");
    para.classList.add("para");
    para.textContent = "At Storm Kitchen, food is straightforward: fresh ingredients, cooked with care, and served without shortcuts. We believe a good meal doesn’t need to be dressed up, it just needs to taste right. Our menu blends everyday comfort with a touch of variety, giving you something familiar yet worth coming back for. Whether you’re grabbing a quick bite or sitting down for a slow meal, we keep it simple, hearty, and consistent. Storm Kitchen is about good food, done honestly."
    content.appendChild(para);
}

export {about};