export function comp(a1: number[] | null, a2: number[] | null): boolean {
    if (a2 === null || a1=== null) return false
    if (a1.length !== a2.length) return false
    for (let i = 0; i < a1.length; i++) {
        if (!a2.includes(a1[i] * a1[i])) {
            return false   
        } 
    }
    return true
  }
  