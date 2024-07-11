function findPrimes(limit) {
    
    const sieve = new Array(limit + 1).fill(true);

    sieve[0] = sieve[1] = false;

    
    for (let i = 2; i <= Math.sqrt(limit); i++) {
       
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }

    
    return sieve.reduce((primes, isPrime, index) => {
        if (isPrime) primes.push(index);
        return primes;
    }, []);
}


const primes = findPrimes(100);
console.log(primes);
