function generateEvenNumbers(limit) {
    const evenNumbers = [];
    for (let i = 2; i <= limit; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}

console.log(generateEvenNumbers(20)); 
