

function sumNumb(str) {
    let sum = 0;
    let number = '';

    for (let char of str) {
        if (!isNaN(char) && char !== ' ') { 
            number += char; 
        } else {
            if (number) {
                sum += parseInt(number); 
                number = ''; 
            }
        }
    }

    if (number) {
        sum += parseInt(number);
    }

    return sum;
}

console.log(sumNumb("fo3o8bar8cat2tc2"))
console.log(sumNumb("5he100wor1d8"))
