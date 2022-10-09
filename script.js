let weightForm = document.querySelector("#weight");
let heightForm = document.querySelector("#height");
let resultForm = document.querySelector("#result");
let bmiResult;
let BMI;
let height;
let weight;
document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();
    weight = weightForm.value;
    height = heightForm.value;
    // console.log(weight);
    // console.log(height);
    BMI = weight/(height/100)**2;
    bmiResult = (Number(BMI.toFixed(1)));
    // console.log(bmiResult);


    if(BMI < 18.5){
        resultForm.innerHTML = `<p>Your BMI is <b>${bmiResult}</b> which means You are <b>Underweight</b></p>`
    } else if(BMI < 24.9){
        resultForm.innerHTML = `<p>Your BMI is <b>${bmiResult}</b> which means You are <b>Normal</b></p>`
    } else if(BMI < 29.9){
        resultForm.innerHTML = `<p>Your BMI is <b>${bmiResult}</b> which means You are <b>Overweight</b></p>`
    }else if(BMI > 30){
        resultForm.innerHTML = `<p>Your BMI is <b>${bmiResult}</b> which means You are <b>Obesity</b></p>`
    }else{
    }
})
