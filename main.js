let count = 0; 
const countDisplay = document.getElementById('counter'); 
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');


const updateDisplay = () => {   
    countDisplay.textContent = count;
}


const getIncrement = () => {
    count++;
    updateDisplay();
}


const getDecrement = () => {
    count--;
    updateDisplay();
}


const getReset = () => {
    count = 0;
    updateDisplay();
}


incrementButton.addEventListener('click', getIncrement); 
decrementButton.addEventListener('click', getDecrement);
resetButton.addEventListener('click', getReset);


updateDisplay();