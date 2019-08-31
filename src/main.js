import "babel-polyfill";
import { defaultOptions } from "./helpers/optionsHelper";
import { lettersIterator, actionIterator } from "./helpers/asyncGeneratorHelper";
import "./css/style.css";

export function textTyping(elem, options = {}) {
    
    const opt = Object.assign({}, defaultOptions, options);

    const rows = [];

    const cursor = document.createElement("span");
    cursor.classList.add("fake-cursor");
    cursor.innerHTML = opt.cursor;
    elem.appendChild(cursor);
    
    return {
        typeText: async function(text, speed = opt.speed) {
            if (text) {    
                const row = newRow({
                    elem,
                    cursor
                });
                rows.push(row);
                const sequence = lettersIterator({
                    text,
                    speed
                });
                for await (const letter of sequence) {
                    row.innerHTML = row.innerHTML + letter;
                }
            }
            const inst = this;
            return new Promise(resolve => resolve(inst));
        },
        lineBreak: async function() {
            const lastRow = rows[rows.length - 1];
            const br = document.createElement("br");
            elem.insertBefore(br, lastRow.nextSibling);
            const inst = this;
            return new Promise(resolve => resolve(inst));
        },
        delete: async function(iterations, speed = opt.speed) {
            const firstRow = rows[0];
            const sequence = actionIterator({
                iterations,
                speed
            });
            this.moveCursor("start");
            for await (const iterationNum of sequence) {
                firstRow.innerHTML = firstRow.innerHTML.split("").slice(1).join("");
            }
            const inst = this;
            return new Promise(resolve => resolve(inst));
        },
        backspace: async function(iterations, speed = opt.speed) {
            const lastRow = rows[rows.length - 1];
            const sequence = actionIterator({
                iterations,
                speed
            });
            this.moveCursor("end");
            for await (const iterationNum of sequence) {
                const arr = lastRow.innerHTML.split("");
                lastRow.innerHTML = arr.slice(0,arr.length - 1).join("");
            }
            const inst = this;
            return new Promise(resolve => resolve(inst));
        },
        moveCursor: async function(point) {
            if (point === "start") {
                elem.insertBefore(cursor, rows[0]);
            } else {
                elem.appendChild(cursor);
            }
            const inst = this;
            return new Promise(resolve => resolve(inst));
        }
    }
}

function newRow({ elem, cursor }) {
    const row = document.createElement("span");
    row.classList.add("tt-row");
    elem.insertBefore(row, cursor);
    return row;
}