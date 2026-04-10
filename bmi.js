document.addEventListener('DOMContentLoaded', function() {
  const bmiForm = document.getElementById('calculate-bmi');
  if(bmiForm) {
    bmiForm.addEventListener('click', function() {
      const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
      const weight = parseFloat(document.getElementById('weight').value);
      
      if(height && weight) {
        const bmi = (weight / (height * height)).toFixed(1);
        document.querySelector('.result-value').textContent = bmi;
        
        // Set category
        let category = '';
        if(bmi < 18.5) category = 'underweight';
        else if(bmi < 25) category = 'normal';
        else if(bmi < 30) category = 'overweight';
        else category = 'obese';
        
        document.querySelector('.result-category').textContent = category;
        document.querySelector('.result-category').className = 'result-category ' + category;
      }
    });
  }
});