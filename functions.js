function sum (a, b){
    return a + b;
}

function mult (a, b){
    return a * b;
}

function power (base, exponent) {
    let result = 1;
    for(let i = 0; i < exponent; ++i) {
        result *= base;
    }
    return result
}

function isAdult(age){
    return age < 0 ? undefined : age >= 21;
}


module.exports = {sum, mult, power, isAdult};      // export



