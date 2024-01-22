const calculateTemp = () => {
    const numberTemp = document.getElementById('input').value;
    
    const Tempselect = document.getElementById('temp_diff');
    const value = temp_diff.options[Tempselect.selectedIndex].value

    const celToFah = (cel) => {
        let Fahrenheit = ((cel * 9/5) + 32);
        return Fahrenheit
    }

    const fahTocel = (fehr) => {
        let celsius = ((fehr-32) * 5/9);
        return celsius
    }

    let result;
    if(value=='cel'){
        result = celToFah(numberTemp);
        document.getElementById('result-container').innerHTML = `${result} \u00B0 Fahrenheit`;
    }else{
        result = fahTocel(numberTemp);
        document.getElementById('result-container').innerHTML = `${result} \u00B0 Celsius`;
    }
}



calculateTemp()