
function run(generators)
{
    var child = require('child_process').spawn("node", [generators[0], "jquery.js"]);
    
    child.stdout.on('data', function (data)
    {
        console.log(data.toString());
    });

    child.stderr.on('data', function (data)
    {
        console.log(data.toString());
    });

    child.on('exit', function (code)
    {
        if (generators.length > 1)
            run(generators.slice(1));
    });
}

run(["language.js/run.js", "PEG.js/run.js", "Narcissus/run.js", "jison/run.js"]);
