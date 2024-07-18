export function printerError(s: string): string {
    const letters = s.match(/[n-z]/g)
    if (letters) {
        const tot = letters.length 
        return `${tot}/${s.length}`
    }
    return `0/${s.length}`
  }
  console.log(printerError("aaabbbbhaijjjm"));
  console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
  
