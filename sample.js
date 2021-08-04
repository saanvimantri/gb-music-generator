var fs = require("fs");

fs.readFile('./sample.hex', function(err, code){

    var str = code.toString();
    var line = str.split('\n');

    addr = line[1].slice(1, 9);
    //addr_num = Number(addr, 'hex');

    data = line[1].slice(9, (line[1].length - 3));
    console.log(data);
    var buf = new Buffer(data, 'hex');
}
