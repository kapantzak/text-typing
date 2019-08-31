//import {textTyping} from "text-typing";
import {textTyping} from "../../../index";

document.addEventListener("DOMContentLoaded", () => {        
    init();
});

async function init() {
    const h1 = document.getElementById("header_1");
    const txt = textTyping(h1, {
        speed: [100, 500]
    });
    
    await txt.typeText("Hello");
    await txt.lineBreak();
    await txt.typeText("world");
    await txt.delete(2);
    await txt.backspace(2, 1000);
}