import "babel-polyfill";
import { defaultOptions, defaults } from "./helpers/defaultsHelper";
import { lettersIterator, actionIterator, asyncAction } from "./helpers/asyncGeneratorHelper";
import "./css/style.css";

export function textTyping(elem, options = {}) {
    
    const opt = Object.assign({}, defaultOptions, options);
    
    const items = [];

    const cursor = document.createElement("span");
    cursor.classList.add("fake-cursor");
    cursor.innerHTML = opt.cursor;
    elem.appendChild(cursor);
    
    return {
        typeText: async function(text, className = null, speed = opt.speed) {
            if (text) {    
                const section = newSection({
                    elem,
                    cursor,
                    className
                });
                items.push(section);
                const sequence = lettersIterator({
                    text,
                    speed
                });
                for await (const letter of sequence) {
                    section.innerHTML = section.innerHTML + letter;
                }
            }
            return this;
        },
        lineBreak: async function() {
            const br = document.createElement("br");
            items.push(br);            
            elem.insertBefore(br, cursor);
            return this;
        },
        injectHTML: async function(htmlElement, speed = opt.speed) {
            items.push(htmlElement);
            await asyncAction(speed);
            elem.insertBefore(htmlElement, cursor);
            return this;
        },
        delete: async function(iterations, speed = opt.speed) {
            let firstSection = items[0];
            const sequence = actionIterator({
                iterations,
                speed
            });
            this.moveCursor("start");
            for await (const iterationNum of sequence) {
                firstSection.innerHTML = firstSection.innerHTML.split("").slice(1).join("");
                if (firstSection.innerHTML.length === 0) {
                    firstSection.parentNode.removeChild(firstSection);
                    items.shift();
                    if (items.length > 0) {
                        while (!items[0].classList.contains(defaults.sectionClass)) {
                            const ff = items[0];
                            ff.parentNode.removeChild(ff);
                            items.shift();
                        }
                        firstSection = items[0];
                    } else {
                        break;
                    }
                }
            }            
            return this;
        },
        backspace: async function(iterations, speed = opt.speed) {
            let lastSection = items[items.length - 1];
            const sequence = actionIterator({
                iterations,
                speed
            });
            this.moveCursor("end");
            for await (const iterationNum of sequence) {                
                const arr = lastSection.innerHTML.split("");
                lastSection.innerHTML = arr.slice(0,arr.length - 1).join("");
                if (lastSection.innerHTML.length === 0) {
                    lastSection.parentNode.removeChild(lastSection);
                    items.pop();
                    if (items.length > 0) {
                        while (!items[items.length - 1].classList.contains(defaults.sectionClass)) {
                            const ll = items[items.length - 1];
                            ll.parentNode.removeChild(ll);
                            items.pop();
                        }
                        lastSection = items[items.length - 1];
                    } else {
                        break;
                    }
                }
            }            
            return this;
        },
        moveCursor: async function(point) {
            if (point === "start") {
                elem.insertBefore(cursor, items[0]);
            } else {
                elem.appendChild(cursor);
            }
            return this;
        },
        sleep: async function(speed) {            
            await asyncAction(speed);
            return this;
        }
    }
}

function newSection({ elem, cursor, className }) {
    const section = document.createElement("span");    
    section.classList.add(defaults.sectionClass);
    if (className) {
        className.split(" ")
        .map(x => x.trim())
        .forEach(c => {
            section.classList.add(c);
        });
    }
    elem.insertBefore(section, cursor);
    return section;
}