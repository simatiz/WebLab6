let button1 = document.querySelector(".button1");
button1.addEventListener("click", giveInstructions);

let button2 = document.querySelector(".button2");
button2.addEventListener("click", resetInstructions);

function giveInstructions() {
    let settings = document.querySelector(".input_settings").value.toString().split(/\s*;\s*/);
    let n = parseInt(settings[0]);
    let name = settings[1];
    let code = `<div class="dropdown"><button class="dropbtn">${settings[1]}</button><div class="dropdown-content">`;

    for (let i = 2; i <= n + 1; i++){
        code = code + `<a href="#">${settings[i]}</a>`;
    }

    code = code + `</div></div>`;

    const box5 = document.querySelector(".box5");
    box5.innerHTML = box5.innerHTML + code;
}

function resetInstructions(){
    const box5 = document.querySelector(".box5");
    box5.innerHTML = '';
}