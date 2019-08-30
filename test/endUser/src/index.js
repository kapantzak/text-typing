//import {textTyping} from "text-typing";
import {textTyping} from "../../../index";

document.addEventListener("DOMContentLoaded", () => {        
    init();
});

function init() {
    const h1 = document.getElementById("header_1");
    const h1Typing = textTyping(h1, {
        text: "Hello world",
        speed: [100, 500]
    }).init().typeText({
        text: "Hello World!!!"
    }).then(inst => {
        inst.delete(1).then(inst => {
            inst.backspace(2);
        });
    });
}