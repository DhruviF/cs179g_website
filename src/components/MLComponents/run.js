

const {PythonShell} = require('python-shell');

export function runML () {
    let options={
        scriptPath:"/Users/dhruvifaria/Desktop/cs179g/cs179g_website/src/components/MLComponents/", //heh
        args:["1/10/2018 21:45:00", "DEN", "ATL"],
    };

    PythonShell.run("mlFile.py",options,(err,res)=>{
        if (err)console.log(err);
        if (res) console.log(res);
    });

    return "hello";
}

