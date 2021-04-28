// variables

const buttons = document.querySelectorAll('.btn');
console.log(buttons);
const output = document.querySelector('.screen');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');


buttons.forEach((button)=>{
    let num =button.dataset.num;

    //when clicking on a digit or an operator show on screen
    button.addEventListener('click',()=>{
        
        output.value += num;
      
        
    })

    
})

    // when pressing on the = sign

        btnEqual.addEventListener('click',()=>{
            output.value= eval(output.value);
        })
    
     

     btnClear.addEventListener('click',()=>{
        output.value = "";
    })
