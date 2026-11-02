const body = document.getElementById('body');
const button = document.querySelectorAll('li');

// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function(){
// body.style.backgroundColor = 'red';
// })

// it is not wise 

button.forEach(function(value){
    value.addEventListener('click', function(){
        let diffColorSelect = this.classList[0];
        //console.log(diffColorSelect);
        let color = '';
        if (diffColorSelect === 'red'){
            color = '#d63031' ;
        }
        if (diffColorSelect === 'blue'){
            color = '#0984e3' ;
        }
        if (diffColorSelect === 'green'){
            color = '#00b894' ;
        }
        if (diffColorSelect === 'pink'){
            color = '#e84393' ;
        }
         body.style.backgroundColor = color;
    });
})