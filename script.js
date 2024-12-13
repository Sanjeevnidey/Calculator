let calculation = localStorage.getItem('calculation') || '';

display();

function Calculate(i) {
    calculation += i;

    display();
    localStorage.setItem('calculation', calculation);
}

function display() {
    document.querySelector('.Values').innerHTML = calculation;
}