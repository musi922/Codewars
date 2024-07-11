export function get_age(age: string): number {
    let res = age.split(' ')
    return parseInt(res[0])
 }