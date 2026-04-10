document.addEventListener('DOMContentLoaded', function() {
  const calorieForm = document.getElementById('calculate-calories');
  if(calorieForm) {
    calorieForm.addEventListener('click', function() {
      const age = parseInt(document.getElementById('cal-age').value);
      const gender = document.getElementById('cal-gender').value;
      const height = parseFloat(document.getElementById('cal-height').value);
      const weight = parseFloat(document.getElementById('cal-weight').value);
      const activity = parseFloat(document.getElementById('cal-activity').value);
      const goal = document.getElementById('cal-goal').value;
      const weightChange = parseFloat(document.getElementById('weight-change').value) || 0.5;
      
      if(age && height && weight) {
        // Mifflin-St Jeor Equation
        let bmr;
        if(gender === 'male') {
          bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
          bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        
        const maintenance = Math.round(bmr * activity);
        let goalCalories = maintenance;
        
        // Adjust for goal
        if(goal === 'lose') {
          goalCalories = maintenance - (weightChange * 7700 / 7); // 1kg ≈ 7700 calories
        } else if(goal === 'gain') {
          goalCalories = maintenance + (weightChange * 7700 / 7);
        }
        
        // Update UI
        document.querySelector('.result-value').textContent = Math.round(goalCalories);
        document.getElementById('maintenance-calories').textContent = `Maintenance: ${maintenance} kcal`;
        document.getElementById('goal-calories').textContent = `Your goal: ${Math.round(goalCalories)} kcal`;
      }
    });
  }
});