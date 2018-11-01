(function () {

    let palindromeMethods = {
        onlyAlphaNum(str) {
            str = str.toLowerCase();
            let output = "";
            for (let i = 0; i < str.length; i++) {
                let charNum = str.charCodeAt(i);
                if ((charNum >= 97 && charNum <= 122) || (charNum >= 30 && charNum <= 39)) {
                    output += str.charAt(i);
                }
            }
            return output;
        },

        checkPal(pal) {
            if (typeof pal !== "string") throw "Must provide a string";
            if (pal === null) throw "Must provide a string";
            if (pal.length == 0 || pal.length == 1) return true;
            let alphaNum = onlyAlphaNum(pal);

            console.log(alphaNum);
            let flag = true;
            for (let i = 0; i < alphaNum.length / 2; i++) {
                let front = alphaNum.charAt(i);
                let back = alphaNum.charAt(alphaNum.length - i - 1);
                if (front != back) {
                    flag = false;
                    break;
                }
            }
            console.log(flag);
            return flag;

        }

    }
});

const staticForm = document.getElementById("static-form");

if (staticForm)
    let pastAttempts = document.getElementById("results");

staticForm.addEventListener("submit", event => {
    event.preventDefault();

    let checkFx = palindromeMethods['checkPal'];
    let errorTextElement = document.getElementById("error-container");

    try {
        const phrase = document.getElementById("phrase").value;
        if (phrase === "") {
            errorTextElement.classList.remove('hidden');
            throw new Error("Must provide a phrase");
        }
        else
            errorTextElement.classList.add('hidden');


        let listResult = document.createElement("li");
        let isPal = checkFx(phrase);

        if (isPal)
            listResult.classList.add('is-palindrome');
        else
            listResult.classList.add('not-palindrome');

        let textNode = document.createTextNode(phrase);
        listResult.appendChild(textNode);
        pastAttempts.appendChild(listResult);
    }
    catch (e) {
        const message = typeof e === "string" ? e : e.message;
        errorTextElement.textContent = e;
        errorContainer.classList.remove("hidden");
    }
});

