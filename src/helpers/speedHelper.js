export function getSpeed(speedOption) {
    if (Array.isArray(speedOption) && speedOption.length === 2) {
        const sp0 = speedOption[0];
        const sp1 = speedOption[1];
        if (sp0 !== null && sp1 !== null) {
            const min = Number(sp0);
            const max = Number(sp1);
            if (!isNaN(min) && !isNaN(max))
                return (Math.random() * (max - min)) + min;
        }        
    }  
    
    const n = Number(speedOption);
    if (!isNaN(n))
        return n;

    return 0;
}