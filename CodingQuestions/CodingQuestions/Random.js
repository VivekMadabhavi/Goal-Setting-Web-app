function generateRandomIntArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomInt);
    }
    return randomArray;
}

const randomNumbers = generateRandomIntArray(11, 1, 100);
console.log(randomNumbers); 
