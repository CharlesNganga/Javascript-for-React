function calculateBMI(mass, height){
    return mass / (height * height);
}

function getBMICategory(bmi){
    if (bmi < 18.5){
        return "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25){
        return "Normal weight";
    }
    else if (bmi >= 25 && bmi < 30){
        return "Overweight";
    }
    else{
        return "Obesity";
    }
}

let weight = 79;
let height = 1.55;

let bmi = calculateBMI(weight, height);
let category = getBMICategory(bmi);

console.log(`Your BMI is ${bmi} and you are ${category}`);


