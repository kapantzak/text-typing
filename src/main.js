import { defaultOptions } from "./helpers/optionsHelper";
import { lettersItterator } from "./helpers/asyncGeneratorHelper";
import { getSpeed } from "./helpers/speedHelper";

export default function textTyping(elem, options = {}) {
    
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
        startTyping: async function() {            
            if (text) {
                const speed = getSpeed(opt.speed);
                const sequence = lettersItterator(opt.text, speed);
                for await (const letter of sequence) {                    
                    mainTextHolder.innerHTML = mainTextHolder.innerHTML + letter;                    
                }
            }
            return this;
        }
    }
}