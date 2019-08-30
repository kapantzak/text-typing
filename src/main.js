import "babel-polyfill";
import { defaultOptions } from "./helpers/optionsHelper";
import { lettersItterator, asyncLetter } from "./helpers/asyncGeneratorHelper";
import { getSpeed } from "./helpers/speedHelper";
import "./css/style.css";

export function textTyping(elem, options = {}) {
    
    const opt = Object.assign({}, defaultOptions, options);

    const cursor = document.createElement("span");
    cursor.classList.add("fake-cursor");
    cursor.innerHTML = opt.cursor;

    const mainTextHolder = document.createElement("span");
    mainTextHolder.classList.add("main-text-holder");
    
    return {    
        init: function() {           
            elem.appendChild(mainTextHolder) ;
            elem.appendChild(cursor);
            return this;
        },
        typeText: async function({ text, speed = opt.speed }) {
            if (text) {
                const speed = getSpeed(opt.speed);
                const sequence = lettersItterator(text, speed);
                for await (const letter of sequence) {                    
                    updateText(mainTextHolder, letter);
                }
            }
            const inst = this;
            return new Promise(resolve => resolve(inst));
        },
        delete: async function({ num, speed }) {
            mainTextHolder.innerHTML = mainTextHolder.innerHTML.split("").slice(num).join("");
            const inst = this;
            return new Promise(resolve => resolve(inst));
        },
        backspace: async function({ num, speed }) {
            const arr = mainTextHolder.innerHTML.split("");
            mainTextHolder.innerHTML = arr.slice(0, arr.length - num).join("");
            const inst = this;
            return new Promise(resolve => resolve(inst));
        }
    }
}

function updateText(mainTextHolder, newText) {
    mainTextHolder.innerHTML = mainTextHolder.innerHTML + newText;                    
}