
require("fs").readFile(process.argv[2], function(err, data)
{
    var parser = require("./Narcissus/lib/parser");

    var start = new Date();
    result = parser.parse(data.toString());
    var time = new Date() - start;

    console.log("Narcissus");
    console.log("\tTIME:" + time);
});

