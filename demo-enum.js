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



console.log("---------");
console.log(Time);