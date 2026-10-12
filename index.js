
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","v","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]",",","|",":",";","<",">",".","?","/"];


let password1El = document.getElementById("password_1")
let password2El = document.getElementById("password_2")


let passwordGenerator = document.getElementById("password_generator")


function getRandomCharacter() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return characters[randomNumber]
}

function passwordMaker() {
    let password = ""

    for (let i=1; i<=15; i++) {
        password += getRandomCharacter()
    }

    return password
}



passwordGenerator.addEventListener("click", function() {
    

    password1El.textContent = passwordMaker()
    password2El.textContent = passwordMaker()
    
})