export function reverseWords(str: string): string {
  return str.split(' ').map(ele => ele.split('').reverse().join('')).join(' ');
}