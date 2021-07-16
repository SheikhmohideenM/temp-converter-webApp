function temperature(){
   
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', function(){
        let unitValue = forms.num.value;
        let formUnit = forms.radioBtn.value;
        let resultField = document.querySelector('.result-field');

        if( unitValue == ""){
            resultField.innerHTML = "Please Enter The Value !"
        }else if(formUnit == 'cel'){
            resultField.innerHTML = (unitValue - 32)*(5/9) + "°C";
        }
        else if(formUnit == 'kel'){
            resultField.innerHTML = (unitValue - 273.15)*(9/5)+32 + "°K";             
        }else if(formUnit == 'kel'){
            resultField.innerHTML = (unitValue - 273.15) + "°K";             
        }else{
            resultField.innerHTML = (unitValue * 9/5) + 32 + "°F";
        }
    } );
}