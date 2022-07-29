
'use strict';


const number = Math.trunc(Math.random() * 20) + 1;
// Math.trunc(Math.random() * 21)

//document.querySelector('.message').textContent = 'Hello World!';
//document.querySelector('.score').textContent = 42;
document.querySelector('.number').textContent = number;



document.querySelector('.check').addEventListener('click',
    function () {

        const guess = document.querySelector('.guess').value;

        if (!guess) {
            document.querySelector('.message').textContent = '💣No number';
        }

    }
);

