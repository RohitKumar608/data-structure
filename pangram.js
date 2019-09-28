function pangrams(s) {
    let alphaBets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let i = 0; i < alphaBets.length; i++){
        if(!(s.includes(alphaBets[i])||s.includes(alphaBets[i].toUpperCase()))){
            return "not pangram"
        }
    }
    return "pangram";
}

console.log(pangrams("We promptly judged antique ivory buckles for the prize"));