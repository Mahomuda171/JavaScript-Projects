let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');

let score = document.getElementById('score');
let result = document.querySelector('.result');

button.addEventListener('click', function(){
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    newHeight = newHeight / 100;
    let sqrHeight = newHeight * newHeight;
    let bmi = newWeight / sqrHeight;
    //console.log(bmi.toFixed(2));
    let finalBMI = bmi.toFixed(2)
    score.textContent = finalBMI ;
    result.style.display = 'block';

    if (score.textContent < 18.5) {
    score.style.background = '#cd201d';
  } else if (score.textContent >18.5 && score.textContent < 24.9) {
    score.style.background = '#16bd53';
  } else {
    score.style.background = '#d63031';
  }
})

let form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
})