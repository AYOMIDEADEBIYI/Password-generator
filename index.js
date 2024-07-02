let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let generateBtn = document.getElementById("generate-btn");
let displayEl = document.getElementById("display-el");
let displayEl2 = document.getElementById("display-el2")
let arrLength = characters.length

generateBtn.addEventListener("click", getRandomCharacter)

function getRandomCharacter() {
    let empty = []
    let empty2 = []

    characters.forEach((char) => {
        let randomChar1 = Math.floor(Math.random() * arrLength)
        let randomChar2 = Math.floor(Math.random() * arrLength)
        if (empty.length < 12) {
            empty.push(characters[randomChar1])
            empty2.push(characters[randomChar2])
        }
    })

    displayEl.innerHTML = empty.join('')
    displayEl2.innerHTML = empty2.join('')
}

