export function toCamelCase(str: string): string {
    return str.split(/[-,_]/).map((word, index) => 
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join('');
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));