var
    libFilename = './strftime.js',
    strftime = require(libFilename),
    strftimeUTC = strftime.utc(),
    Time = new Date(1307472705067); // Tue, 07 Jun 2011 18:51:45 GMT


//
function demo(format) {
    let date = Time;
    // let res =strftimeUTC(format, date);
    let res = strftimeUTC.enumerate(format, date);
    let str = strftimeUTC(format, date);
    console.log('', `${format}: (${str})`, res);
    // console.log('', `${format}: (${str}) → `);
    // console.log( res);
}

demo("Raw String")
demo("%A");
demo("%a");

demo("%B");
demo("%b");
demo("%h");

demo("%C");
demo("%c");

demo("%D");
demo("%d");
demo("%e");

demo("%F");

demo("%H");

demo("%I");
demo("%j");
demo("%k");
demo("%L");
demo("%l");

demo("%M");
demo("%m");

demo("%o");

demo("%P");
demo("%p");
demo("%R");
demo("%r");
demo("%S");
demo("%s");
demo("%T");
demo("%t");
demo("%U");
demo("%u");
demo("%v");
demo("%W");
demo("%w");
demo("%X");
demo("%x");
demo("%Y");
demo("%y");
demo("%Z");
demo("%z");
demo("%%");


function findMaxRepresentation(formatter, format, date, costFn) {
    costFn = costFn || (s => s.length);

    /**  @type {string[][]} */
    const enumeration = formatter.enumerate(format, date);

    const maxFormatParts = [];
    // Calling the cost function may be expensive, so well keep track of costs
    const maxCost = [];

    for (let options of enumeration) {
        const optionCosts = options.map(costFn);
        const maxIndex = optionCosts.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

        maxFormatParts.push(options[maxIndex]);
        maxCost.push(optionCosts[maxIndex]);
    }

    const maxRepresentation = maxFormatParts.join('');
    const totalCost = maxCost.reduce((a, b) => a + b);
    return [totalCost, maxRepresentation];

}


console.log("---------");
console.log(Time);
console.log("---------");
let cost, repr;
let format = "%c";
[cost, repr] = findMaxRepresentation(strftimeUTC, format, Time);
console.log('', `'${format}' costs ${cost} → '${repr}'`);

format = "%A %B";
[cost, repr] = findMaxRepresentation(strftimeUTC, format, Time);
console.log('', `'${format}' costs ${cost} → '${repr}'`);

function vowelCount(str) {

    /**@type {string} */
    let s = str;
    let a = s.toLowerCase().split('');
    let vowelCount = 0;
    for (let c of a) {
        if (
            c === 'a' ||
            c === 'e' ||
            c === 'i' ||
            c === 'o' ||
            c === 'u'
        )
            vowelCount++;
    }
    return vowelCount;

}

format = "%A %B";
[cost, repr] = findMaxRepresentation(strftimeUTC, format, Time, vowelCount);
console.log('', `'${format}' costs ${cost} → '${repr}'`);