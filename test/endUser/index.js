import "../../bundle.js";

document.addEventListener("DOMContentLoaded", () => {        
    init();
});

function init() {
    const h1 = document.getElementById("header_1");
    textTyping(h1, {
        text: "Hello world"
    }).init().startTyping();
}