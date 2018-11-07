// Make sure that the operator is concious and has inputed a file.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

// Read the file
var fs = require('fs');
var path = require("path");
var filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;

    //create a object containing all the lines of the file
    var lines = data.split("\r\n");

    //split data by event
    var newpush = "";
    var eventarr = [];
    lines.forEach(element => {
        if (element.startsWith("END:")) {
                newpush += element + "\r\n"
                eventarr.push(newpush)
                newpush = "";
        } else {
            newpush += element + "\r\n"
        }
    });

    console.log(eventarr)

    //make all elements that have "study" empty
    for (i = 0; i < eventarr.length; i++) { 
        if(eventarr[i].includes("Study")){
            eventarr[i] = "";
        }
    }

    //add to start and end extra info that was removed.
    eventarr.unshift("BEGIN:VCALENDAR\r\nVERSION:2.0\r\n")

    //create a singular string to be written to a file
    var outputfile = eventarr.join("")


    //get file name (This is a mess I know)
    var filenamearr = filename.split(path.sep);
    var filenamewithoutanydir = filenamearr[filenamearr.length - 1].split(".");
    filenamewithoutanydir.pop();
    filenamewithoutanydir.join(".");
    var actualfilename = filenamewithoutanydir + "_no_study.ics"

    //save file.
    fs.writeFile(__dirname + "/" + actualfilename, outputfile, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log(actualfilename + " was saved!");
    });
});