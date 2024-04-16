function longestConsec(strarr, k) {
    // Edge case: If k is not valid or array is too small, return an empty string
    if (k <= 0 || k > strarr.length) {
        return "";
    }
    
    let longest = "";
    // Loop to consider each starting index possible with k consecutive strings
    for (let i = 0; i <= strarr.length - k; i++) {
        // Build the concatenated string from i to i+k-1
        let currentConcat = "";
        for (let j = i; j < i + k; j++) {
            currentConcat += strarr[j];
        }
        // If the current concatenated string is longer than the longest found so far,
        // update the longest
        if (currentConcat.length > longest.length) {
            longest = currentConcat;
        }
    }
    
    return longest;
}

// Example usage:
const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const k = 2;
console.log(longestConsec(strarr, k));  // Outputs: "folingtrashy"
