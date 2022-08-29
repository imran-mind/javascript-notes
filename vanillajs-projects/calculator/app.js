
const inputBox = document.getElementById('num-input');
const inputElements = document.getElementById('input-elements');

(()=>{
    const validNumbers = ['0','1','2','3','4','5','6','7','8','9'];
    const validOperators = ['-','+','*','/','.','%'];

    const handleInput = (input) =>{
        
        if(input === 'C'){
            inputBox.value = '';
        }else if(input === '='){
            try{
                let result = eval(inputBox.value);
                console.log(result);
                inputBox.value = result;
            }catch(err){
                alert('Invalid Formate Used');
                inputBox.value = '';
            }
            
        }else if(validOperators.includes(input)){
            const existingVal = inputBox.value;
            inputBox.value = existingVal + input;

        }else if(validNumbers.includes(input)){
            const existingVal = inputBox.value;
            inputBox.value = existingVal + input;
        }
    }
    inputElements.addEventListener('click',function(e){
        const data = e.target.getAttribute('data-id');
        handleInput(data);
    })
})()
