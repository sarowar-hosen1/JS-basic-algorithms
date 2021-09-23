function primeFactor(n){
    const factor = [];
    let divider = 2;

    while( n > 2){
        if (n % divider == 0){
            factor.push(divider);
            n = n / divider;
        }else{
            divider++;
        }
    }
    return factor;
}

const result = primeFactor(50);
console.log(result);