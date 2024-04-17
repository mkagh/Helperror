const readline = require('readline');
const fsPromises = require("fs").promises
const fs = require("fs")
const filePath = "myErrors.txt"
let myErrors;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const time = new Date()
const year = time.getFullYear()
const day = time.getDate()
const month = time.getMonth()

const helperror = () => {
    process.on('uncaughtException',async (err) => {
       
        console.log('Unhandled Exception:', err.message);
       
        const fileExists = fs.existsSync(filePath);
        if (fileExists){
            const redFile = fs.readFileSync(filePath,"utf8")
            myErrors = redFile.split(/-+/);
            const neitherIncludesErr = myErrors.every(element => !element.includes(err.message));
            if (neitherIncludesErr){
                rls(err,true)
            }
            else {
                console.log("YOU ALREADY HAD THIS MISTAKE")
                myErrors.forEach((myError) => {
                    if (myError.indexOf(err) !== -1){
                        console.log(myError)
                   }
                })

                rls(err,true)
            }
        }
        else {
            console.log("CONGRATS, THIS IS YOUR FIRST ERROR EVER!!!")
            rls(err,false)
        }     
    });
}
const rls = (err,append) => {
    rl.question('Would you like to write down this error:yes/no: ', async(answer) => {
        if (answer !== "yes"){
        rl.close();
        process.exit(1);
       } 
        else {
            rl.question('Enter your opservation: ', async(newAnswer) => {
                try {
                    append ? await fsPromises.appendFile(filePath,`${myErrors.length}. ${err.toString()}\n${newAnswer}\n${day}.${month}.${year} ${__filename.replace(/-/g, '')}\n---------------------------------------\n `):
                    await fsPromises.writeFile(filePath,`1. ${err.toString()}\n${newAnswer}\n${day}.${month}.${year} ${__filename.replace(/-/g, '')} \n ---------------------------------------\n`) 
                }
                catch (err) {
                    console.error(err)
                }
                finally {
                    rl.close();
                    process.exit(1); 
                }
            }
       )}
    });
}

module.exports = helperror