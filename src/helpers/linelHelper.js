const readLine = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
const textMessages = require('../constants/textMessages');

class LineHelper {
    static question(q) {
        return new Promise((resolve) => {
            readLine.question(q, answer => {
                resolve(answer);
            });
        });
    }
    
    static intro() {
        console.log(textMessages.intro);
    };
    
    static outro(message) {
        console.log(message)
        readLine.close();
    }
};

module.exports = LineHelper;