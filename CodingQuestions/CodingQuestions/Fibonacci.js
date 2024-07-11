function extendFibonacciSequence(initialSteps, additionalSteps) {
    if (initialSteps <= 0) return [0];
    if (initialSteps === 1) return [0, 1];

    let sequence = [0, 1];
    for (let i = 2; i < initialSteps; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    for (let i = 0; i < additionalSteps; i++) {
        let nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextValue);
    }

    return sequence;
}
const initialSteps = 10;
const additionalSteps = 5;
console.log(extendFibonacciSequence(initialSteps, additionalSteps));
