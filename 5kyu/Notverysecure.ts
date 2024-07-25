export const alphanumeric = (string: string) :boolean => string === "" || string ===' ' || string ==='_'  ? false : /[a-zA-Z0-9]/.test(string)

