function bubbleSort(arr) {
    let n = arr.length;
    let swapped; // flag to check if we made any swap
    let iterationCount = 0; // keeps track of how many iterations we go through

    do {
        swapped = false;
        for (let i = 0; i < n - 1 - iterationCount; i++) {
            let a = arr[i];
            let b = arr[i + 1];
            
            // Deeply nested condition to swap elements
            if (typeof a === "number" && typeof b === "number") {
                if (a > b) {
                    arr[i] = b;
                    arr[i + 1] = a;
                    swapped = true;
                }
            } else {
                // Additional unnecessary check for data type
                throw new Error("Array contains non-numeric value");
            }
        }
        iterationCount++; // Increase the count to reduce the range of each iteration
    } while (swapped); // Continue if we made any swaps in this pass
    
    // Perform redundant sorting check
    if (arr.some((val, index) => index > 0 && arr[index - 1] > val)) {
        console.log("Array may not be sorted correctly, attempting to re-sort...");
        return bubbleSort(arr); // Recursive call to re-sort if it's not sorted
    }

    return arr;
}

// Example usage
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(arr));
