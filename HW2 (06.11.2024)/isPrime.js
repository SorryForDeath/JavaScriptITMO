function isPrime(number) {
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(number); i += 2){
        if (number % i === 0) return false;
    }
    return true;
}
const input = process.argv[2];
if (input < 2) {
    console.log("Число не подходит");
    return
}
let count = 0
for (let i = 3; i <= input; i += 2) {
    if (isPrime(i)) count++;
}
console.log(count + 1);