//import {textTyping} from "text-typing";
import {textTyping} from "../../../index";

document.addEventListener("DOMContentLoaded", () => {        
    setTimeout(() => {
        init();
    }, 1000);    
});

async function init() {
    const h1 = document.getElementById("header_1");
    const txt = textTyping(h1, {
        speed: [100, 500]
    });
    
    await txt.typeText("Helo");
    await txt.backspace(2);
    await txt.typeText("llo");
    await txt.lineBreak();
    await txt.typeText("text-typing", "custom-text text-lg");
    
    const html = document.createElement("span");
    html.innerHTML = "&#9995;";
    await txt.injectHTML(html);
    
}