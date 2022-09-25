


function updateLengthDisplay() {
    document.querySelector(".slider h1").innerHTML = document.querySelector(".slider input").value;
}
updateLengthDisplay();
var checkScrollTimer = setInterval(updateLengthDisplay, 100);



function setStrengthBars() {
    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".bar")[i].classList.remove("filled-bar");
    }
    amountChecked = 0;
    document.querySelectorAll("input[type='checkbox']").forEach(element => {
        if (element.checked == true) {
            amountChecked += 1;
        }
    })
    for (let i = 0; i < amountChecked; i++) {
        document.querySelectorAll(".bar")[i].classList.add("filled-bar");
    }
}
setStrengthBars()
var strengthBarTimer = setInterval(setStrengthBars, 100);
function setStrengthText() {
    filledBars = 0
    document.querySelectorAll("input[type='checkbox']").forEach(element => {
        if (element.checked == true) {
            filledBars += 1;
        }
    })
    if (filledBars == 0) {
        document.querySelector(".strength-level").innerHTML = ""
    } else if (filledBars == 1) {
        document.querySelector(".strength-level").innerHTML = "TOO WEAK!"
    } else if (filledBars == 2) {
        document.querySelector(".strength-level").innerHTML = "WEAK"
    } else if (filledBars == 3) {
        document.querySelector(".strength-level").innerHTML = "MEDIUM"
    } else if (filledBars == 4) {
        document.querySelector(".strength-level").innerHTML = "STRONG"
    } 
}
var strengthTextTimer = setInterval(setStrengthText, 100);




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function generatePassword() {
    if (!document.querySelectorAll("input[type='checkbox']")[0].checked && !document.querySelectorAll("input[type='checkbox']")[1].checked && !document.querySelectorAll("input[type='checkbox']")[2].checked && !document.querySelectorAll("input[type='checkbox']")[3].checked) {
        alert("No Checkboxes checked")
        return
    }
    var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "\~\`\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\\\:\;\"\'\,\.\?\/";
    var usedCharacters = "";
    var password = "";
    var passwordLength = document.querySelector(".slider input").value;
    if (document.querySelectorAll("input[type='checkbox']")[0].checked == true) {
        usedCharacters += upperLetters;
    }
    if (document.querySelectorAll("input[type='checkbox']")[1].checked == true) {
        usedCharacters += lowerLetters;
    }
    if (document.querySelectorAll("input[type='checkbox']")[2].checked == true) {
        usedCharacters += numbers;
    }
    if (document.querySelectorAll("input[type='checkbox']")[3].checked == true) {
        usedCharacters += symbols;
    }
    for (let i = 0; i < passwordLength; i++) {
        password += usedCharacters[getRandomInt(usedCharacters.length)];
    }
    console.log(password);
    document.querySelector(".generated-code > h1").innerHTML = password;
}
document.querySelector(".generate-button").addEventListener("click", generatePassword);





function addPasswordToClipboard() {
    const textarea = document.createElement("textarea");
    const password = document.querySelector(".generated-code > h1").innerHTML;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    console.log("Password saved to Clipboard");
    alert("Password saved")
}
document.querySelector(".copy-button").addEventListener("click", addPasswordToClipboard);




