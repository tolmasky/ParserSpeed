
//var profiler = require('profiler');

data = require("fs").readFileSync(process.argv[2]);

//require("fs").readFile(process.argv[2], function(err, data)
{
    var parser = require("./JavaScript.js");

    var start = new Date();
    //profiler.gc();
    //profiler.resume();
    result = parser.parse(data.toString());
    //profiler.pause();
    var time = new Date() - start;

    console.log("language.js");
    console.log("\tTIME:" + time);
}//);

