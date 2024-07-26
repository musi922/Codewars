export default function domainName(url: string): string {
    let str
    let result

    if (url.includes('://')) {
        str = url.split('://')
        str = str[1]
    } else {
        str = url
    }

    result = str.split('.')
  result = result[0]
    
    if (result === 'www') {
        str = str.split('.');
        result = str[1]
    }

    return result
}


console.log(domainName("https://www.cnet.com")); 
console.log(domainName("http://github.com/carbonfive/raygun")); 
console.log(domainName("www.xakep.ru")); 
