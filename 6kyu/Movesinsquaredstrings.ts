export function rot(s: string): string {
    return s.split("\n").map(el => el.split('').reverse().join('')).reverse().join('\n');
}

export function selfieAndRot(s: string): string {
    const initial = s.split("\n").map(el => el + ".".repeat(el.length)).join("\n");
    const rotated = rot(s).split("\n").map(el => ".".repeat(el.length) + el).join("\n");
    return initial + "\n" + rotated;
}

export function oper(fn: (s: string) => string, s: string): string {
    return fn(s);
}
  console.log(oper(selfieAndRot,"abcd\nefgh\nijkl\nmnop"));
  console.log(oper(rot,"abcd\nefgh\nijkl\nmnop"));