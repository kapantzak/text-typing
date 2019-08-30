export async function* lettersItterator(text, speed) {    
    const letters = text.split("");
    const s = speed || 100;        
    while (letters.length > 0) {        
        const newLetter = await asyncLetter(letters.splice(0,1)[0], s);
        yield newLetter;
    }    
}

export function asyncLetter(letter, time) {
    return new Promise(resolve => {
        setTimeout(() => {            
            resolve(letter);
        }, time);
    });
}