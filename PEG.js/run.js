
require("fs").readFile(process.argv[2], function(err, data)
{
    var parser = require("./JavaScript.js");

    var start = new Date();
    result = parser.parse(data.toString());
    var time = new Date() - start;

    console.log("peg.js");
    console.log("\tTIME:" + time);
});

