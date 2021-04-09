let chutar = document.querySelector('button');
let section = document.querySelector("section");
chutar.onclick = function () {
    let input = document.querySelector('input').value;
    let inputNumber = input;
    // let nAleatorio = parseInt(Math.random() * 10);
    let nAleatorio = 2;
    let h3 = document.querySelector("h3");

    //console.log(nAleatorio);

    if (nAleatorio == inputNumber) {
        section.classList.add("active");
        h3.textContent = "Você acertou!!!";
    }
     else{
        section.classList.add("active");
        h3.textContent = "Você errou!!!";
     }
}

function btnFecha() {
    section.classList.remove("active");
}