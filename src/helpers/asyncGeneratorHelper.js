import { getSpeed } from "./speedHelper";

export async function* lettersIterator({ text, speed }) {    
    const letters = text.split("");    
    while (letters.length > 0) {        
        const newLetter = await asyncLetter({
            letter: letters.splice(0,1)[0],
            speed
        });
        yield newLetter;
    }    
}

function asyncLetter({ letter, speed }) {    
    const s = getSpeed(speed);
    return new Promise(resolve => {
        setTimeout(() => {            
            resolve(letter);
        }, s);
    });
}

export async function* actionIterator({ iterations, speed }) {    
    while (iterations > 0) {
        await asyncAction(speed);
        yield iterations--;
    }    
}

export function asyncAction(speed) {    
    const s = getSpeed(speed);    
    return new Promise(resolve => {
        setTimeout(() => {            
            resolve();
        }, s);
    });
}