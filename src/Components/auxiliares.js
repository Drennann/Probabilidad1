function unPasoDespues(p){
    let value = Math.trunc(Math.random()*4);
    if(value == 0){
        p = [p[0] + 1, p[1]]
    }
    else if(value == 1){
        p = [p[0], p[1] + 1]
    }
    else if(value == 2){
        p = [p[0]-1, p[1]]
    }
    else{
        p = [p[0], p[1]-1]
    }
    return p;
}

function nPasosDespues(p, n){
    while(n > 0){
        p = unPasoDespues(p);
        n--;
    }
    return p;
}
function transformarDato(p){
    let res = {x: p[0], y: p[1]}
    return res;
}

export {nPasosDespues, transformarDato};