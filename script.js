const quadrados = document.querySelectorAll('.linha:first-child .quadrado');
const teclas = document.querySelectorAll('.tecla');
const backspaceBtn = document.querySelector('.tecla-deletar');
const enterBtn = document.querySelector('.tecla-enter');
let i = 0;
const palavra = "TERMO";

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        if (i < quadrados.length) {
            quadrados[i].textContent = tecla.getAttribute('data-letra');
            i++;
        }
    });
});

backspaceBtn.addEventListener('click', () => {
    if (i > 0) {
        i--;
        quadrados[i].textContent = '';
    }
});

enterBtn.addEventListener('click', () => {
    if (i === quadrados.length) {
        let acertos = 0;
        
        quadrados.forEach((quadrado, index) => {
            if (quadrado.textContent === palavra[index]) {
                quadrado.style.backgroundColor = '#4CAF50';
                acertos++;
            } else {
                quadrado.style.backgroundColor = '';
            }
        });

        if (acertos === palavra.length) {
            alert('Parabéns! Acertou a palavra!');
        }
    }
});