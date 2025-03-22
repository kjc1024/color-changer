const colorButton = document.getElementById("colorButton");
const resetButton = document.getElementById("resetButton");
const body = document.body;


//Array of colors to change to
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E544AD', '#FF6347', '#00BFFF'];

//Function to change color randomly
function changeColor(){
    const randomColor = colors[Math.floor(Math.random() *colors.length)];
    body.style.backgroundColor = randomColor;
}

//Function to reset color
function resetColor(){
    body.style.backgroundColor = '#FFFFFF'; //Default white

}

//Event listeners
colorButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', resetColor);

//Color picker functionality
const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input',function(){
    const selectedColor = colorPicker.value;
    body.style.backgroundColor = selectedColor;
});