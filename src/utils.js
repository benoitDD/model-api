export function sum(a, b){
    return a + b
}

export function mul(a, b){
    return a * b
}

export function div(a, b){
    if(b === 0){
        throw Error('The second argument musn\'t be to 0' )
    }
    return a / b
}