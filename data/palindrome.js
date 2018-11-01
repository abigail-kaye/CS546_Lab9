let exportedMethods = {
    isPalindrome(phrase) {
        if (typeof phrase !== "string") throw "Must provide a string";
        if (phrase === null) throw "Must provide a string";
        if (phrase.length == 0 || phrase.length == 1) return true;

        phrase = phrase.toLowerCase();
        let output = "";
        for (let i = 0; i < phrase.length; i++) {
            let charNum = phrase.charCodeAt(i);
            if ((charNum >= 97 && charNum <= 122) || (charNum >= 30 && charNum <= 39)) {
                output += phrase.charAt(i);
            }
        }

        console.log("Phrase: " + phrase);
    
        let flag = true;
        for (let i = 0; i < output.length / 2; i++) {
            let front = output.charAt(i);
            let back = output.charAt(output.length - i - 1);
            if (front != back) {
                flag = false;
                break;
            }
        }
        console.log("Flag: " + flag);
        return flag;
    }
}

module.exports = exportedMethods;