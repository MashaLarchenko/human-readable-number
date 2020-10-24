const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
let multyNum = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

module.exports = function toReadable(number) {
    const value = number.toString();
    if (number < 20) return num[number];

    if (number < 100) {
        const firstPart = multyNum[+value.split('')[0]];
        const secondPart = toReadable(+value.split('')[1]);
        return secondPart === 'zero' ? firstPart : `${firstPart} ${secondPart}`
    }

    if (number < 1000) {
        const firstPart = toReadable(+value.split('')[0]);
        const secondPart = multyNum[+value.split('')[1]];
        const thirdPart = toReadable(+value.split('')[2]);
        if (value.split('')[1] === '1') {
            const last = toReadable(value.split('')[1] + value.split('')[2]);
            return `${firstPart} hundred ${last}`;
        } else {
            const isMiddleZero = `${firstPart} hundred ${secondPart !== 'zero' ? secondPart : ''}`;
            const lastZero = thirdPart !== 'zero' ?  thirdPart : '';
            const res =  isMiddleZero.trim() + ' ' + lastZero.trim();
            return res.trim();
        }

    }
}
