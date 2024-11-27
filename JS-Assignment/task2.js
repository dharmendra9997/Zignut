function sumStrNumb(str) {
    
    const numbers = str.split(',').map(num => parseFloat(num.trim()));
    
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum;
}

const str = "1.5, 2.3, 3.1, 4, 5.5";
const str2 = "1.3,2.5,3.9,4.6,5.1"
console.log(sumStrNumb(str));
console.log(sumStrNumb(str2));