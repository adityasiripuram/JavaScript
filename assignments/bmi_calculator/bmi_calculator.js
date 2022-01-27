// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (mass >0 && height >0 && typeof mass==='Number' && typeof height==='Number'){

       return (mass / (height * height))
    } else {
        return "INVALID INPUT"
    }
}

module.exports = BMICalculator;
