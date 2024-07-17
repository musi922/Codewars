function createPhoneNumber(numbers) {
    var firstElements = numbers.slice(0, 3).join('');
    var secondElements = numbers.slice(3, 6).join('');
    var thirdElement = numbers.slice(6).join('');
    return "(".concat(firstElements, ") ").concat(secondElements, "-").concat(thirdElement);
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
