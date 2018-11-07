# iCal-Remove-Study
Remove any iCal event that has "Study" in it, and outputs a new file.

## Note
This script was designed for a specific iCal file. Other files may not work as intended.

## Prequisites
To run this, please download nodeJS from [here](https://nodejs.org/en/download/ "Click here to goto the nodeJS download page").

## Usage
First download the files from the this git repository by cloning or otherwise. </br>
Then open a command line in the root folder and run </br>
```node index.js "<directory to ics file>"``` </br>
The result will be output to the directory where the script exists in with the <filename>_no_study.ics (assuming there is only one fullstop in your file name.)
